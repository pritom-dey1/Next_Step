import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import api from "../apis/axios";
import LoginImg from "../assets/login.webp";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/accounts/login/", formData);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      // fetch dashboard/profile data
      const profileRes = await api.get("/accounts/dashboard/", {
        headers: { Authorization: `Bearer ${res.data.access}` },
      });

      setUser(profileRes.data); // context e save
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl w-[700px] max-w-[90%]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white uppercase">
          Login
        </h2>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-white bg-transparent"
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-2.5 pr-12 focus:ring-2 focus:ring-blue-500 outline-none text-white bg-transparent"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-500 mt-3 text-sm text-center font-bold">{error}</p>}

        <div className="mt-4 justify-center gap-1.5 text-center flex">
          <p className="text-white mb-2">Don't have an account?</p>
          <NavLink to="/auth/Register" className="text-blue-500 hover:underline">
            Register
          </NavLink>
        </div>
        <div className="flex text-center items-center justify-center gap-1">
          <NavLink to="/" className="text-blue-500 hover:underline">
            Back To Home
          </NavLink>
        </div>
      </form>
    </div>
  );
}
