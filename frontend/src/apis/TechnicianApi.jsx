import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
axios.defaults.baseURL = backendUrl;

export async function login(username, password) {
  try {
    const response = await axios.post("/api/technician/login", {
      username,
      password,
    });

    if (response.data.success) {
      let token = response.headers["authorization"];
      // Remove "Bearer " prefix
      if (token?.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      }

      localStorage.setItem("techAuth", token);
      return true;
    }
    throw new Error(response.data.error);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getTasks() {
  try {
    const token = localStorage.getItem("techAuth");
    const { data } = await axios.get("/api/technician/alltasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
console.log(data);

    if (data.success) {
      return data.tasksAssigned;
    }
    throw new Error(data.error);
  } catch (error) {
    console.log(error.message);
  }
}

export async function singleTask(id) {
  try {
    const token = localStorage.getItem("techAuth");
    const { data } = await axios.get(`/api/technician/task/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.success) {
      return data.report;
    }
    throw new Error(data.error);
  } catch (error) {
    console.log(error.message);
  }
}


export async function startTask(id) {
  try {
    const token = localStorage.getItem("techAuth");
    const { data } = await axios.patch(`/api/technician/task/${id}/start`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.success) {
      return data.report;
    }
    throw new Error(data.error);
  } catch (error) {
    console.log(error.message);
  }
}

export async function resolveTask(id, photo) {
  try {
    if (!id || !photo) {
      throw new Error("id and photo to be provided");
    }
    const token = localStorage.getItem("techAuth");

    // ✅ Build FormData
    const formData = new FormData();
    formData.append("photo", photo);

    const { data } = await axios.patch(
      `/api/technician/task/${id}/resolve`,
      formData,
      {
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data" 
        },
      }
    );
    if (data.success) {
      return { message: data.message, report: data.report };
    }
    throw new Error(data.error);
  } catch (error) {
    console.error(error.message);
  }
}


export async function checkAuth() {
  try {
    const token = localStorage.getItem("techAuth");
    const { data } = await axios.get("/api/technician/checkAuth", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (data.success) {
      return data.techData;
    }
    throw new Error(data.error);
  } catch (error) {
    console.log(error.message);
  }
}