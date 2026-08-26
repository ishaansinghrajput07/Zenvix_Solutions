import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Compass,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Career First",
    description:
      "Learning should have a clear purpose. We focus on skills that help learners move toward real professional opportunities.",
    accent: "sky",
  },
  {
    icon: Lightbulb,
    title: "Practical Learning",
    description:
      "Concepts become valuable when you can apply them. Our approach encourages projects, practice and real-world problem solving.",
    accent: "violet",
  },
  {
    icon: Users,
    title: "Learner Focused",
    description:
      "Every learner starts from a different place. We aim to make the learning journey clear, accessible and supportive.",
    accent: "emerald",
  },
  {
    icon: Rocket,
    title: "Keep Moving Forward",
    description:
      "Career growth is a journey. We help learners build the skills, confidence and preparation needed for their next step.",
    accent: "amber",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your interests, strengths and the career direction you want to explore.",
    icon: Compass,
    accent: "sky",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Build strong foundations through structured, career-focused learning experiences.",
    icon: GraduationCap,
    accent: "violet",
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Turn knowledge into ability through projects, practical work and continuous practice.",
    icon: BrainCircuit,
    accent: "emerald",
  },
  {
    number: "04",
    title: "Prepare",
    description:
      "Develop the confidence and career readiness needed to approach professional opportunities.",
    icon: ShieldCheck,
    accent: "amber",
  },
];

const accentStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600 ring-sky-100",
    glow: "bg-sky-400/20",
    line: "bg-sky-400",
    badge: "bg-sky-50 text-sky-600",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600 ring-violet-100",
    glow: "bg-violet-400/20",
    line: "bg-violet-400",
    badge: "bg-violet-50 text-violet-600",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    glow: "bg-emerald-400/20",
    line: "bg-emerald-400",
    badge: "bg-emerald-50 text-emerald-600",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600 ring-amber-100",
    glow: "bg-amber-400/20",
    line: "bg-amber-400",
    badge: "bg-amber-50 text-amber-600",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50/60 to-violet-50/70 py-8 sm:py-12 lg:py-16">
        {/* Soft background glow */}

        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-sky-200/45 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -35, 0],
              y: [0, 25, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-180px] top-[-100px] h-[500px] w-[500px] rounded-full bg-violet-200/40 blur-3xl"
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        <div className="shell relative">
          {/* Back Button */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-xs font-semibold text-slate-600 shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-slate-300 hover:text-slate-950"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to Home
            </Link>
          </motion.div>

          {/* Hero Content */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto max-w-5xl pt-16 text-center sm:pt-20 lg:pt-24"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-slate-300" />

              <span className="rounded-full border border-sky-100 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-sky-600 shadow-sm backdrop-blur-sm sm:text-xs">
                About Zenvix
              </span>

              <span className="h-px w-10 bg-slate-300" />
            </div>

            <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-[5.2rem]">
              Learn with purpose.
              <span className="block bg-gradient-to-r from-slate-500 via-sky-500 to-violet-500 bg-clip-text text-transparent">
                Build your future.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Zenvix is built around a simple idea — learning becomes more
              meaningful when it connects with the future you want to build.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_40px_rgba(15,23,42,0.2)]"
              >
                Explore Programs

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:text-sky-600"
              >
                Contact Zenvix
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Bottom Cards */}

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-3 sm:mt-20 sm:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Learn",
                text: "Build meaningful skills",
              },
              {
                icon: BrainCircuit,
                title: "Practice",
                text: "Apply what you learn",
              },
              {
                icon: Rocket,
                title: "Grow",
                text: "Move toward your goals",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_15px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-950">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="relative bg-white py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-sky-50 blur-3xl" />

        <div className="shell relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-sky-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-600">
                  Why Zenvix
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                Education should move
                <span className="block text-slate-400">
                  you forward.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <p className="text-base leading-8 text-slate-600">
                The modern career landscape changes quickly. Knowing something
                is no longer enough — learners need the ability to apply
                knowledge, solve problems and communicate their value.
              </p>

              <p className="text-base leading-8 text-slate-600">
                Zenvix focuses on creating a learning experience that connects
                knowledge with practical skills and career preparation. The
                goal is not simply to complete a course, but to help learners
                become more confident about what comes next.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Learn. Build. Get Ready.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/60 py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-120px] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-100/70 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-violet-100/70 blur-3xl"
          />
        </div>

        <div className="shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-sky-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-600">
                Our Mission
              </span>

              <span className="h-px w-9 bg-sky-400" />
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
              Make career learning
              <span className="block text-slate-400">
                clearer and more practical.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              We want learners to understand not only what they are learning,
              but why it matters and how it can be applied in the real world.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              const styles = accentStyles[value.accent];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -7 }}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.045)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_22px_50px_rgba(15,23,42,0.1)]"
                >
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${styles.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${styles.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-slate-950">
                    {value.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.line} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ====================================================== */}

      <section className="relative bg-white py-24 sm:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-sky-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-600">
                  The Zenvix Journey
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
                A better way to move
                <span className="block text-slate-400">
                  from learning to action.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                Every learner has a different starting point. Our approach is
                designed to create a clear progression from discovery to
                career readiness.
              </p>

              <Link
                to="/how-it-works"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                See how it works

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="relative">
              {/* Timeline */}

              <div className="absolute bottom-10 left-[25px] top-10 hidden w-px bg-gradient-to-b from-sky-200 via-violet-200 to-emerald-200 sm:block" />

              <div className="space-y-5">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  const styles = accentStyles[item.accent];

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.08,
                      }}
                      className="group relative flex gap-5"
                    >
                      <div
                        className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-white ${styles.icon} shadow-[0_8px_25px_rgba(15,23,42,0.1)] ring-1`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="flex-1 rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.025)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-200 group-hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)] sm:p-6">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {item.number}
                          </span>

                          <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>

                        <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-violet-50 py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-150px] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-200/40 blur-3xl" />

          <div className="absolute right-[-150px] top-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        </div>

        <div className="shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-sky-100">
                  <Sparkles className="h-4 w-4 text-sky-500" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-600">
                  More Than Learning
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
                Build skills.
                <span className="block text-slate-400">
                  Build confidence.
                </span>
                <span className="block">Build momentum.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                A strong career journey needs more than course completion.
                Zenvix brings together learning, practical development and
                career preparation to help learners take meaningful next
                steps.
              </p>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Talk to Zenvix

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/90 bg-white/80 p-7 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                  <HeartHandshake className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Career Support
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Guidance beyond the classroom
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  "Structured learning paths",
                  "Practical projects and skill development",
                  "Interview and career preparation",
                  "Guidance for the next professional step",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
        <div className="shell">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 px-7 py-12 text-center shadow-[0_30px_80px_rgba(15,23,42,0.14)] sm:px-12 sm:py-16"
          >
            {/* CTA Glow */}

            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-200px] left-[-100px] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-300" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-300">
                  Start Your Journey
                </span>
              </div>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Your next chapter can
                <span className="text-white/35"> start today.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55">
                Explore the right learning path and take the next step toward
                your career goals with Zenvix.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/programs"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100"
                >
                  Explore Programs

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Contact Zenvix

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}