import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Code2,
  FileText,
  MessageCircle,
  MonitorCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const preparationAreas = [
  {
    id: "technical-interview",
    title: "Technical Interview",
    description:
      "Strengthen your technical concepts and learn how to approach real interview questions with clarity and confidence.",
    icon: Code2,
    accent: "sky",
    tags: ["Core Concepts", "Problem Solving", "Technical"],
  },
  {
    id: "coding-practice",
    title: "Coding Practice",
    description:
      "Practice programming problems and improve your logical thinking, coding approach, and problem-solving ability.",
    icon: BrainCircuit,
    accent: "violet",
    tags: ["DSA", "Logic", "Coding"],
  },
  {
    id: "hr-interview",
    title: "HR Interview",
    description:
      "Prepare for common HR questions and learn how to communicate your experience, strengths, goals, and achievements.",
    icon: Users,
    accent: "cyan",
    tags: ["HR Questions", "Communication", "Confidence"],
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    description:
      "Experience realistic interview scenarios and identify areas where you can improve before the actual interview.",
    icon: Video,
    accent: "emerald",
    tags: ["Practice", "Feedback", "Realistic"],
  },
  {
    id: "resume-review",
    title: "Resume Review",
    description:
      "Make your resume stronger, clearer, and more relevant to the roles you are targeting.",
    icon: FileText,
    accent: "amber",
    tags: ["ATS", "Resume", "Profile"],
  },
  {
    id: "role-preparation",
    title: "Role-Based Preparation",
    description:
      "Prepare according to the technical expectations, responsibilities, and interview patterns of your target role.",
    icon: Target,
    accent: "pink",
    tags: ["Role Focus", "Skills", "Preparation"],
  },
  {
    id: "communication",
    title: "Communication Skills",
    description:
      "Improve the way you explain technical concepts, projects, solutions, and professional experiences.",
    icon: MessageCircle,
    accent: "orange",
    tags: ["Speaking", "Clarity", "Confidence"],
  },
  {
    id: "interview-strategy",
    title: "Interview Strategy",
    description:
      "Learn how to research companies, understand job descriptions, structure answers, and approach interviews strategically.",
    icon: BarChart3,
    accent: "indigo",
    tags: ["Research", "Strategy", "Planning"],
  },
];

const accentStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-600",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-400/20",
    text: "text-cyan-600",
    dot: "bg-cyan-400",
    hover: "group-hover:border-cyan-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    text: "text-violet-600",
    dot: "bg-violet-400",
    hover: "group-hover:border-violet-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
    hover: "group-hover:border-emerald-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    text: "text-amber-600",
    dot: "bg-amber-400",
    hover: "group-hover:border-amber-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    glow: "bg-pink-400/20",
    text: "text-pink-600",
    dot: "bg-pink-400",
    hover: "group-hover:border-pink-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    glow: "bg-orange-400/20",
    text: "text-orange-600",
    dot: "bg-orange-400",
    hover: "group-hover:border-orange-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    glow: "bg-indigo-400/20",
    text: "text-indigo-600",
    dot: "bg-indigo-400",
    hover: "group-hover:border-indigo-200",
  },
};

const interviewStages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the job description, company expectations, required skills, and interview structure.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Build your technical knowledge, revise important concepts, and prepare questions relevant to your target role.",
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Practice coding, technical questions, HR questions, project discussions, and communication.",
  },
  {
    number: "04",
    title: "Perform",
    description:
      "Enter the interview with a clear strategy, stronger communication, and greater confidence.",
  },
];

const interviewChecklist = [
  "Understand the job description",
  "Research the company and role",
  "Prepare your introduction",
  "Revise core technical concepts",
  "Practice coding problems",
  "Prepare project explanations",
  "Practice common HR questions",
  "Prepare questions for the interviewer",
];

const roles = [
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "AI / ML Engineer",
  "Cloud Engineer",
  "Cybersecurity",
];

