import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  User,
  X,
} from "lucide-react";

import { getMe, getMyCourses, logoutUser } from "../services/authService";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [error, setError] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  // =====================================================
  // LOAD USER + COURSES
  // =====================================================

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const token =
          localStorage.getItem("zenvix_token") ||
          sessionStorage.getItem("zenvix_token");

        console.log("DASHBOARD TOKEN:", token);

        if (!token) {
          console.log("NO TOKEN → REDIRECTING TO LOGIN");
          navigate("/login", { replace: true });
          return;
        }
        // -----------------------------------------------
        // Get current user
        // -----------------------------------------------

        const userResponse = await getMe();

        if (userResponse?.user) {
          setUser(userResponse.user);
        }

        // -----------------------------------------------
        // Get active courses
        // -----------------------------------------------

        try {
          setCoursesLoading(true);

          const courseResponse = await getMyCourses();

          setCourses(courseResponse?.courses || []);
        } catch (courseError) {
          console.error("Student Courses Error:", courseError);

          setCourses([]);
        } finally {
          setCoursesLoading(false);
        }
      } catch (err) {
        console.error("Student Dashboard Error:", err);

        if (err?.response?.status === 401 || err?.response?.status === 403) {
          logoutUser();
          navigate("/login", { replace: true });
          return;
        }

        setError(
          err?.response?.data?.message || "Unable to load your dashboard.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [navigate]);

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  // =====================================================
  // COURSE HELPERS
  // =====================================================

  const getCourseTitle = (course) => {
    return (
      course?.title || course?.name || course?.courseName || "Untitled Course"
    );
  };

  const getCourseDescription = (course) => {
    return (
      course?.shortDescription ||
      course?.description ||
      "Continue learning and build practical career-ready skills."
    );
  };

  const getCourseImage = (course) => {
    return course?.thumbnail || course?.image || course?.coverImage || "";
  };

  const getCourseProgress = (course) => {
    const progress = Number(
      course?.progress ?? course?.progressPercentage ?? 0,
    );

    if (Number.isNaN(progress)) return 0;

    return Math.min(100, Math.max(0, progress));
  };

  // =====================================================
  // LOADING SCREEN
  // =====================================================

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl">
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>

            <h1 className="mt-5 text-lg font-semibold text-slate-950">
              Loading your dashboard
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Preparing your Zenvix learning experience...
            </p>
          </div>
        </div>
      </main>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h1 className="mt-5 text-xl font-semibold text-slate-950">
              Unable to load dashboard
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">{error}</p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // =====================================================
  // STATS
  // =====================================================

  const totalCourses = courses.length;

  const completedCourses = courses.filter(
    (course) => getCourseProgress(course) >= 100,
  ).length;

  const activeCourses = courses.filter(
    (course) => getCourseProgress(course) < 100,
  ).length;

  const averageProgress =
    totalCourses > 0
      ? Math.round(
          courses.reduce(
            (total, course) => total + getCourseProgress(course),
            0,
          ) / totalCourses,
        )
      : 0;

  // =====================================================
  // DASHBOARD
  // =====================================================

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {mobileMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setMobileMenu(false)}
          />

          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="relative h-full w-[280px] bg-slate-950 p-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
                  <Sparkles className="h-4 w-4" />
                </div>

                <span className="font-bold">Zenvix</span>
              </div>

              <button
                onClick={() => setMobileMenu(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-10 space-y-2">
              <Link
                to="/dashboard"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>

              <Link
                to="/programs"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <BookOpen className="h-4 w-4" />
                Explore Programs
              </Link>

              <Link
                to="/"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Website
              </Link>
            </nav>

            <button
              onClick={handleLogout}
              className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </motion.aside>
        </div>
      )}

      {/* =================================================
          DESKTOP SIDEBAR
      ================================================= */}

      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[250px] border-r border-slate-200 bg-slate-950 text-white lg:flex lg:flex-col">
        {/* Logo */}

        <div className="flex h-20 items-center border-b border-white/10 px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
              <Sparkles className="h-4 w-4" />
            </div>

            <span className="text-base font-bold tracking-tight">Zenvix</span>
          </Link>
        </div>

        {/* Navigation */}

        <nav className="flex-1 px-4 py-7">
          <p className="mb-3 px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Workspace
          </p>

          <div className="space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-3 text-sm font-medium text-white"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              to="/programs"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <BookOpen className="h-4 w-4" />
              Explore Programs
            </Link>

            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Website
            </Link>
          </div>
        </nav>

        {/* User */}

        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                {user?.name || "Student"}
              </p>

              <p className="truncate text-[10px] text-slate-500">
                {user?.email || ""}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="lg:pl-[250px]">
        {/* Header */}

        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Student Dashboard
                </p>

                <h1 className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">
                  Welcome back{user?.name ? "," : ""}
                  {user?.name ? ` ${user.name.split(" ")[0]}` : ""}.
                </h1>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-[10px] font-semibold text-slate-500">
                  Account Active
                </span>
              </div>

              <Link
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-950"
                title="Back to website"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}

        <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
          {/* =================================================
              APPROVAL NOTICE
          ================================================= */}

          {user && user.isApproved === false && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-7 flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Clock3 className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-amber-950">
                    Account approval pending
                  </h2>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-amber-800/80">
                    Your registration was successful. Your account is currently
                    waiting for admin approval. Course access will be available
                    according to your account status.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* =================================================
              HERO
          ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-9 lg:p-11"
          >
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                <Sparkles className="h-3 w-3 text-sky-300" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  Your learning workspace
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Keep learning.
                <br />
                Keep building.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Continue your courses, track your learning progress and move one
                step closer to your career goals.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Explore Programs
                  <ChevronRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-xs font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </motion.section>

          {/* =================================================
              STATS
          ================================================= */}

          <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              icon={BookOpen}
              label="Total Courses"
              value={totalCourses}
              description="Courses in your account"
            />

            <StatCard
              icon={PlayCircle}
              label="Active Courses"
              value={activeCourses}
              description="Courses in progress"
            />

            <StatCard
              icon={CheckCircle2}
              label="Completed"
              value={completedCourses}
              description="Courses completed"
            />

            <StatCard
              icon={GraduationCap}
              label="Overall Progress"
              value={`${averageProgress}%`}
              description="Across your courses"
            />
          </section>

          {/* =================================================
              COURSES
          ================================================= */}

          <section className="mt-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Learning
                </p>

                <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                  My Courses
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Continue where you left off.
                </p>
              </div>

              <Link
                to="/programs"
                className="hidden items-center gap-1 text-xs font-semibold text-slate-600 transition hover:text-slate-950 sm:flex"
              >
                Browse all
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {coursesLoading ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <CourseSkeleton key={item} />
                ))}
              </div>
            ) : courses.length === 0 ? (
              <EmptyCourses />
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((course, index) => (
                  <CourseCard
                    key={course?._id || course?.id || index}
                    course={course}
                    getCourseTitle={getCourseTitle}
                    getCourseDescription={getCourseDescription}
                    getCourseImage={getCourseImage}
                    getCourseProgress={getCourseProgress}
                  />
                ))}
              </div>
            )}
          </section>

          {/* =================================================
              PROFILE
          ================================================= */}

          <section className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.7fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                  <User className="h-5 w-5 text-slate-700" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Account
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    Profile Information
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ProfileItem
                  icon={User}
                  label="Full Name"
                  value={user?.name || "Not available"}
                />

                <ProfileItem
                  icon={Mail}
                  label="Email"
                  value={user?.email || "Not available"}
                />

                <ProfileItem
                  icon={ShieldCheck}
                  label="Role"
                  value={user?.role || "Student"}
                />

                <ProfileItem
                  icon={CheckCircle2}
                  label="Account Status"
                  value={user?.isActive ? "Active" : "Inactive"}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <CalendarDays className="h-5 w-5" />
              </div>

              <h2 className="mt-5 text-lg font-semibold">Keep your momentum</h2>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Consistent learning is the key to building strong practical
                skills. Keep working through your courses and projects.
              </p>

              <Link
                to="/programs"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-900"
              >
                Explore more programs
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>

          {/* Footer */}

          <footer className="mt-12 border-t border-slate-200 py-7">
            <div className="flex flex-col justify-between gap-3 text-[10px] text-slate-400 sm:flex-row sm:items-center">
              <p>
                © {new Date().getFullYear()} Zenvix Solutions. All rights
                reserved.
              </p>

              <Link
                to="/"
                className="font-semibold text-slate-500 hover:text-slate-950"
              >
                zenvix
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

