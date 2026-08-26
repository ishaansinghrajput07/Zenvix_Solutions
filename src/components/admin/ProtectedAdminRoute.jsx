import { Navigate, Outlet, useLocation } from "react-router-dom";

const getToken = () =>
  localStorage.getItem("zenvix_token") ||
  sessionStorage.getItem("zenvix_token") ||
  null;

const getUser = () => {
  try {
    const user =
      localStorage.getItem("zenvix_user") ||
      sessionStorage.getItem("zenvix_user");

    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export default function ProtectedAdminRoute() {
  const location = useLocation();

  const token = getToken();
  const user = getUser();

  // No login
  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // Logged in but not admin
  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}