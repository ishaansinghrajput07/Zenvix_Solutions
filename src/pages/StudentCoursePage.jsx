import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  FolderKanban,
  GraduationCap,
  LockKeyhole,
  Loader2,
  PlayCircle,
  Sparkles,
  Target,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import {
  getMyCourses,
} from "../services/courseService.js";

import {
  getMyCourseEnrollmentStatus,
} from "../services/enrollmentService.js";

// =====================================================
// HELPERS
// =====================================================

const getCourseId = (course) => {
  return (
    course?._id ||
    course?.id ||
    course?.courseId ||
    course?.course?._id ||
    course?.course?.id ||
    null
  );
};

const getCourseObject = (item) => {
  if (!item) return null;

  return item.course || item.courseDetails || item;
};

const normalizeCoursesResponse = (response) => {
  if (!response) return [];

  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response.courses)) {
    return response.courses;
  }

  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (Array.isArray(response.enrollments)) {
    return response.enrollments;
  }

  if (Array.isArray(response.results)) {
    return response.results;
  }

  return [];
};

const getStatusValue = (response) => {
  if (!response) return "";

  return (
    response.status ||
    response.enrollmentStatus ||
    response.enrollment?.status ||
    response.data?.status ||
    response.data?.enrollmentStatus ||
    ""
  );
};

const normalizeStatus = (status) => {
  return String(status || "").trim().toLowerCase();
};

// =====================================================
// ACCENT
// =====================================================

const accentStyles = {
  electric: {
    text: "text-electric-500",
    bg: "bg-electric-500/10",
    border: "border-electric-500/20",
    gradient:
      "from-electric-500/20 via-electric-500/5 to-transparent",
  },

  cyan: {
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    gradient:
      "from-cyan-500/20 via-cyan-500/5 to-transparent",
  },

  violet: {
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    gradient:
      "from-violet-500/20 via-violet-500/5 to-transparent",
  },

  emerald: {
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    gradient:
      "from-emerald-500/20 via-emerald-500/5 to-transparent",
  },
};

const getAccentFromCategory = (category = "") => {
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
};

// =====================================================
// STATUS CONFIG
// =====================================================

const getEnrollmentState = (status) => {
  const normalized = normalizeStatus(status);

  if (
    [
      "approved",
      "active",
      "enrolled",
      "accepted",
      "completed",
    ].includes(normalized)
  ) {
    return {
      type: "active",
      label: "Course Access Active",
      description:
        "You have access to this course. Continue your learning journey.",
    };
  }

  if (
    [
      "pending",
      "requested",
      "submitted",
      "under review",
      "under_review",
    ].includes(normalized)
  ) {
    return {
      type: "pending",
      label: "Enrollment Under Review",
      description:
        "Your enrollment request has been received and is currently being reviewed.",
    };
  }

  if (
    [
      "rejected",
      "declined",
      "cancelled",
      "canceled",
    ].includes(normalized)
  ) {
    return {
      type: "rejected",
      label: "Enrollment Not Approved",
      description:
        "Your enrollment request is not currently approved. Please contact the Zenvix team.",
    };
  }

  if (
    [
      "revoked",
      "blocked",
      "suspended",
    ].includes(normalized)
  ) {
    return {
      type: "locked",
      label: "Course Access Restricted",
      description:
        "Your access to this course is currently restricted.",
    };
  }

  return {
    type: "unknown",
    label: "Course Status",
    description:
      "We could not determine the current enrollment status.",
  };
};

// =====================================================
// COMPONENT
// =====================================================

