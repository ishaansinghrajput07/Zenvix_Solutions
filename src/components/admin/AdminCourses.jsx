import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Search,
  BookOpen,
  Clock3,
  Globe2,
  Layers3,
  Eye,
  EyeOff,
  Loader2,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import {
  createCourse,
  getAllCourses,
  updateCourseStatus,
} from "../../services/courseService";

const initialForm = {
  title: "",
  slug: "",
  description: "",
  category: "",
  level: "Beginner",
  thumbnail: "",
  contentSource: "External API",
  externalSource: "",
  externalCourseId: "",
  duration: "",
  language: "English",
  skills: "",
};

const makeSlug = (value) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [form, setForm] = useState(initialForm);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  // =====================================================
  // FETCH COURSES
  // =====================================================

  const loadCourses = async () => {
    try {
      setLoading(true);
      setMessage({
        type: "",
        text: "",
      });

      const data = await getAllCourses();

      setCourses(Array.isArray(data?.courses) ? data.courses : []);
    } catch (error) {
      console.error("Load Courses Error:", error);

      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          "Unable to load courses.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // =====================================================
  // FORM CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage({
      type: "",
      text: "",
    });
  };

  // =====================================================
  // TITLE → SLUG
  // =====================================================

  const handleTitleChange = (event) => {
    const value = event.target.value;

    setForm((previous) => ({
      ...previous,
      title: value,
      slug: makeSlug(value),
    }));
  };

  // =====================================================
  // CREATE COURSE
  // =====================================================

  const handleCreateCourse = async (event) => {
    event.preventDefault();

    try {
      setCreating(true);
      setMessage({
        type: "",
        text: "",
      });

      const skills = form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean);

      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim().toLowerCase(),
        description: form.description.trim(),
        category: form.category.trim(),
        level: form.level,
        thumbnail: form.thumbnail.trim(),
        contentSource: form.contentSource,
        externalSource: form.externalSource.trim(),
        externalCourseId: form.externalCourseId.trim(),
        duration: form.duration.trim(),
        language: form.language.trim() || "English",
        skills,
      };

      const data = await createCourse(payload);

      if (!data?.success) {
        throw new Error(
          data?.message || "Unable to create course.",
        );
      }

      setMessage({
        type: "success",
        text: "Course created successfully.",
      });

      setForm(initialForm);
      setShowCreateModal(false);

      await loadCourses();
    } catch (error) {
      console.error("Create Course Error:", error);

      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Unable to create course.",
      });
    } finally {
      setCreating(false);
    }
  };

  // =====================================================
  // TOGGLE STATUS
  // =====================================================

  const handleToggleStatus = async (course) => {
    try {
      setUpdatingId(course._id);

      const nextStatus = !course.isActive;

      const data = await updateCourseStatus(
        course._id,
        nextStatus,
      );

      if (!data?.success) {
        throw new Error(
          data?.message || "Unable to update course.",
        );
      }

      setCourses((previous) =>
        previous.map((item) =>
          item._id === course._id
            ? {
                ...item,
                isActive: nextStatus,
              }
            : item,
        ),
      );

      setMessage({
        type: "success",
        text: nextStatus
          ? "Course activated successfully."
          : "Course deactivated successfully.",
      });
    } catch (error) {
      console.error("Update Course Status Error:", error);

      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Unable to update course status.",
      });
    } finally {
      setUpdatingId(null);
    }
  };

  // =====================================================
  // FILTER COURSES
  // =====================================================

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesSearch =
        !query ||
        course.title?.toLowerCase().includes(query) ||
        course.category?.toLowerCase().includes(query) ||
        course.slug?.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && course.isActive) ||
        (statusFilter === "inactive" && !course.isActive);

      return matchesSearch && matchesStatus;
    });
  }, [courses, search, statusFilter]);

  // =====================================================
  // STATS
  // =====================================================

  const totalCourses = courses.length;

  const activeCourses = courses.filter(
    (course) => course.isActive,
  ).length;

  const inactiveCourses = courses.filter(
    (course) => !course.isActive,
  ).length;

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Learning Management
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Courses
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Create and manage the programs that students can
            discover and enroll in.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setMessage({
              type: "",
              text: "",
            });
            setShowCreateModal(true);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" />
          Create Course
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
          STATS
      ================================================= */}

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          icon={BookOpen}
          label="Total Courses"
          value={totalCourses}
        />

        <StatCard
          icon={CheckCircle2}
          label="Active"
          value={activeCourses}
        />

        <StatCard
          icon={EyeOff}
          label="Inactive"
          value={inactiveCourses}
        />
      </div>

      {/* =================================================
          FILTER BAR
      ================================================= */}

      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search courses..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
            className="h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none focus:border-slate-400"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* =================================================
          COURSES
      ================================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex min-h-[320px] items-center justify-center">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
              <Loader2 className="h-5 w-5 animate-spin" />
              Loading courses...
            </div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <BookOpen className="h-6 w-6 text-slate-400" />
            </div>

            <h3 className="mt-4 text-base font-bold text-slate-900">
              No courses found
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Create your first course to start building
              your learning catalog.
            </p>

            <button
              type="button"
              onClick={() => setShowCreateModal(true)}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Plus className="h-4 w-4" />
              Create Course
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredCourses.map((course) => (
              <CourseRow
                key={course._id}
                course={course}
                updating={updatingId === course._id}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>
        )}
      </div>

      {/* =================================================
          CREATE MODAL
      ================================================= */}

      {showCreateModal && (
        <CreateCourseModal
          form={form}
          creating={creating}
          onChange={handleChange}
          onTitleChange={handleTitleChange}
          onClose={() => {
            if (!creating) {
              setShowCreateModal(false);
            }
          }}
          onSubmit={handleCreateCourse}
        />
      )}
    </div>
  );
}

