import React, { createContext, useState, useEffect } from "react";
import {
  signup as signUpApi,
  login as loginApi,
  createReport as createReportApi,
  myReports as myReportsApi,
  singleReport as singleReportApi,
  checkAuth as checkAuthApi
} from "../apis/UserApi";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [newReport, setNewReport] = useState({})

    const signup = async (username, password) => {
      const success = await signUpApi(username, password);
      if (success) {
        await checkAuthApi();
      }
      return success;
    };

  const login = async (username, password) => {
    const success = await loginApi(username, password);
    if (success) {
      await checkAuthApi();
    }
    return success;
  };

  const checkAuth = async () => {
    const data = await checkAuthApi();
    setUserData(data || null);
    setUserData({...data, role: "citizen"})
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("userAuth");
    setUserData(null);
  };

  const myReports = async () => {
    setLoading(true);
    let data = await myReportsApi();
    setLoading(false);
    return data;
  };

  const singleReport = async (id) => {
    setLoading(true);
    const data = await singleReportApi(id);
    setLoading(false);
    return data;
  };

  const createReport = async () => {
    setLoading(true);
    const data = await createReportApi(newReport);
    if(!data){
      throw new Error("cant call")
    }
    setLoading(false);
    return data;
  };

  // check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        loading,
        newReport,
        setNewReport,
        setUserData,
        setLoading,
        login,
        logout,
        myReports,
        singleReport,
        createReport,
        checkAuth
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