export default function StudentCoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState("");

  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(true);

  const [error, setError] = useState("");
  const [statusError, setStatusError] = useState("");

  // =====================================================
  // FETCH STUDENT COURSE
  // =====================================================

  useEffect(() => {
    let mounted = true;

    const loadCourse = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getMyCourses();

        const courses = normalizeCoursesResponse(response);

        const matchedItem = courses.find((item) => {
          const actualCourse = getCourseObject(item);
          const courseId = getCourseId(actualCourse);

          return String(courseId) === String(id);
        });

        if (!matchedItem) {
          if (mounted) {
            setCourse(null);
            setError(
              "This course is not available in your enrolled courses."
            );
          }

          return;
        }

        const actualCourse = getCourseObject(matchedItem);

        if (mounted) {
          setCourse(actualCourse);
        }
      } catch (err) {
        console.error("Student Course Error:", err);

        if (mounted) {
          setError(
            err?.response?.data?.message ||
              err?.message ||
              "Unable to load your course."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    if (id) {
      loadCourse();
    } else {
      setLoading(false);
      setError("Course ID is missing.");
    }

    return () => {
      mounted = false;
    };
  }, [id]);

  // =====================================================
  // FETCH ENROLLMENT STATUS
  // =====================================================

  useEffect(() => {
    let mounted = true;

    const loadStatus = async () => {
      if (!id) return;

      try {
        setStatusLoading(true);
        setStatusError("");

        const response =
          await getMyCourseEnrollmentStatus(id);

        const status = getStatusValue(response);

        if (mounted) {
          setEnrollmentStatus(status);
        }
      } catch (err) {
        console.error(
          "Enrollment Status Error:",
          err
        );

        if (mounted) {
          setStatusError(
            err?.response?.data?.message ||
              err?.message ||
              "Unable to determine enrollment status."
          );
        }
      } finally {
        if (mounted) {
          setStatusLoading(false);
        }
      }
    };

    loadStatus();

    return () => {
      mounted = false;
    };
  }, [id]);

  // =====================================================
  // DERIVED DATA
  // =====================================================

  const accent = useMemo(
    () =>
      getAccentFromCategory(
        course?.category || course?.type || ""
      ),
    [course]
  );

  const styles = accentStyles[accent];

  const enrollmentState = useMemo(
    () => getEnrollmentState(enrollmentStatus),
    [enrollmentStatus]
  );

  const skills = Array.isArray(course?.skills)
    ? course.skills
    : [];

  const projects =
    course?.projects ||
    course?.projectCount ||
    0;

  const duration =
    course?.duration || "Flexible";

  const level =
    course?.level || "Beginner";

  const language =
    course?.language || "English";

  const progress =
    Number(
      course?.progress ??
        course?.completionPercentage ??
        course?.completedPercentage ??
        0
    ) || 0;

  const safeProgress = Math.min(
    100,
    Math.max(0, progress)
  );

  const courseId =
    getCourseId(course) || id;

  const hasAccess =
    enrollmentState.type === "active";

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-surface px-4 pt-[120px]">
          <div className="shell flex min-h-[65vh] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-500/10">
                <Loader2
                  size={24}
                  className="animate-spin text-electric-500"
                />
              </div>

              <h1 className="mt-5 font-display text-2xl font-semibold text-navy">
                Loading your course...
              </h1>

              <p className="mt-2 font-body text-sm text-slate-500">
                Please wait while we prepare your course dashboard.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error || !course) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-surface px-4 pt-[120px]">
          <div className="shell py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
              <AlertCircle
                size={24}
                className="text-red-500"
              />
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold text-navy">
              Course unavailable
            </h1>

            <p className="mx-auto mt-3 max-w-lg font-body text-sm leading-relaxed text-slate-500">
              {error ||
                "We could not find this course in your account."}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="btn-primary"
              >
                Back to Dashboard
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/programs"
                className="btn-secondary"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden pt-[120px] pb-12 sm:pt-[140px] sm:pb-16">

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div
              className={`absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br ${styles.gradient} blur-3xl`}
            />

            <div
              className="absolute inset-0 opacity-[0.2]"
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
              to="/dashboard"
              className="mb-8 inline-flex items-center gap-2 font-body text-[12px] font-medium text-slate-500 transition-colors hover:text-navy"
            >
              <ArrowLeft size={14} />
              Back to dashboard
            </Link>

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
                duration: 0.5,
              }}
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">

                <span
                  className={`rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.1em] uppercase ${styles.bg} ${styles.text}`}
                >
                  My Course
                </span>

                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 font-mono text-[9px] tracking-[0.1em] text-emerald-600 uppercase">
                  <ShieldCheck size={11} />

                  {hasAccess
                    ? "Access Active"
                    : "Enrollment Status"}
                </span>

              </div>

              <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px]">

                {/* LEFT */}

                <div>
                  <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[56px]">
                    {course.title}
                  </h1>

                  <p className="mt-5 max-w-3xl font-body text-[15px] leading-[1.8] text-slate-600 sm:text-[16px]">
                    {course.description ||
                      "Continue learning, build practical skills, and move closer to your career goals with Zenvix."}
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                    {hasAccess ? (
                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/learn/${courseId}`
                          )
                        }
                        className="btn-primary group"
                      >
                        <PlayCircle size={17} />

                        Continue Learning

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 font-body text-[13px] font-semibold text-slate-400">
                        <LockKeyhole size={16} />

                        Course Access Locked
                      </div>
                    )}

                    <a
                      href="#course-overview"
                      className="btn-secondary"
                    >
                      Course Overview
                    </a>

                  </div>
                </div>

                {/* STATUS CARD */}

                <div className="rounded-2xl border border-border bg-white p-5 shadow-lift">

                  <div className="flex items-center justify-between">

                    <span className="eyebrow">
                      Enrollment
                    </span>

                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}
                    >
                      <GraduationCap size={18} />
                    </span>

                  </div>

                  {statusLoading ? (
                    <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                      <Loader2
                        size={15}
                        className="animate-spin"
                      />
                      Checking status...
                    </div>
                  ) : (
                    <>
                      <h2 className="mt-4 font-display text-lg font-semibold text-navy">
                        {enrollmentState.label}
                      </h2>

                      <p className="mt-2 font-body text-[12px] leading-[1.65] text-slate-500">
                        {enrollmentState.description}
                      </p>
                    </>
                  )}

                  {statusError && (
                    <p className="mt-3 text-[11px] text-red-500">
                      {statusError}
                    </p>
                  )}

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            COURSE OVERVIEW
        ================================================= */}

        <section
          id="course-overview"
          className="border-y border-border bg-white py-16 sm:py-20"
        >
          <div className="shell">

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

              {/* MAIN */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <p className="eyebrow mb-3">
                  Your learning journey
                </p>

                <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                  Everything you need to move forward.
                </h2>

                <p className="mt-4 max-w-2xl font-body text-[14px] leading-[1.8] text-slate-500">
                  Build practical knowledge, complete projects,
                  strengthen your portfolio, and prepare for
                  your career with a structured learning experience.
                </p>

                {/* PROGRESS */}

                <div className="mt-8 rounded-2xl border border-border bg-surface p-5">

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p className="font-body text-sm font-semibold text-navy">
                        Course Progress
                      </p>

                      <p className="mt-1 font-body text-[11px] text-slate-500">
                        Keep learning consistently to complete your program.
                      </p>
                    </div>

                    <span className="font-mono text-sm font-semibold text-navy">
                      {safeProgress}%
                    </span>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${safeProgress}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full ${styles.text.replace(
                        "text-",
                        "bg-"
                      )}`}
                    />

                  </div>

                  <div className="mt-3 flex items-center justify-between">

                    <span className="font-body text-[10px] text-slate-400">
                      Started
                    </span>

                    <span className="font-body text-[10px] text-slate-400">
                      Completion
                    </span>

                  </div>

                </div>

              </motion.div>

              {/* STATS */}

              <div className="grid grid-cols-2 gap-3 self-start">

                <div className="rounded-2xl border border-border bg-surface p-5">

                  <Clock3
                    size={17}
                    className="text-slate-400"
                  />

                  <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-slate-400 uppercase">
                    Duration
                  </p>

                  <p className="mt-1 font-body text-sm font-semibold text-navy">
                    {duration}
                  </p>

                </div>

                <div className="rounded-2xl border border-border bg-surface p-5">

                  <FolderKanban
                    size={17}
                    className="text-slate-400"
                  />

                  <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-slate-400 uppercase">
                    Projects
                  </p>

                  <p className="mt-1 font-body text-sm font-semibold text-navy">
                    {projects > 0
                      ? `${projects} Projects`
                      : "Practical Projects"}
                  </p>

                </div>

                <div className="rounded-2xl border border-border bg-surface p-5">

                  <GraduationCap
                    size={17}
                    className="text-slate-400"
                  />

                  <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-slate-400 uppercase">
                    Level
                  </p>

                  <p className="mt-1 font-body text-sm font-semibold text-navy">
                    {level}
                  </p>

                </div>

                <div className="rounded-2xl border border-border bg-surface p-5">

                  <BriefcaseBusiness
                    size={17}
                    className="text-slate-400"
                  />

                  <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-slate-400 uppercase">
                    Language
                  </p>

                  <p className="mt-1 font-body text-sm font-semibold text-navy">
                    {language}
                  </p>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        {skills.length > 0 && (
          <section className="shell py-16 sm:py-20">

            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

              <div>

                <p className="eyebrow mb-3">
                  What you'll build
                </p>

                <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">
                  Skills you'll develop.
                </h2>

                <p className="mt-4 font-body text-[13px] leading-[1.8] text-slate-500">
                  Focus on practical, career-relevant skills that
                  you can demonstrate through projects and interviews.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {skills.map((skill, index) => (
                  <motion.div
                    key={`${skill}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-soft"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.bg} ${styles.text}`}
                    >
                      <CheckCircle2 size={16} />
                    </span>

                    <span className="font-body text-[13px] font-medium text-slate-600">
                      {skill}
                    </span>
                  </motion.div>
                ))}

              </div>
            </div>
          </section>
        )}

        {/* =================================================
            LEARNING ACCESS
        ================================================= */}

        <section className="bg-navy py-16 sm:py-20">

          <div className="shell">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div>

                <p className="font-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
                  Learning Access
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Ready to continue learning?
                </h2>

                <p className="mt-4 max-w-xl font-body text-[14px] leading-[1.8] text-white/60">
                  Access your lessons, practical content, and
                  learning resources from your dedicated course
                  learning area.
                </p>

              </div>

              <div>

                {hasAccess ? (
                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/learn/${courseId}`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-body text-[13px] font-semibold text-navy transition-transform hover:-translate-y-0.5"
                  >
                    <PlayCircle size={16} />

                    Open Course

                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-5 py-3 font-body text-[13px] font-semibold text-white/50">
                    <LockKeyhole size={16} />

                    Access Pending
                  </div>
                )}

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            CAREER OUTCOME
        ================================================= */}

        <section className="shell py-16 sm:py-20">

          <div className="rounded-3xl border border-border bg-white p-6 shadow-lift sm:p-10">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">

              <div>

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.bg} ${styles.text}`}
                >
                  <Target size={21} />
                </span>

                <p className="eyebrow mt-5">
                  Career focused
                </p>

                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
                  Learn skills you can actually use.
                </h2>

                <p className="mt-4 max-w-xl font-body text-[13px] leading-[1.8] text-slate-500">
                  Your Zenvix learning journey is designed around
                  practical knowledge, projects, portfolio development,
                  interview preparation, and career readiness.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  {
                    icon: BookOpen,
                    title: "Structured Learning",
                  },
                  {
                    icon: FolderKanban,
                    title: "Practical Projects",
                  },
                  {
                    icon: BriefcaseBusiness,
                    title: "Career Preparation",
                  },
                  {
                    icon: Sparkles,
                    title: "Industry Skills",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-surface p-4"
                    >
                      <Icon
                        size={17}
                        className={styles.text}
                      />

                      <p className="mt-3 font-body text-[12.5px] font-semibold text-navy">
                        {item.title}
                      </p>
                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <section className="border-t border-border bg-white py-10">

          <div className="shell">

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 font-body text-[12px] font-medium text-slate-500 transition-colors hover:text-navy"
              >
                <ArrowLeft size={14} />

                Back to Dashboard
              </Link>

              {hasAccess && (
                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/learn/${courseId}`
                    )
                  }
                  className="btn-primary"
                >
                  Continue Learning

                  <ArrowRight size={16} />
                </button>
              )}

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}