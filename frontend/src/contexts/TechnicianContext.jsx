import React, { createContext, useState, useEffect } from "react";
import {
  login as loginApi,
  getTasks as getTasksApi,
  singleTask as singleTaskApi,
  startTask as startTaskApi,
  resolveTask as resolveTaskApi,
  checkAuth as checkAuthApi
} from "../apis/TechnicianApi";

export const TechnicianContext = createContext();

export const TechnicianProvider = ({ children }) => {
  const [techData, setTechData] = useState({});
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    const success = await loginApi(username, password);
    if (success) {
      await checkAuthApi();
    }
    return success;
  };

  const checkAuth = async () => {
    const data = await checkAuthApi();
    setTechData(data || null);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("techAuth");
    setDeptData(null);
  };

  const getTasks = async () => {
    setLoading(true);
    let data = await getTasksApi();
    setLoading(false);
    return data;
  };

  const getSingleTask = async (id) => {
    setLoading(true);
    const data = await singleTaskApi(id);
    setLoading(false);
    return data;
  };

  const resolveTask = async (id, photo) => {
    const report = await resolveTaskApi(id, photo);
    return report;
  };

  const startTask = async (reportId) => await startTaskApi(reportId);

  // check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <TechnicianContext.Provider
      value={{
        techData,
        loading,
        setLoading,
        login,
        logout,
        getTasks,
        getSingleTask,
        resolveTask,
        startTask,
      }}
    >
      {children}
    </TechnicianContext.Provider>
  );
};