// =====================================================
// STAT CARD
// =====================================================

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>

        <span className="text-2xl font-bold text-slate-950">
          {value}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </p>
    </div>
  );
}

// =====================================================
// COURSE ROW
// =====================================================

function CourseRow({
  course,
  updating,
  onToggleStatus,
}) {
  return (
    <div className="flex flex-col gap-5 p-5 xl:flex-row xl:items-center">
      {/* Thumbnail */}

      <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-40">
        {course.thumbnail ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <BookOpen className="h-7 w-7 text-slate-300" />
          </div>
        )}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate text-base font-bold text-slate-950">
            {course.title}
          </h3>

          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
              course.isActive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {course.isActive ? "Active" : "Inactive"}
          </span>
        </div>

        <p className="mt-1 text-xs text-slate-400">
          /{course.slug}
        </p>

        <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-6 text-slate-500">
          {course.description}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Layers3 className="h-3.5 w-3.5" />
            {course.category}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {course.duration || "Flexible"}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <Globe2 className="h-3.5 w-3.5" />
            {course.language || "English"}
          </span>

          <span>
            {course.level || "Beginner"}
          </span>
        </div>
      </div>

      {/* Action */}

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          disabled={updating}
          onClick={() => onToggleStatus(course)}
          className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
            course.isActive
              ? "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          {updating ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : course.isActive ? (
            <>
              <EyeOff className="h-4 w-4" />
              Deactivate
            </>
          ) : (
            <>
              <Eye className="h-4 w-4" />
              Activate
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// =====================================================
// CREATE COURSE MODAL
// =====================================================

function CreateCourseModal({
  form,
  creating,
  onChange,
  onTitleChange,
  onClose,
  onSubmit,
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Learning Management
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-950">
              Create Course
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={creating}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900 disabled:opacity-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}

        <form
          onSubmit={onSubmit}
          className="overflow-y-auto px-6 py-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Title */}

            <Field label="Course Title" required full>
              <input
                name="title"
                value={form.title}
                onChange={onTitleChange}
                required
                maxLength={150}
                placeholder="e.g. Full Stack MERN Development"
                className="input"
              />
            </Field>

            {/* Slug */}

            <Field label="Slug" required>
              <input
                name="slug"
                value={form.slug}
                onChange={onChange}
                required
                placeholder="full-stack-mern-development"
                className="input"
              />
            </Field>

            {/* Category */}

            <Field label="Category" required>
              <input
                name="category"
                value={form.category}
                onChange={onChange}
                required
                placeholder="Web Development"
                className="input"
              />
            </Field>

            {/* Level */}

            <Field label="Level">
              <select
                name="level"
                value={form.level}
                onChange={onChange}
                className="input"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>All Levels</option>
              </select>
            </Field>

            {/* Duration */}

            <Field label="Duration">
              <input
                name="duration"
                value={form.duration}
                onChange={onChange}
                placeholder="e.g. 12 Weeks"
                className="input"
              />
            </Field>

            {/* Language */}

            <Field label="Language">
              <input
                name="language"
                value={form.language}
                onChange={onChange}
                placeholder="English"
                className="input"
              />
            </Field>

            {/* Thumbnail */}

            <Field label="Thumbnail URL" full>
              <input
                name="thumbnail"
                type="url"
                value={form.thumbnail}
                onChange={onChange}
                placeholder="https://example.com/course-image.jpg"
                className="input"
              />
            </Field>

            {/* Content Source */}

            <Field label="Content Source">
              <select
                name="contentSource"
                value={form.contentSource}
                onChange={onChange}
                className="input"
              >
                <option>External API</option>
                <option>YouTube</option>
                <option>Free Resources</option>
                <option>Mixed</option>
              </select>
            </Field>

            {/* External Source */}

            <Field label="External Source">
              <input
                name="externalSource"
                value={form.externalSource}
                onChange={onChange}
                placeholder="YouTube / API / Platform"
                className="input"
              />
            </Field>

            {/* External Course ID */}

            <Field label="External Course ID">
              <input
                name="externalCourseId"
                value={form.externalCourseId}
                onChange={onChange}
                placeholder="Optional"
                className="input"
              />
            </Field>

            {/* Description */}

            <Field label="Description" required full>
              <textarea
                name="description"
                value={form.description}
                onChange={onChange}
                required
                maxLength={3000}
                rows={6}
                placeholder="Describe what students will learn..."
                className="input resize-none"
              />

              <p className="mt-1 text-right text-[10px] text-slate-400">
                {form.description.length}/3000
              </p>
            </Field>

            {/* Skills */}

            <Field
              label="Skills"
              full
              hint="Separate skills with commas"
            >
              <input
                name="skills"
                value={form.skills}
                onChange={onChange}
                placeholder="React, Node.js, MongoDB, Express"
                className="input"
              />
            </Field>
          </div>

          {/* Footer */}

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={creating}
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={creating}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {creating && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}

              {creating ? "Creating..." : "Create Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// =====================================================
// FIELD
// =====================================================

function Field({
  label,
  required = false,
  full = false,
  hint = "",
  children,
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-xs font-bold text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}

      {hint && (
        <p className="mt-1.5 text-[10px] text-slate-400">
          {hint}
        </p>
      )}
    </div>
  );
}