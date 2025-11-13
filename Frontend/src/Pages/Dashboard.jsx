  import { useContext, useState } from "react";
  import api from "../apis/axios";
  import { UserContext } from "../../context/UserContext";

  // ------------------- UpdateProfile Modal -------------------
  function UpdateProfile({ user, onClose }) {
    const { setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
      full_name: user?.user_profile?.full_name || user?.full_name || "",
      bio: user?.user_profile?.bio || "",
      skills: user?.user_profile?.skills?.join(", ") || "",
      preferred_career_track: user?.user_profile?.preferred_career_track || "",
      education_level: user?.user_profile?.education_level || "",
      experience_level: user?.user_profile?.experience_level || "",
      profile_image: null,
      cv_file: null,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (files?.length > 0) setFormData({ ...formData, [name]: files[0] });
      else setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("access");
      const data = new FormData();

      for (let key in formData) {
        if (formData[key] !== null && formData[key] !== "") {
          if (key === "skills") {
            const skillsArray = formData.skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
            data.append(key, JSON.stringify(skillsArray));
          } else {
            data.append(key, formData[key]);
          }
        }
      }

      try {
        const res = await api.patch("/accounts/profile-update/", data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        setUser((prev) => ({
          ...prev,
          user_profile: { ...prev.user_profile, ...res.data },
        }));

        setMessage("✅ Profile updated successfully!");
        setTimeout(() => setMessage(""), 3000);
        onClose();
      } catch (err) {
        console.error("Profile Update Error:", err.response || err);
        setMessage("❌ Failed to update profile");
        setTimeout(() => setMessage(""), 3000);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-lg relative shadow-lg overflow-y-auto max-h-[90vh]">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 font-bold hover:text-gray-800"
          >
            X
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">Update Profile</h2>
          {message && <p className="mb-3 text-sm text-center">{message}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
              required
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="skills"
              placeholder="Skills (comma separated)"
              value={formData.skills}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <select
              name="preferred_career_track"
              value={formData.preferred_career_track}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            >
              <option value="">Select Career Track</option>
              <option value="Web Development">Web Development</option>
              <option value="Data">Data</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
            <select
              name="education_level"
              value={formData.education_level}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            >
              <option value="">Select Education Level</option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
            </select>
            <select
              name="experience_level"
              value={formData.experience_level}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            >
              <option value="">Select Experience Level</option>
              <option value="Fresher">Fresher</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
            </select>
            <input type="file" name="profile_image" onChange={handleChange} className="w-full" />
            <input type="file" name="cv_file" onChange={handleChange} className="w-full" />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ------------------- Dashboard -------------------
  export default function Dashboard() {
    const { user, setUser ,logout ,loading } = useContext(UserContext);
    const [showUpdate, setShowUpdate] = useState(false);
    const [activeTab, setActiveTab] = useState("resource");
    const [message, setMessage] = useState("");

    const [jobData, setJobData] = useState({
      title: "",
      description: "",
      company: "",
      location: "",
      required_skills: "",
      experience_level: "Fresher",
      job_type: "Full-time",
      image_url: "",
    });
    
    const [resourceData, setResourceData] = useState({
      title: "",
      platform: "",
      url: "",
      skills: "",
      cost: "Free",
      image_url: "",
    });

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-600 text-lg font-medium">Loading your dashboard...</p>
        </div>
      );
    }

    if (!user) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-gray-600 text-lg font-medium">
            Please log in to view your dashboard.
          </p>
        </div>
      );
    }


    const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
    const profile = user.user_profile || {};
    const profileImageUrl = profile.profile_image
      ? profile.profile_image.startsWith("http")
        ? profile.profile_image
        : `${BASE_URL}${profile.profile_image}`
      : "/default-avatar.png";

    const handleJobChange = (e) =>
      setJobData({ ...jobData, [e.target.name]: e.target.value });
    const handleResourceChange = (e) =>
      setResourceData({ ...resourceData, [e.target.name]: e.target.value });

    const handleJobSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("access");
        const skillsArray = jobData.required_skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

        await api.post("/jobs/create/", { ...jobData, required_skills: skillsArray }, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMessage("✅ Job posted successfully!");
        setJobData({
          title: "",
          description: "",
          company: "",
          location: "",
          required_skills: "",
          experience_level: "Fresher",
          job_type: "Full-time",
          image_url: "",
        });
      } catch (err) {
        console.error(err.response || err);
        setMessage("❌ Failed to post job");
      }
    };

    const handleResourceSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("access");
        const skillsArray = resourceData.skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

        await api.post("/resources/create/", { ...resourceData, skills: skillsArray }, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setMessage("✅ Resource posted successfully!");
        setResourceData({
          title: "",
          platform: "",
          url: "",
          skills: "",
          cost: "Free",
          image_url: "",
        });
      } catch (err) {
        console.error(err.response || err);
        setMessage("❌ Failed to post resource");
      }
    };

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
        {/* --- User Info Card --- */}
  <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col items-center md:flex-row md:gap-6">
            <img
              src={profileImageUrl}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-300 shadow-sm"
              onError={(e) => (e.target.src = "/default-avatar.png")}
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">{profile.full_name || user.full_name}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {user.user_type} | {profile.preferred_career_track || "Not specified"}
              </p>
              <p className="text-gray-500 text-sm">
                Skills: {Array.isArray(profile.skills) ? profile.skills.join(", ") : "None"}
              </p>
            </div>
          </div>