// =====================================================
// STAT CARD
// =====================================================

function StatCard({ icon: Icon, label, value, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {label}
          </p>

          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {value}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">{description}</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
          <Icon className="h-4 w-4 text-slate-700" />
        </div>
      </div>
    </motion.div>
  );
}

// =====================================================
// COURSE CARD
// =====================================================

function CourseCard({
  course,
  getCourseTitle,
  getCourseDescription,
  getCourseImage,
  getCourseProgress,
}) {
  const title = getCourseTitle(course);
  const description = getCourseDescription(course);
  const image = getCourseImage(course);
  const progress = getCourseProgress(course);

  const courseId = course?._id || course?.id;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/60"
    >
      {/* Image */}

      <div className="relative h-44 overflow-hidden bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-950">
            <GraduationCap className="h-10 w-10 text-white/20" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-2.5 py-1 text-[9px] font-semibold text-white backdrop-blur-md">
          {progress >= 100 ? "Completed" : "In Progress"}
        </div>
      </div>

      {/* Content */}

      <div className="p-5">
        <h3 className="line-clamp-2 text-base font-semibold leading-6 text-slate-950">
          {title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
          {description}
        </p>

        {/* Progress */}

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Progress
            </span>

            <span className="text-[10px] font-semibold text-slate-700">
              {progress}%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-950 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Button */}

        <Link
          to={courseId ? `/dashboard/course/${courseId}` : "/programs"}
          className="mt-5 flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-950 text-xs font-semibold text-white transition hover:bg-slate-800"
        >
          {progress >= 100 ? "View Course" : "Continue Learning"}

          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

// =====================================================
// PROFILE ITEM
// =====================================================

function ProfileItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-slate-400" />

        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-2 truncate text-sm font-medium text-slate-800">
        {value}
      </p>
    </div>
  );
}

// =====================================================
// COURSE SKELETON
// =====================================================

function CourseSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="h-44 animate-pulse bg-slate-100" />

      <div className="space-y-4 p-5">
        <div className="h-5 w-3/4 animate-pulse rounded bg-slate-100" />

        <div className="h-8 animate-pulse rounded bg-slate-100" />

        <div className="h-2 animate-pulse rounded bg-slate-100" />

        <div className="h-10 animate-pulse rounded-xl bg-slate-100" />
      </div>
    </div>
  );
}

// =====================================================
// EMPTY COURSES
// =====================================================

function EmptyCourses() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <BookOpen className="h-6 w-6 text-slate-400" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-slate-950">
        No active courses yet
      </h3>

      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500">
        You don't have any active courses at the moment. Explore our programs
        and start your learning journey with Zenvix.
      </p>

      <Link
        to="/programs"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
      >
        Explore Programs
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
