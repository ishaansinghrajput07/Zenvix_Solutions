import axios from "axios";

// =====================================================
// API BASE URL
// =====================================================

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// =====================================================
// AXIOS INSTANCE
// =====================================================

const contentAPI = axios.create({
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
// FETCH YOUTUBE CONTENT
// GET /api/courses/:courseId/content/youtube
// ADMIN ONLY
// =====================================================

export const fetchYouTubeCourseContent = async (courseId) => {
  const response = await contentAPI.get(
    `/courses/${courseId}/content/youtube`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// GET COURSE CONTENT
// GET /api/courses/:courseId/content
// AUTHENTICATED USER
// =====================================================

export const getCourseContent = async (courseId) => {
  const response = await contentAPI.get(
    `/courses/${courseId}/content`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// GET MY COURSE CONTENT
// GET /api/my-courses/:courseId/content
// STUDENT ONLY
// =====================================================

export const getMyCourseContent = async (courseId) => {
  const response = await contentAPI.get(
    `/my-courses/${courseId}/content`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default contentAPI;