import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FolderKanban,
  GraduationCap,
  BriefcaseBusiness,
  Target,
  Sparkles,
  MessageSquareText,
  BookOpen,
  AlertCircle,
  Loader2,
  LockKeyhole,
  PlayCircle,
  UserCheck,
  Hourglass,
  XCircle,
  LogIn,
} from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ApplyProgramModal from "../components/programs/ApplyProgramModal.jsx";

import { getCourseById } from "../services/courseService.js";
import {
  createEnrollment,
  getMyCourseEnrollmentStatus,
} from "../services/enrollmentService.js";

// =====================================================
// ACCENT STYLES
// =====================================================

const accentStyles = {
  electric: {
    text: "text-electric-500",
    bg: "bg-electric-500/10",
    border: "border-electric-500/20",
    gradient: "from-electric-500/20 via-electric-500/5 to-transparent",
  },

  cyan: {
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
  },

  violet: {
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
  },

  emerald: {
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
  },
};

// =====================================================
// JOURNEY
// =====================================================

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build a strong foundation through structured lessons, guided practice, and mentor support.",
    icon: BookOpen,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn your knowledge into practical projects that demonstrate what you can actually do.",
    icon: Target,
    color: "text-electric-500",
    bg: "bg-electric-500/10",
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Strengthen your resume, portfolio, communication, and interview skills.",
    icon: MessageSquareText,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    number: "04",
    title: "Get Hired",
    description:
      "Move into the job-search phase with structured career guidance and support.",
    icon: BriefcaseBusiness,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

// =====================================================
// DEFAULT CURRICULUM
// =====================================================

const defaultCurriculum = [
  "Core concepts and fundamentals",
  "Hands-on technical training",
  "Real-world project development",
  "Portfolio building",
  "Resume preparation",
  "Interview preparation",
  "Mock interviews and feedback",
  "Career guidance and job preparation",
];

// =====================================================
// HELPERS
// =====================================================

function getAccentFromCategory(category = "") {
  const value = String(category).toLowerCase();

  if (value.includes("data") || value.includes("ai")) {
    return "violet";
  }

  if (value.includes("cloud") || value.includes("devops")) {
    return "cyan";
  }

  if (value.includes("security")) {
    return "emerald";
  }

  return "electric";
}

function getStoredToken() {
  return (
    localStorage.getItem("zenvix_token") ||
    sessionStorage.getItem("zenvix_token") ||
    null
  );
}

