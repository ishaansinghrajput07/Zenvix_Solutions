import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  Filter,
  GraduationCap,
  Loader2,
  Mail,
  Phone,
  RefreshCw,
  Search,
  Trash2,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { toast } from "react-hot-toast";

/* ============================================================
   LOCAL STORAGE KEYS
============================================================ */

const STORAGE_KEYS = {
  leads: "zenvixContactLeads",
  courses: "zenvixCourses",
  enrollments: "zenvixEnrollments",
};

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

const getLeadName = (lead) => lead?.name || "Unnamed Lead";

const getLeadEmail = (lead) => lead?.email || "No email";

const getLeadPhone = (lead) => lead?.phone || "No phone";

const getLeadCourse = (lead) =>
  lead?.interestedCourse || "Not specified";

const getLeadService = (lead) => lead?.service || "";

const getLeadStatus = (lead) =>
  String(lead?.status || "New");

const getLeadDate = (lead) => {
  const value =
    lead?.createdAt ||
    lead?.created_at ||
    lead?.date;

  if (!value) {
    return "—";
  }

  try {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "—";
  }
};

/* ============================================================
   LOCAL STORAGE HELPERS
============================================================ */

const readLocalArray = (key) => {
  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error(
      `Unable to read localStorage: ${key}`,
      error,
    );

    return [];
  }
};

const writeLocalArray = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(
      `Unable to write localStorage: ${key}`,
      error,
    );

    return false;
  }
};

const createId = (prefix = "item") => {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${prefix}_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
};

/* ============================================================
   STATUS OPTIONS
============================================================ */

const STATUS_OPTIONS = [
  "New",
  "Contacted",
  "Under Review",
  "Approved",
  "Rejected",
  "Closed",
];

const STATUS_META = {
  New: {
    label: "New",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-100",
    dot: "bg-blue-500",
  },

  Contacted: {
    label: "Contacted",
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-100",
    dot: "bg-violet-500",
  },

  "Under Review": {
    label: "Under Review",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-100",
    dot: "bg-amber-500",
  },

  Approved: {
    label: "Approved",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-100",
    dot: "bg-emerald-500",
  },

  Rejected: {
    label: "Rejected",
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-100",
    dot: "bg-red-500",
  },

  Closed: {
    label: "Closed",
    bg: "bg-slate-100",
    text: "text-slate-600",
    border: "border-slate-200",
    dot: "bg-slate-500",
  },
};

