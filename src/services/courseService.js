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
// TOKEN
// =====================================================

const getStoredToken = () => {
  return (
    localStorage.getItem("zenvix_token") ||
    sessionStorage.getItem("zenvix_token") ||
    null
  );
};

// =====================================================
// AUTH HEADERS
// =====================================================

const getAuthHeaders = () => {
  const token = getStoredToken();

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

// =====================================================
// GET ALL ACTIVE COURSES
// GET /api/courses
// PUBLIC
// =====================================================

export const getAllCourses = async () => {
  const response = await courseAPI.get("/courses");

  return response.data;
};

// =====================================================
// GET ADMIN COURSES
// GET /api/admin/courses
// ADMIN ONLY
// =====================================================

export const getAdminCourses = async () => {
  const response = await courseAPI.get("/admin/courses", {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// =====================================================
// GET SINGLE COURSE
// GET /api/courses/:id
// PUBLIC
// =====================================================

export const getCourseById = async (courseId) => {
  const response = await courseAPI.get(`/courses/${courseId}`);

  return response.data;
};

// =====================================================
// CREATE COURSE
// POST /api/courses
// ADMIN ONLY
// =====================================================

export const createCourse = async (courseData) => {
  const response = await courseAPI.post("/courses", courseData, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// =====================================================
// UPDATE COURSE STATUS
// PATCH /api/courses/:id/status
// ADMIN ONLY
// =====================================================

export const updateCourseStatus = async (courseId, isActive) => {
  const response = await courseAPI.patch(
    `/courses/${courseId}/status`,
    {
      isActive,
    },
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// ASSIGN COURSE TO STUDENT
// PATCH /api/courses/:courseId/assign/:userId
// ADMIN ONLY
// =====================================================

export const assignCourseToStudent = async (courseId, userId) => {
  const response = await courseAPI.patch(
    `/courses/${courseId}/assign/${userId}`,
    {},
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// GET ADMIN COURSE ENROLLMENT STATS
// GET /api/admin/enrollments/stats
// ADMIN ONLY
// =====================================================

export const getAdminCourseEnrollmentStats = async () => {
  const response = await courseAPI.get("/admin/enrollments/stats", {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// =====================================================
// GET MY COURSES
// GET /api/courses/my-courses
// STUDENT
// =====================================================

export const getMyCourses = async () => {
  const response = await courseAPI.get("/courses/my-courses", {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default courseAPI;
