// src/pages/VerifyOTP.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../apis/axios";
import LoginImg from "../assets/login.webp";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.post("/accounts/verify-otp/", { email, otp });
      navigate("/auth");
    } catch (err) {
      setError(err.response?.data?.error || "OTP verification failed");
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
        className="relative z-10 backdrop-blur-xl bg-white/10 p-8 rounded-3xl shadow-2xl w-[500px] max-w-[90%]"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white uppercase">
          Verify Your OTP
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 outline-none text-white bg-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white w-full py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition-all"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {error && <p className="text-red-500 mt-3 text-sm text-center font-bold">{error}</p>}

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => navigate("/auth")}
            className="text-white hover:text-gray-300 font-medium"
          >
            Back to Register
          </button>
        </div>
      </form>
    </div>
  );
}
