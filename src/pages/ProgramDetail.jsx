import { Link, useParams } from "react-router-dom";
import { useState } from "react";
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
} from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ApplyProgramModal from "../components/programs/ApplyProgramModal.jsx";
import { programs } from "../data/programs.js";

const accentStyles = {
  electric: {
    text: "text-electric-500",
    bg: "bg-electric-500/10",
    border: "border-electric-500/20",
    gradient: "from-electric-500/10 via-transparent to-transparent",
  },

  cyan: {
    text: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/10 via-transparent to-transparent",
  },

  violet: {
    text: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    gradient: "from-violet-500/10 via-transparent to-transparent",
  },

  emerald: {
    text: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
  },
};

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

const curriculum = [
  "Core concepts and fundamentals",
  "Hands-on technical training",
  "Real-world project development",
  "Portfolio building",
  "Resume preparation",
  "Interview preparation",
  "Mock interviews and feedback",
  "Career guidance and job preparation",
];

function getProgramById(id) {
  return programs.find((program) => program.id === id);
}

export default function ProgramDetail() {
  const { id } = useParams();

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const program = getProgramById(id);

  /* =====================================================
      PROGRAM NOT FOUND
  ====================================================== */

  if (!program) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-surface px-4 pt-[140px]">
          <div className="shell py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5">
              <GraduationCap size={24} className="text-navy" />
            </div>

            <h1 className="mt-5 font-display text-3xl font-semibold text-navy">
              Program not found
            </h1>

            <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-slate-500">
              The program you're looking for may have been moved or is no
              longer available.
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

  const styles =
    accentStyles[program.accent] ?? accentStyles.electric;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden pt-[120px] pb-16 sm:pt-[140px] sm:pb-20">

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >

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

            <Link
              to="/programs"
              className="mb-8 inline-flex items-center gap-2 font-body text-[12px] font-medium text-slate-500 transition-colors hover:text-navy"
            >
              <ArrowLeft size={14} />
              Back to all programs
            </Link>

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

              {/* =================================================
                  LEFT
              ================================================== */}

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
                    className={`rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.1em] uppercase ${styles.bg} ${styles.text}`}
                  >
                    Career Program
                  </span>

                  <span className="rounded-full border border-border bg-white px-3 py-1.5 font-mono text-[9px] tracking-[0.1em] text-slate-500 uppercase">
                    Job Ready
                  </span>

                </div>

                <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[58px]">
                  Become confident in{" "}
                  <span className={styles.text}>
                    {program.name}.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl font-body text-[15px] leading-[1.8] text-slate-600 sm:text-[16px]">
                  {program.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  {/* =================================================
                      APPLY BUTTON → MODAL
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() => setIsApplyModalOpen(true)}
                    className="btn-primary group"
                  >
                    Apply for Program

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>

                  <a
                    href="#curriculum"
                    className="btn-secondary"
                  >
                    Explore Curriculum
                  </a>

                </div>

              </motion.div>

              {/* =================================================
                  RIGHT OVERVIEW
              ================================================== */}

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

                  <div
                    className={`h-1 bg-gradient-to-r ${styles.gradient}`}
                  />

                  <div className="p-6 sm:p-7">

                    <div className="flex items-center justify-between">

                      <span className="eyebrow">
                        Program overview
                      </span>

                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.bg} ${styles.text}`}
                      >
                        <Sparkles size={17} />
                      </span>

                    </div>

                    <h2 className="mt-3 font-display text-xl font-semibold text-navy">
                      {program.name}
                    </h2>

                    <div className="mt-6 grid grid-cols-2 gap-3">

                      <div className="rounded-xl border border-border bg-surface p-4">

                        <Clock3
                          size={16}
                          className="text-slate-400"
                        />

                        <p className="mt-2 font-mono text-[10px] text-slate-400 uppercase">
                          Duration
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {program.duration}
                        </p>

                      </div>

                      <div className="rounded-xl border border-border bg-surface p-4">

                        <FolderKanban
                          size={16}
                          className="text-slate-400"
                        />

                        <p className="mt-2 font-mono text-[10px] text-slate-400 uppercase">
                          Projects
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {program.projects} Projects
                        </p>

                      </div>

                      <div className="rounded-xl border border-border bg-surface p-4">

                        <GraduationCap
                          size={16}
                          className="text-slate-400"
                        />

                        <p className="mt-2 font-mono text-[10px] text-slate-400 uppercase">
                          Level
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          {program.level}
                        </p>

                      </div>

                      <div className="rounded-xl border border-border bg-surface p-4">

                        <BriefcaseBusiness
                          size={16}
                          className="text-slate-400"
                        />

                        <p className="mt-2 font-mono text-[10px] text-slate-400 uppercase">
                          Outcome
                        </p>

                        <p className="mt-1 font-body text-sm font-semibold text-navy">
                          Career Ready
                        </p>

                      </div>

                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">

                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-white px-2.5 py-1.5 font-mono text-[9.5px] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

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

              <p className="eyebrow mb-3">
                More than a course
              </p>

              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Learn. Build. Prepare.

                <span className="block">
                  Move toward your career.
                </span>
              </h2>

              <p className="mt-4 font-body text-[14px] leading-relaxed text-slate-500">
                Zenvix combines technical learning with practical
                projects and career preparation so your learning
                journey doesn't stop when the course ends.
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

        <section
          id="curriculum"
          className="shell py-20 sm:py-24"
        >

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

            <div>

              <p className="eyebrow mb-3">
                What you'll experience
              </p>

              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Built around practical career outcomes.
              </h2>

              <p className="mt-4 max-w-lg font-body text-[14px] leading-[1.8] text-slate-500">
                Every part of the program is designed to help
                you move from learning concepts to demonstrating
                real-world capability.
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
                    key={item}
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
            CAREER SUPPORT
        ====================================================== */}

        <section className="bg-navy py-20 sm:py-24">

          <div className="shell">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">

              <div>

                <p className="font-mono text-[10px] tracking-[0.16em] text-white/40 uppercase">
                  Career Support
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Your journey doesn't

                  <span className="block text-white/60">
                    end with the final lesson.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl font-body text-[14px] leading-[1.8] text-white/60">
                  Prepare for the transition from learner to
                  professional with structured career guidance,
                  portfolio development, interview preparation,
                  and job-search support.
                </p>

                {/* APPLY MODAL */}

                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(true)}
                  className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-body text-[13px] font-semibold text-navy transition-transform hover:-translate-y-0.5"
                >
                  Start Your Journey

                  <ArrowRight size={15} />
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

                    <CheckCircle2
                      size={17}
                      className="text-emerald-400"
                    />

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

        <section
          id="apply"
          className="shell py-20 sm:py-24"
        >

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

              <p className="eyebrow mt-5">
                Ready to take the next step?
              </p>

              <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Start building the skills your future needs.
              </h2>

              <p className="mx-auto mt-4 max-w-xl font-body text-[14px] leading-relaxed text-slate-500">
                Connect with the Zenvix team to learn more about{" "}
                {program.name} and find the right path for your
                career goals.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

                {/* =================================================
                    TALK TO ADVISOR → MODAL
                ================================================== */}

                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(true)}
                  className="btn-primary"
                >
                  Talk to an Advisor

                  <ArrowRight size={16} />
                </button>

                <Link
                  to="/programs"
                  className="btn-secondary"
                >
                  Explore Other Programs
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          APPLY PROGRAM MODAL
      ====================================================== */}

      <ApplyProgramModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        program={program}
      />

      <Footer />
    </>
  );
}