function getStoredUser() {
  try {
    const raw =
      localStorage.getItem("zenvix_user") ||
      sessionStorage.getItem("zenvix_user");

    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function normalizeStatus(response) {
  if (!response) return null;

  const data = response?.data || response;

  return (
    data?.status ||
    data?.enrollment?.status ||
    data?.enrollmentStatus ||
    data?.data?.status ||
    null
  );
}

function isApprovedStatus(status = "") {
  return ["approved", "active", "accepted", "granted"].includes(
    String(status).toLowerCase(),
  );
}

function isPendingStatus(status = "") {
  return ["pending", "requested", "processing"].includes(
    String(status).toLowerCase(),
  );
}

function isRejectedStatus(status = "") {
  return ["rejected", "denied"].includes(String(status).toLowerCase());
}

function isRevokedStatus(status = "") {
  return ["revoked", "cancelled", "canceled"].includes(
    String(status).toLowerCase(),
  );
}

// =====================================================
// COMPONENT
// =====================================================

export default function ProgramDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ===================================================
  // COURSE STATE
  // ===================================================

  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ===================================================
  // AUTH / ENROLLMENT STATE
  // ===================================================

  const [currentUser, setCurrentUser] = useState(null);

  const [enrollmentStatus, setEnrollmentStatus] = useState(null);

  const [checkingEnrollment, setCheckingEnrollment] = useState(false);

  const [enrolling, setEnrolling] = useState(false);

  const [enrollmentError, setEnrollmentError] = useState("");

  // ===================================================
  // MODAL
  // ===================================================

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // ===================================================
  // LOAD USER
  // ===================================================

  useEffect(() => {
    setCurrentUser(getStoredUser());
  }, []);

  // ===================================================
  // FETCH COURSE
  // ===================================================

  useEffect(() => {
    let isMounted = true;

    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError("");

        if (!id) {
          throw new Error("Course ID is missing.");
        }

        const response = await getCourseById(id);

        if (!response?.success || !response?.course) {
          throw new Error(response?.message || "Course could not be found.");
        }

        if (isMounted) {
          setCourse(response.course);
        }
      } catch (err) {
        console.error("Fetch Course Error:", err);

        if (isMounted) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Unable to load course.",
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCourse();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // ===================================================
  // CHECK ENROLLMENT STATUS
  // ===================================================

  useEffect(() => {
    let isMounted = true;

    const checkEnrollment = async () => {
      const token = getStoredToken();

      if (!id || !token) {
        setEnrollmentStatus(null);
        return;
      }

      try {
        setCheckingEnrollment(true);
        setEnrollmentError("");

        const response = await getMyCourseEnrollmentStatus(id);

        if (isMounted) {
          setEnrollmentStatus(normalizeStatus(response));
        }
      } catch (err) {
        /*
         * 404 / no enrollment should not break
         * the public course detail page.
         */

        const statusCode = err?.response?.status;

        if (statusCode !== 404 && statusCode !== 400) {
          console.error("Enrollment Status Error:", err);
        }

        if (isMounted) {
          setEnrollmentStatus(null);
        }
      } finally {
        if (isMounted) {
          setCheckingEnrollment(false);
        }
      }
    };

    checkEnrollment();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // ===================================================
  // COURSE DATA
  // ===================================================

  const accent = useMemo(
    () => getAccentFromCategory(course?.category),
    [course?.category],
  );

  const styles = accentStyles[accent];

  const skills = Array.isArray(course?.skills) ? course.skills : [];

  const projects = course?.projects ?? course?.projectCount ?? 0;

  // ===================================================
  // DYNAMIC CURRICULUM
  // ===================================================

  const curriculum = useMemo(() => {
    if (!course) return defaultCurriculum;

    if (Array.isArray(course.curriculum)) {
      const values = course.curriculum
        .map((item) => {
          if (typeof item === "string") {
            return item;
          }

          return (
            item?.title ||
            item?.name ||
            item?.topic ||
            item?.description ||
            null
          );
        })
        .filter(Boolean);

      if (values.length > 0) {
        return values;
      }
    }

    if (Array.isArray(course.modules)) {
      const values = course.modules
        .map((item) => {
          if (typeof item === "string") {
            return item;
          }

          return item?.title || item?.name || item?.topic || null;
        })
        .filter(Boolean);

      if (values.length > 0) {
        return values;
      }
    }

    return defaultCurriculum;
  }, [course]);

  // ===================================================
  // ENROLLMENT ACTION
  // ===================================================

  const handleEnrollment = async () => {
    const token = getStoredToken();

    setEnrollmentError("");

    // -----------------------------------------------
    // NOT LOGGED IN
    // -----------------------------------------------

   if (!token) {
  navigate(
    `/login?redirect=${encodeURIComponent(
      `/enrollment?courseId=${id}`
    )}`
  );
  return;
}

    // -----------------------------------------------
    // ALREADY APPROVED
    // -----------------------------------------------

    if (isApprovedStatus(enrollmentStatus)) {
      navigate(`/learn/${id}`);
      return;
    }

    // -----------------------------------------------
    // ALREADY PENDING
    // -----------------------------------------------

    if (isPendingStatus(enrollmentStatus)) {
      return;
    }

    // -----------------------------------------------
    // CREATE ENROLLMENT
    // -----------------------------------------------

    try {
      setEnrolling(true);

      const response = await createEnrollment({
        courseId: id,
      });

      const newStatus = normalizeStatus(response);

      setEnrollmentStatus(newStatus || "pending");

      /*
       * Open application modal only if backend
       * doesn't return a clear status.
       *
       * The actual enrollment request is already
       * created through the API above.
       */
    } catch (err) {
      console.error("Create Enrollment Error:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Unable to submit enrollment request.";

      /*
       * If backend says already enrolled,
       * refresh current status.
       */

      if (
        err?.response?.status === 409 ||
        message.toLowerCase().includes("already")
      ) {
        try {
          const response = await getMyCourseEnrollmentStatus(id);

          setEnrollmentStatus(normalizeStatus(response));

          return;
        } catch {
          // Ignore refresh failure.
        }
      }

      setEnrollmentError(message);
    } finally {
      setEnrolling(false);
    }
  };

  // ===================================================
  // LOGIN HANDLER
  // ===================================================

  const handleLogin = () => {
    navigate(`/login?redirect=/programs/${id}`);
  };

  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-surface px-4 pt-[140px]">
          <div className="shell flex min-h-[55vh] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-500/10">
                <Loader2 size={24} className="animate-spin text-electric-500" />
              </div>

              <h1 className="mt-5 font-display text-2xl font-semibold text-navy">
                Loading course...
              </h1>

              <p className="mt-2 font-body text-sm text-slate-500">
                Please wait while we load the course details.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // ===================================================
  // ERROR
  // ===================================================

  if (error || !course) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-surface px-4 pt-[140px]">
          <div className="shell py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
              <AlertCircle size={24} className="text-red-500" />
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold text-navy">
              Course not found
            </h1>

            <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-slate-500">
              {error ||
                "The course you're looking for may have been moved or is no longer available."}
            </p>

            <Link to="/programs" className="btn-primary mt-7 inline-flex">
              View All Programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // ===================================================
  // ENROLLMENT UI
  // ===================================================

  const approved = isApprovedStatus(enrollmentStatus);

  const pending = isPendingStatus(enrollmentStatus);

  const rejected = isRejectedStatus(enrollmentStatus);

  const revoked = isRevokedStatus(enrollmentStatus);

  const hasToken = Boolean(getStoredToken());

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden pb-16 pt-[120px] sm:pb-20 sm:pt-[140px]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className={`absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br ${styles.gradient} blur-3xl`}
            />

            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage:
                  "radial-gradient(ellipse 65% 60% at 50% 0%, black 35%, transparent 100%)",
              }}
            />
          </div>

          <div className="shell relative">
            {/* BACK */}

            <Link
              to="/programs"
              className="mb-8 inline-flex items-center gap-2 font-body text-[12px] font-medium text-slate-500 transition-colors hover:text-navy"
            >
              <ArrowLeft size={14} />
              Back to all programs
            </Link>

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                }}
              >
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] ${styles.bg} ${styles.text}`}
                  >
                    Career Program
                  </span>

                  {course.isActive !== false && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-emerald-600">
                      Available
                    </span>
                  )}

                  <span className="rounded-full border border-border bg-white px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-slate-500">
                    Job Ready
                  </span>
                </div>

                <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[58px]">
                  {course.title}
                </h1>

                <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.8] text-slate-600 sm:text-[16px]">
                  {course.description ||
                    "Build practical skills through structured learning, hands-on projects and career preparation."}
                </p>

                {/* =================================================
                    ENROLLMENT ERROR
                ================================================= */}

                {enrollmentError && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-red-500"
                    />

                    <p className="font-body text-[13px] leading-relaxed text-red-600">
                      {enrollmentError}
                    </p>
                  </div>
                )}

                {/* =================================================
                    PRIMARY ACTIONS
                ================================================= */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {approved ? (
                    <button
                      type="button"
                      onClick={() => navigate(`/learn/${id}`)}
                      className="btn-primary group"
                    >
                      <PlayCircle size={17} />
                      Start Learning
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  ) : pending ? (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-5 py-3 font-body text-[13px] font-semibold text-amber-700"
                    >
                      <Hourglass size={16} />
                      Enrollment Pending
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleEnrollment}
                      disabled={enrolling}
                      className="btn-primary group disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {enrolling ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <GraduationCap size={17} />

                          {rejected || revoked
                            ? "Apply Again"
                            : hasToken
                              ? "Enroll Now"
                              : "Login to Enroll"}

                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </>
                      )}
                    </button>
                  )}

                  <a href="#curriculum" className="btn-secondary">
                    Explore Curriculum
                  </a>
                </div>

                {/* =================================================
                    STATUS MESSAGE
                ================================================= */}

                {approved && (
                  <div className="mt-5 flex items-center gap-2 font-body text-[12px] font-medium text-emerald-600">
                    <UserCheck size={15} />
                    You have access to this course.
                  </div>
                )}

                {pending && (
                  <div className="mt-5 flex items-center gap-2 font-body text-[12px] font-medium text-amber-600">
                    <Hourglass size={15} />
                    Your enrollment request is waiting for admin approval.
                  </div>
                )}

                {rejected && (
                  <div className="mt-5 flex items-center gap-2 font-body text-[12px] font-medium text-red-500">
                    <XCircle size={15} />
                    Your previous enrollment request was rejected.
                  </div>
                )}

                {revoked && (
                  <div className="mt-5 flex items-center gap-2 font-body text-[12px] font-medium text-red-500">
                    <LockKeyhole size={15} />
                    Course access was revoked. You can submit a new request.
                  </div>
                )}
              </motion.div>

              {/* RIGHT OVERVIEW */}

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
                transition={{
                  duration: 0.55,
                  delay: 0.12,
                }}
                className="relative"
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lift">
                  <div className={`h-1 bg-gradient-to-r ${styles.gradient}`} />

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">Course overview</span>

                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}
                      >
                        <Sparkles size={17} />
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-xl font-semibold text-navy">
                      {course.title}
                    </h2>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {/* Duration */}

                      <div className="rounded-xl border border-border bg-surface p-4">
                        <Clock3 size={16} className="text-slate-400" />

                        <p className="mt-2 font-mono text-[10px] uppercase text-slate-400">
                          Duration
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {course.duration || "Flexible"}
                        </p>
                      </div>

                      {/* Projects */}

                      <div className="rounded-xl border border-border bg-surface p-4">
                        <FolderKanban size={16} className="text-slate-400" />

                        <p className="mt-2 font-mono text-[10px] uppercase text-slate-400">
                          Projects
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {projects > 0
                            ? `${projects} Projects`
                            : "Practical Projects"}
                        </p>
                      </div>

                      {/* Level */}

                      <div className="rounded-xl border border-border bg-surface p-4">
                        <GraduationCap size={16} className="text-slate-400" />

                        <p className="mt-2 font-mono text-[10px] uppercase text-slate-400">
                          Level
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {course.level || "Beginner"}
                        </p>
                      </div>

                      {/* Language */}

                      <div className="rounded-xl border border-border bg-surface p-4">
                        <BriefcaseBusiness
                          size={16}
                          className="text-slate-400"
                        />

                        <p className="mt-2 font-mono text-[10px] uppercase text-slate-400">
                          Language
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {course.language || "English"}
                        </p>
                      </div>
                    </div>

                    {/* Category */}

                    {course.category && (
                      <div className="mt-5">
                        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          Category
                        </p>

                        <span
                          className={`inline-flex rounded-lg border px-3 py-1.5 font-body text-[11px] font-medium ${styles.bg} ${styles.text} ${styles.border}`}
                        >
                          {course.category}
                        </span>
                      </div>
                    )}

                    {/* Skills */}

                    {skills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {skills.map((skill, index) => (
                          <span
                            key={`${skill}-${index}`}
                            className="rounded-md border border-border bg-white px-2.5 py-1.5 font-mono text-[9.5px] text-slate-500"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* ACCESS STATUS */}

                    {hasToken && (
                      <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                              approved
                                ? "bg-emerald-500/10 text-emerald-600"
                                : pending
                                  ? "bg-amber-500/10 text-amber-600"
                                  : "bg-slate-500/10 text-slate-500"
                            }`}
                          >
                            {approved ? (
                              <UserCheck size={16} />
                            ) : pending ? (
                              <Hourglass size={16} />
                            ) : (
                              <LockKeyhole size={16} />
                            )}
                          </span>

                          <div>
                            <p className="font-body text-[12px] font-semibold text-navy">
                              {approved
                                ? "Course Access Granted"
                                : pending
                                  ? "Approval Pending"
                                  : "Enrollment Required"}
                            </p>

                            <p className="mt-0.5 font-body text-[10.5px] text-slate-500">
                              {approved
                                ? "You can start learning now."
                                : pending
                                  ? "Admin approval is required."
                                  : "Enroll to request access."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {checkingEnrollment && (
                      <div className="mt-4 flex items-center gap-2 font-body text-[11px] text-slate-400">
                        <Loader2 size={13} className="animate-spin" />
                        Checking enrollment status...
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            JOURNEY
        ====================================================== */}

        <section className="border-y border-border bg-white py-20 sm:py-24">
          <div className="shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-3">More than a course</p>

              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Learn. Build. Prepare.
                <span className="block">Move toward your career.</span>
              </h2>

              <p className="mt-4 font-body text-[14px] leading-relaxed text-slate-500">
                Zenvix combines technical learning with practical projects and
                career preparation so your learning journey doesn't stop when
                the course ends.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div
                aria-hidden
                className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-border lg:block"
              />

              {journey.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <motion.div
                    key={stage.number}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="relative z-10 rounded-2xl border border-border bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${stage.bg} ${stage.color}`}
                      >
                        <Icon size={17} />
                      </span>

                      <span className="font-mono text-[10px] tracking-[0.1em] text-slate-300">
                        {stage.number}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                      {stage.title}
                    </h3>

                    <p className="mt-2 font-body text-[12.5px] leading-[1.65] text-slate-500">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CURRICULUM
        ====================================================== */}

        <section id="curriculum" className="shell py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-3">What you'll experience</p>

              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Built around practical career outcomes.
              </h2>

              <p className="mt-4 max-w-lg font-body text-[14px] leading-[1.8] text-slate-500">
                Every part of the program is designed to help you move from
                learning concepts to demonstrating real-world capability.
              </p>

              <div className="mt-7 rounded-2xl border border-border bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}
                  >
                    <Sparkles size={17} />
                  </span>

                  <div>
                    <p className="font-body text-sm font-semibold text-navy">
                      Skills + Projects + Career
                    </p>

                    <p className="mt-0.5 font-body text-[11px] text-slate-500">
                      One continuous learning experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                {curriculum.map((item, index) => (
                  <motion.div
                    key={`${item}-${index}`}
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft"
                  >
                    <CheckCircle2
                      size={17}
                      className={`mt-0.5 shrink-0 ${styles.text}`}
                    />

                    <span className="font-body text-[13px] leading-relaxed text-slate-600">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACCESS / ENROLLMENT INFORMATION
        ====================================================== */}

        <section className="border-y border-border bg-white py-20 sm:py-24">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-3">Course Access</p>

              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Learn securely with approved access.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl font-body text-[14px] leading-[1.8] text-slate-500">
                Your course learning area is protected. Submit an enrollment
                request and wait for the Zenvix admin team to approve your
                access.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
              {[
                {
                  icon: GraduationCap,
                  title: "1. Enroll",
                  description: "Submit your request for this program.",
                },
                {
                  icon: UserCheck,
                  title: "2. Get Approved",
                  description: "The Zenvix team reviews and grants access.",
                },
                {
                  icon: PlayCircle,
                  title: "3. Start Learning",
                  description:
                    "Access your protected lessons and course content.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}
                    >
                      <Icon size={17} />
                    </span>

                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-body text-[12.5px] leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            CAREER SUPPORT
        ====================================================== */}

        <section className="bg-navy py-20 sm:py-24">
          <div className="shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Career Support
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Your journey doesn't
                  <span className="block text-white/60">
                    end with the final lesson.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl font-body text-[14px] leading-[1.8] text-white/60">
                  Prepare for the transition from learner to professional with
                  structured career guidance, portfolio development, interview
                  preparation, and job-search support.
                </p>

                <button
                  type="button"
                  onClick={handleEnrollment}
                  disabled={enrolling || pending || checkingEnrollment}
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-body text-[13px] font-semibold text-navy transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {approved
                    ? "Continue Learning"
                    : pending
                      ? "Approval Pending"
                      : "Start Your Journey"}

                  {approved ? (
                    <PlayCircle size={15} />
                  ) : (
                    <ArrowRight size={15} />
                  )}
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Resume & portfolio preparation",
                  "Interview preparation",
                  "Mock interviews & feedback",
                  "Job-search guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <CheckCircle2 size={17} className="text-emerald-400" />

                    <p className="mt-3 font-body text-[12.5px] font-medium leading-relaxed text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section id="apply" className="shell py-20 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white px-6 py-12 text-center shadow-lift sm:px-12">
            <div
              aria-hidden
              className={`absolute -left-20 -top-20 h-52 w-52 rounded-full ${styles.bg} blur-3xl`}
            />

            <div
              aria-hidden
              className="absolute -bottom-24 -right-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl"
            />

            <div className="relative">
              <span
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl ${styles.bg} ${styles.text}`}
              >
                <GraduationCap size={22} />
              </span>

              <p className="eyebrow mt-5">Ready to take the next step?</p>

              <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Start building the skills your future needs.
              </h2>

              <p className="mx-auto mt-4 max-w-xl font-body text-[14px] leading-relaxed text-slate-500">
                {approved
                  ? `Your access to ${course.title} is ready. Start learning and build your career skills.`
                  : `Enroll in ${course.title} and take the next step toward your career goals.`}
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                {approved ? (
                  <button
                    type="button"
                    onClick={() => navigate(`/learn/${id}`)}
                    className="btn-primary"
                  >
                    Start Learning
                    <PlayCircle size={16} />
                  </button>
                ) : pending ? (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-5 py-3 font-body text-[13px] font-semibold text-amber-700"
                  >
                    <Hourglass size={16} />
                    Enrollment Pending
                  </button>
                ) : hasToken ? (
                  <button
                    type="button"
                    onClick={handleEnrollment}
                    disabled={enrolling}
                    className="btn-primary disabled:opacity-60"
                  >
                    {enrolling ? "Submitting..." : "Enroll Now"}

                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="btn-primary"
                  >
                    <LogIn size={16} />
                    Login to Enroll
                  </button>
                )}

                <Link to="/programs" className="btn-secondary">
                  Explore Other Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          APPLY MODAL
      ===================================================== */}

      <ApplyProgramModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        program={course}
      />

      <Footer />
    </>
  );
}
