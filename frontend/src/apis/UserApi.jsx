import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
axios.defaults.baseURL = backendUrl;

// Sign up a new technician
export async function signup(username, password) {
  try {
    const response = await axios.post("/api/user/signup", {
      username,
      password,
    });

    if (response.data.success) {
      let token = response.headers["authorization"];
      if (token?.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      }
      localStorage.setItem("userAuth", token);
      return true;
    }
    throw new Error(response.data.error || "Signup failed");
  } catch (error) {
    console.error("SignUp Error:", error.message);
  }
}

// Login
export async function login(username, password) {
  try {
    const response = await axios.post("/api/user/login", {
      userName: username,
      password,
    });
console.log("rd: ", response.data);

    if (response.data.success) {
      let token = response.headers["authorization"];
      if (token?.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      }
      localStorage.setItem("userAuth", token);
      return response.data.success;
    }
    throw new Error(response.data.error || "Login failed");
  } catch (error) {
    console.error("Login Error:", error.message);
  }
}

// Get all reports for logged-in user
export async function myReports() {
  try {
    const token = localStorage.getItem("userAuth");
    if (!token) return checkAuth();

    const { data } = await axios.get("/api/report/myReports", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) return data.reportDetails;
    throw new Error(data.error || "Failed to fetch reports");
  } catch (error) {
    console.error("myReports Error:", error.message);
  }
}

// Get a single report by ID
export async function singleReport(id) {
  try {
    const token = localStorage.getItem("userAuth");
    if (!token) return checkAuth();

    const { data } = await axios.get(`/api/report/singleReport/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) return data.report;
    throw new Error(data.error || "Failed to fetch report");
  } catch (error) {
    console.error("singleReport Error:", error.message);
  }
}


export async function createReport(report) {
  try {
    if (!report) throw new Error("Report object must be provided");
    if(!report.title) report.title="no model"
    if (!report.title || !report.imageUrl || !report.location) throw new Error("all details to be provided");

    const token = localStorage.getItem("userAuth");
    if (!token) return checkAuth();
console.log("oking");

    const formData = new FormData();

    // Append image if exists
    if (report.imageUrl) {
      formData.append("image", report.imageUrl); // File / Blob
    }
console.log(report.location);

    // Append other fields
    formData.append("id", report.id || ""); // include user id or report id
    formData.append("title", report.title || "");
    formData.append("description", report.description || "");
    formData.append("location", JSON.stringify(report.location) || "");

    const { data } = await axios.post("/api/report/create", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("createReport response:", data);

    if (data.success) return { message: data.message, report: data.report };
    throw new Error(data.error || "Failed to create report");
  } catch (error) {
    console.error("createReport Error:", error.message);
    throw error; // re-throw to handle in caller
  }
}

// Check authentication status
export async function checkAuth() {
  try {
    const token = localStorage.getItem("userAuth");
    if (!token) throw new Error("No auth token found");

    const { data } = await axios.get("/api/user/checkAuth", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) return data.userData;
    throw new Error(data.error || "Authentication check failed");
  } catch (error) {
    console.error("checkAuth Error:", error.message);
  }
}
