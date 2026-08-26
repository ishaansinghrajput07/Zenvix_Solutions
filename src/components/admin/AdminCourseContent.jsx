import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  Loader2,
  PlayCircle,
  RefreshCw,
  Youtube,
  AlertCircle,
  CheckCircle2,
  Clock3,
  UserRound,
} from "lucide-react";

import {
  fetchYouTubeCourseContent,
  getCourseContent,
} from "../../services/courseContentService";

// =====================================================
// ADMIN COURSE CONTENT
// =====================================================

export default function AdminCourseContent() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [content, setContent] = useState([]);

  const [loading, setLoading] = useState(true);
  const [fetchingYouTube, setFetchingYouTube] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // =====================================================
  // LOAD COURSE CONTENT
  // =====================================================

  const loadContent = async () => {
    try {
      setLoading(true);

      setMessage({
        type: "",
        text: "",
      });

      const data = await getCourseContent(courseId);

      if (!data?.success) {
        throw new Error(
          data?.message || "Unable to load course content.",
        );
      }

      setCourse(data.course || null);
      setContent(Array.isArray(data.content) ? data.content : []);
    } catch (error) {
      console.error("Load Course Content Error:", error);

      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Unable to load course content.",
      });
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // INITIAL LOAD
  // =====================================================

  useEffect(() => {
    if (!courseId) return;

    loadContent();
  }, [courseId]);

  // =====================================================
  // FETCH YOUTUBE CONTENT
  // =====================================================

  const handleFetchYouTube = async () => {
    try {
      setFetchingYouTube(true);

      setMessage({
        type: "",
        text: "",
      });

      const data = await fetchYouTubeCourseContent(courseId);

      if (!data?.success) {
        throw new Error(
          data?.message ||
            "Unable to fetch YouTube course content.",
        );
      }

      setMessage({
        type: "success",
        text:
          data?.message ||
          "YouTube content fetched successfully.",
      });

      await loadContent();
    } catch (error) {
      console.error(
        "Fetch YouTube Content Error:",
        error,
      );

      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Unable to fetch YouTube content.",
      });
    } finally {
      setFetchingYouTube(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* =================================================
          BACK
      ================================================= */}

      <button
        type="button"
        onClick={() => navigate("/admin/courses")}
        className="mb-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Courses
      </button>

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Learning Management
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {course?.title || "Course Content"}
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Manage the learning content available inside
            this course.
          </p>
        </div>

        <button
          type="button"
          onClick={handleFetchYouTube}
          disabled={fetchingYouTube || loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/10 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {fetchingYouTube ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Youtube className="h-4 w-4" />
          )}

          {fetchingYouTube
            ? "Fetching YouTube..."
            : "Fetch YouTube Content"}
        </button>
      </div>

      {/* =================================================
          MESSAGE
      ================================================= */}

      {message.text && (
        <div
          className={`mb-6 flex items-start gap-3 rounded-2xl border px-4 py-3 ${
            message.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          )}

          <p className="text-sm font-medium">
            {message.text}
          </p>
        </div>
      )}

      {/* =================================================
          COURSE INFO
      ================================================= */}

      {course && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-5 p-5 sm:flex-row">
            <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-24 sm:w-40">
              {course.thumbnail ? (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <BookOpen className="h-8 w-8 text-slate-300" />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                  {course.level || "Beginner"}
                </span>

                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                  {course.category || "General"}
                </span>
              </div>

              <h2 className="mt-2 text-lg font-bold text-slate-950">
                {course.title}
              </h2>

              <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                {course.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" />
                  {course.duration || "Flexible"}
                </span>

                <span>
                  {course.language || "English"}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <PlayCircle className="h-3.5 w-3.5" />
                  {content.length} Content
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          CONTENT HEADER
      ================================================= */}

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-950">
            Course Content
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            {content.length} learning{" "}
            {content.length === 1 ? "resource" : "resources"}
          </p>
        </div>

        <button
          type="button"
          onClick={loadContent}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50 sm:self-auto"
        >
          <RefreshCw
            className={`h-3.5 w-3.5 ${
              loading ? "animate-spin" : ""
            }`}
          />

          Refresh
        </button>
      </div>

      {/* =================================================
          CONTENT LIST
      ================================================= */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex min-h-[320px] items-center justify-center">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading course content...
            </div>
          </div>
        ) : content.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <Youtube className="h-6 w-6 text-slate-400" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-900">
              No course content yet
            </h3>

            <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
              Fetch YouTube content to automatically add
              relevant learning videos to this course.
            </p>

            <button
              type="button"
              onClick={handleFetchYouTube}
              disabled={fetchingYouTube}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
            >
              {fetchingYouTube ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Youtube className="h-4 w-4" />
              )}

              Fetch YouTube Content
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {content.map((item, index) => (
              <ContentRow
                key={item._id}
                item={item}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// =====================================================
// CONTENT ROW
// =====================================================

function ContentRow({ item, index }) {
  return (
    <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center">
      {/* Thumbnail */}

      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-32 sm:w-52">
        {item.thumbnail ? (
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <PlayCircle className="h-8 w-8 text-slate-300" />
          </div>
        )}

        <div className="absolute left-2 top-2 rounded-lg bg-slate-950/80 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
          #{index + 1}
        </div>
      </div>

      {/* Information */}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600">
            YouTube
          </span>

          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
            Active
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 text-base font-bold leading-6 text-slate-950">
          {item.title}
        </h3>

        {item.description && (
          <p className="mt-1 line-clamp-2 text-sm leading-5 text-slate-500">
            {item.description}
          </p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
          {item.channel && (
            <span className="inline-flex items-center gap-1.5">
              <UserRound className="h-3.5 w-3.5" />
              {item.channel}
            </span>
          )}

          {item.duration && (
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              {item.duration}
            </span>
          )}

          <span className="text-slate-400">
            {item.type || "video"}
          </span>
        </div>
      </div>

      {/* Action */}

      <div className="shrink-0">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950 lg:w-auto"
        >
          <ExternalLink className="h-4 w-4" />
          Open Video
        </a>
      </div>
    </div>
  );
}