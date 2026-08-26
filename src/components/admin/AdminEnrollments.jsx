import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  GraduationCap,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  UserCheck,
  UserX,
  Users,
  X,
  Ban,
  CalendarDays,
  BriefcaseBusiness,
  School,
  CircleCheck,
  CircleX,
  RotateCcw,
} from "lucide-react";
import { toast } from "react-hot-toast";

/* ============================================================
   API
============================================================ */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ============================================================
   TOKEN
============================================================ */

const getToken = () =>
  localStorage.getItem("zenvix_token") ||
  sessionStorage.getItem("zenvix_token") ||
  null;

/* ============================================================
   HELPERS
============================================================ */

const getId = (item) => {
  if (!item) return "";

  if (typeof item === "string") {
    return item;
  }

  return item._id || item.id || "";
};

const getStudent = (enrollment) => enrollment?.student || null;

const getCourse = (enrollment) => enrollment?.course || null;

const getStudentName = (enrollment) =>
  enrollment?.studentName || getStudent(enrollment)?.name || "Unnamed Student";

const getStudentEmail = (enrollment) =>
  enrollment?.studentEmail || getStudent(enrollment)?.email || "No email";

const getStudentPhone = (enrollment) =>
  enrollment?.studentPhone || getStudent(enrollment)?.phone || "No phone";

const getCourseTitle = (enrollment) =>
  getCourse(enrollment)?.title ||
  enrollment?.courseTitle ||
  "Course unavailable";

const getCourseCategory = (enrollment) => getCourse(enrollment)?.category || "";

const getCourseLevel = (enrollment) => getCourse(enrollment)?.level || "";

const getStatus = (enrollment) => String(enrollment?.status || "Pending");

const getAccessStatus = (enrollment) => {
  if (enrollment?.accessStatus) {
    return enrollment.accessStatus;
  }

  if (enrollment?.status === "Approved" && enrollment?.accessGranted) {
    return "Granted";
  }

  if (enrollment?.status === "Approved" && !enrollment?.accessGranted) {
    return "Revoked";
  }

  return "Not Granted";
};

const formatDate = (value, includeTime = false) => {
  if (!value) {
    return "—";
  }

  try {
    return new Date(value).toLocaleDateString(
      "en-IN",
      includeTime
        ? {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }
        : {
            day: "2-digit",
            month: "short",
            year: "numeric",
          },
    );
  } catch {
    return "—";
  }
};

const normalizeEnrollments = (data) => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.enrollments)) {
    return data.enrollments;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  if (Array.isArray(data?.results)) {
    return data.results;
  }

  return [];
};

