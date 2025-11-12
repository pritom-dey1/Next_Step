import { createContext, useState, useEffect } from "react";
import api from "../src/apis/axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const token = localStorage.getItem("access");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/accounts/dashboard/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, fetchProfile, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
