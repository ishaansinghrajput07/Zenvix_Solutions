import axios from "axios";

// =====================================================
// API BASE URL
// =====================================================

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// =====================================================
// AXIOS INSTANCE
// =====================================================

const courseAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// =====================================================
// GET ALL COURSES
// GET /api/courses
// =====================================================

export const getAllCourses = async () => {
  const response = await courseAPI.get("/courses");

  return response.data;
};

// =====================================================
// GET SINGLE COURSE
// GET /api/courses/:id
// =====================================================

export const getCourseById = async (courseId) => {
  const response = await courseAPI.get(`/courses/${courseId}`);

  return response.data;
};

// =====================================================
// GET MY COURSES
// GET /api/courses/my-courses
// AUTHENTICATED STUDENT
// =====================================================

export const getMyCourses = async (token) => {
  const response = await courseAPI.get("/courses/my-courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default courseAPI;