function getStatusMeta(status) {
  return (
    STATUS_META[status] || {
      label: status || "New",
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

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);

  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] =
    useState(false);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedLead, setSelectedLead] =
    useState(null);

  const [deleteLead, setDeleteLead] =
    useState(null);

  const [enrollmentLead, setEnrollmentLead] =
    useState(null);

  const [updatingId, setUpdatingId] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [creatingEnrollment, setCreatingEnrollment] =
    useState(false);

  const [enrollmentForm, setEnrollmentForm] =
    useState({
      courseId: "",
      education: "",
      experience: "",
      message: "",
    });

  /* ==========================================================
     FETCH LEADS FROM CONTACT FORM LOCAL STORAGE
  ========================================================== */

  const fetchLeads = useCallback(
    async (showLoader = true) => {
      try {
        if (showLoader) {
          setLoading(true);
        } else {
          setRefreshing(true);
        }

        setError("");

        /*
         * Contact.jsx saves leads here:
         * zenvixContactLeads
         */

        const storedLeads = readLocalArray(
          STORAGE_KEYS.leads,
        );

        /*
         * Newest leads first
         */

        const sortedLeads = [...storedLeads].sort(
          (a, b) => {
            const dateA = new Date(
              a?.createdAt || 0,
            ).getTime();

            const dateB = new Date(
              b?.createdAt || 0,
            ).getTime();

            return dateB - dateA;
          },
        );

        setLeads(sortedLeads);
      } catch (err) {
        console.error(
          "Admin Leads LocalStorage Error:",
          err,
        );

        setError(
          "Unable to load contact form enquiries.",
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [],
  );

  /* ==========================================================
     FETCH COURSES FROM LOCAL STORAGE
  ========================================================== */

  const fetchCourses = useCallback(async () => {
    try {
      setCoursesLoading(true);

      const storedCourses = readLocalArray(
        STORAGE_KEYS.courses,
      );

      setCourses(storedCourses);
    } catch (err) {
      console.error(
        "Admin Courses LocalStorage Error:",
        err,
      );

      setCourses([]);
    } finally {
      setCoursesLoading(false);
    }
  }, []);

  /* ==========================================================
     INITIAL LOAD
  ========================================================== */

  useEffect(() => {
    fetchLeads();
    fetchCourses();
  }, [fetchLeads, fetchCourses]);

  /* ==========================================================
     CONTACT FORM REAL-TIME UPDATE
  ========================================================== */

  useEffect(() => {
    const handleLeadAdded = () => {
      fetchLeads(false);
    };

    const handleLeadUpdated = () => {
      fetchLeads(false);
    };

    const handleLeadDeleted = () => {
      fetchLeads(false);
    };

    const handleStorage = (event) => {
      if (
        !event.key ||
        event.key === STORAGE_KEYS.leads
      ) {
        fetchLeads(false);
      }
    };

    window.addEventListener(
      "contactLeadAdded",
      handleLeadAdded,
    );

    window.addEventListener(
      "contactLeadUpdated",
      handleLeadUpdated,
    );

    window.addEventListener(
      "contactLeadDeleted",
      handleLeadDeleted,
    );

    window.addEventListener(
      "storage",
      handleStorage,
    );

    return () => {
      window.removeEventListener(
        "contactLeadAdded",
        handleLeadAdded,
      );

      window.removeEventListener(
        "contactLeadUpdated",
        handleLeadUpdated,
      );

      window.removeEventListener(
        "contactLeadDeleted",
        handleLeadDeleted,
      );

      window.removeEventListener(
        "storage",
        handleStorage,
      );
    };
  }, [fetchLeads]);

  /* ==========================================================
     STATISTICS
  ========================================================== */

  const statistics = useMemo(() => {
    const count = (status) =>
      leads.filter(
        (lead) =>
          getLeadStatus(lead).toLowerCase() ===
          status.toLowerCase(),
      ).length;

    return {
      total: leads.length,
      new: count("New"),
      contacted: count("Contacted"),
      underReview: count("Under Review"),
      approved: count("Approved"),
      rejected: count("Rejected"),
      closed: count("Closed"),
    };
  }, [leads]);

  /* ==========================================================
     SEARCH + FILTER
  ========================================================== */

  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();

    return leads.filter((lead) => {
      const status = getLeadStatus(lead);

      const matchesStatus =
        statusFilter === "All" ||
        status.toLowerCase() ===
          statusFilter.toLowerCase();

      if (!matchesStatus) {
        return false;
      }

      if (!query) {
        return true;
      }

      const searchable = [
        getLeadName(lead),
        getLeadEmail(lead),
        getLeadPhone(lead),
        getLeadCourse(lead),
        getLeadService(lead),
        lead?.message,
        lead?.source,
        lead?.adminNote,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [leads, search, statusFilter]);

  /* ==========================================================
     OPEN ENROLLMENT FORM
  ========================================================== */

  const openEnrollmentForm = (lead) => {
    if (!lead) {
      return;
    }

    if (getLeadStatus(lead) !== "Approved") {
      toast.error(
        "Only approved leads can be enrolled.",
      );
      return;
    }

    const leadCourse = getLeadCourse(lead);

    const exactCourse = courses.find((course) => {
      const title = String(course?.title || "")
        .trim()
        .toLowerCase();

      const slug = String(course?.slug || "")
        .trim()
        .toLowerCase();

      const interested = String(
        leadCourse || "",
      )
        .trim()
        .toLowerCase();

      return (
        title === interested ||
        slug === interested
      );
    });

    setEnrollmentLead(lead);

    setEnrollmentForm({
      courseId: exactCourse
        ? getId(exactCourse)
        : "",
      education: "",
      experience: "",
      message: lead?.message || "",
    });
  };

  /* ==========================================================
     CLOSE ENROLLMENT FORM
  ========================================================== */

  const closeEnrollmentForm = () => {
    if (creatingEnrollment) {
      return;
    }

    setEnrollmentLead(null);

    setEnrollmentForm({
      courseId: "",
      education: "",
      experience: "",
      message: "",
    });
  };

  /* ==========================================================
     ENROLLMENT FORM CHANGE
  ========================================================== */

  const handleEnrollmentChange = (event) => {
    const { name, value } = event.target;

    setEnrollmentForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ==========================================================
     CREATE ENROLLMENT LOCAL STORAGE
  ========================================================== */

  const handleCreateEnrollment = async (event) => {
    event.preventDefault();

    if (!enrollmentLead) {
      return;
    }

    if (!enrollmentForm.courseId) {
      toast.error("Please select a course.");
      return;
    }

    try {
      setCreatingEnrollment(true);

      const selectedCourse = courses.find(
        (course) =>
          getId(course) ===
          enrollmentForm.courseId,
      );

      const enrollment = {
        id: createId("enrollment"),

        leadId: getId(enrollmentLead),

        studentName: getLeadName(
          enrollmentLead,
        ),

        studentEmail: getLeadEmail(
          enrollmentLead,
        ),

        studentPhone: getLeadPhone(
          enrollmentLead,
        ),

        courseId:
          enrollmentForm.courseId,

        courseTitle:
          selectedCourse?.title ||
          getLeadCourse(enrollmentLead),

        education:
          enrollmentForm.education.trim(),

        experience:
          enrollmentForm.experience.trim(),

        message:
          enrollmentForm.message.trim(),

        status: "Pending",

        source: "Lead Management",

        createdAt:
          new Date().toISOString(),

        updatedAt:
          new Date().toISOString(),
      };

      const existingEnrollments =
        readLocalArray(
          STORAGE_KEYS.enrollments,
        );

      const updatedEnrollments = [
        enrollment,
        ...existingEnrollments,
      ];

      const saved = writeLocalArray(
        STORAGE_KEYS.enrollments,
        updatedEnrollments,
      );

      if (!saved) {
        throw new Error(
          "Unable to save enrollment.",
        );
      }

      /*
       * Mark lead as enrolled
       * without changing existing UI flow.
       */

      const leadId = getId(
        enrollmentLead,
      );

      const updatedLeads = leads.map(
        (lead) =>
          getId(lead) === leadId
            ? {
                ...lead,
                enrollmentId:
                  enrollment.id,
                updatedAt:
                  new Date().toISOString(),
              }
            : lead,
      );

      writeLocalArray(
        STORAGE_KEYS.leads,
        updatedLeads,
      );

      setLeads(updatedLeads);

      window.dispatchEvent(
        new Event("enrollmentUpdated"),
      );

      window.dispatchEvent(
        new Event("contactLeadUpdated"),
      );

      toast.success(
        "Enrollment created successfully.",
      );

      closeEnrollmentForm();
    } catch (err) {
      console.error(
        "Create Enrollment Error:",
        err,
      );

      toast.error(
        "Unable to create enrollment.",
      );
    } finally {
      setCreatingEnrollment(false);
    }
  };

  /* ==========================================================
     UPDATE STATUS - LOCAL STORAGE
  ========================================================== */

  const handleStatusChange = async (
    lead,
    newStatus,
  ) => {
    const leadId = getId(lead);

    if (!leadId || !newStatus) {
      return;
    }

    const previousStatus =
      getLeadStatus(lead);

    try {
      setUpdatingId(leadId);

      const updatedLead = {
        ...lead,
        status: newStatus,
        updatedAt:
          new Date().toISOString(),
      };

      const updatedLeads = leads.map(
        (item) =>
          getId(item) === leadId
            ? updatedLead
            : item,
      );

      const saved = writeLocalArray(
        STORAGE_KEYS.leads,
        updatedLeads,
      );

      if (!saved) {
        throw new Error(
          "Unable to save lead status.",
        );
      }

      setLeads(updatedLeads);

      setSelectedLead((previous) =>
        previous &&
        getId(previous) === leadId
          ? updatedLead
          : previous,
      );

      window.dispatchEvent(
        new Event("contactLeadUpdated"),
      );

      toast.success(
        `Lead moved to ${newStatus}`,
      );

      /*
       * APPROVED -> OPEN ENROLLMENT FORM
       */

      if (
        newStatus === "Approved" &&
        previousStatus !== "Approved"
      ) {
        setTimeout(() => {
          openEnrollmentForm(updatedLead);
        }, 150);
      }
    } catch (err) {
      console.error(
        "Status Update Error:",
        err,
      );

      toast.error(
        "Unable to update lead status.",
      );
    } finally {
      setUpdatingId("");
    }
  };

  /* ==========================================================
     DELETE LEAD - LOCAL STORAGE
  ========================================================== */

  const handleDelete = async () => {
    if (!deleteLead) {
      return;
    }

    const leadId = getId(deleteLead);

    if (!leadId) {
      toast.error("Lead ID not found.");
      return;
    }

    try {
      setDeleting(true);

      const updatedLeads = leads.filter(
        (item) =>
          getId(item) !== leadId,
      );

      const saved = writeLocalArray(
        STORAGE_KEYS.leads,
        updatedLeads,
      );

      if (!saved) {
        throw new Error(
          "Unable to delete lead.",
        );
      }

      setLeads(updatedLeads);

      setDeleteLead(null);

      if (
        selectedLead &&
        getId(selectedLead) === leadId
      ) {
        setSelectedLead(null);
      }

      window.dispatchEvent(
        new Event("contactLeadDeleted"),
      );

      toast.success(
        "Lead deleted successfully.",
      );
    } catch (err) {
      console.error(
        "Delete Lead Error:",
        err,
      );

      toast.error(
        "Unable to delete lead.",
      );
    } finally {
      setDeleting(false);
    }
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
            {Array.from({ length: 4 }).map(
              (_, index) => (
                <div
                  key={index}
                  className="h-32 animate-pulse rounded-2xl bg-white shadow-sm"
                />
              ),
            )}
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
              Unable to load leads
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {error}
            </p>

            <button
              onClick={() => fetchLeads()}
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
      {/* ====================================================
          HEADER
      ==================================================== */}

      <div className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5">
                <Users className="h-3.5 w-3.5 text-indigo-600" />

                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-700">
                  Lead Management
                </span>
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Manage your leads
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                View, review and convert enquiries into
                course enrollments.
              </p>
            </div>

            <button
              onClick={() => fetchLeads(false)}
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  refreshing
                    ? "animate-spin"
                    : ""
                }`}
              />

              Refresh Leads
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
        {/* ====================================================
            STATS
        ==================================================== */}

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <LeadStat
            icon={Users}
            label="Total Leads"
            value={statistics.total}
            description="All enquiries"
            iconClass="bg-indigo-50 text-indigo-600"
            valueClass="text-indigo-700"
          />

          <LeadStat
            icon={Clock3}
            label="New Leads"
            value={statistics.new}
            description="New enquiries"
            iconClass="bg-blue-50 text-blue-600"
            valueClass="text-blue-700"
          />

          <LeadStat
            icon={UserCheck}
            label="Under Review"
            value={statistics.underReview}
            description="Currently reviewing"
            iconClass="bg-amber-50 text-amber-600"
            valueClass="text-amber-700"
          />

          <LeadStat
            icon={CheckCircle2}
            label="Approved"
            value={statistics.approved}
            description="Ready for enrollment"
            iconClass="bg-emerald-50 text-emerald-600"
            valueClass="text-emerald-700"
          />
        </section>

        {/* ====================================================
            PIPELINE
        ==================================================== */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-black text-slate-950">
                  Lead Pipeline
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Current distribution of enquiries
                </p>
              </div>

              <Filter className="h-5 w-5 text-slate-300" />
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-3 xl:grid-cols-6 xl:divide-y-0">
            {STATUS_OPTIONS.map((status) => {
              const meta =
                getStatusMeta(status);

              const count =
                status === "New"
                  ? statistics.new
                  : status === "Contacted"
                    ? statistics.contacted
                    : status ===
                        "Under Review"
                      ? statistics.underReview
                      : status ===
                          "Approved"
                        ? statistics.approved
                        : status ===
                            "Rejected"
                          ? statistics.rejected
                          : statistics.closed;

              return (
                <button
                  key={status}
                  onClick={() =>
                    setStatusFilter(
                      statusFilter === status
                        ? "All"
                        : status,
                    )
                  }
                  className={`group p-4 text-left transition hover:bg-slate-50 ${
                    statusFilter === status
                      ? "bg-slate-50"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${meta.dot}`}
                    />

                    <span className="truncate text-[10px] font-bold text-slate-500">
                      {status}
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-2xl font-black ${meta.text}`}
                  >
                    {count}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* ====================================================
            LEADS TABLE
        ==================================================== */}

        <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* TOOLBAR */}

          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-950">
                All Leads
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Showing {filteredLeads.length} of{" "}
                {leads.length} leads
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value,
                    )
                  }
                  placeholder="Search leads..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:w-64"
                />
              </div>

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(
                      event.target.value,
                    )
                  }
                  className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:w-44"
                >
                  <option value="All">
                    All Status
                  </option>

                  {STATUS_OPTIONS.map(
                    (status) => (
                      <option
                        key={status}
                        value={status}
                      >
                        {status}
                      </option>
                    ),
                  )}
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[1150px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70">
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Lead
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Interested Course
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Status
                  </th>

                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Created
                  </th>

                  <th className="px-6 py-4 text-right text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map(
                  (lead, index) => {
                    const id = getId(lead);
                    const name =
                      getLeadName(lead);
                    const email =
                      getLeadEmail(lead);
                    const phone =
                      getLeadPhone(lead);
                    const status =
                      getLeadStatus(lead);
                    const meta =
                      getStatusMeta(status);

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
                          delay: Math.min(
                            index * 0.02,
                            0.3,
                          ),
                        }}
                        className="group transition hover:bg-indigo-50/30"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white shadow-sm">
                              {name
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-black text-slate-900">
                                {name}
                              </p>

                              <p className="mt-0.5 text-[10px] text-slate-400">
                                Lead #
                                {String(
                                  id,
                                ).slice(-6)}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <Mail className="h-3.5 w-3.5 text-slate-400" />

                              <span className="max-w-[190px] truncate text-xs font-medium text-slate-600">
                                {email}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Phone className="h-3.5 w-3.5 text-slate-400" />

                              <span className="text-xs font-medium text-slate-600">
                                {phone}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <p className="max-w-[190px] truncate text-xs font-semibold text-slate-700">
                            {getLeadCourse(
                              lead,
                            )}
                          </p>

                          {getLeadService(
                            lead,
                          ) && (
                            <p className="mt-1 max-w-[190px] truncate text-[10px] text-slate-400">
                              {getLeadService(
                                lead,
                              )}
                            </p>
                          )}
                        </td>

                        <td className="px-6 py-5">
                          <div className="relative inline-block">
                            <select
                              value={
                                STATUS_OPTIONS.includes(
                                  status,
                                )
                                  ? status
                                  : "New"
                              }
                              disabled={
                                updatingId ===
                                id
                              }
                              onChange={(
                                event,
                              ) =>
                                handleStatusChange(
                                  lead,
                                  event
                                    .target
                                    .value,
                                )
                              }
                              className={`h-9 appearance-none rounded-full border pl-3 pr-8 text-[10px] font-black outline-none transition ${meta.bg} ${meta.text} ${meta.border}`}
                            >
                              {STATUS_OPTIONS.map(
                                (option) => (
                                  <option
                                    key={
                                      option
                                    }
                                    value={
                                      option
                                    }
                                  >
                                    {option}
                                  </option>
                                ),
                              )}
                            </select>

                            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3 w-3 -translate-y-1/2 opacity-60" />

                            {updatingId ===
                              id && (
                              <Loader2 className="absolute -right-6 top-1/2 h-3.5 w-3.5 -translate-y-1/2 animate-spin text-indigo-500" />
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <span className="text-xs font-medium text-slate-500">
                            {getLeadDate(
                              lead,
                            )}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex justify-end gap-2">
                            {status ===
                              "Approved" && (
                              <button
                                onClick={() =>
                                  openEnrollmentForm(
                                    lead,
                                  )
                                }
                                className="flex h-9 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 text-[10px] font-black text-white transition hover:bg-emerald-700"
                                title="Create enrollment"
                              >
                                <GraduationCap className="h-4 w-4" />
                                Enroll
                              </button>
                            )}

                            <button
                              onClick={() =>
                                setSelectedLead(
                                  lead,
                                )
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                              title="View lead"
                            >
                              <Eye className="h-4 w-4" />
                            </button>

                            <button
                              onClick={() =>
                                setDeleteLead(
                                  lead,
                                )
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                              title="Delete lead"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </div>

          {/* MOBILE */}

          <div className="divide-y divide-slate-100 lg:hidden">
            {filteredLeads.map(
              (lead, index) => {
                const id = getId(lead);
                const name =
                  getLeadName(lead);
                const status =
                  getLeadStatus(lead);
                const meta =
                  getStatusMeta(status);

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
                          {name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-black text-slate-900">
                            {name}
                          </h3>

                          <p className="mt-1 truncate text-xs text-slate-400">
                            {getLeadEmail(
                              lead,
                            )}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-black ${meta.bg} ${meta.text} ${meta.border}`}
                      >
                        {status}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                          Phone
                        </p>

                        <p className="mt-1 truncate text-xs font-semibold text-slate-700">
                          {getLeadPhone(
                            lead,
                          )}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                          Created
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-700">
                          {getLeadDate(
                            lead,
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-xl bg-indigo-50/60 p-3">
                      <p className="text-[9px] font-black uppercase tracking-wider text-indigo-400">
                        Interested Course
                      </p>

                      <p className="mt-1 truncate text-xs font-bold text-indigo-800">
                        {getLeadCourse(
                          lead,
                        )}
                      </p>
                    </div>

                    <div className="mt-4 flex gap-2">
                      {status ===
                        "Approved" && (
                        <button
                          onClick={() =>
                            openEnrollmentForm(
                              lead,
                            )
                          }
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-black text-white transition hover:bg-emerald-700"
                        >
                          <GraduationCap className="h-4 w-4" />
                          Enrollment
                        </button>
                      )}

                      <button
                        onClick={() =>
                          setSelectedLead(
                            lead,
                          )
                        }
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </button>

                      <button
                        onClick={() =>
                          setDeleteLead(
                            lead,
                          )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 text-red-500 transition hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>

          {/* EMPTY */}

          {filteredLeads.length === 0 && (
            <div className="px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                <Users className="h-7 w-7 text-indigo-500" />
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-900">
                No leads found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
                {search ||
                statusFilter !==
                  "All"
                  ? "Try changing your search or filter."
                  : "New enquiries will appear here automatically."}
              </p>

              {(search ||
                statusFilter !==
                  "All") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("All");
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
          VIEW LEAD MODAL
      ====================================================== */}

      {selectedLead && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            onClick={() =>
              setSelectedLead(null)
            }
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
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 px-6 py-7 text-white sm:px-8">
              <button
                onClick={() =>
                  setSelectedLead(null)
                }
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-xl font-black backdrop-blur">
                  {getLeadName(
                    selectedLead,
                  )
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Lead Details
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    {getLeadName(
                      selectedLead,
                    )}
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <DetailItem
                  icon={Mail}
                  label="Email"
                  value={getLeadEmail(
                    selectedLead,
                  )}
                />

                <DetailItem
                  icon={Phone}
                  label="Phone"
                  value={getLeadPhone(
                    selectedLead,
                  )}
                />

                <DetailItem
                  label="Interested Course"
                  value={getLeadCourse(
                    selectedLead,
                  )}
                />

                <DetailItem
                  label="Service"
                  value={
                    getLeadService(
                      selectedLead,
                    ) ||
                    "Not specified"
                  }
                />

                <DetailItem
                  label="Source"
                  value={
                    selectedLead?.source ||
                    "Website"
                  }
                />

                <DetailItem
                  label="Status"
                  value={getLeadStatus(
                    selectedLead,
                  )}
                />

                <DetailItem
                  label="Created"
                  value={getLeadDate(
                    selectedLead,
                  )}
                />
              </div>

              {selectedLead?.message && (
                <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                    Message
                  </p>

                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-700">
                    {selectedLead.message}
                  </p>
                </div>
              )}

              {selectedLead?.adminNote && (
                <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-indigo-400">
                    Admin Note
                  </p>

                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-indigo-900">
                    {selectedLead.adminNote}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={() =>
                    setSelectedLead(null)
                  }
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>

                {getLeadStatus(
                  selectedLead,
                ) === "Approved" && (
                  <button
                    onClick={() => {
                      setSelectedLead(
                        null,
                      );
                      openEnrollmentForm(
                        selectedLead,
                      );
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-700"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Open Enrollment
                  </button>
                )}

                {getLeadPhone(
                  selectedLead,
                ) !== "No phone" && (
                  <a
                    href={`tel:${getLeadPhone(
                      selectedLead,
                    )}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700"
                  >
                    Call Lead
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* ======================================================
          ENROLLMENT FORM MODAL
      ====================================================== */}

      {enrollmentLead && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={
              closeEnrollmentForm
            }
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
          >
            {/* HEADER */}

            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 px-6 py-7 text-white sm:px-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

              <button
                type="button"
                onClick={
                  closeEnrollmentForm
                }
                disabled={
                  creatingEnrollment
                }
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white/20 disabled:opacity-50"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <GraduationCap className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Approved Lead
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Create Enrollment
                  </h2>

                  <p className="mt-1 text-sm text-white/70">
                    Convert this approved
                    lead into an enrollment
                    request.
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}

            <form
              onSubmit={
                handleCreateEnrollment
              }
              className="p-6 sm:p-8"
            >
              {/* LEAD SUMMARY */}

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-500">
                      Student / Lead
                    </p>

                    <h3 className="mt-1 truncate text-lg font-black text-slate-900">
                      {getLeadName(
                        enrollmentLead,
                      )}
                    </h3>

                    <p className="mt-1 truncate text-xs font-medium text-slate-500">
                      {getLeadEmail(
                        enrollmentLead,
                      )}
                    </p>
                  </div>

                  <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                    <p className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-xs font-bold text-slate-800">
                      {getLeadPhone(
                        enrollmentLead,
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* COURSE */}

              <div className="mt-6">
                <label className="text-xs font-black text-slate-700">
                  Course
                  <span className="ml-1 text-red-500">
                    *
                  </span>
                </label>

                <div className="relative mt-2">
                  <select
                    name="courseId"
                    value={
                      enrollmentForm.courseId
                    }
                    onChange={
                      handleEnrollmentChange
                    }
                    required
                    disabled={
                      coursesLoading ||
                      creatingEnrollment
                    }
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm font-semibold text-slate-800 outline-none transition focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <option value="">
                      {coursesLoading
                        ? "Loading courses..."
                        : "Select course"}
                    </option>

                    {courses
                      .filter(
                        (course) =>
                          course?.isActive !==
                          false,
                      )
                      .map((course) => (
                        <option
                          key={getId(
                            course,
                          )}
                          value={getId(
                            course,
                          )}
                        >
                          {course?.title ||
                            "Untitled Course"}
                        </option>
                      ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>

                {courses.length ===
                  0 &&
                  !coursesLoading && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      No active courses
                      available. Please
                      create/activate a
                      course first.
                    </p>
                  )}
              </div>

              {/* EDUCATION + EXPERIENCE */}

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-black text-slate-700">
                    Education
                  </label>

                  <input
                    type="text"
                    name="education"
                    value={
                      enrollmentForm.education
                    }
                    onChange={
                      handleEnrollmentChange
                    }
                    placeholder="e.g. B.Tech CSE"
                    disabled={
                      creatingEnrollment
                    }
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-slate-700">
                    Experience
                  </label>

                  <input
                    type="text"
                    name="experience"
                    value={
                      enrollmentForm.experience
                    }
                    onChange={
                      handleEnrollmentChange
                    }
                    placeholder="e.g. Fresher / 1 year"
                    disabled={
                      creatingEnrollment
                    }
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <label className="text-xs font-black text-slate-700">
                  Enrollment Message
                </label>

                <textarea
                  name="message"
                  value={
                    enrollmentForm.message
                  }
                  onChange={
                    handleEnrollmentChange
                  }
                  rows={4}
                  placeholder="Add enrollment notes..."
                  disabled={
                    creatingEnrollment
                  }
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 disabled:opacity-60"
                />
              </div>

              {/* INFO */}

              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <div className="flex gap-3">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />

                  <p className="text-xs leading-6 text-blue-800">
                    Creating this record
                    will create a{" "}
                    <strong>
                      Pending
                    </strong>{" "}
                    enrollment request.
                    Course access will not
                    be granted until an
                    admin approves the
                    enrollment from the
                    Enrollment Management
                    section.
                  </p>
                </div>
              </div>

              {/* ACTIONS */}

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={
                    closeEnrollmentForm
                  }
                  disabled={
                    creatingEnrollment
                  }
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={
                    creatingEnrollment ||
                    coursesLoading ||
                    !enrollmentForm.courseId
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {creatingEnrollment ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating
                      Enrollment...
                    </>
                  ) : (
                    <>
                      <GraduationCap className="h-4 w-4" />
                      Create Enrollment
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* ======================================================
          DELETE MODAL
      ====================================================== */}

      {deleteLead && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() =>
              !deleting &&
              setDeleteLead(null)
            }
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative w-full max-w-md rounded-[2rem] bg-white p-7 shadow-2xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
              <Trash2 className="h-6 w-6 text-red-500" />
            </div>

            <div className="mt-5 text-center">
              <h2 className="text-xl font-black text-slate-950">
                Delete this lead?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                You are about to permanently
                delete{" "}
                <strong className="text-slate-700">
                  {getLeadName(
                    deleteLead,
                  )}
                </strong>
                . This action cannot be
                undone.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                disabled={deleting}
                onClick={() =>
                  setDeleteLead(null)
                }
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                disabled={deleting}
                onClick={handleDelete}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600 disabled:opacity-60"
              >
                {deleting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Deleting
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function LeadStat({
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
   DETAIL ITEM
============================================================ */

function DetailItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon className="h-3.5 w-3.5 text-slate-400" />
        )}

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