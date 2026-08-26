import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  FileText,
  FileVideo,
  GraduationCap,
  Lock,
  Menu,
  PlayCircle,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  getMyCourseContent,
  getMyCourseProgress,
  markContentCompleted,
  updateLastWatchedContent,
} from "../services/courseLearningAPI";

const getContentIcon = (type) => {
  switch (type) {
    case "video":
      return FileVideo;
    case "pdf":
    case "article":
    case "documentation":
    case "note":
    case "notes":
      return FileText;
    default:
      return BookOpen;
  }
};

const getYouTubeEmbedUrl = (url, externalId) => {
  if (externalId) {
    return `https://www.youtube.com/embed/${externalId}`;
  }

  if (!url) {
    return "";
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`;
    }

    return url;
  } catch {
    return url;
  }
};

const getInitialLesson = (modules, progress) => {
  if (!modules?.length) {
    return null;
  }

  const allLessons = modules.flatMap((module) => module.lessons || []);

  if (!allLessons.length) {
    return null;
  }

  const lastWatchedId =
    progress?.lastWatchedContent?._id ||
    progress?.lastWatchedContent?.id ||
    progress?.lastWatchedContent;

  if (lastWatchedId) {
    const lastWatched = allLessons.find(
      (lesson) =>
        String(lesson._id) === String(lastWatchedId),
    );

    if (lastWatched) {
      return lastWatched;
    }
  }

  return allLessons[0];
};

export default function CourseLearningPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [progress, setProgress] = useState(null);

  const [selectedLesson, setSelectedLesson] = useState(null);
  const [openModules, setOpenModules] = useState({});

  const [loading, setLoading] = useState(true);
  const [progressLoading, setProgressLoading] = useState(false);
  const [error, setError] = useState("");

  const [mobileSidebar, setMobileSidebar] = useState(false);

  const completedIds = useMemo(() => {
    return new Set(
      (progress?.completedContent || []).map((id) =>
        String(id),
      ),
    );
  }, [progress]);

  useEffect(() => {
    const loadLearningData = async () => {
      try {
        setLoading(true);
        setError("");

        const [contentResponse, progressResponse] =
          await Promise.all([
            getMyCourseContent(courseId),
            getMyCourseProgress(courseId),
          ]);

        setCourse(contentResponse?.course || null);

        const responseModules =
          contentResponse?.modules || [];

        setModules(responseModules);

        const responseProgress =
          progressResponse?.progress || null;

        setProgress(responseProgress);

        const initialLesson = getInitialLesson(
          responseModules,
          responseProgress,
        );

        setSelectedLesson(initialLesson);

        const initialOpenModules = {};

        responseModules.forEach((module, index) => {
          initialOpenModules[module.title] =
            index === 0 ||
            module.lessons?.some(
              (lesson) =>
                String(lesson._id) ===
                String(
                  responseProgress?.lastWatchedContent?._id ||
                    responseProgress?.lastWatchedContent,
                ),
            );
        });

        setOpenModules(initialOpenModules);
      } catch (err) {
        console.error("Learning page error:", err);

        if (err?.response?.status === 401) {
          navigate("/login", {
            replace: true,
            state: {
              from: `/learn/${courseId}`,
            },
          });
          return;
        }

        if (err?.response?.status === 403) {
          setError(
            err?.response?.data?.message ||
              "You do not have access to this course.",
          );
          return;
        }

        setError(
          err?.response?.data?.message ||
            "Unable to load course content.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      loadLearningData();
    }
  }, [courseId, navigate]);

  const selectLesson = async (lesson) => {
    setSelectedLesson(lesson);
    setMobileSidebar(false);

    try {
      const response = await updateLastWatchedContent(
        courseId,
        lesson._id,
      );

      if (response?.progress) {
        setProgress((previous) => ({
          ...(previous || {}),
          ...response.progress,
        }));
      }
    } catch (err) {
      console.error("Update watched content error:", err);
    }
  };

  const handleComplete = async () => {
    if (!selectedLesson) {
      return;
    }

    try {
      setProgressLoading(true);

      const response = await markContentCompleted(
        courseId,
        selectedLesson._id,
      );

      if (response?.progress) {
        setProgress(response.progress);
      }
    } catch (err) {
      console.error("Complete lesson error:", err);
    } finally {
      setProgressLoading(false);
    }
  };

  const toggleModule = (moduleTitle) => {
    setOpenModules((previous) => ({
      ...previous,
      [moduleTitle]: !previous[moduleTitle],
    }));
  };

  const allLessons = useMemo(
    () => modules.flatMap((module) => module.lessons || []),
    [modules],
  );

  const selectedIndex = allLessons.findIndex(
    (lesson) =>
      String(lesson._id) ===
      String(selectedLesson?._id),
  );

  const goToNextLesson = () => {
    if (
      selectedIndex >= 0 &&
      selectedIndex < allLessons.length - 1
    ) {
      selectLesson(allLessons[selectedIndex + 1]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="animate-pulse space-y-6">
            <div className="h-8 w-72 rounded-lg bg-white/10" />
            <div className="h-[520px] rounded-3xl bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 px-4 pt-28 text-white">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
            <Lock className="h-9 w-9 text-red-400" />
          </div>

          <h1 className="text-3xl font-bold">
            Course Access Restricted
          </h1>

          <p className="mt-4 text-slate-400">
            {error}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to={`/programs/${courseId}`}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Back to Course
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return null;
  }

  const selectedType = selectedLesson?.type;

  const isVideo =
    selectedType === "video" ||
    selectedLesson?.provider === "YouTube";

  const embedUrl = isVideo
    ? getYouTubeEmbedUrl(
        selectedLesson?.url,
        selectedLesson?.externalId,
      )
    : "";

  return (
    <div className="min-h-screen bg-slate-950 pt-20 text-white">
      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="sticky top-20 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4 lg:px-6">
          <button
            type="button"
            onClick={() => setMobileSidebar(true)}
            className="rounded-xl border border-white/10 p-2 text-slate-300 hover:bg-white/5 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/dashboard"
            className="hidden items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white sm:flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Dashboard
          </Link>

          <div className="hidden h-5 w-px bg-white/10 sm:block" />

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {course.title}
            </p>

            <p className="hidden truncate text-xs text-slate-500 sm:block">
              {course.category || "Professional Learning"}
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 sm:flex">
            <ShieldCheck className="h-4 w-4" />
            Enrolled
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}

      {mobileSidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setMobileSidebar(false)}
            className="absolute inset-0 bg-black/70"
          />

          <aside className="relative h-full w-[88%] max-w-sm overflow-y-auto bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <span className="font-bold">
                Course Content
              </span>

              <button
                type="button"
                onClick={() => setMobileSidebar(false)}
                className="rounded-lg p-2 hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <SidebarContent
              modules={modules}
              selectedLesson={selectedLesson}
              completedIds={completedIds}
              openModules={openModules}
              toggleModule={toggleModule}
              selectLesson={selectLesson}
            />
          </aside>
        </div>
      )}

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="mx-auto flex max-w-[1600px]">
        {/* ===================================================
            DESKTOP SIDEBAR
        =================================================== */}

        <aside className="sticky top-36 hidden h-[calc(100vh-9rem)] w-[360px] shrink-0 overflow-y-auto border-r border-white/10 lg:block">
          <SidebarContent
            modules={modules}
            selectedLesson={selectedLesson}
            completedIds={completedIds}
            openModules={openModules}
            toggleModule={toggleModule}
            selectLesson={selectLesson}
          />
        </aside>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-8">
            {/* PLAYER */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
              {isVideo && embedUrl ? (
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={embedUrl}
                    title={selectedLesson?.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : selectedLesson?.fileUrl ? (
                <div className="flex min-h-[420px] items-center justify-center bg-slate-900 p-8">
                  <a
                    href={selectedLesson.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    <FileText className="h-5 w-5" />
                    Open Learning Material
                  </a>
                </div>
              ) : (
                <div className="flex min-h-[420px] items-center justify-center bg-slate-900 p-8">
                  <div className="max-w-md text-center">
                    <BookOpen className="mx-auto h-12 w-12 text-slate-500" />

                    <p className="mt-4 text-lg font-semibold">
                      {selectedLesson?.title ||
                        "Select a lesson"}
                    </p>

                    {selectedLesson?.contentText && (
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {selectedLesson.contentText}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* LESSON INFO */}

            {selectedLesson && (
              <section className="mt-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                        {selectedLesson.type || "Lesson"}
                      </span>

                      {selectedLesson.duration && (
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock3 className="h-3.5 w-3.5" />
                          {selectedLesson.duration}
                        </span>
                      )}
                    </div>

                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {selectedLesson.title}
                    </h1>

                    {selectedLesson.description && (
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                        {selectedLesson.description}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleComplete}
                    disabled={
                      progressLoading ||
                      completedIds.has(
                        String(selectedLesson._id),
                      )
                    }
                    className={`shrink-0 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                      completedIds.has(
                        String(selectedLesson._id),
                      )
                        ? "cursor-default bg-emerald-500/10 text-emerald-400"
                        : "bg-white text-slate-950 hover:bg-slate-200"
                    }`}
                  >
                    {completedIds.has(
                      String(selectedLesson._id),
                    ) ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Completed
                      </span>
                    ) : progressLoading ? (
                      "Saving..."
                    ) : (
                      "Mark Complete"
                    )}
                  </button>
                </div>

                {/* CONTENT TEXT */}

                {selectedLesson.contentText && (
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
                    <h2 className="mb-4 flex items-center gap-2 font-semibold">
                      <FileText className="h-5 w-5 text-violet-400" />
                      Lesson Notes
                    </h2>

                    <div className="whitespace-pre-wrap text-sm leading-8 text-slate-300">
                      {selectedLesson.contentText}
                    </div>
                  </div>
                )}

                {/* NEXT/PREVIOUS */}

                <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
                  <button
                    type="button"
                    disabled={selectedIndex <= 0}
                    onClick={() => {
                      if (selectedIndex > 0) {
                        selectLesson(
                          allLessons[selectedIndex - 1],
                        );
                      }
                    }}
                    className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← Previous Lesson
                  </button>

                  <button
                    type="button"
                    disabled={
                      selectedIndex < 0 ||
                      selectedIndex >=
                        allLessons.length - 1
                    }
                    onClick={goToNextLesson}
                    className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Next Lesson →
                  </button>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarContent({
  modules,
  selectedLesson,
  completedIds,
  openModules,
  toggleModule,
  selectLesson,
}) {
  const totalLessons = modules.reduce(
    (total, module) =>
      total + (module.lessons?.length || 0),
    0,
  );

  const completedCount = modules.reduce(
    (total, module) =>
      total +
      (module.lessons || []).filter((lesson) =>
        completedIds.has(String(lesson._id)),
      ).length,
    0,
  );

  return (
    <div className="p-4">
      {/* COURSE SUMMARY */}

      <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
            <GraduationCap className="h-5 w-5 text-violet-400" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Your Learning
            </p>

            <p className="text-xs text-slate-500">
              {completedCount} of {totalLessons} lessons
            </p>
          </div>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-violet-500 transition-all"
            style={{
              width:
                totalLessons > 0
                  ? `${Math.round(
                      (completedCount / totalLessons) *
                        100,
                    )}%`
                  : "0%",
            }}
          />
        </div>
      </div>

      {/* MODULES */}

      <div className="space-y-2">
        {modules.map((module, moduleIndex) => {
          const isOpen =
            openModules[module.title] ?? moduleIndex === 0;

          const moduleCompleted = (
            module.lessons || []
          ).filter((lesson) =>
            completedIds.has(String(lesson._id)),
          ).length;

          return (
            <div
              key={`${module.title}-${moduleIndex}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() => toggleModule(module.title)}
                className="flex w-full items-center gap-3 p-4 text-left transition hover:bg-white/[0.03]"
              >
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-500" />
                )}

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">
                    {module.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {moduleCompleted}/
                    {module.lessons?.length || 0} completed
                  </p>
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-white/10">
                  {(module.lessons || []).map(
                    (lesson, lessonIndex) => {
                      const isSelected =
                        String(selectedLesson?._id) ===
                        String(lesson._id);

                      const isCompleted =
                        completedIds.has(
                          String(lesson._id),
                        );

                      const Icon =
                        getContentIcon(lesson.type);

                      return (
                        <button
                          key={lesson._id}
                          type="button"
                          onClick={() =>
                            selectLesson(lesson)
                          }
                          className={`flex w-full gap-3 border-b border-white/5 px-4 py-3 text-left transition last:border-b-0 ${
                            isSelected
                              ? "bg-violet-500/10"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          <div
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                              isCompleted
                                ? "bg-emerald-500/10 text-emerald-400"
                                : isSelected
                                  ? "bg-violet-500/10 text-violet-400"
                                  : "bg-white/5 text-slate-500"
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <Icon className="h-4 w-4" />
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className={`text-sm leading-5 ${
                                isSelected
                                  ? "font-semibold text-white"
                                  : "text-slate-300"
                              }`}
                            >
                              {lessonIndex + 1}.{" "}
                              {lesson.title}
                            </p>

                            {lesson.duration && (
                              <p className="mt-1 text-[11px] text-slate-600">
                                {lesson.duration}
                              </p>
                            )}
                          </div>

                          {lesson.type === "video" && (
                            <PlayCircle className="mt-1 h-4 w-4 shrink-0 text-slate-600" />
                          )}
                        </button>
                      );
                    },
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!modules.length && (
        <div className="rounded-2xl border border-white/10 p-6 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-slate-600" />

          <p className="mt-3 text-sm text-slate-400">
            No lessons available yet.
          </p>
        </div>
      )}
    </div>
  );
}