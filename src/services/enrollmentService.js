import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const enrollmentAPI = axios.create({
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

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
};

export const createEnrollment = async (payload) => {
  const response = await enrollmentAPI.post("/enrollments", payload, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getMyEnrollments = async () => {
  const response = await enrollmentAPI.get("/enrollments/my", {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getMyCourseEnrollmentStatus = async (courseId) => {
  const response = await enrollmentAPI.get(
    `/enrollments/course/${courseId}/status`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

export const getAdminEnrollments = async (params = {}) => {
  const response = await enrollmentAPI.get("/admin/enrollments", {
    params,
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getAdminEnrollmentById = async (enrollmentId) => {
  const response = await enrollmentAPI.get(
    `/admin/enrollments/${enrollmentId}`,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

export const approveEnrollment = async (enrollmentId, payload = {}) => {
  const response = await enrollmentAPI.patch(
    `/admin/enrollments/${enrollmentId}/approve`,
    payload,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

export const rejectEnrollment = async (enrollmentId, payload = {}) => {
  const response = await enrollmentAPI.patch(
    `/admin/enrollments/${enrollmentId}/reject`,
    payload,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

export const revokeEnrollmentAccess = async (enrollmentId, payload = {}) => {
  const response = await enrollmentAPI.patch(
    `/admin/enrollments/${enrollmentId}/revoke`,
    payload,
    {
      headers: getAuthHeaders(),
    },
  );

  return response.data;
};

export const getAdminEnrollmentStats = async () => {
  const response = await enrollmentAPI.get("/admin/enrollments/stats", {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export default enrollmentAPI;
