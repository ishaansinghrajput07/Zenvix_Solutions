import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Users,
  BookOpen,
  UserCheck,
  Clock3,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Sparkles,
  UserPlus,
  ArrowUpRight,
  MessageSquare,
  TrendingUp,
  Activity,
  GraduationCap,
  UserRoundCheck,
  UserRoundX,
  ShieldCheck,
  XCircle,
  Eye,
  CalendarDays,
  Mail,
  Phone,
  ChevronRight,
  ClipboardList,
  CircleDollarSign,
} from "lucide-react";

import axios from "axios";

import {
  getAdminEnrollments,
  approveEnrollment,
  rejectEnrollment,
} from "../../services/enrollmentService";

// =====================================================
// API
// =====================================================

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

const api = axios.create({
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
// DATE FORMATTER
// =====================================================

const formatDate = (date) => {
  if (!date) return "—";

  try {
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return "—";
  }
};

// =====================================================
// STATUS COLORS
// =====================================================

const getEnrollmentStatusClasses = (status, accessGranted) => {
  if (status === "Pending") {
    return "bg-amber-50 text-amber-700 border-amber-100";
  }

  if (status === "Approved" && accessGranted) {
    return "bg-emerald-50 text-emerald-700 border-emerald-100";
  }

  if (status === "Approved" && !accessGranted) {
    return "bg-orange-50 text-orange-700 border-orange-100";
  }

  if (status === "Rejected") {
    return "bg-red-50 text-red-700 border-red-100";
  }

  return "bg-slate-50 text-slate-600 border-slate-100";
};

// =====================================================
// ADMIN DASHBOARD
// =====================================================

export default function AdminDashboard() {
  // ===================================================
  // DASHBOARD STATE
  // ===================================================

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  // ===================================================
  // ENROLLMENT STATE
  // ===================================================

  const [enrollments, setEnrollments] = useState([]);

  const [enrollmentsLoading, setEnrollmentsLoading] =
    useState(true);

  const [enrollmentError, setEnrollmentError] =
    useState("");

  const [processingEnrollmentId, setProcessingEnrollmentId] =
    useState(null);

  // ===================================================
  // FETCH DASHBOARD
  // ===================================================

  const fetchDashboard = useCallback(async () => {
    const token = getStoredToken();

    if (!token) {
      setError("Authentication token not found.");
      setLoading(false);
      return;
    }

    try {
      setError("");

      const response = await api.get("/admin/dashboard", {
        headers: getAuthHeaders(),
      });

      if (!response.data?.success) {
        throw new Error(
          response.data?.message ||
            "Unable to load dashboard.",
        );
      }

      setData(response.data);
    } catch (err) {
      console.error("Admin Dashboard Error:", err);

      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to load admin dashboard.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // ===================================================
  // FETCH ENROLLMENTS
  // ===================================================

  const fetchEnrollments = useCallback(async () => {
    const token = getStoredToken();

    if (!token) {
      setEnrollmentError("Authentication token not found.");
      setEnrollmentsLoading(false);
      return;
    }

    try {
      setEnrollmentError("");

      const response = await getAdminEnrollments({
        status: "Pending",
      });

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to load enrollment requests.",
        );
      }

      setEnrollments(
        Array.isArray(response?.enrollments)
          ? response.enrollments
          : [],
      );
    } catch (err) {
      console.error(
        "Admin Enrollment Error:",
        err,
      );

      setEnrollmentError(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to load enrollment requests.",
      );
    } finally {
      setEnrollmentsLoading(false);
    }
  }, []);

  // ===================================================
  // INITIAL FETCH
  // ===================================================

  useEffect(() => {
    fetchDashboard();
    fetchEnrollments();
  }, [fetchDashboard, fetchEnrollments]);

  // ===================================================
  // REFRESH
  // ===================================================

  const handleRefresh = async () => {
    setRefreshing(true);

    await Promise.all([
      fetchDashboard(),
      fetchEnrollments(),
    ]);

    setRefreshing(false);
  };

  // ===================================================
  // APPROVE ENROLLMENT
  // ===================================================

  const handleApproveEnrollment = async (
    enrollmentId,
  ) => {
    if (!enrollmentId) return;

    const confirmed = window.confirm(
      "Are you sure you want to approve this enrollment and grant course access?",
    );

    if (!confirmed) return;

    try {
      setProcessingEnrollmentId(enrollmentId);

      const response = await approveEnrollment(
        enrollmentId,
      );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to approve enrollment.",
        );
      }

      // Remove from pending list immediately
      setEnrollments((previous) =>
        previous.filter(
          (item) =>
            item?._id !== enrollmentId,
        ),
      );

      // Refresh dashboard stats
      await fetchDashboard();
    } catch (err) {
      console.error(
        "Approve Enrollment Error:",
        err,
      );

      window.alert(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to approve enrollment.",
      );
    } finally {
      setProcessingEnrollmentId(null);
    }
  };

  // ===================================================
  // REJECT ENROLLMENT
  // ===================================================

  const handleRejectEnrollment = async (
    enrollmentId,
  ) => {
    if (!enrollmentId) return;

    const confirmed = window.confirm(
      "Are you sure you want to reject this enrollment request?",
    );

    if (!confirmed) return;

    try {
      setProcessingEnrollmentId(enrollmentId);

      const response = await rejectEnrollment(
        enrollmentId,
      );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to reject enrollment.",
        );
      }

      // Remove from pending list immediately
      setEnrollments((previous) =>
        previous.filter(
          (item) =>
            item?._id !== enrollmentId,
        ),
      );

      // Refresh dashboard stats
      await fetchDashboard();
    } catch (err) {
      console.error(
        "Reject Enrollment Error:",
        err,
      );

      window.alert(
        err?.response?.data?.message ||
          err?.message ||
          "Unable to reject enrollment.",
      );
    } finally {
      setProcessingEnrollmentId(null);
    }
  };

  // ===================================================
  // SAFE DATA
  // ===================================================

  const stats = data?.stats || {};

  const totalStudents =
    stats.totalStudents ?? 0;

  const activeStudents =
    stats.activeStudents ?? 0;

  const pendingStudents =
    stats.pendingStudents ?? 0;

  const completedStudents =
    stats.completedStudents ?? 0;

  const totalCourses =
    stats.totalCourses ?? 0;

  const totalLeads =
    stats.totalLeads ?? 0;

  const newLeads =
    stats.newLeads ?? 0;

  const totalEnrollments =
    stats.totalEnrollments ?? 0;

  const pendingEnrollments =
    stats.pendingEnrollments ?? 0;

  const approvedEnrollments =
    stats.approvedEnrollments ?? 0;

  // ===================================================
  // RECENT DATA
  // ===================================================

  const recentStudents = Array.isArray(
    data?.recentStudents,
  )
    ? data.recentStudents
    : [];

  const recentCourses = Array.isArray(
    data?.recentCourses,
  )
    ? data.recentCourses
    : [];

  const recentLeads = Array.isArray(
    data?.recentLeads,
  )
    ? data.recentLeads
    : [];

  // ===================================================
  // ENROLLMENT SUMMARY
  // ===================================================

  const enrollmentSummary = useMemo(() => {
    const total = totalEnrollments;

    const approvedPercentage =
      total > 0
        ? Math.round(
            (approvedEnrollments / total) *
              100,
          )
        : 0;

    const pendingPercentage =
      total > 0
        ? Math.round(
            (pendingEnrollments / total) *
              100,
          )
        : 0;

    return {
      approvedPercentage,
      pendingPercentage,
    };
  }, [
    totalEnrollments,
    approvedEnrollments,
    pendingEnrollments,
  ]);

  // ===================================================
  // STAT CARDS
  // ===================================================

  const statCards = [
    {
      label: "Total Students",
      value: totalStudents,
      description: "Registered students",
      icon: Users,
      link: "/admin/students",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-600",
      gradient:
        "from-blue-500/10 via-blue-50 to-white",
      border: "hover:border-blue-200",
      valueColor: "text-blue-950",
      accent:
        "from-blue-500 to-cyan-400",
    },

    {
      label: "Active Students",
      value: activeStudents,
      description: "Currently active",
      icon: UserCheck,
      link: "/admin/students",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      hoverBg: "group-hover:bg-emerald-600",
      gradient:
        "from-emerald-500/10 via-emerald-50 to-white",
      border: "hover:border-emerald-200",
      valueColor: "text-emerald-950",
      accent:
        "from-emerald-500 to-teal-400",
    },

    {
      label: "Total Courses",
      value: totalCourses,
      description: "Active learning programs",
      icon: BookOpen,
      link: "/admin/courses",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      hoverBg: "group-hover:bg-violet-600",
      gradient:
        "from-violet-500/10 via-violet-50 to-white",
      border: "hover:border-violet-200",
      valueColor: "text-violet-950",
      accent:
        "from-violet-500 to-fuchsia-400",
    },

    {
      label: "New Leads",
      value: newLeads,
      description: `${totalLeads} total enquiries`,
      icon: MessageSquare,
      link: "/admin/leads",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      hoverBg: "group-hover:bg-orange-600",
      gradient:
        "from-orange-500/10 via-orange-50 to-white",
      border: "hover:border-orange-200",
      valueColor: "text-orange-950",
      accent:
        "from-orange-500 to-amber-400",
    },
  ];

  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {
    return <DashboardSkeleton />;
  }

  // ===================================================
  // ERROR
  // ===================================================

  if (error) {
    return (
      <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-white to-red-50 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex min-h-[500px] max-w-[1400px] items-center justify-center">
          <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-red-100 bg-white p-8 text-center shadow-xl shadow-red-100/40">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg shadow-red-200">
              <AlertCircle className="h-8 w-8 text-white" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-slate-950">
              Dashboard unavailable
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {error}
            </p>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================================================
  // DASHBOARD
  // ===================================================

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1400px]">

        {/* =================================================
            HEADER
        ================================================= */}

        <section className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-xl sm:p-8">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 right-40 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Admin Overview
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Dashboard
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Monitor students, courses, enrollments,
                learning progress and enquiries from one
                place.
              </p>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              {refreshing
                ? "Refreshing..."
                : "Refresh"}
            </button>
          </div>
        </section>

        {/* =================================================
            MAIN STAT CARDS
        ================================================= */}

        <section className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.label}
                to={card.link}
                className={`group relative overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-br ${card.gradient} p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${card.border}`}
              >
                <div
                  className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${card.accent}`}
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      {card.label}
                    </p>

                    <p
                      className={`mt-3 text-3xl font-black tracking-tight ${card.valueColor}`}
                    >
                      {card.value}
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} shadow-sm transition duration-300 ${card.hoverBg} group-hover:text-white group-hover:shadow-lg`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative mt-6 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold ${card.iconColor}`}
                  >
                    View details
                  </span>

                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg ${card.iconBg} ${card.iconColor} transition group-hover:translate-x-1`}
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        {/* =================================================
            ENROLLMENT OVERVIEW
        ================================================= */}

        <section className="mt-7">
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-indigo-500" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-indigo-500">
                Course Enrollment
              </p>
            </div>

            <div className="mt-1 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Enrollment Overview
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Track course requests and student access.
                </p>
              </div>

              <Link
                to="/admin/enrollments"
                className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-3 py-2 text-[10px] font-bold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
              >
                Manage enrollments
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <EnrollmentMetric
              icon={ClipboardList}
              label="Total Enrollments"
              value={totalEnrollments}
              description="All course requests"
              iconBg="bg-indigo-100"
              iconColor="text-indigo-600"
              valueColor="text-indigo-700"
            />

            <EnrollmentMetric
              icon={Clock3}
              label="Pending Requests"
              value={pendingEnrollments}
              description="Waiting for admin review"
              iconBg="bg-amber-100"
              iconColor="text-amber-600"
              valueColor="text-amber-700"
              highlight={pendingEnrollments > 0}
            />

            <EnrollmentMetric
              icon={ShieldCheck}
              label="Approved Access"
              value={approvedEnrollments}
              description="Currently active access"
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
              valueColor="text-emerald-700"
            />

            <EnrollmentMetric
              icon={UserRoundX}
              label="Revoked Access"
              value={Math.max(
                totalEnrollments -
                  approvedEnrollments -
                  pendingEnrollments,
                0,
              )}
              description="Rejected or revoked requests"
              iconBg="bg-rose-100"
              iconColor="text-rose-600"
              valueColor="text-rose-700"
            />
          </div>

          {/* Enrollment Progress */}

          <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                  Enrollment Health
                </p>

                <h4 className="mt-1 text-sm font-bold text-slate-900">
                  Approval Overview
                </h4>
              </div>

              <div className="flex items-center gap-4 text-[10px] font-bold">
                <span className="inline-flex items-center gap-1.5 text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {enrollmentSummary.approvedPercentage}% approved
                </span>

                <span className="inline-flex items-center gap-1.5 text-amber-600">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  {enrollmentSummary.pendingPercentage}% pending
                </span>
              </div>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700"
                style={{
                  width: `${enrollmentSummary.approvedPercentage}%`,
                }}
              />
            </div>
          </div>
        </section>

        {/* =================================================
            LEARNING STATUS
        ================================================= */}

        <section className="mt-7 grid gap-5 sm:grid-cols-3">
          <StatusCard
            icon={UserCheck}
            label="Active Students"
            value={activeStudents}
            description="Currently active student accounts"
            iconBg="bg-emerald-100"
            iconColor="text-emerald-600"
            valueColor="text-emerald-700"
            progressBg="bg-emerald-500"
          />

          <StatusCard
            icon={Clock3}
            label="Pending Students"
            value={pendingStudents}
            description="Students waiting for approval"
            iconBg="bg-amber-100"
            iconColor="text-amber-600"
            valueColor="text-amber-700"
            progressBg="bg-amber-500"
          />

          <StatusCard
            icon={CheckCircle2}
            label="Completed"
            value={completedStudents}
            description="Completed course progress records"
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            valueColor="text-blue-700"
            progressBg="bg-blue-500"
          />
        </section>

        {/* =================================================
            PENDING ENROLLMENT REQUESTS
        ================================================= */}

        <section className="mt-9">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-amber-500" />

                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-amber-500">
                  Action Required
                </p>
              </div>

              <h3 className="mt-1 text-xl font-bold text-slate-950">
                Pending Enrollment Requests
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Review and manage students waiting for course access.
              </p>
            </div>

            <Link
              to="/admin/enrollments"
              className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-[10px] font-bold text-amber-700 transition hover:bg-amber-500 hover:text-white"
            >
              View all
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-amber-100 bg-white shadow-lg shadow-amber-100/30">
            {enrollmentsLoading ? (
              <EnrollmentListSkeleton />
            ) : enrollmentError ? (
              <div className="px-5 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                </div>

                <p className="mt-3 text-xs font-semibold text-slate-600">
                  {enrollmentError}
                </p>

                <button
                  type="button"
                  onClick={fetchEnrollments}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-[10px] font-bold text-white transition hover:bg-slate-700"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Retry
                </button>
              </div>
            ) : enrollments.length === 0 ? (
              <div className="px-5 py-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <h4 className="mt-4 text-sm font-bold text-slate-900">
                  All caught up
                </h4>

                <p className="mt-1 text-xs text-slate-400">
                  There are no pending enrollment requests.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {enrollments.slice(0, 5).map(
                  (enrollment) => (
                    <PendingEnrollmentRow
                      key={enrollment?._id}
                      enrollment={enrollment}
                      processing={
                        processingEnrollmentId ===
                        enrollment?._id
                      }
                      onApprove={
                        handleApproveEnrollment
                      }
                      onReject={
                        handleRejectEnrollment
                      }
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            ACTIVITY TITLE
        ================================================= */}

        <section className="mt-9">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-violet-500" />

                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-violet-500">
                  Latest Activity
                </p>
              </div>

              <h3 className="mt-1 text-xl font-bold text-slate-950">
                Recent Updates
              </h3>
            </div>
          </div>
        </section>

        {/* =================================================
            RECENT STUDENTS + COURSES
        ================================================= */}

        <section className="mt-5 grid gap-6 xl:grid-cols-2">

          {/* RECENT STUDENTS */}

          <div className="overflow-hidden rounded-[24px] border border-blue-100 bg-white shadow-lg shadow-blue-100/30">
            <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-blue-50/80 to-white px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-blue-500">
                    Students
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-950">
                    Recent Students
                  </h3>
                </div>
              </div>

              <Link
                to="/admin/students"
                className="rounded-lg bg-blue-50 px-3 py-2 text-[10px] font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                View all
              </Link>
            </div>

            {recentStudents.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {recentStudents.map(
                  (student, index) => {
                    const avatarColors = [
                      "bg-blue-100 text-blue-700",
                      "bg-violet-100 text-violet-700",
                      "bg-emerald-100 text-emerald-700",
                      "bg-orange-100 text-orange-700",
                      "bg-pink-100 text-pink-700",
                    ];

                    const avatarColor =
                      avatarColors[
                        index %
                          avatarColors.length
                      ];

                    return (
                      <div
                        key={
                          student?._id ||
                          student?.id ||
                          index
                        }
                        className="flex items-center gap-3 px-5 py-4 transition hover:bg-blue-50/40"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black ${avatarColor}`}
                        >
                          {(
                            student?.name ||
                            "S"
                          )
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-slate-800">
                            {student?.name ||
                              "Unnamed Student"}
                          </p>

                          <p className="mt-0.5 truncate text-[10px] text-slate-400">
                            {student?.email ||
                              "No email available"}
                          </p>
                        </div>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[9px] font-extrabold ${
                            student?.isActive ===
                            false
                              ? "bg-slate-100 text-slate-500"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {student?.isActive ===
                          false
                            ? "Inactive"
                            : "Active"}
                        </span>
                      </div>
                    );
                  },
                )}
              </div>
            ) : (
              <EmptyState text="No recent students available." />
            )}
          </div>

          {/* RECENT COURSES */}

          <div className="overflow-hidden rounded-[24px] border border-violet-100 bg-white shadow-lg shadow-violet-100/30">
            <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-violet-50/80 to-white px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <BookOpen className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-violet-500">
                    Learning
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-950">
                    Recent Courses
                  </h3>
                </div>
              </div>

              <Link
                to="/admin/courses"
                className="rounded-lg bg-violet-50 px-3 py-2 text-[10px] font-bold text-violet-600 transition hover:bg-violet-600 hover:text-white"
              >
                View all
              </Link>
            </div>

            {recentCourses.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {recentCourses.map(
                  (course, index) => {
                    const courseColors = [
                      "bg-violet-100 text-violet-600",
                      "bg-indigo-100 text-indigo-600",
                      "bg-fuchsia-100 text-fuchsia-600",
                      "bg-blue-100 text-blue-600",
                      "bg-cyan-100 text-cyan-600",
                    ];

                    const courseColor =
                      courseColors[
                        index %
                          courseColors.length
                      ];

                    return (
                      <div
                        key={
                          course?._id ||
                          course?.id ||
                          index
                        }
                        className="flex items-center gap-3 px-5 py-4 transition hover:bg-violet-50/40"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${courseColor}`}
                        >
                          <BookOpen className="h-4 w-4" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-slate-800">
                            {course?.title ||
                              "Untitled Course"}
                          </p>

                          <p className="mt-0.5 truncate text-[10px] text-slate-400">
                            {course?.category ||
                              "Course"}
                          </p>
                        </div>

                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[9px] font-extrabold text-emerald-700">
                          Active
                        </span>
                      </div>
                    );
                  },
                )}
              </div>
            ) : (
              <EmptyState text="No recent courses available." />
            )}
          </div>
        </section>

        {/* =================================================
            RECENT LEADS
        ================================================= */}

        <section className="mt-7">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-orange-500" />

                <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-orange-500">
                  Enquiries
                </p>
              </div>

              <h3 className="mt-1 text-xl font-bold text-slate-950">
                Recent Leads
              </h3>
            </div>

            <Link
              to="/admin/leads"
              className="rounded-lg bg-orange-50 px-3 py-2 text-[10px] font-bold text-orange-600 transition hover:bg-orange-600 hover:text-white"
            >
              View all
            </Link>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-orange-100 bg-white shadow-lg shadow-orange-100/30">
            {recentLeads.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {recentLeads.map(
                  (lead, index) => {
                    const leadColors = [
                      "bg-orange-100 text-orange-700",
                      "bg-pink-100 text-pink-700",
                      "bg-amber-100 text-amber-700",
                      "bg-rose-100 text-rose-700",
                      "bg-yellow-100 text-yellow-700",
                    ];

                    const leadColor =
                      leadColors[
                        index %
                          leadColors.length
                      ];

                    return (
                      <div
                        key={
                          lead?._id ||
                          lead?.id ||
                          index
                        }
                        className="flex items-center gap-4 px-5 py-4 transition hover:bg-orange-50/40"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black ${leadColor}`}
                        >
                          {(
                            lead?.name || "L"
                          )
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-slate-800">
                            {lead?.name ||
                              "Unknown Lead"}
                          </p>

                          <p className="mt-0.5 truncate text-[10px] text-slate-400">
                            {lead?.interestedCourse ||
                              "Course enquiry"}
                          </p>
                        </div>

                        <span
                          className={`rounded-full px-3 py-1 text-[9px] font-extrabold ${
                            lead?.status ===
                            "New"
                              ? "bg-blue-100 text-blue-700"
                              : lead?.status ===
                                "Contacted"
                              ? "bg-violet-100 text-violet-700"
                              : lead?.status ===
                                "Approved"
                              ? "bg-emerald-100 text-emerald-700"
                              : lead?.status ===
                                "Rejected"
                              ? "bg-red-100 text-red-700"
                              : lead?.status ===
                                "Closed"
                              ? "bg-slate-200 text-slate-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {lead?.status ||
                            "New"}
                        </span>
                      </div>
                    );
                  },
                )}
              </div>
            ) : (
              <EmptyState text="No recent leads available." />
            )}
          </div>
        </section>

        {/* =================================================
            QUICK ACTIONS
        ================================================= */}

        <section className="mt-8">
          <div className="mb-5">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-indigo-500" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-indigo-500">
                Management
              </p>
            </div>

            <h3 className="mt-1 text-xl font-bold text-slate-950">
              Quick Actions
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <QuickAction
              icon={Users}
              title="Students"
              description="Manage student accounts"
              to="/admin/students"
              iconBg="bg-blue-100"
              iconColor="text-blue-600"
              hoverBg="group-hover:bg-blue-600"
            />

            <QuickAction
              icon={BookOpen}
              title="Courses"
              description="Manage learning programs"
              to="/admin/courses"
              iconBg="bg-violet-100"
              iconColor="text-violet-600"
              hoverBg="group-hover:bg-violet-600"
            />

            <QuickAction
              icon={UserPlus}
              title="Leads"
              description="Manage website enquiries"
              to="/admin/leads"
              iconBg="bg-orange-100"
              iconColor="text-orange-600"
              hoverBg="group-hover:bg-orange-600"
            />

            <QuickAction
              icon={GraduationCap}
              title="Enrollments"
              description="Review course access requests"
              to="/admin/enrollments"
              iconBg="bg-indigo-100"
              iconColor="text-indigo-600"
              hoverBg="group-hover:bg-indigo-600"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// =====================================================
// ENROLLMENT METRIC
// =====================================================

function EnrollmentMetric({
  icon: Icon,
  label,
  value,
  description,
  iconBg,
  iconColor,
  valueColor,
  highlight = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        highlight
          ? "border-amber-200 shadow-amber-100/40"
          : "border-slate-200"
      }`}
    >
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${iconBg} opacity-40 blur-2xl`}
      />

      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
            {label}
          </p>

          <p
            className={`mt-2 text-2xl font-black ${valueColor}`}
          >
            {value}
          </p>

          <p className="mt-1 text-[10px] font-medium text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg} ${iconColor} shadow-sm transition duration-300 group-hover:scale-105`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

// =====================================================
// PENDING ENROLLMENT ROW
// =====================================================

function PendingEnrollmentRow({
  enrollment,
  processing,
  onApprove,
  onReject,
}) {
  const student =
    enrollment?.student || {};

  const course =
    enrollment?.course || {};

  const studentName =
    enrollment?.studentName ||
    student?.name ||
    "Unknown Student";

  const studentEmail =
    enrollment?.studentEmail ||
    student?.email ||
    "";

  const studentPhone =
    enrollment?.studentPhone ||
    student?.phone ||
    "";

  const courseTitle =
    course?.title ||
    "Unknown Course";

  return (
    <div className="group px-5 py-5 transition hover:bg-amber-50/30">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Student */}

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-sm font-black text-amber-700">
            {studentName
              .charAt(0)
              .toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-900">
              {studentName}
            </p>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-400">
              {studentEmail && (
                <span className="inline-flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  {studentEmail}
                </span>
              )}

              {studentPhone && (
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {studentPhone}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Course */}

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
            <BookOpen className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] font-extrabold uppercase tracking-[0.15em] text-violet-500">
              Course
            </p>

            <p className="mt-1 truncate text-sm font-bold text-slate-800">
              {courseTitle}
            </p>
          </div>
        </div>

        {/* Date */}

        <div className="hidden shrink-0 md:block">
          <div className="flex items-center gap-2 text-slate-400">
            <CalendarDays className="h-4 w-4" />

            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.12em]">
                Requested
              </p>

              <p className="mt-0.5 text-xs font-semibold text-slate-600">
                {formatDate(
                  enrollment?.createdAt,
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}

        <span
          className={`inline-flex w-fit shrink-0 items-center rounded-full border px-3 py-1.5 text-[9px] font-extrabold ${getEnrollmentStatusClasses(
            enrollment?.status,
            enrollment?.accessGranted,
          )}`}
        >
          {enrollment?.status || "Pending"}
        </span>

        {/* Actions */}

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() =>
              onApprove(enrollment?._id)
            }
            disabled={processing}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 text-[10px] font-bold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? (
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <CheckCircle2 className="h-3.5 w-3.5" />
            )}

            Approve
          </button>

          <button
            type="button"
            onClick={() =>
              onReject(enrollment?._id)
            }
            disabled={processing}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-red-100 bg-red-50 px-3 text-[10px] font-bold text-red-600 transition hover:bg-red-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <XCircle className="h-3.5 w-3.5" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// STATUS CARD
// =====================================================

function StatusCard({
  icon: Icon,
  label,
  value,
  description,
  iconBg,
  iconColor,
  valueColor,
  progressBg,
}) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full ${iconBg} opacity-40 blur-2xl`}
      />

      <div className="relative flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg} ${iconColor} shadow-sm`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
            {label}
          </p>

          <p
            className={`mt-1 text-2xl font-black ${valueColor}`}
          >
            {value}
          </p>
        </div>
      </div>

      <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full w-2/3 rounded-full ${progressBg} transition-all duration-700 group-hover:w-4/5`}
        />
      </div>

      <p className="relative mt-3 text-[10px] font-medium text-slate-400">
        {description}
      </p>
    </div>
  );
}

// =====================================================
// QUICK ACTION
// =====================================================

function QuickAction({
  icon: Icon,
  title,
  description,
  to,
  iconBg,
  iconColor,
  hoverBg,
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${iconBg} opacity-40 blur-2xl transition group-hover:scale-150`}
      />

      <div className="relative">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ${iconColor} transition duration-300 ${hoverBg} group-hover:text-white group-hover:shadow-lg`}
        >
          <Icon className="h-5 w-5" />
        </div>

        <h4 className="mt-5 text-sm font-bold text-slate-950">
          {title}
        </h4>

        <p className="mt-1 text-[10px] leading-5 text-slate-400">
          {description}
        </p>

        <div
          className={`mt-5 flex items-center gap-1 text-[10px] font-bold ${iconColor}`}
        >
          Open

          <ArrowUpRight className="h-3 w-3 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}

// =====================================================
// EMPTY STATE
// =====================================================

function EmptyState({ text }) {
  return (
    <div className="px-5 py-14 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <BookOpen className="h-5 w-5" />
      </div>

      <p className="mt-3 text-xs font-medium text-slate-400">
        {text}
      </p>
    </div>
  );
}

// =====================================================
// ENROLLMENT LIST SKELETON
// =====================================================

function EnrollmentListSkeleton() {
  return (
    <div className="divide-y divide-slate-100">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse px-5 py-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-slate-200" />

              <div className="flex-1">
                <div className="h-3 w-40 rounded bg-slate-200" />

                <div className="mt-2 h-2.5 w-56 rounded bg-slate-100" />
              </div>
            </div>

            <div className="h-10 w-40 rounded-xl bg-slate-100" />

            <div className="h-8 w-20 rounded-full bg-slate-100" />

            <div className="flex gap-2">
              <div className="h-9 w-20 rounded-lg bg-slate-200" />

              <div className="h-9 w-20 rounded-lg bg-slate-100" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// =====================================================
// LOADING SKELETON
// =====================================================

function DashboardSkeleton() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1400px] animate-pulse">

        {/* Header */}

        <div className="rounded-[28px] border border-slate-200 bg-white p-8">
          <div className="h-7 w-32 rounded-lg bg-slate-200" />

          <div className="mt-4 h-10 w-56 rounded-lg bg-slate-200" />

          <div className="mt-3 h-4 w-96 max-w-full rounded bg-slate-200" />
        </div>

        {/* Stats */}

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-44 rounded-[24px] border border-slate-200 bg-white"
            />
          ))}
        </div>

        {/* Enrollment */}

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-32 rounded-[24px] border border-slate-200 bg-white"
            />
          ))}
        </div>

        <div className="mt-5 h-28 rounded-[24px] border border-slate-200 bg-white" />

        {/* Status */}

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-36 rounded-[24px] border border-slate-200 bg-white"
            />
          ))}
        </div>

        {/* Pending */}

        <div className="mt-9 h-96 rounded-[24px] border border-slate-200 bg-white" />

        {/* Recent */}

        <div className="mt-7 grid gap-6 xl:grid-cols-2">
          <div className="h-80 rounded-[24px] border border-slate-200 bg-white" />

          <div className="h-80 rounded-[24px] border border-slate-200 bg-white" />
        </div>

        {/* Leads */}

        <div className="mt-7 h-64 rounded-[24px] border border-slate-200 bg-white" />

        {/* Actions */}

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-44 rounded-[24px] border border-slate-200 bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}