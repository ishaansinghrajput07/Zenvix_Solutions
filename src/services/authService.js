import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const authAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// =====================================================
// GET STORED TOKEN
// =====================================================

export const getStoredToken = () => {
  return (
    localStorage.getItem("zenvix_token") ||
    sessionStorage.getItem("zenvix_token") ||
    null
  );
};

// =====================================================
// LOGIN
// POST /api/auth/login
// =====================================================

export const loginUser = async (credentials) => {
  const response = await authAPI.post("/auth/login", credentials);

  return response.data;
};

// =====================================================
// REGISTER
// POST /api/auth/register
// =====================================================

export const registerUser = async (userData) => {
  const response = await authAPI.post("/auth/register", userData);

  return response.data;
};

// =====================================================
// GET CURRENT USER
// GET /api/auth/me
// =====================================================

export const getMe = async (token) => {
  const authToken = token || getStoredToken();

  if (!authToken) {
    throw new Error("Authentication token not found.");
  }

  const response = await authAPI.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

// =====================================================
// GET MY COURSES
// GET /api/auth/my-courses
// =====================================================

export const getMyCourses = async (token) => {
  const authToken = token || getStoredToken();

  if (!authToken) {
    throw new Error("Authentication token not found.");
  }

  const response = await authAPI.get("/auth/my-courses", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

// =====================================================
// LOGOUT
// =====================================================

export const logoutUser = () => {
  localStorage.removeItem("zenvix_token");
  localStorage.removeItem("zenvix_user");

  sessionStorage.removeItem("zenvix_token");
  sessionStorage.removeItem("zenvix_user");
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default authAPI;