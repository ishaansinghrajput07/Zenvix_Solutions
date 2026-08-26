import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const learningAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getStoredToken = () => {
  return (
    localStorage.getItem("zenvix_token") ||
    sessionStorage.getItem("zenvix_token") ||
    null
  );
};

const getAuthHeaders = () => {
  const token = getStoredToken();

  if (!token) {
    return {};
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

// =====================================================
// GET COURSE ENROLLMENT STATUS
// GET /api/enrollments/course/:courseId/status
// =====================================================

export const getCourseEnrollmentStatus = async (courseId) => {
  const response = await learningAPI.get(
    `/enrollments/course/${courseId}/status`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// REQUEST ENROLLMENT
// POST /api/enrollments
// =====================================================

export const requestCourseEnrollment = async (payload) => {
  const response = await learningAPI.post("/enrollments", payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// =====================================================
// GET APPROVED COURSE CONTENT
// GET /api/my-courses/:courseId/content
// =====================================================

export const getMyCourseContent = async (courseId) => {
  const response = await learningAPI.get(
    `/my-courses/${courseId}/content`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// GET COURSE PROGRESS
// GET /api/my-courses/:courseId/progress
// =====================================================

export const getMyCourseProgress = async (courseId) => {
  const response = await learningAPI.get(
    `/my-courses/${courseId}/progress`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// UPDATE LAST WATCHED
// POST /api/my-courses/:courseId/progress/:contentId/watch
// =====================================================

export const updateLastWatchedContent = async (
  courseId,
  contentId,
) => {
  const response = await learningAPI.post(
    `/my-courses/${courseId}/progress/${contentId}/watch`,
    {},
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

// =====================================================
// MARK CONTENT COMPLETED
// POST /api/my-courses/:courseId/progress/:contentId/complete
// =====================================================

export const markContentCompleted = async (
  courseId,
  contentId,
) => {
  const response = await learningAPI.post(
    `/my-courses/${courseId}/progress/${contentId}/complete`,
    {},
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

export default learningAPI;