const normalizeStats = (data) => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.stats)) {
    return data.stats;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

/* ============================================================
   STATUS CONFIG
============================================================ */

const STATUS_OPTIONS = ["Pending", "Approved", "Rejected"];

const STATUS_META = {
  Pending: {
    label: "Pending",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },

  Approved: {
    label: "Approved",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },

  Rejected: {
    label: "Rejected",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    dot: "bg-red-500",
  },
};

const ACCESS_META = {
  Granted: {
    label: "Access Granted",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
  },

  Revoked: {
    label: "Access Revoked",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    dot: "bg-red-500",
  },

  "Not Granted": {
    label: "Not Granted",
    bg: "bg-slate-100",
    text: "text-slate-600",
    border: "border-slate-200",
    dot: "bg-slate-400",
  },

  "Not Requested": {
    label: "Not Requested",
    bg: "bg-slate-100",
    text: "text-slate-600",
    border: "border-slate-200",
    dot: "bg-slate-400",
  },
};

function getStatusMeta(status) {
  return (
    STATUS_META[status] || {
      label: status || "Pending",
      bg: "bg-slate-100",
      text: "text-slate-600",
      border: "border-slate-200",
      dot: "bg-slate-400",
    }
  );
}

function getAccessMeta(status) {
  return (
    ACCESS_META[status] || {
      label: status || "Not Granted",
      bg: "bg-slate-100",
      text: "text-slate-600",
      border: "border-slate-200",
      dot: "bg-slate-400",
    }
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function AdminEnrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [courseStats, setCourseStats] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [courseFilter, setCourseFilter] = useState("All");

  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  const [actionEnrollment, setActionEnrollment] = useState(null);

  const [actionType, setActionType] = useState("");

  const [adminNote, setAdminNote] = useState("");

  const [processingId, setProcessingId] = useState("");

  /* ==========================================================
     FETCH ENROLLMENTS
  ========================================================== */

  const fetchEnrollments = useCallback(async (showLoader = true) => {
    const token = getToken();

    if (!token) {
      setError("Authentication token not found. Please login again.");

      setLoading(false);
      return;
    }

    try {
      if (showLoader) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }

      setError("");

      const response = await api.get("/admin/enrollments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEnrollments(normalizeEnrollments(response.data));
    } catch (err) {
      console.error("Admin Enrollments Error:", err);

      if (err?.response?.status === 401) {
        setError("Your admin session has expired. Please login again.");
      } else if (err?.response?.status === 403) {
        setError("You do not have permission to access enrollments.");
      } else {
        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Unable to load enrollment requests.",
        );
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  /* ==========================================================
     FETCH COURSE STATS
  ========================================================== */

  const fetchCourseStats = useCallback(async () => {
    const token = getToken();

    if (!token) {
      return;
    }

    try {
      const response = await api.get("/admin/enrollments/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCourseStats(normalizeStats(response.data));
    } catch (err) {
      console.error("Enrollment Stats Error:", err);

      setCourseStats([]);
    }
  }, []);

  /* ==========================================================
     INITIAL LOAD
  ========================================================== */

  useEffect(() => {
    fetchEnrollments();
    fetchCourseStats();
  }, [fetchEnrollments, fetchCourseStats]);

  /* ==========================================================
     COURSE OPTIONS
  ========================================================== */

  const courseOptions = useMemo(() => {
    const map = new Map();

    enrollments.forEach((enrollment) => {
      const course = getCourse(enrollment);
      const courseId = getId(course);

      if (courseId) {
        map.set(courseId, {
          id: courseId,
          title: course?.title || "Unknown Course",
        });
      }
    });

    return Array.from(map.values()).sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }, [enrollments]);

  /* ==========================================================
     STATISTICS
  ========================================================== */

  const statistics = useMemo(() => {
    const pending = enrollments.filter(
      (item) => getStatus(item) === "Pending",
    ).length;

    const approved = enrollments.filter(
      (item) => getStatus(item) === "Approved",
    ).length;

    const rejected = enrollments.filter(
      (item) => getStatus(item) === "Rejected",
    ).length;

    const granted = enrollments.filter(
      (item) => getAccessStatus(item) === "Granted",
    ).length;

    const revoked = enrollments.filter(
      (item) => getAccessStatus(item) === "Revoked",
    ).length;

    return {
      total: enrollments.length,
      pending,
      approved,
      rejected,
      granted,
      revoked,
    };
  }, [enrollments]);

  /* ==========================================================
     FILTER + SEARCH
  ========================================================== */

  const filteredEnrollments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return enrollments.filter((enrollment) => {
      const status = getStatus(enrollment);

      const course = getCourse(enrollment);

      const courseId = getId(course);

      const matchesStatus =
        statusFilter === "All" ||
        status.toLowerCase() === statusFilter.toLowerCase();

      const matchesCourse = courseFilter === "All" || courseId === courseFilter;

      if (!matchesStatus || !matchesCourse) {
        return false;
      }

      if (!query) {
        return true;
      }

      const searchable = [
        getStudentName(enrollment),
        getStudentEmail(enrollment),
        getStudentPhone(enrollment),
        getCourseTitle(enrollment),
        getCourseCategory(enrollment),
        getCourseLevel(enrollment),
        enrollment?.education,
        enrollment?.experience,
        enrollment?.message,
        enrollment?.adminNote,
        enrollment?.source,
        enrollment?.status,
        enrollment?.accessStatus,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [enrollments, search, statusFilter, courseFilter]);

  /* ==========================================================
     OPEN ACTION
  ========================================================== */

  const openAction = (enrollment, type) => {
    setActionEnrollment(enrollment);
    setActionType(type);
    setAdminNote(enrollment?.adminNote || "");
  };

  /* ==========================================================
     CLOSE ACTION
  ========================================================== */

  const closeAction = () => {
    if (processingId) {
      return;
    }

    setActionEnrollment(null);
    setActionType("");
    setAdminNote("");
  };

  /* ==========================================================
     PROCESS ENROLLMENT ACTION
  ========================================================== */

  const handleEnrollmentAction = async () => {
    if (!actionEnrollment) {
      return;
    }

    const enrollmentId = getId(actionEnrollment);

    if (!enrollmentId) {
      toast.error("Enrollment ID not found.");
      return;
    }

    const token = getToken();

    if (!token) {
      toast.error("Authentication token not found.");
      return;
    }

    let endpoint = "";

    /*
      IMPORTANT:
      "restore" intentionally uses the existing
      approve endpoint.

      This means the backend does not need a new
      route if its existing approve controller
      supports approving an already-approved/revoked
      enrollment again.
    */

    if (actionType === "approve" || actionType === "restore") {
      endpoint = `/admin/enrollments/${enrollmentId}/approve`;
    }

    if (actionType === "reject") {
      endpoint = `/admin/enrollments/${enrollmentId}/reject`;
    }

    if (actionType === "revoke") {
      endpoint = `/admin/enrollments/${enrollmentId}/revoke`;
    }

    if (!endpoint) {
      return;
    }

    try {
      setProcessingId(enrollmentId);

      const response = await api.patch(
        endpoint,
        {
          adminNote: adminNote.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const updatedEnrollment = response?.data?.enrollment;

      if (updatedEnrollment) {
        setEnrollments((previous) =>
          previous.map((item) =>
            getId(item) === enrollmentId
              ? {
                  ...item,
                  ...updatedEnrollment,
                }
              : item,
          ),
        );

        setSelectedEnrollment((previous) =>
          previous && getId(previous) === enrollmentId
            ? {
                ...previous,
                ...updatedEnrollment,
              }
            : previous,
        );
      } else {
        await fetchEnrollments(false);
      }

      if (actionType === "approve") {
        toast.success("Course access granted successfully.");
      }

      if (actionType === "restore") {
        toast.success("Course access restored successfully.");
      }

      if (actionType === "reject") {
        toast.success("Enrollment request rejected.");
      }

      if (actionType === "revoke") {
        toast.success("Course access revoked successfully.");
      }

      setActionEnrollment(null);
      setActionType("");
      setAdminNote("");

      fetchCourseStats();
    } catch (err) {
      console.error("Enrollment Action Error:", err);

      toast.error(
        err?.response?.data?.message || "Unable to update enrollment.",
      );
    } finally {
      setProcessingId("");
    }
  };

  /* ==========================================================
     REFRESH
  ========================================================== */

  const handleRefresh = async () => {
    await Promise.all([fetchEnrollments(false), fetchCourseStats()]);
  };

  /* ==========================================================
     LOADING
  ========================================================== */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] p-5 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 h-36 animate-pulse rounded-[2rem] bg-white shadow-sm" />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-32 animate-pulse rounded-2xl bg-white shadow-sm"
              />
            ))}
          </div>

          <div className="mt-6 h-[500px] animate-pulse rounded-3xl bg-white shadow-sm" />
        </div>
      </div>
    );
  }

  /* ==========================================================
     ERROR
  ========================================================== */

  if (error) {
    return (
      <div className="min-h-screen bg-[#f8fafc] p-5 sm:p-8">
        <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-red-100 bg-white p-8 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>

            <h1 className="mt-5 text-2xl font-black text-slate-950">
              Unable to load enrollments
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">{error}</p>

            <button
              onClick={() => {
                setError("");
                fetchEnrollments();
                fetchCourseStats();
              }}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ==========================================================
     MAIN UI
  ========================================================== */

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-indigo-600" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-700">
                  Enrollment Management
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Manage enrollments
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Review student enrollment requests, approve course access,
                reject requests, and manage existing course access.
              </p>
            </div>

            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh Enrollments
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
        {/* ====================================================
            STATS
        ==================================================== */}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <EnrollmentStat
            icon={Users}
            label="Total Requests"
            value={statistics.total}
            description="All enrollment requests"
            iconClass="bg-indigo-50 text-indigo-600"
            valueClass="text-indigo-700"
          />

          <EnrollmentStat
            icon={Clock3}
            label="Pending"
            value={statistics.pending}
            description="Waiting for review"
            iconClass="bg-amber-50 text-amber-600"
            valueClass="text-amber-700"
          />

          <EnrollmentStat
            icon={CheckCircle2}
            label="Approved"
            value={statistics.approved}
            description={`${statistics.granted} currently have access`}
            iconClass="bg-emerald-50 text-emerald-600"
            valueClass="text-emerald-700"
          />

          <EnrollmentStat
            icon={UserX}
            label="Rejected"
            value={statistics.rejected}
            description={`${statistics.revoked} access revoked`}
            iconClass="bg-red-50 text-red-600"
            valueClass="text-red-700"
          />
        </section>

        {/* ====================================================
            ACCESS OVERVIEW
        ==================================================== */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-black text-slate-950">
                  Enrollment Overview
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Current enrollment and course-access distribution
                </p>
              </div>

              <ShieldCheck className="h-5 w-5 text-slate-300" />
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
            <OverviewItem
              label="Pending Requests"
              value={statistics.pending}
              icon={Clock3}
              iconClass="text-amber-500"
              onClick={() =>
                setStatusFilter(statusFilter === "Pending" ? "All" : "Pending")
              }
              active={statusFilter === "Pending"}
            />

            <OverviewItem
              label="Approved"
              value={statistics.approved}
              icon={CircleCheck}
              iconClass="text-emerald-500"
              onClick={() =>
                setStatusFilter(
                  statusFilter === "Approved" ? "All" : "Approved",
                )
              }
              active={statusFilter === "Approved"}
            />

            <OverviewItem
              label="Rejected"
              value={statistics.rejected}
              icon={CircleX}
              iconClass="text-red-500"
              onClick={() =>
                setStatusFilter(
                  statusFilter === "Rejected" ? "All" : "Rejected",
                )
              }
              active={statusFilter === "Rejected"}
            />

            <OverviewItem
              label="Active Access"
              value={statistics.granted}
              icon={ShieldCheck}
              iconClass="text-indigo-500"
              onClick={() => setStatusFilter("Approved")}
              active={statusFilter === "Approved"}
            />
          </div>
        </section>

        {/* ====================================================
            COURSE STATS
        ==================================================== */}

        {courseStats.length > 0 && (
          <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-black text-slate-950">
                    Course Enrollment Summary
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Enrollment performance by course
                  </p>
                </div>

                <BookOpen className="h-5 w-5 text-slate-300" />
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
              {courseStats.map((stat, index) => (
                <motion.div
                  key={getId(stat.course) || index}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: Math.min(index * 0.04, 0.2),
                  }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-slate-900">
                        {stat?.course?.title || "Deleted Course"}
                      </p>

                      {stat?.course?.category && (
                        <p className="mt-1 text-[10px] font-medium text-slate-400">
                          {stat.course.category}
                        </p>
                      )}
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <BookOpen className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <MiniStat
                      label="Total"
                      value={stat.totalEnrollments ?? 0}
                    />

                    <MiniStat
                      label="Pending"
                      value={stat.pendingRequests ?? 0}
                    />

                    <MiniStat
                      label="Active"
                      value={stat.approvedStudents ?? 0}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ====================================================
            ENROLLMENT TABLE
        ==================================================== */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-950">
                All Enrollment Requests
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Showing {filteredEnrollments.length} of {enrollments.length}{" "}
                requests
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search enrollments..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:w-64"
                />
              </div>

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:w-40"
                >
                  <option value="All">All Status</option>

                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>

              <div className="relative">
                <select
                  value={courseFilter}
                  onChange={(event) => setCourseFilter(event.target.value)}
                  className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:w-48"
                >
                  <option value="All">All Courses</option>

                  {courseOptions.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>

          {/* ==================================================
              DESKTOP TABLE
          ================================================== */}

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70">
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Student
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Course
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Access
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Requested
                  </th>

                  <th className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredEnrollments.map((enrollment, index) => {
                  const id = getId(enrollment);

                  const name = getStudentName(enrollment);

                  const status = getStatus(enrollment);

                  const access = getAccessStatus(enrollment);

                  const statusMeta = getStatusMeta(status);

                  const accessMeta = getAccessMeta(access);

                  return (
                    <motion.tr
                      key={id || index}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: Math.min(index * 0.02, 0.3),
                      }}
                      className="group transition hover:bg-indigo-50/30"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white shadow-sm">
                            {name.charAt(0).toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-black text-slate-900">
                              {name}
                            </p>

                            <p className="mt-0.5 text-[10px] text-slate-400">
                              Enrollment #{String(id).slice(-6)}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 text-slate-400" />

                            <span className="max-w-[190px] truncate text-xs font-medium text-slate-600">
                              {getStudentEmail(enrollment)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-slate-400" />

                            <span className="text-xs font-medium text-slate-600">
                              {getStudentPhone(enrollment)}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="max-w-[220px]">
                          <p className="truncate text-xs font-black text-slate-800">
                            {getCourseTitle(enrollment)}
                          </p>

                          <div className="mt-1 flex items-center gap-2">
                            {getCourseCategory(enrollment) && (
                              <span className="truncate text-[10px] font-medium text-slate-400">
                                {getCourseCategory(enrollment)}
                              </span>
                            )}

                            {getCourseLevel(enrollment) && (
                              <>
                                <span className="h-1 w-1 rounded-full bg-slate-300" />

                                <span className="text-[10px] font-medium text-slate-400">
                                  {getCourseLevel(enrollment)}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-black ${statusMeta.bg} ${statusMeta.text} ${statusMeta.border}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${statusMeta.dot}`}
                          />

                          {status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-black ${accessMeta.bg} ${accessMeta.text} ${accessMeta.border}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${accessMeta.dot}`}
                          />

                          {accessMeta.label}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-xs font-medium text-slate-500">
                          {formatDate(enrollment.createdAt)}
                        </span>
                      </td>

                      {/* ACTIONS */}

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          {/* VIEW */}

                          <button
                            onClick={() => setSelectedEnrollment(enrollment)}
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            title="View enrollment"
                          >
                            <Eye className="h-4 w-4" />
                          </button>

                          {/* PENDING ACTIONS */}

                          {status === "Pending" && (
                            <>
                              <button
                                onClick={() =>
                                  openAction(enrollment, "approve")
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-100 text-emerald-600 transition hover:bg-emerald-50"
                                title="Approve and grant access"
                              >
                                <UserCheck className="h-4 w-4" />
                              </button>

                              <button
                                onClick={() => openAction(enrollment, "reject")}
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 text-red-500 transition hover:bg-red-50"
                                title="Reject enrollment"
                              >
                                <UserX className="h-4 w-4" />
                              </button>
                            </>
                          )}

                          {/* ACTIVE ACCESS */}

                          {status === "Approved" && access === "Granted" && (
                            <button
                              onClick={() => openAction(enrollment, "revoke")}
                              className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-100 text-amber-600 transition hover:bg-amber-50"
                              title="Revoke course access"
                            >
                              <Ban className="h-4 w-4" />
                            </button>
                          )}

                          {/* REVOKED ACCESS
                                RESTORE BUTTON */}

                          {status === "Approved" && access === "Revoked" && (
                            <button
                              onClick={() => openAction(enrollment, "restore")}
                              className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-100 text-emerald-600 transition hover:bg-emerald-50"
                              title="Grant access again"
                            >
                              <RotateCcw className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* ==================================================
              MOBILE
          ================================================== */}

          <div className="divide-y divide-slate-100 lg:hidden">
            {filteredEnrollments.map((enrollment, index) => {
              const id = getId(enrollment);

              const name = getStudentName(enrollment);

              const status = getStatus(enrollment);

              const access = getAccessStatus(enrollment);

              const statusMeta = getStatusMeta(status);

              const accessMeta = getAccessMeta(access);

              return (
                <motion.div
                  key={id || index}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white">
                        {name.charAt(0).toUpperCase()}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-black text-slate-900">
                          {name}
                        </h3>

                        <p className="mt-1 truncate text-xs text-slate-400">
                          {getStudentEmail(enrollment)}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-black ${statusMeta.bg} ${statusMeta.text} ${statusMeta.border}`}
                    >
                      {status}
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-indigo-500" />

                      <p className="text-[9px] font-black uppercase tracking-wider text-indigo-400">
                        Course
                      </p>
                    </div>

                    <p className="mt-2 text-sm font-black text-indigo-900">
                      {getCourseTitle(enrollment)}
                    </p>

                    {(getCourseCategory(enrollment) ||
                      getCourseLevel(enrollment)) && (
                      <p className="mt-1 text-[10px] font-medium text-indigo-500">
                        {[
                          getCourseCategory(enrollment),
                          getCourseLevel(enrollment),
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </p>
                    )}
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                        Phone
                      </p>

                      <p className="mt-1 truncate text-xs font-semibold text-slate-700">
                        {getStudentPhone(enrollment)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                        Requested
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-700">
                        {formatDate(enrollment.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div
                      className={`flex items-center justify-between rounded-xl border px-3 py-3 ${accessMeta.bg} ${accessMeta.border}`}
                    >
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                        Course Access
                      </span>

                      <span
                        className={`text-[10px] font-black ${accessMeta.text}`}
                      >
                        {accessMeta.label}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setSelectedEnrollment(enrollment)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    {/* PENDING */}

                    {status === "Pending" && (
                      <>
                        <button
                          onClick={() => openAction(enrollment, "approve")}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 text-emerald-600 transition hover:bg-emerald-50"
                          title="Approve"
                        >
                          <UserCheck className="h-4 w-4" />
                        </button>

                        <button
                          onClick={() => openAction(enrollment, "reject")}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 text-red-500 transition hover:bg-red-50"
                          title="Reject"
                        >
                          <UserX className="h-4 w-4" />
                        </button>
                      </>
                    )}

                    {/* ACTIVE ACCESS */}

                    {status === "Approved" && access === "Granted" && (
                      <button
                        onClick={() => openAction(enrollment, "revoke")}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-100 text-amber-600 transition hover:bg-amber-50"
                        title="Revoke access"
                      >
                        <Ban className="h-4 w-4" />
                      </button>
                    )}

                    {/* REVOKED ACCESS
                          RESTORE */}

                    {status === "Approved" && access === "Revoked" && (
                      <button
                        onClick={() => openAction(enrollment, "restore")}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 text-emerald-600 transition hover:bg-emerald-50"
                        title="Grant access again"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ==================================================
              EMPTY STATE
          ================================================== */}

          {filteredEnrollments.length === 0 && (
            <div className="px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                <GraduationCap className="h-7 w-7 text-indigo-500" />
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-900">
                No enrollments found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
                {search || statusFilter !== "All" || courseFilter !== "All"
                  ? "Try changing your search or filters."
                  : "Student enrollment requests will appear here automatically."}
              </p>

              {(search || statusFilter !== "All" || courseFilter !== "All") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("All");
                    setCourseFilter("All");
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-indigo-700"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </section>
      </div>

      {/* ======================================================
          VIEW ENROLLMENT MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedEnrollment && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
              onClick={() => setSelectedEnrollment(null)}
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-6 py-7 text-white sm:px-8">
                <button
                  onClick={() => setSelectedEnrollment(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl font-black backdrop-blur">
                    {getStudentName(selectedEnrollment).charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                      Enrollment Details
                    </p>

                    <h2 className="mt-1 truncate text-2xl font-black">
                      {getStudentName(selectedEnrollment)}
                    </h2>

                    <p className="mt-1 truncate text-xs text-white/60">
                      {getCourseTitle(selectedEnrollment)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <StatusBox
                    label="Enrollment Status"
                    value={getStatus(selectedEnrollment)}
                    meta={getStatusMeta(getStatus(selectedEnrollment))}
                  />

                  <StatusBox
                    label="Course Access"
                    value={getAccessStatus(selectedEnrollment)}
                    meta={getAccessMeta(getAccessStatus(selectedEnrollment))}
                  />
                </div>

                <ModalSection icon={Users} title="Student Information">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DetailItem
                      icon={Users}
                      label="Name"
                      value={getStudentName(selectedEnrollment)}
                    />

                    <DetailItem
                      icon={Mail}
                      label="Email"
                      value={getStudentEmail(selectedEnrollment)}
                    />

                    <DetailItem
                      icon={Phone}
                      label="Phone"
                      value={getStudentPhone(selectedEnrollment)}
                    />

                    <DetailItem
                      icon={CalendarDays}
                      label="Requested"
                      value={formatDate(selectedEnrollment.createdAt, true)}
                    />
                  </div>
                </ModalSection>

                <ModalSection icon={BookOpen} title="Course Information">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DetailItem
                      icon={BookOpen}
                      label="Course"
                      value={getCourseTitle(selectedEnrollment)}
                    />

                    <DetailItem
                      label="Category"
                      value={
                        getCourseCategory(selectedEnrollment) || "Not specified"
                      }
                    />

                    <DetailItem
                      label="Level"
                      value={
                        getCourseLevel(selectedEnrollment) || "Not specified"
                      }
                    />

                    <DetailItem
                      label="Source"
                      value={selectedEnrollment?.source || "Website"}
                    />
                  </div>
                </ModalSection>

                <ModalSection icon={School} title="Application Details">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DetailItem
                      icon={School}
                      label="Education"
                      value={selectedEnrollment?.education || "Not provided"}
                    />

                    <DetailItem
                      icon={BriefcaseBusiness}
                      label="Experience"
                      value={selectedEnrollment?.experience || "Not provided"}
                    />
                  </div>
                </ModalSection>

                {selectedEnrollment?.message && (
                  <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 text-slate-400" />

                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Student Message
                      </p>
                    </div>

                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700">
                      {selectedEnrollment.message}
                    </p>
                  </div>
                )}

                {selectedEnrollment?.adminNote && (
                  <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-indigo-400">
                      Admin Note
                    </p>

                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-indigo-900">
                      {selectedEnrollment.adminNote}
                    </p>
                  </div>
                )}

                <ModalSection icon={CalendarDays} title="Enrollment Timeline">
                  <div className="space-y-3">
                    <TimelineItem
                      label="Request Submitted"
                      date={selectedEnrollment.createdAt}
                    />

                    {selectedEnrollment.reviewedAt && (
                      <TimelineItem
                        label="Reviewed"
                        date={selectedEnrollment.reviewedAt}
                      />
                    )}

                    {selectedEnrollment.accessGrantedAt && (
                      <TimelineItem
                        label="Access Granted"
                        date={selectedEnrollment.accessGrantedAt}
                      />
                    )}

                    {selectedEnrollment.accessRevokedAt && (
                      <TimelineItem
                        label="Access Revoked"
                        date={selectedEnrollment.accessRevokedAt}
                      />
                    )}
                  </div>
                </ModalSection>

                {/* FOOTER ACTIONS */}

                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setSelectedEnrollment(null)}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    Close
                  </button>

                  {/* PENDING */}

                  {getStatus(selectedEnrollment) === "Pending" && (
                    <>
                      <button
                        onClick={() => {
                          setSelectedEnrollment(null);

                          openAction(selectedEnrollment, "reject");
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                      >
                        <UserX className="h-4 w-4" />
                        Reject
                      </button>

                      <button
                        onClick={() => {
                          setSelectedEnrollment(null);

                          openAction(selectedEnrollment, "approve");
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                      >
                        <UserCheck className="h-4 w-4" />
                        Approve & Grant Access
                      </button>
                    </>
                  )}

                  {/* ACTIVE ACCESS */}

                  {getStatus(selectedEnrollment) === "Approved" &&
                    getAccessStatus(selectedEnrollment) === "Granted" && (
                      <button
                        onClick={() => {
                          setSelectedEnrollment(null);

                          openAction(selectedEnrollment, "revoke");
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-600"
                      >
                        <Ban className="h-4 w-4" />
                        Revoke Access
                      </button>
                    )}

                  {/* REVOKED ACCESS
                      RESTORE BUTTON */}

                  {getStatus(selectedEnrollment) === "Approved" &&
                    getAccessStatus(selectedEnrollment) === "Revoked" && (
                      <button
                        onClick={() => {
                          setSelectedEnrollment(null);

                          openAction(selectedEnrollment, "restore");
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Grant Access Again
                      </button>
                    )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================
          ACTION MODAL
      ====================================================== */}

      <AnimatePresence>
        {actionEnrollment && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => {
                if (!processingId) {
                  closeAction();
                }
              }}
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10,
              }}
              className="relative w-full max-w-lg rounded-[2rem] bg-white p-7 shadow-2xl sm:p-8"
            >
              <button
                disabled={Boolean(processingId)}
                onClick={closeAction}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:opacity-50"
              >
                <X className="h-4 w-4" />
              </button>

              {/* ICON */}

              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                  actionType === "approve" || actionType === "restore"
                    ? "bg-emerald-50"
                    : actionType === "reject"
                      ? "bg-red-50"
                      : "bg-amber-50"
                }`}
              >
                {(actionType === "approve" || actionType === "restore") && (
                  <UserCheck className="h-6 w-6 text-emerald-600" />
                )}

                {actionType === "reject" && (
                  <UserX className="h-6 w-6 text-red-500" />
                )}

                {actionType === "revoke" && (
                  <Ban className="h-6 w-6 text-amber-600" />
                )}
              </div>

              {/* TITLE */}

              <div className="mt-5 text-center">
                <h2 className="text-xl font-black text-slate-950">
                  {actionType === "approve" && "Approve Enrollment?"}

                  {actionType === "restore" && "Grant Access Again?"}

                  {actionType === "reject" && "Reject Enrollment?"}

                  {actionType === "revoke" && "Revoke Course Access?"}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {actionType === "approve" && (
                    <>
                      Approving{" "}
                      <strong className="text-slate-700">
                        {getStudentName(actionEnrollment)}
                      </strong>{" "}
                      will grant access to{" "}
                      <strong className="text-slate-700">
                        {getCourseTitle(actionEnrollment)}
                      </strong>
                      .
                    </>
                  )}

                  {actionType === "restore" && (
                    <>
                      This will restore course access for{" "}
                      <strong className="text-slate-700">
                        {getStudentName(actionEnrollment)}
                      </strong>{" "}
                      and allow the student to access{" "}
                      <strong className="text-slate-700">
                        {getCourseTitle(actionEnrollment)}
                      </strong>{" "}
                      again.
                    </>
                  )}

                  {actionType === "reject" && (
                    <>
                      You are about to reject the enrollment request from{" "}
                      <strong className="text-slate-700">
                        {getStudentName(actionEnrollment)}
                      </strong>
                      .
                    </>
                  )}

                  {actionType === "revoke" && (
                    <>
                      This will remove course access from{" "}
                      <strong className="text-slate-700">
                        {getStudentName(actionEnrollment)}
                      </strong>
                      .
                    </>
                  )}
                </p>
              </div>

              {/* NOTE */}

              <div className="mt-6">
                <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Admin Note
                  <span className="ml-1 font-medium normal-case tracking-normal text-slate-300">
                    (Optional)
                  </span>
                </label>

                <textarea
                  value={adminNote}
                  onChange={(event) => setAdminNote(event.target.value)}
                  disabled={Boolean(processingId)}
                  rows={4}
                  placeholder={
                    actionType === "restore"
                      ? "Add a note about restoring access..."
                      : "Add a note for this enrollment..."
                  }
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* BUTTONS */}

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  disabled={Boolean(processingId)}
                  onClick={closeAction}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  disabled={Boolean(processingId)}
                  onClick={handleEnrollmentAction}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${
                    actionType === "approve" || actionType === "restore"
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : actionType === "reject"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-amber-500 hover:bg-amber-600"
                  }`}
                >
                  {processingId ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {(actionType === "approve" ||
                        actionType === "restore") && (
                        <>
                          <CheckCircle2 className="h-4 w-4" />

                          {actionType === "restore"
                            ? "Grant Access"
                            : "Approve"}
                        </>
                      )}

                      {actionType === "reject" && (
                        <>
                          <CircleX className="h-4 w-4" />
                          Reject
                        </>
                      )}

                      {actionType === "revoke" && (
                        <>
                          <Ban className="h-4 w-4" />
                          Revoke
                        </>
                      )}
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function EnrollmentStat({
  icon: Icon,
  label,
  value,
  description,
  iconClass,
  valueClass,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
            {label}
          </p>

          <p
            className={`mt-3 text-3xl font-black tracking-tight ${valueClass}`}
          >
            {value}
          </p>

          <p className="mt-1 text-[10px] font-medium text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   OVERVIEW ITEM
============================================================ */

function OverviewItem({
  label,
  value,
  icon: Icon,
  iconClass,
  onClick,
  active,
}) {
  return (
    <button
      onClick={onClick}
      className={`p-5 text-left transition hover:bg-slate-50 ${
        active ? "bg-indigo-50/50" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 ${iconClass}`} />

        <span className="text-[10px] font-bold text-slate-500">{label}</span>
      </div>

      <p className="mt-2 text-2xl font-black text-slate-900">{value}</p>
    </button>
  );
}

/* ============================================================
   MINI STAT
============================================================ */

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-2.5 text-center">
      <p className="text-[8px] font-black uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-black text-slate-800">{value}</p>
    </div>
  );
}

/* ============================================================
   STATUS BOX
============================================================ */

function StatusBox({ label, value, meta }) {
  return (
    <div className={`rounded-2xl border p-4 ${meta.bg} ${meta.border}`}>
      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${meta.dot}`} />

        <span className={`text-sm font-black ${meta.text}`}>{value}</span>
      </div>
    </div>
  );
}

/* ============================================================
   MODAL SECTION
============================================================ */

function ModalSection({ icon: Icon, title, children }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50">
          <Icon className="h-3.5 w-3.5 text-indigo-600" />
        </div>

        <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">
          {title}
        </h3>
      </div>

      {children}
    </section>
  );
}

/* ============================================================
   DETAIL ITEM
============================================================ */

function DetailItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-3.5 w-3.5 text-slate-400" />}

        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
          {label}
        </p>
      </div>

      <p className="mt-2 break-words text-sm font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   TIMELINE ITEM
============================================================ */

function TimelineItem({ label, date }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
        <CalendarDays className="h-3.5 w-3.5 text-indigo-500" />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
        <span className="text-xs font-bold text-slate-700">{label}</span>

        <span className="shrink-0 text-[10px] font-medium text-slate-400">
          {formatDate(date, true)}
        </span>
      </div>
    </div>
  );
}
