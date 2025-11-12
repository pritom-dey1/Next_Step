import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


export default function Dashboard() {
  const { user, loading } = useContext(UserContext);
  console.log(user);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10 text-red-500">Not authorized</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">
        Welcome, {user.user_profile.full_name} ({user.user_type})
      </h2>

      {user.user_type === "candidate" && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Recommended Jobs</h3>
          {user.recommended_jobs?.length ? (
            <ul className="mb-4">
              {user.recommended_jobs.map((job) => (
                <li key={job.id} className="p-2 bg-white rounded shadow mb-2">
                  {job.title} - {job.location}
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs found</p>
          )}

          <h3 className="text-xl font-semibold mb-2">Recommended Resources</h3>
          {user.recommended_resources?.length ? (
            <ul>
              {user.recommended_resources.map((res) => (
                <li key={res.id} className="p-2 bg-white rounded shadow mb-2">
                  {res.title}
                </li>
              ))}
            </ul>
          ) : (
            <p>No resources found</p>
          )}
        </div>
      )}

      {user.user_type === "recruiter" && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Your Posted Jobs</h3>
          {user.posted_jobs?.length ? (
            <ul>
              {user.posted_jobs.map((job) => (
                <li key={job.id} className="p-2 bg-white rounded shadow mb-2">
                  {job.title} - {job.location}
                </li>
              ))}
            </ul>
          ) : (
            <p>No jobs posted yet</p>
          )}
        </div>
      )}
    </div>
  );
}
