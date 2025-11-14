import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import ExtractCVResultModal from "./ExtractCVResultModal";

export default function ExtractCVModal({ user, onClose }) {
  const { setUser } = useContext(UserContext);
  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!cvFile) return setMessage("❌ Please upload a CV file");
    setLoading(true); setMessage(""); setResult(null);

    const formData = new FormData();
    formData.append("cv_file", cvFile);
    const token = localStorage.getItem("access");

    try {
      const res = await axios.post("http://127.0.0.1:8000/ai/extract-skills/", formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
      });

      const data = res.data;
      setResult(data);

      // Update user's skills in context
      setUser(prev => ({ ...prev, user_profile: { ...prev.user_profile, skills: data.key_skills || [] } }));
      setMessage("✅ Skills extracted successfully!");
    } catch (err) {
      console.error(err.response || err);
      setMessage("❌ Failed to extract skills");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 p-5 z-50">
        <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow-lg relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 font-bold hover:text-gray-800">X</button>
          <h2 className="text-xl font-bold mb-4 text-center">Analyze CV & Extract Skills</h2>
          {message && <p className="mb-3 text-sm text-center">{message}</p>}
          <input type="file" accept=".pdf,.doc,.docx" onChange={e => setCvFile(e.target.files[0])} className="mb-4" />
          <button onClick={handleAnalyze} disabled={loading} className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition w-full">
            {loading ? "Processing..." : "Analyze CV"}
          </button>
        </div>
      </div>

      {result && <ExtractCVResultModal result={result} onClose={() => setResult(null)} />}
    </>
  );
}
