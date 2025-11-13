import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import api from "../apis/axios";
import LoginImg from "../assets/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    user_type: "",
    education_level: "",
    experience_level: "",
    preferred_career_track: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.full_name.trim()) {
      setError("Full name is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email");
      return false;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
      );
      return false;
    }

    if (
      !formData.user_type ||
      !formData.education_level ||
      !formData.experience_level ||
      !formData.preferred_career_track
    ) {
      setError("Please fill all required fields");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await api.post("/accounts/register/", formData);
      console.log("User Registered:", res.data);
      setSuccess(true);

      navigate("/auth/verify-otp", { state: { email: formData.email } });

      setFormData({
        full_name: "",
        email: "",
        password: "",
        user_type: "candidate",
        education_level: "",
        experience_level: "",
        preferred_career_track: "",
      });
    } catch (err) {
      if (err.response?.data) {
        setError(JSON.stringify(err.response.data));
      } else {
        setError("Registration failed!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-20 w-full flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${LoginImg})` }}
    >
      <Helmet>
        <title>NextStep | Register</title>
      </Helmet>
      <div className="absolute inset-0 bg-black/30"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl w-[700px] max-w-[90%]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white uppercase">
          First Step to Success
        </h2>

        <div className="mb-4">
          <input
            type="text"
            name="full_name"
            placeholder="Enter Your Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-white"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter A Valid Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-white"
          />
        </div>

        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter A Strong Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-2.5 pr-12 focus:ring-2 focus:ring-blue-500 outline-none text-white"
          />
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block mb-1 font-semibold text-white">
              User Type
            </label>
            <select
              name="user_type"
              value={formData.user_type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-gray-300 bg-transparent "
            >
              <option value="">Select</option>
              <option value="candidate" className="text-gray-900 bg-blue-100">
                Candidate
              </option>
              <option value="recruiter" className="text-gray-900 bg-blue-100">
                Recruiter
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-white">
              Education
            </label>
            <select
              name="education_level"
              value={formData.education_level}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-gray-300 bg-transparent"
            >
              <option value="">Select</option>

              <option value="High School" className="text-gray-900 bg-blue-100">
                High School
              </option>
              <option
                value="Undergraduate"
                className="text-gray-900 bg-blue-100"
              >
                Undergraduate
              </option>
              <option value="Graduate" className="text-gray-900 bg-blue-100">
                Graduate
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div>
            <label className="block mb-1 font-semibold text-white">
              Experience
            </label>
            <select
              name="experience_level"
              value={formData.experience_level}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-gray-300 bg-transparent"
            >
              <option value="">Select</option>

              <option value="Fresher" className="text-gray-900 bg-blue-100">
                Fresher
              </option>
              <option value="Junior" className="text-gray-900 bg-blue-100">
                Junior
              </option>
              <option value="Mid " className="text-gray-900 bg-blue-100">
                Mid
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-white">
              Career Track
            </label>
            <select
              name="preferred_career_track"
              value={formData.preferred_career_track}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-gray-300 bg-transparent"
            >
              <option value="">Select</option>

              <option
                value="Web Development"
                className="text-gray-900 bg-blue-100"
              >
                Web Development
              </option>
              <option value="Data" className="text-gray-900 bg-blue-100">
                Data
              </option>
              <option value="Design" className="text-gray-900 bg-blue-100">
                Design
              </option>
              <option value="Marketing" className="text-gray-900 bg-blue-100">
                Marketing
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-red-500 mt-3 text-sm text-center font-bold">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 mt-3 text-sm text-center">
            Registration successful! You can now log in.
          </p>
        )}

        <div className="mt-2 text-center flex flex-col">
          <Link to="/auth" className="text-blue-400  font-medium mr-4">
            Already have an account? Login
          </Link>
      
        </div>
      </form>
    </div>
  );
}
