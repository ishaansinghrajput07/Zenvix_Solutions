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
  const response = await authAPI.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// =====================================================
// GET MY COURSES
// GET /api/auth/my-courses
// =====================================================

export const getMyCourses = async (token) => {
  const response = await authAPI.get("/auth/my-courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default authAPI;