import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  GraduationCap,
  Laptop,
  MapPin,
  Send,
  Sparkles,
  Target,
  Users,
  BriefcaseBusiness,
  Layers3,
  BookOpen,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { programs } from "../data/programs.js";

// =========================================================
// ACCENT COLORS
// =========================================================

const accentStyles = {
  electric: {
    icon: "bg-sky-50 text-sky-600",
    soft: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
  },
  sky: {
    icon: "bg-sky-50 text-sky-600",
    soft: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    soft: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-200",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    soft: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    soft: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600",
    soft: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
  },
  pink: {
    icon: "bg-pink-50 text-pink-600",
    soft: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    soft: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
  },
  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    soft: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
  },
  slate: {
    icon: "bg-slate-100 text-slate-700",
    soft: "bg-slate-50",
    text: "text-slate-700",
    border: "border-slate-200",
  },
};

// =========================================================
// INITIAL FORM
// =========================================================

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  education: "",
  experience: "",
};

// =========================================================
// COMPONENT
// =========================================================

export default function ProgramDetails() {
  // =======================================================
  // ROUTE PARAMETER
  // =======================================================

  const params = useParams();

  const programId = params.programId || params.id || params.slug;

  // =======================================================
  // FIND PROGRAM FROM LOCAL DATA
  // NO BACKEND
  // =======================================================

  const program = useMemo(() => {
    if (!programId) return null;

    const decodedId = decodeURIComponent(programId);

    return (
      programs.find(
        (item) => String(item.id) === String(decodedId)
      ) ||
      programs.find(
        (item) => String(item.slug) === String(decodedId)
      )
    );
  }, [programId]);

  // =======================================================
  // FORM STATE
  // =======================================================

  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // =======================================================
  // PROGRAM NOT FOUND
  // =======================================================

  if (!program) {
    return (
      <main className="min-h-screen bg-white">
        <section className="px-[30px] py-[30px]">
          <div className="pt-[50px]">
            <div className="mx-auto max-w-3xl rounded-[1.35rem] border border-slate-200 bg-white p-8 text-center shadow-[0_15px_45px_rgba(15,23,42,0.06)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
                <Sparkles
                  size={22}
                  className="text-slate-400"
                />
              </div>

              <h1 className="mt-5 text-[34px] font-[900] leading-tight tracking-[-0.025em] text-slate-950">
                Program not found
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-[15px] font-semibold leading-7 text-slate-500">
                The program you're looking for doesn't exist
                or may have been removed.
              </p>

              <Link
                to="/programs"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-[13px] font-[900] text-black transition hover:bg-yellow-300"
              >
                <ArrowLeft size={15} />
                Back to Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // =======================================================
  // ACCENT
  // =======================================================

  const styles =
    accentStyles[program.accent] ?? accentStyles.electric;

  // =======================================================
  // SAFE DATA
  // =======================================================

  const skills = Array.isArray(program.skills)
    ? program.skills
    : [];

  const curriculum = Array.isArray(program.curriculum)
    ? program.curriculum
    : [];

  const careerPaths = Array.isArray(program.careerPaths)
    ? program.careerPaths
    : [];

  const support = Array.isArray(program.support)
    ? program.support
    : [];

  const technologies = Array.isArray(program.technologies)
    ? program.technologies
    : [];

  // =======================================================
  // EXTRA DATA
  // =======================================================

  const learningOutcomes =
    program.learningOutcomes?.length > 0
      ? program.learningOutcomes
      : [
          "Build practical, job-ready skills",
          "Work on real-world projects",
          "Develop a professional portfolio",
          "Prepare for technical interviews",
          "Understand modern industry workflows",
          "Gain confidence for career opportunities",
        ];

  const projects =
    program.projects?.length > 0
      ? program.projects
      : [
          "Real-world portfolio project",
          "Hands-on practical assignments",
          "Industry-style capstone project",
        ];

  const reasons = [
    {
      icon: Target,
      title: "Career Focused",
      description:
        "Learn skills aligned with practical career opportunities and modern industry requirements.",
      color: "bg-violet-50 text-violet-600",
    },
    {
      icon: Laptop,
      title: "Hands-on Learning",
      description:
        "Practice concepts through projects, assignments and real-world problem solving.",
      color: "bg-sky-50 text-sky-600",
    },
    {
      icon: BriefcaseBusiness,
      title: "Portfolio Ready",
      description:
        "Build practical work that can strengthen your resume, portfolio and interview profile.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Users,
      title: "Career Support",
      description:
        "Get guidance around resumes, interviews, career planning and professional development.",
      color: "bg-amber-50 text-amber-600",
    },
  ];

  // =======================================================
  // INPUT HANDLER
  // =======================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // =======================================================
  // SUBMIT
  // =======================================================

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.city.trim() ||
      !form.state.trim() ||
      !form.education.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    const phoneRegex =
      /^[0-9+\-\s()]{8,18}$/;

    if (!phoneRegex.test(form.phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }

    const enrollment = {
      id: `ZEN-${Date.now()}`,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      state: form.state.trim(),
      education: form.education.trim(),
      experience: form.experience.trim(),
      programId: program.id,
      programName: program.name,
      category: program.category || "",
      submittedAt: new Date().toISOString(),
      status: "New",
      source: "Program Enrollment Form",
    };

    try {
      const existingData =
        localStorage.getItem("zenvix_enrollments");

      let existingEnrollments = [];

      try {
        existingEnrollments = existingData
          ? JSON.parse(existingData)
          : [];
      } catch {
        existingEnrollments = [];
      }

      if (!Array.isArray(existingEnrollments)) {
        existingEnrollments = [];
      }

      const updatedEnrollments = [
        ...existingEnrollments,
        enrollment,
      ];

      localStorage.setItem(
        "zenvix_enrollments",
        JSON.stringify(updatedEnrollments)
      );

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch (storageError) {
      console.error("LocalStorage error:", storageError);

      setError(
        "Unable to save your enrollment on this device. Please try again."
      );
    }
  };

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <main className="bg-white">
      {/* =================================================
          HERO
      ================================================== */}

      <section className="bg-white px-[30px] py-[30px]">
        <div className="pt-[50px]">
          <Link
            to="/programs"
            className="group inline-flex items-center gap-2 text-[12px] font-[900] text-slate-500 transition hover:text-slate-950"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            All Programs
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-slate-900" />

                <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                  {program.category || "Career Program"}
                </p>
              </div>

              <h1 className="max-w-5xl text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[56px]">
                {program.name}
              </h1>

              <p className="mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
                {program.overview ||
                  program.description ||
                  "Build practical skills through structured learning and career-focused training."}
              </p>

              {/* QUICK STATS */}

              <div className="mt-7 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                <MiniStat
                  icon={Clock3}
                  label="Duration"
                  value={program.duration || "Flexible"}
                  color="text-sky-600 bg-sky-50"
                />

                <MiniStat
                  icon={GraduationCap}
                  label="Level"
                  value={program.level || "All Levels"}
                  color="text-violet-600 bg-violet-50"
                />

                <MiniStat
                  icon={Laptop}
                  label="Mode"
                  value={program.mode || "Online"}
                  color="text-emerald-600 bg-emerald-50"
                />

                <MiniStat
                  icon={Award}
                  label="Support"
                  value="Included"
                  color="text-amber-600 bg-amber-50"
                />
              </div>

              {/* SKILLS */}

              {skills.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {skills.slice(0, 8).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-[800] text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}

              <a
                href="#enroll"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-yellow-400 px-5 py-3.5 text-[13px] font-[900] text-black shadow-[0_10px_25px_rgba(250,204,21,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                Enroll Now

                <ArrowRight
                  size={15}
                  strokeWidth={2.8}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
                >
                  <GraduationCap
                    className="h-6 w-6"
                    strokeWidth={2.4}
                  />
                </div>

                <span className="rounded-full bg-yellow-100 px-3 py-1.5 text-[9px] font-[900] uppercase tracking-[0.12em] text-yellow-700">
                  Career Ready
                </span>
              </div>

              <h3 className="mt-6 text-[24px] font-[900] leading-tight tracking-[-0.02em] text-slate-950">
                Program snapshot
              </h3>

              <p className="mt-3 text-[12px] font-semibold leading-6 text-slate-500">
                A structured learning experience designed to
                help you move from learning to practical career
                preparation.
              </p>

              <div className="mt-6 space-y-2.5">
                <InfoRow
                  icon={Clock3}
                  label="Duration"
                  value={program.duration || "Flexible"}
                />

                <InfoRow
                  icon={GraduationCap}
                  label="Level"
                  value={program.level || "All Levels"}
                />

                <InfoRow
                  icon={MapPin}
                  label="Learning Mode"
                  value={program.mode || "Online"}
                />

                <InfoRow
                  icon={BookOpen}
                  label="Language"
                  value={program.language || "English"}
                />

                <InfoRow
                  icon={Users}
                  label="Career Support"
                  value="Included"
                />
              </div>

              <div
                className={`mt-6 rounded-xl ${styles.soft} p-4`}
              >
                <p className="text-[10px] font-[900] uppercase tracking-[0.16em] text-slate-500">
                  Career Focus
                </p>

                <p className="mt-1 text-[13px] font-[900] leading-5 text-slate-950">
                  Skills + Projects + Interview Preparation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          WHAT YOU WILL LEARN
      ================================================== */}

      <section className="bg-white px-[30px] py-[30px]">
        <div className="pt-[50px]">
          <SectionHeading
            eyebrow="What You'll Learn"
            title="Build skills that"
            muted="matter."
            description="Follow a structured learning path that combines concepts, practical work and career preparation."
          />

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {learningOutcomes.map((item, index) => (
              <div
                key={item}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${styles.icon}`}
                  >
                    <Check
                      className="h-4 w-4"
                      strokeWidth={3}
                    />
                  </div>

                  <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[13px] font-[900] leading-6 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CURRICULUM
      ================================================== */}

      <section className="bg-white px-[30px] py-[30px]">
        <div className="pt-[50px]">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            {/* CURRICULUM */}

            <div>
              <SectionHeading
                eyebrow="Program Curriculum"
                title="Learn by"
                muted="doing."
                description="Move through practical modules designed around the skills you need to apply your knowledge with confidence."
              />

              <div className="mt-8 space-y-3">
                {curriculum.length > 0 ? (
                  curriculum.map((item, index) => (
                    <div
                      key={item}
                      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
                      >
                        <span className="text-[10px] font-[900]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex-1">
                        <span className="text-[9px] font-[900] uppercase tracking-[0.15em] text-yellow-500">
                          Module{" "}
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="mt-1.5 text-[13px] font-[800] leading-6 text-slate-800">
                          {item}
                        </p>
                      </div>

                      <ArrowRight
                        className="mt-2 h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </div>
                  ))
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-[13px] font-semibold leading-6 text-slate-500">
                      This program is designed around practical,
                      career-focused skills.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CAREER PATH */}

            <div>
              <div className="rounded-[1.35rem] border border-slate-200 bg-[#EEF3FA] p-6">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                >
                  <BriefcaseBusiness
                    className="h-5 w-5"
                    strokeWidth={2.4}
                  />
                </div>

                <h3 className="mt-5 text-[24px] font-[900] tracking-[-0.02em] text-slate-950">
                  Career paths
                </h3>

                <p className="mt-3 text-[12px] font-semibold leading-6 text-slate-500">
                  Explore professional roles where these skills
                  can be applied.
                </p>

                <div className="mt-5 space-y-2">
                  {careerPaths.length > 0 ? (
                    careerPaths.map((career) => (
                      <div
                        key={career}
                        className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-3"
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${styles.text}`}
                          strokeWidth={2.5}
                        />

                        <span className="text-[11px] font-[800] text-slate-700">
                          {career}
                        </span>
                      </div>
                    ))
                  ) : (
                    [
                      "Junior Developer",
                      "Software Engineer",
                      "Technical Specialist",
                      "Technology Associate",
                    ].map((career) => (
                      <div
                        key={career}
                        className="flex items-center gap-2.5 rounded-lg bg-white px-3 py-3"
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${styles.text}`}
                          strokeWidth={2.5}
                        />

                        <span className="text-[11px] font-[800] text-slate-700">
                          {career}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          PROJECTS
      ================================================== */}

      <section className="bg-white px-[30px] py-[30px]">
        <div className="pt-[50px]">
          <SectionHeading
            eyebrow="Practical Experience"
            title="Build a portfolio that"
            muted="speaks."
            description="Theory becomes valuable when you can demonstrate what you can actually build."
          />

          <div className="mt-9 grid gap-3 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project}
                className="rounded-[1.15rem] border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}
                  >
                    {index === 0 ? (
                      <Code2 className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Layers3 className="h-5 w-5" />
                    ) : (
                      <Rocket className="h-5 w-5" />
                    )}
                  </div>

                  <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-[13px] font-[900] leading-6 text-slate-800">
                  {project}
                </p>

                <p className="mt-2 text-[11px] font-semibold leading-5 text-slate-500">
                  Practical work designed to reinforce your
                  learning and create portfolio value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          TECHNOLOGIES
      ================================================== */}

      {technologies.length > 0 && (
        <section className="bg-white px-[30px] py-[30px]">
          <div className="pt-[50px]">
            <div className="rounded-[1.35rem] border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                    Technology Stack
                  </p>

                  <h2 className="mt-3 text-[30px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[38px]">
                    Tools you'll{" "}
                    <span className="text-slate-400">
                      work with.
                    </span>
                  </h2>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                  <Code2 className="h-5 w-5 text-teal-700" />
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-[800] text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          WHY THIS PROGRAM
      ================================================== */}

      <section className="bg-white px-[30px] py-[30px]">
        <div className="pt-[50px]">
          <SectionHeading
            eyebrow="Why This Program"
            title="Designed for your"
            muted="next step."
            description="A practical approach that connects learning with projects, portfolio development and career preparation."
          />

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="rounded-[1.15rem] border border-slate-200 bg-white p-5"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${reason.color}`}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={2.3}
                    />
                  </div>

                  <h3 className="mt-5 text-[16px] font-[900] text-slate-950">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-[11px] font-semibold leading-5 text-slate-500">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          CAREER SUPPORT
      ================================================== */}

      <section className="bg-white px-[30px] py-[30px]">
        <div className="pt-[50px]">
          <div className="text-center">
            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Career Support
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-[32px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[40px]">
              Learn. Build.{" "}
              <span className="text-slate-400">
                Prepare.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] font-semibold leading-7 text-slate-500">
              Support designed to help you turn your learning
              into a stronger professional profile.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {(support.length > 0
              ? support
              : [
                  "Practical learning",
                  "Hands-on projects",
                  "Resume support",
                  "Interview preparation",
                  "Career guidance",
                ]
            ).map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`mt-4 flex h-9 w-9 items-center justify-center rounded-lg ${styles.icon}`}
                >
                  <Check
                    className="h-4 w-4"
                    strokeWidth={3}
                  />
                </div>

                <p className="mt-4 text-[12px] font-[900] leading-5 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          ENROLLMENT
      ================================================== */}

      <section
        id="enroll"
        className="bg-white px-[30px] py-[30px]"
      >
        <div className="pt-[50px] pb-[30px]">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            {/* LEFT */}

            <div className="rounded-[1.35rem] bg-slate-950 p-6 lg:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <GraduationCap
                  className="h-5 w-5"
                  strokeWidth={2.5}
                />
              </div>

              <p className="mt-6 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-400">
                Start Your Journey
              </p>

              <h2 className="mt-4 text-[32px] font-[900] leading-[1.1] tracking-[-0.025em] text-white sm:text-[40px]">
                Ready to build your{" "}
                <span className="text-slate-400">
                  next chapter?
                </span>
              </h2>

              <p className="mt-5 text-[13px] font-semibold leading-6 text-slate-300">
                Take the next step toward building practical
                skills, projects and a stronger career profile.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Career-focused curriculum",
                  "Hands-on projects",
                  "Resume & portfolio support",
                  "Interview preparation",
                  "Career guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-yellow-400"
                      strokeWidth={2.5}
                    />

                    <span className="text-[11px] font-[800] text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />

                  <div>
                    <p className="text-[11px] font-[900] text-white">
                      Simple & secure enrollment
                    </p>

                    <p className="mt-1 text-[10px] font-semibold leading-5 text-slate-400">
                      Your request is saved locally in this demo
                      setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,0.05)] sm:p-7">
              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                    <CheckCircle2
                      className="h-8 w-8 text-emerald-600"
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="mt-6 text-[28px] font-[900] tracking-[-0.02em] text-slate-950">
                    Enrollment saved!
                  </h3>

                  <p className="mt-3 max-w-md text-[13px] font-semibold leading-6 text-slate-500">
                    Your enrollment request for{" "}
                    <span className="font-[900] text-slate-950">
                      {program.name}
                    </span>{" "}
                    has been saved locally.
                  </p>

                  <div className="mt-6 rounded-xl bg-slate-50 px-5 py-4">
                    <p className="text-[10px] font-[900] uppercase tracking-[0.15em] text-slate-400">
                      Next Step
                    </p>

                    <p className="mt-1 text-[12px] font-[800] text-slate-700">
                      Your enrollment details are now available
                      in this browser.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 text-[12px] font-[900] text-black transition hover:bg-yellow-300"
                  >
                    Submit Another Enrollment
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                      Enrollment Form
                    </p>

                    <h3 className="mt-3 text-[28px] font-[900] leading-tight tracking-[-0.02em] text-slate-950">
                      Apply for {program.name}
                    </h3>

                    <p className="mt-3 max-w-2xl text-[12px] font-semibold leading-6 text-slate-500">
                      Tell us a little about yourself and submit
                      your enrollment request.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-7"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />

                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />

                      <FormField
                        label="Phone Number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                      />

                      <FormField
                        label="City"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="New York"
                        required
                      />

                      <FormField
                        label="State"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        placeholder="California"
                        required
                      />

                      <FormField
                        label="Education"
                        name="education"
                        value={form.education}
                        onChange={handleChange}
                        placeholder="Bachelor's / Master's / High School"
                        required
                      />

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="experience"
                          className="text-[11px] font-[900] text-slate-700"
                        >
                          Experience
                        </label>

                        <textarea
                          id="experience"
                          name="experience"
                          value={form.experience}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us about your work experience, if any."
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[12px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                        <p className="text-[11px] font-[800] leading-5 text-red-600">
                          {error}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-yellow-400 px-5 py-3.5 text-[13px] font-[900] text-black shadow-[0_10px_25px_rgba(250,204,21,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
                    >
                      <Send
                        size={15}
                        strokeWidth={2.8}
                      />

                      Submit Enrollment

                      <ArrowRight
                        size={15}
                        strokeWidth={2.8}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="mt-4 text-center text-[10px] font-semibold leading-5 text-slate-400">
                      By submitting this form, you agree to be
                      contacted regarding this program.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// =========================================================
// SECTION HEADING
// =========================================================

function SectionHeading({
  eyebrow,
  title,
  muted,
  description,
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-slate-900" />

        <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-[32px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[40px] lg:text-[46px]">
        {title}{" "}
        <span className="text-slate-400">
          {muted}
        </span>
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-[14px] font-semibold leading-7 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

// =========================================================
// MINI STAT
// =========================================================

function MiniStat({
  icon: Icon,
  label,
  value,
  color,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex items-center gap-2.5">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color}`}
        >
          <Icon
            className="h-4 w-4"
            strokeWidth={2.4}
          />
        </div>

        <div className="min-w-0">
          <p className="text-[8px] font-[900] uppercase tracking-[0.1em] text-slate-400">
            {label}
          </p>

          <p className="mt-0.5 truncate text-[10px] font-[900] text-slate-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// INFO ROW
// =========================================================

function InfoRow({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
        <Icon
          className="h-4 w-4 text-teal-700"
          strokeWidth={2.4}
        />
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-[900] uppercase tracking-[0.12em] text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 truncate text-[11px] font-[900] text-slate-800">
          {value || "Not specified"}
        </p>
      </div>
    </div>
  );
}

// =========================================================
// FORM FIELD
// =========================================================

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-[900] text-slate-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[12px] font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
      />
    </div>
  );
}