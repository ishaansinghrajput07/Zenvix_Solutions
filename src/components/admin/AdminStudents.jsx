import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Search,
  RefreshCw,
  Users,
  BookOpen,
  Mail,
  Phone,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Loader2,
  GraduationCap,
  X,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

/* ============================================================
   API
============================================================ */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

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
  enrollment?.studentName ||
  getStudent(enrollment)?.name ||
  "Unnamed Student";

const getStudentEmail = (enrollment) =>
  enrollment?.studentEmail ||
  getStudent(enrollment)?.email ||
  "No email";

const getStudentPhone = (enrollment) =>
  enrollment?.studentPhone ||
  getStudent(enrollment)?.phone ||
  "No phone";

const getCourseTitle = (enrollment) =>
  getCourse(enrollment)?.title ||
  enrollment?.courseTitle ||
  "Course unavailable";

const getCourseCategory = (enrollment) =>
  getCourse(enrollment)?.category || "";

const getCourseLevel = (enrollment) =>
  getCourse(enrollment)?.level || "";

const getCourseThumbnail = (enrollment) =>
  getCourse(enrollment)?.thumbnail || "";

const getStatus = (enrollment) =>
  String(enrollment?.status || "Pending");

const getAccessStatus = (enrollment) => {
  if (enrollment?.accessStatus) {
    return enrollment.accessStatus;
  }

  if (
    enrollment?.status === "Approved" &&
    enrollment?.accessGranted === true
  ) {
    return "Granted";
  }

  if (
    enrollment?.status === "Approved" &&
    enrollment?.accessGranted === false
  ) {
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

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function AdminStudents() {
  const [enrollments, setEnrollments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [expandedStudent, setExpandedStudent] = useState(null);

  const [selectedStudent, setSelectedStudent] = useState(null);

  /* ==========================================================
     FETCH APPROVED + ACCESS GRANTED ENROLLMENTS
  ========================================================== */

  const fetchStudents = useCallback(async (showLoader = true) => {
    const token = getToken();

    if (!token) {
      setError(
        "Authentication token not found. Please login again.",
      );

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

      /*
       * IMPORTANT:
       * Same endpoint + same authentication system
       * as your working AdminEnrollments.jsx
       */

      const response = await api.get("/admin/enrollments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          status: "Approved",
        },
      });

      const data = normalizeEnrollments(response.data);

      setEnrollments(data);
    } catch (err) {
      console.error("Fetch Admin Students Error:", err);

      if (err?.response?.status === 401) {
        setError(
          "Your admin session has expired. Please login again.",
        );

        toast.error("Admin session expired. Please login again.");
      } else if (err?.response?.status === 403) {
        setError(
          "You do not have permission to access students.",
        );

        toast.error("You do not have permission to access students.");
      } else {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          "Unable to load students.";

        setError(message);
        toast.error(message);
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  /* ==========================================================
     INITIAL LOAD
  ========================================================== */

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  /* ==========================================================
     GROUP ENROLLMENTS BY STUDENT
  ========================================================== */

  const students = useMemo(() => {
    const studentMap = new Map();

    /*
     * IMPORTANT:
     *
     * Student tab me sirf:
     *
     * status === Approved
     * &&
     * accessGranted === true
     *
     * wale students dikhenge.
     *
     * Matlab jis student ko course ka actual access mil gaya
     * wahi Admin Students me dikhega.
     */

    enrollments
      .filter((enrollment) => {
        return (
          getStatus(enrollment) === "Approved" &&
          enrollment?.accessGranted === true
        );
      })
      .forEach((enrollment) => {
        const student = getStudent(enrollment);

        const studentId =
          getId(student) ||
          enrollment?.studentId ||
          enrollment?.student ||
          enrollment?.studentEmail;

        if (!studentId) {
          return;
        }

        const normalizedStudentId = String(studentId);

        if (!studentMap.has(normalizedStudentId)) {
          studentMap.set(normalizedStudentId, {
            id: normalizedStudentId,

            name: getStudentName(enrollment),

            email: getStudentEmail(enrollment),

            phone: getStudentPhone(enrollment),

            isActive:
              student?.isActive !== undefined
                ? student.isActive
                : true,

            isApproved:
              student?.isApproved !== undefined
                ? student.isApproved
                : true,

            joinedAt:
              enrollment?.accessGrantedAt ||
              enrollment?.reviewedAt ||
              enrollment?.createdAt ||
              null,

            courses: [],
          });
        }

        const currentStudent =
          studentMap.get(normalizedStudentId);

        const course = getCourse(enrollment);

        const courseId =
          getId(course) ||
          enrollment?.courseId ||
          enrollment?.course;

        /*
         * Agar course populated nahi hai to bhi
         * enrollment ko lose nahi karenge.
         */

        const normalizedCourseId = courseId
          ? String(courseId)
          : `enrollment-${getId(enrollment)}`;

        const alreadyExists = currentStudent.courses.some(
          (item) =>
            String(item.id) === normalizedCourseId,
        );

        if (!alreadyExists) {
          currentStudent.courses.push({
            id: normalizedCourseId,

            title: getCourseTitle(enrollment),

            category:
              getCourseCategory(enrollment) || "Course",

            level: getCourseLevel(enrollment),

            thumbnail: getCourseThumbnail(enrollment),

            enrollmentId: getId(enrollment),

            status: getStatus(enrollment),

            accessGranted:
              enrollment?.accessGranted === true,

            accessStatus: getAccessStatus(enrollment),

            accessGrantedAt:
              enrollment?.accessGrantedAt ||
              enrollment?.reviewedAt ||
              enrollment?.createdAt ||
              null,
          });
        }
      });

    return Array.from(studentMap.values()).sort((a, b) =>
      String(a.name).localeCompare(String(b.name)),
    );
  }, [enrollments]);

  /* ==========================================================
     SEARCH
  ========================================================== */

  const filteredStudents = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return students;
    }

    return students.filter((student) => {
      const text = [
        student.name,
        student.email,
        student.phone,

        ...student.courses.map(
          (course) => course.title,
        ),

        ...student.courses.map(
          (course) => course.category,
        ),
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(keyword);
    });
  }, [students, search]);

  /* ==========================================================
     STATISTICS
  ========================================================== */

  const statistics = useMemo(() => {
    const totalStudents = students.length;

    const totalCourses = students.reduce(
      (total, student) =>
        total + student.courses.length,
      0,
    );

    const activeStudents = students.filter(
      (student) => student.isActive !== false,
    ).length;

    return {
      totalStudents,
      totalCourses,
      activeStudents,
    };
  }, [students]);

  /* ==========================================================
     TOGGLE STUDENT
  ========================================================== */

  const toggleStudent = (studentId) => {
    setExpandedStudent((current) =>
      current === studentId ? null : studentId,
    );
  };

  /* ==========================================================
     LOADING
  ========================================================== */

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />

          <p className="text-sm text-gray-500">
            Loading students...
          </p>
        </div>
      </div>
    );
  }

  /* ==========================================================
     RENDER
  ========================================================== */

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                <GraduationCap size={21} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Student Management
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Students
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Students who have approved course enrollment
              and active course access.
            </p>
          </div>

          <button
            type="button"
            onClick={() => fetchStudents(false)}
            disabled={refreshing}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              size={17}
              className={
                refreshing ? "animate-spin" : ""
              }
            />

            Refresh
          </button>
        </div>

        {/* ====================================================
            ERROR
        ==================================================== */}

        {error && (
          <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">

              <X
                size={19}
                className="mt-0.5 shrink-0 text-red-500"
              />

              <div>
                <p className="font-semibold text-red-700">
                  Unable to load students
                </p>

                <p className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ====================================================
            STATS
        ==================================================== */}

        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* TOTAL STUDENTS */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Students
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {statistics.totalStudents}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={21} />
              </div>
            </div>
          </div>

          {/* ACTIVE STUDENTS */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Students
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {statistics.activeStudents}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <CheckCircle2 size={21} />
              </div>
            </div>
          </div>

          {/* COURSES */}

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Active Course Assignments
                </p>

                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {statistics.totalCourses}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <BookOpen size={21} />
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            SEARCH
        ==================================================== */}

        <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

          <div className="relative">

            <Search
              size={19}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by student name, email, phone or course..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* ====================================================
            EMPTY STATE
        ==================================================== */}

        {filteredStudents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <Users size={26} />
            </div>

            <h3 className="text-lg font-semibold text-gray-900">
              No students found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
              {search
                ? "Try changing your search keywords."
                : "Students will appear here after their enrollment is approved and course access is granted."}
            </p>
          </div>
        ) : (
          /* ==================================================
             STUDENTS TABLE
          ================================================== */

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            <div className="overflow-x-auto">

              <table className="min-w-[950px] w-full">

                <thead className="border-b border-gray-200 bg-gray-50">

                  <tr>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Student
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Contact
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Courses
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Joined
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-500">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">

                  {filteredStudents.map((student) => {

                    const isExpanded =
                      expandedStudent === student.id;

                    return (
                      <React.Fragment
                        key={student.id}
                      >

                        {/* ====================================
                            STUDENT ROW
                        ==================================== */}

                        <tr className="transition hover:bg-gray-50/80">

                          {/* STUDENT */}

                          <td className="px-5 py-4">

                            <div className="flex items-center gap-3">

                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                                {student.name
                                  ?.charAt(0)
                                  ?.toUpperCase() || "S"}
                              </div>

                              <div className="min-w-0">

                                <p className="truncate font-semibold text-gray-900">
                                  {student.name}
                                </p>

                                <p className="mt-0.5 text-xs text-gray-500">
                                  ID:{" "}
                                  {String(
                                    student.id,
                                  ).slice(-8)}
                                </p>

                              </div>
                            </div>
                          </td>

                          {/* CONTACT */}

                          <td className="px-5 py-4">

                            <div className="space-y-1.5">

                              <div className="flex items-center gap-2 text-sm text-gray-700">

                                <Mail
                                  size={14}
                                  className="shrink-0 text-gray-400"
                                />

                                <span>
                                  {student.email}
                                </span>

                              </div>

                              <div className="flex items-center gap-2 text-xs text-gray-500">

                                <Phone
                                  size={13}
                                  className="shrink-0 text-gray-400"
                                />

                                <span>
                                  {student.phone}
                                </span>

                              </div>

                            </div>
                          </td>

                          {/* COURSES */}

                          <td className="px-5 py-4">

                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-blue-700">

                              <BookOpen size={13} />

                              {student.courses.length}

                              {" "}

                              {student.courses.length === 1
                                ? "Course"
                                : "Courses"}

                            </span>

                            {student.courses.length > 0 && (
                              <div className="mt-2 max-w-[300px]">

                                <p className="truncate text-xs text-gray-500">
                                  {student.courses
                                    .map(
                                      (course) =>
                                        course.title,
                                    )
                                    .join(", ")}
                                </p>

                              </div>
                            )}
                          </td>

                          {/* JOINED */}

                          <td className="px-5 py-4">

                            <div className="flex items-center gap-2 text-sm text-gray-600">

                              <CalendarDays
                                size={15}
                                className="text-gray-400"
                              />

                              {formatDate(
                                student.joinedAt,
                              )}

                            </div>
                          </td>

                          {/* STATUS */}

                          <td className="px-5 py-4">

                            <div className="space-y-1.5">

                              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1.5 text-xs font-semibold text-green-700">

                                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                                Active
                              </span>

                              <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400">

                                <ShieldCheck size={12} />

                                Access Granted

                              </div>

                            </div>
                          </td>

                          {/* ACTION */}

                          <td className="px-5 py-4 text-right">

                            <div className="flex justify-end gap-2">

                              <button
                                type="button"
                                onClick={() =>
                                  toggleStudent(
                                    student.id,
                                  )
                                }
                                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                              >

                                {isExpanded ? (
                                  <>
                                    Hide
                                    <ChevronUp size={14} />
                                  </>
                                ) : (
                                  <>
                                    Courses
                                    <ChevronDown size={14} />
                                  </>
                                )}

                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedStudent(
                                    student,
                                  )
                                }
                                className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                              >
                                View
                              </button>

                            </div>
                          </td>
                        </tr>

                        {/* ====================================
                            EXPANDED COURSES
                        ==================================== */}

                        {isExpanded && (
                          <tr>

                            <td
                              colSpan={6}
                              className="bg-gray-50 px-5 py-5"
                            >

                              <div className="rounded-xl border border-gray-200 bg-white p-4">

                                <div className="mb-4 flex items-center justify-between">

                                  <div>
                                    <h3 className="font-semibold text-gray-900">
                                      Assigned Courses
                                    </h3>

                                    <p className="mt-0.5 text-xs text-gray-500">
                                      Courses currently accessible
                                      by {student.name}.
                                    </p>
                                  </div>

                                  <span className="rounded-lg bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                                    {student.courses.length} Active
                                  </span>

                                </div>

                                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

                                  {student.courses.map(
                                    (course) => (
                                      <div
                                        key={`${student.id}-${course.id}`}
                                        className="rounded-xl border border-gray-200 bg-white p-4"
                                      >

                                        <div className="flex gap-3">

                                          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-blue-50 text-blue-600">

                                            {course.thumbnail ? (
                                              <img
                                                src={
                                                  course.thumbnail
                                                }
                                                alt={
                                                  course.title
                                                }
                                                className="h-full w-full object-cover"
                                              />
                                            ) : (
                                              <BookOpen size={19} />
                                            )}

                                          </div>

                                          <div className="min-w-0">

                                            <h4 className="line-clamp-2 text-sm font-semibold text-gray-900">
                                              {course.title}
                                            </h4>

                                            <p className="mt-1 text-xs text-gray-500">

                                              {course.category ||
                                                "Course"}

                                              {course.level
                                                ? ` • ${course.level}`
                                                : ""}

                                            </p>

                                          </div>

                                        </div>

                                        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

                                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600">

                                            <CheckCircle2 size={14} />

                                            Access Granted

                                          </span>

                                          <span className="text-[11px] text-gray-400">
                                            {formatDate(
                                              course.accessGrantedAt,
                                            )}
                                          </span>

                                        </div>

                                      </div>
                                    ),
                                  )}

                                </div>

                              </div>

                            </td>

                          </tr>
                        )}

                      </React.Fragment>
                    );
                  })}

                </tbody>
              </table>
            </div>

            {/* FOOTER */}

            <div className="border-t border-gray-200 bg-gray-50 px-5 py-3">

              <p className="text-xs text-gray-500">

                Showing{" "}

                <span className="font-semibold text-gray-700">
                  {filteredStudents.length}
                </span>

                {" "}of{" "}

                <span className="font-semibold text-gray-700">
                  {students.length}
                </span>

                {" "}active students.

              </p>

            </div>

          </div>
        )}

      </div>

      {/* ======================================================
          STUDENT DETAIL MODAL
      ====================================================== */}

      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() =>
            setSelectedStudent(null)
          }
        >

          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="border-b border-gray-200 px-5 py-5 sm:px-6">

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white">
                    {selectedStudent.name
                      ?.charAt(0)
                      ?.toUpperCase() || "S"}
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      {selectedStudent.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                      Student Profile
                    </p>

                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedStudent(null)
                  }
                  className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <X size={19} />
                </button>

              </div>
            </div>

            {/* MODAL BODY */}

            <div className="space-y-5 p-5 sm:p-6">

              {/* BASIC INFO */}

              <div className="grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">

                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    <Mail size={13} />
                    Email
                  </div>

                  <p className="break-all text-sm font-medium text-gray-900">
                    {selectedStudent.email}
                  </p>

                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">

                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    <Phone size={13} />
                    Phone
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    {selectedStudent.phone}
                  </p>

                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">

                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    <CalendarDays size={13} />
                    Course Access Since
                  </div>

                  <p className="text-sm font-medium text-gray-900">
                    {formatDate(
                      selectedStudent.joinedAt,
                    )}
                  </p>

                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">

                  <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    <CheckCircle2 size={13} />
                    Account Status
                  </div>

                  <p className="text-sm font-semibold text-green-600">
                    Active
                  </p>

                </div>

              </div>

              {/* COURSES */}

              <div>

                <div className="mb-3 flex items-center justify-between">

                  <div>

                    <h3 className="font-bold text-gray-900">
                      Active Courses
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-500">
                      Courses currently accessible by
                      this student.
                    </p>

                  </div>

                  <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-700">
                    {selectedStudent.courses.length}
                  </span>

                </div>

                <div className="space-y-3">

                  {selectedStudent.courses.map(
                    (course) => (
                      <div
                        key={`${selectedStudent.id}-modal-${course.id}`}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
                      >

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100">

                          {course.thumbnail ? (
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <BookOpen
                              size={19}
                              className="text-gray-400"
                            />
                          )}

                        </div>

                        <div className="min-w-0 flex-1">

                          <p className="font-semibold text-gray-900">
                            {course.title}
                          </p>

                          <p className="mt-0.5 text-xs text-gray-500">

                            {course.category ||
                              "Course"}

                            {course.level
                              ? ` • ${course.level}`
                              : ""}

                          </p>

                        </div>

                        <div className="text-right">

                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600">

                            <CheckCircle2 size={13} />

                            Granted

                          </span>

                          <p className="mt-1 text-[10px] text-gray-400">
                            {formatDate(
                              course.accessGrantedAt,
                            )}
                          </p>

                        </div>

                      </div>
                    ),
                  )}

                </div>

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="border-t border-gray-200 bg-gray-50 px-5 py-4 text-right sm:px-6">

              <button
                type="button"
                onClick={() =>
                  setSelectedStudent(null)
                }
                className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}