<div className="flex flex-col">
            <button
            onClick={() => setShowUpdate(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
<button
  onClick={() => {
    logout()
    window.location.href = "/auth" 
  }}
  className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition mt-3"
>
  Log Out
</button>
</div>
        </div>


        {/* --- Recruiter Tabs --- */}
        {user.user_type === "recruiter" && (
          <div className="bg-white shadow-md rounded-2xl mt-8 w-full max-w-3xl p-6 flex flex-col gap-4">
            <div className="flex justify-center gap-4 mb-4 border-b pb-2">
              <button
                className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === "resource" ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
                onClick={() => setActiveTab("resource")}
              >
                Share Resource
              </button>
              <button
                className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === "job" ? "text-blue-600 border-b-4 border-blue-600" : "text-gray-500 hover:text-blue-500"}`}
                onClick={() => setActiveTab("job")}
              >
                Post Job
              </button>
            </div>

            {activeTab === "resource" ? (
              <form onSubmit={handleResourceSubmit} className="flex flex-col gap-3">
                <input name="title" placeholder="Title" value={resourceData.title} onChange={handleResourceChange} className="border rounded-lg p-3 w-full" required />
                <input name="platform" placeholder="Platform" value={resourceData.platform} onChange={handleResourceChange} className="border rounded-lg p-3 w-full" required />
                <input name="url" placeholder="Resource URL" value={resourceData.url} onChange={handleResourceChange} className="border rounded-lg p-3 w-full" required />
                <input name="skills" placeholder="Skills (comma-separated)" value={resourceData.skills} onChange={handleResourceChange} className="border rounded-lg p-3 w-full" />
                <select name="cost" value={resourceData.cost} onChange={handleResourceChange} className="border rounded-lg p-3 w-full">
                  <option value="Free">Free</option>
                  <option value="Paid">Paid</option>
                </select>
                <input name="image_url" placeholder="Image URL" value={resourceData.image_url} onChange={handleResourceChange} className="border rounded-lg p-3 w-full" />
                <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full">
                  Share Resource
                </button>
              </form>
            ) : (
              <form onSubmit={handleJobSubmit} className="flex flex-col gap-3">
                <input name="title" placeholder="Job Title" value={jobData.title} onChange={handleJobChange} className="border rounded-lg p-3 w-full" required />
                <textarea name="description" placeholder="Job Description" value={jobData.description} onChange={handleJobChange} className="border rounded-lg p-3 w-full" required />
                <input name="company" placeholder="Company Name" value={jobData.company} onChange={handleJobChange} className="border rounded-lg p-3 w-full" required />
                <input name="location" placeholder="Location" value={jobData.location} onChange={handleJobChange} className="border rounded-lg p-3 w-full" required />
                <input name="required_skills" placeholder="Required Skills (comma-separated)" value={jobData.required_skills} onChange={handleJobChange} className="border rounded-lg p-3 w-full" />
                <select name="experience_level" value={jobData.experience_level} onChange={handleJobChange} className="border rounded-lg p-3 w-full">
                  <option value="Fresher">Fresher</option>
                  <option value="Junior">Junior</option>
                  <option value="Mid">Mid</option>
                </select>
                <select name="job_type" value={jobData.job_type} onChange={handleJobChange} className="border rounded-lg p-3 w-full">
                  <option value="Internship">Internship</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Freelance">Freelance</option>
                </select>
                <input name="image_url" placeholder="Image URL" value={jobData.image_url} onChange={handleJobChange} className="border rounded-lg p-3 w-full" />
                <button type="submit" className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition w-full">
                  Post Job
                </button>
              </form>
            )}
          </div>
        )}

        {message && <p className="mt-4 text-center text-sm text-gray-700 font-medium">{message}</p>}

        {showUpdate && <UpdateProfile user={user} onClose={() => setShowUpdate(false)} />}
      </div>
    );
  }