export default function InterviewPreparation() {
  return (
    <section className="relative w-full bg-white px-[30px] py-[30px] sm:px-[30px] lg:px-[30px]">
      <div className="relative mx-auto w-full max-w-[1400px]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="pt-[50px] text-center"
        >
          <p className="mb-4 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
            Interview Preparation
          </p>

          <h1 className="mx-auto max-w-4xl text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Prepare with purpose.
            <span className="block text-teal-700">
              Interview with confidence.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Structured interview preparation designed to help you strengthen
            technical knowledge, improve communication, practice real
            interview scenarios, and present yourself with confidence.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3.5 text-[14px] font-[900] text-slate-950 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.98]"
            >
              Start Preparation

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href="#preparation-areas"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-[900] text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-950"
            >
              Explore Preparation
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            HERO FEATURE CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Sparkles className="h-4 w-4" />
                  </span>

                  <span className="text-[11px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                    Interview Ready
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-[28px] font-[900] leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[32px]">
                  Turn preparation into confidence.
                </h2>

                <p className="mt-4 max-w-2xl text-[15px] font-medium leading-7 text-slate-500">
                  A good interview is not only about knowing the answer. It is
                  about understanding the problem, explaining your thinking,
                  communicating clearly, and demonstrating how you can create
                  value.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {[
                  {
                    icon: Code2,
                    title: "Technical",
                    color: "text-sky-600",
                    bg: "bg-sky-50",
                  },
                  {
                    icon: Users,
                    title: "HR",
                    color: "text-violet-600",
                    bg: "bg-violet-50",
                  },
                  {
                    icon: Video,
                    title: "Mock",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                  {
                    icon: Target,
                    title: "Strategy",
                    color: "text-amber-600",
                    bg: "bg-amber-50",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex min-w-[105px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-4"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.bg} ${item.color}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="mt-2 text-[10px] font-[900] text-slate-600">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PREPARATION AREAS HEADER
        ====================================================== */}

        <motion.div
          id="preparation-areas"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl pt-[50px] text-center"
        >
          <p className="mb-4 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
            Preparation Areas
          </p>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px]">
            Prepare every part.
            <span className="block text-teal-700">
              Miss nothing important.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Build a complete preparation strategy covering technical,
            behavioral, communication, profile, and role-specific aspects.
          </p>
        </motion.div>

        {/* =====================================================
            PREPARATION GRID
        ====================================================== */}

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preparationAreas.map((area, index) => {
            const Icon = area.icon;
            const styles =
              accentStyles[area.accent] ?? accentStyles.sky;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${styles.hover}`}
                >
                  {/* TOP */}

                  <div className="relative flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.06,
                        rotate: 3,
                      }}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon className="h-[19px] w-[19px]" />
                    </motion.div>

                    <span className="text-[11px] font-[900] tracking-[0.15em] text-slate-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="relative mt-5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                      />

                      <span
                        className={`text-[10px] font-[900] uppercase tracking-[0.18em] ${styles.text}`}
                      >
                        Interview Prep
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                      {area.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[12px] font-medium leading-5 text-slate-500">
                      {area.description}
                    </p>
                  </div>

                  {/* TAGS */}

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-semibold text-slate-500"
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${styles.text}`}
                          strokeWidth={2.5}
                        />

                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER */}

                  <div className="relative mt-auto pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
                      <span className="text-[10px] font-semibold text-slate-400">
                        Interview-focused
                      </span>

                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-1.5 text-[11px] font-[900] text-slate-950"
                      >
                        Get Started

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* ACCENT */}

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            INTERVIEW JOURNEY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl pt-[50px] text-center"
        >
          <p className="mb-4 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
            Our Approach
          </p>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px]">
            From preparation.
            <span className="block text-teal-700">
              To performance.
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {interviewStages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-teal-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
            >
              <span className="text-4xl font-[900] tracking-tight text-slate-100 transition-colors group-hover:text-teal-100">
                {stage.number}
              </span>

              <h3 className="mt-5 text-[18px] font-[900] text-slate-950">
                {stage.title}
              </h3>

              <p className="mt-2 text-[12px] font-medium leading-5 text-slate-500">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            TARGET ROLES
        ====================================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>

            <p className="mt-6 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Role-Based Preparation
            </p>

            <h3 className="mt-4 max-w-lg text-[28px] font-[900] leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[32px]">
              Prepare for the role you actually want.
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-slate-500">
              Your preparation should match the role you are targeting. Focus
              on relevant technical skills, responsibilities, projects, and
              interview expectations.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-[13px] font-[900] text-slate-950 transition hover:bg-yellow-300"
            >
              Discuss Your Goal

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Popular Career Roles
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {roles.map((role) => (
                <div
                  key={role}
                  className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-4 text-center text-[10px] font-semibold text-slate-600 transition hover:border-teal-100 hover:bg-teal-50 hover:text-teal-700"
                >
                  {role}
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <MonitorCheck className="h-5 w-5 shrink-0 text-teal-600" />

              <p className="text-[12px] font-medium leading-5 text-slate-500">
                Preparation should always be aligned with your target role,
                current skill level, and career goals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CHECKLIST
        ====================================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                  Preparation Checklist
                </p>

                <h3 className="mt-1 text-[20px] font-[900] text-slate-950">
                  Before the interview
                </h3>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {interviewChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />

                  <span className="text-[11px] font-semibold leading-5 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Award className="h-5 w-5" />
            </div>

            <h3 className="mt-6 text-[28px] font-[900] leading-[1.15] tracking-[-0.025em] text-slate-950">
              Confidence comes from preparation.
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-slate-500">
              The goal is not to memorize every possible question. The goal is
              to understand your fundamentals, communicate your thinking, and
              approach unfamiliar problems with confidence.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white bg-white p-4">
              <ShieldCheck className="h-5 w-5 shrink-0 text-teal-600" />

              <p className="text-[12px] font-medium leading-5 text-slate-500">
                Practice consistently. Review your mistakes. Improve after
                every interview.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-12"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <Rocket className="h-5 w-5" />
          </div>

          <h2 className="mt-5 text-[28px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[32px]">
            Your next interview starts with today's preparation.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
            Build your preparation strategy, strengthen your skills, and take
            the next step toward your career goals.
          </p>

          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-6 py-3.5 text-[14px] font-[900] text-slate-950 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.98]"
          >
            Start Interview Preparation

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}