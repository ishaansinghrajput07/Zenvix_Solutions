import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  User,
  Loader2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { createEnrollment } from "../services/enrollmentService";

// =====================================================
// GET LOGGED-IN USER
// =====================================================

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

// =====================================================
// COMPONENT
// =====================================================

export default function Enrollment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Course ID coming from URL
  // Example:
  // /enrollment?courseId=123456
  const courseId = searchParams.get("courseId");

  const currentUser = useMemo(() => getStoredUser(), []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  // =====================================================
  // FORM
  // =====================================================

  const [formData, setFormData] = useState({
    firstName:
      currentUser?.firstName ||
      currentUser?.name?.split(" ")?.[0] ||
      "",

    lastName:
      currentUser?.lastName ||
      currentUser?.name?.split(" ")?.slice(1).join(" ") ||
      "",

    email: currentUser?.email || "",

    phone:
      currentUser?.phone ||
      currentUser?.mobile ||
      "",

    education: "",

    experience: "",

    careerGoal: "",

    message: "",
  });

  const [errors, setErrors] = useState({});

  // =====================================================
  // HANDLE CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitError("");
    setSubmitSuccess("");
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.education) {
      newErrors.education = "Please select your education.";
    }

    if (!formData.careerGoal.trim()) {
      newErrors.careerGoal =
        "Please tell us your career goal.";
    }

    if (!courseId) {
      setSubmitError(
        "No course was selected. Please go back and select a program."
      );

      return false;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =====================================================
  // SUBMIT ENROLLMENT
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError("");
    setSubmitSuccess("");

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      // =================================================
      // BACKEND PAYLOAD
      // =================================================
      //
      // Backend currently accepts:
      //
      // courseId
      // education
      // experience
      // message
      // phone
      //
      // student name/email are taken from req.user
      // =================================================

      const payload = {
        courseId,

        education: formData.education,

        experience: formData.experience,

        phone: formData.phone.trim(),

        message: formData.message.trim(),
      };

      console.log("Submitting enrollment:", payload);

      // =================================================
      // REAL BACKEND API
      // POST /api/enrollments
      // =================================================

      const response = await createEnrollment(payload);

      console.log("Enrollment API Response:", response);

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to submit enrollment request."
        );
      }

      // =================================================
      // SUCCESS
      // =================================================

      setSubmitSuccess(
        response.message ||
          "Enrollment request submitted successfully."
      );

      // Give user a moment to see success message
      setTimeout(() => {
        navigate("/dashboard", {
          replace: true,
        });
      }, 900);
    } catch (error) {
      console.error("Enrollment submission error:", error);

      // Axios backend response
      const backendMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to submit enrollment request.";

      // =================================================
      // SPECIAL BACKEND ERRORS
      // =================================================

      if (
        error?.response?.data?.code ===
        "ENROLLMENT_PENDING"
      ) {
        setSubmitError(
          "Your enrollment request for this course is already pending."
        );

        return;
      }

      if (
        error?.response?.data?.code ===
        "ALREADY_ENROLLED"
      ) {
        setSubmitError(
          "You already have access to this course."
        );

        return;
      }

      if (
        error?.response?.data?.code ===
        "ACCESS_REVOKED"
      ) {
        setSubmitError(
          "Course access is currently unavailable. Please contact support."
        );

        return;
      }

      setSubmitError(backendMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <main className="min-h-screen bg-surface">
      {/* =====================================================
          TOP BAR
      ====================================================== */}

      <header className="border-b border-border bg-white">
        <div className="shell flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 font-body text-[12px] font-medium text-slate-500 transition-colors hover:text-navy"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />

            Back
          </button>

          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white">
              <Sparkles size={14} />
            </span>

            <span className="font-display text-sm font-semibold text-navy">
              Zenvix
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <ShieldCheck
              size={14}
              className="text-emerald-500"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-400">
              Secure Enrollment
            </span>
          </div>
        </div>
      </header>

      {/* =====================================================
          PAGE
      ====================================================== */}

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Background */}

        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-electric-500/10 blur-3xl"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl"
        />

        <div className="shell relative">
          {/* =================================================
              HEADER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-electric-500">
              <GraduationCap size={12} />

              Program Enrollment
            </span>

            <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Let's start your
              <span className="block text-electric-500">
                career journey.
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl font-body text-[14px] leading-[1.8] text-slate-500">
              Tell us a little about yourself so we can
              understand your goals and help you get the
              most from your Zenvix program.
            </p>
          </motion.div>

          {/* =================================================
              FORM + SIDE PANEL
          ================================================== */}

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            {/* =================================================
                FORM
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
              className="rounded-3xl border border-border bg-white p-6 shadow-lift sm:p-8 lg:p-10"
            >
              <div className="mb-8">
                <p className="eyebrow">
                  Your information
                </p>

                <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
                  Complete your enrollment
                </h2>

                <p className="mt-2 font-body text-[12px] leading-relaxed text-slate-500">
                  Your information will be securely
                  submitted to the Zenvix enrollment team.
                </p>
              </div>

              {/* =================================================
                  BACKEND ERROR
              ================================================== */}

              {submitError && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-[12px] leading-relaxed text-red-600">
                    {submitError}
                  </p>
                </div>
              )}

              {/* =================================================
                  BACKEND SUCCESS
              ================================================== */}

              {submitSuccess && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <p className="text-[12px] leading-relaxed text-emerald-700">
                    {submitSuccess}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* =================================================
                    PERSONAL DETAILS
                ================================================== */}

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <User
                      size={15}
                      className="text-electric-500"
                    />

                    <h3 className="font-body text-[12px] font-semibold text-navy">
                      Personal Details
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* First Name */}

                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`h-12 w-full rounded-xl border bg-white px-4 font-body text-[13px] text-navy outline-none transition-all placeholder:text-slate-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5 ${
                          errors.firstName
                            ? "border-red-300"
                            : "border-border"
                        }`}
                      />

                      {errors.firstName && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={`h-12 w-full rounded-xl border bg-white px-4 font-body text-[13px] text-navy outline-none transition-all placeholder:text-slate-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5 ${
                          errors.lastName
                            ? "border-red-300"
                            : "border-border"
                        }`}
                      />

                      {errors.lastName && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CONTACT
                ================================================== */}

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Mail
                      size={15}
                      className="text-electric-500"
                    />

                    <h3 className="font-body text-[12px] font-semibold text-navy">
                      Contact Information
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Email */}

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`h-12 w-full rounded-xl border bg-white px-4 font-body text-[13px] text-navy outline-none transition-all placeholder:text-slate-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5 ${
                          errors.email
                            ? "border-red-300"
                            : "border-border"
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                      >
                        Phone Number
                      </label>

                      <div className="relative">
                        <Phone
                          size={14}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                        />

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={`h-12 w-full rounded-xl border bg-white pl-10 pr-4 font-body text-[13px] text-navy outline-none transition-all placeholder:text-slate-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5 ${
                            errors.phone
                              ? "border-red-300"
                              : "border-border"
                          }`}
                        />
                      </div>

                      {errors.phone && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* =================================================
                    EDUCATION
                ================================================== */}

                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <GraduationCap
                      size={15}
                      className="text-electric-500"
                    />

                    <h3 className="font-body text-[12px] font-semibold text-navy">
                      Background
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Education */}

                    <div>
                      <label
                        htmlFor="education"
                        className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                      >
                        Education
                      </label>

                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className={`h-12 w-full rounded-xl border bg-white px-4 font-body text-[13px] text-navy outline-none transition-all focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5 ${
                          errors.education
                            ? "border-red-300"
                            : "border-border"
                        }`}
                      >
                        <option value="">
                          Select education
                        </option>

                        <option value="high-school">
                          High School
                        </option>

                        <option value="associate">
                          Associate Degree
                        </option>

                        <option value="bachelors">
                          Bachelor's Degree
                        </option>

                        <option value="masters">
                          Master's Degree
                        </option>

                        <option value="doctorate">
                          Doctorate
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>

                      {errors.education && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.education}
                        </p>
                      )}
                    </div>

                    {/* Experience */}

                    <div>
                      <label
                        htmlFor="experience"
                        className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                      >
                        Experience
                      </label>

                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="h-12 w-full rounded-xl border border-border bg-white px-4 font-body text-[13px] text-navy outline-none transition-all focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5"
                      >
                        <option value="">
                          Select experience
                        </option>

                        <option value="student">
                          Student / Fresher
                        </option>

                        <option value="less-than-1">
                          Less than 1 year
                        </option>

                        <option value="1-3">
                          1–3 years
                        </option>

                        <option value="3-5">
                          3–5 years
                        </option>

                        <option value="5-plus">
                          5+ years
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CAREER GOAL
                ================================================== */}

                <div>
                  <label
                    htmlFor="careerGoal"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                  >
                    Career Goal
                  </label>

                  <input
                    id="careerGoal"
                    name="careerGoal"
                    value={formData.careerGoal}
                    onChange={handleChange}
                    placeholder="What role or career are you aiming for?"
                    className={`h-12 w-full rounded-xl border bg-white px-4 font-body text-[13px] text-navy outline-none transition-all placeholder:text-slate-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5 ${
                      errors.careerGoal
                        ? "border-red-300"
                        : "border-border"
                    }`}
                  />

                  {errors.careerGoal && (
                    <p className="mt-1.5 text-[10px] text-red-500">
                      {errors.careerGoal}
                    </p>
                  )}
                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                  >
                    Anything else?

                    <span className="ml-1 normal-case tracking-normal text-slate-300">
                      Optional
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us anything you'd like our team to know..."
                    className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 font-body text-[13px] leading-relaxed text-navy outline-none transition-all placeholder:text-slate-300 focus:border-electric-500 focus:ring-4 focus:ring-electric-500/5"
                  />
                </div>

                {/* =================================================
                    SUBMIT
                ================================================== */}

                <div className="border-t border-border pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 font-body text-[13px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={16}
                          className="animate-spin"
                        />

                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enrollment

                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* =================================================
                SIDE PANEL
            ================================================== */}

            <motion.aside
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="space-y-4"
            >
              {/* Program */}

              <div className="rounded-3xl border border-border bg-navy p-6 text-white shadow-lift">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <GraduationCap size={20} />
                </div>

                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                  Program
                </p>

                <h3 className="mt-2 font-display text-xl font-semibold">
                  Your selected program
                </h3>

                <p className="mt-3 font-body text-[11.5px] leading-relaxed text-white/55">
                  Your enrollment request will be linked
                  to the program you selected.
                </p>

                {courseId && (
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.06] p-3">
                    <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/35">
                      Program ID
                    </p>

                    <p className="mt-1 break-all font-mono text-[10px] text-white/70">
                      {courseId}
                    </p>
                  </div>
                )}
              </div>

              {/* What happens next */}

              <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <BriefcaseBusiness size={17} />
                  </span>

                  <div>
                    <p className="font-body text-sm font-semibold text-navy">
                      What happens next?
                    </p>

                    <p className="mt-0.5 font-body text-[10px] text-slate-400">
                      Your Zenvix journey
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    "Submit your enrollment information.",
                    "Our team reviews your request.",
                    "Your student dashboard will be updated.",
                    "Continue your learning journey.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-[9px] font-semibold text-slate-500">
                        {index + 1}
                      </span>

                      <p className="pt-1 font-body text-[11.5px] leading-relaxed text-slate-500">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />

                  <div>
                    <p className="font-body text-[12px] font-semibold text-emerald-800">
                      Secure enrollment
                    </p>

                    <p className="mt-1 font-body text-[10.5px] leading-relaxed text-emerald-700/70">
                      Your information is associated with
                      your authenticated Zenvix account.
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}