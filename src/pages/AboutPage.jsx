import { motion } from "framer-motion";
import {
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
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Build strong foundations through structured, career-focused learning experiences.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Practice",
    description:
      "Turn knowledge into ability through projects, practical work and continuous practice.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Prepare",
    description:
      "Develop the confidence and career readiness needed to approach professional opportunities.",
    icon: ShieldCheck,
  },
];

const accentStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    line: "bg-sky-400",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    line: "bg-violet-400",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    line: "bg-emerald-400",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    line: "bg-amber-400",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-36">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="shell relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/40" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/55 sm:text-xs">
                About Zenvix
              </span>

              <span className="h-px w-10 bg-white/40" />
            </div>

            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.2rem]">
              Learn with purpose.
              <span className="block text-white/35">
                Build your future.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Zenvix is built around a simple idea — learning becomes more
              meaningful when it connects with the future you want to build.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-slate-100"
              >
                Explore Programs

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                Talk to Zenvix
              </Link>
            </div>
          </motion.div>

          {/* Hero bottom cards */}

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3">
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
                    delay: 0.2 + index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[11px] text-white/40">
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
        <div className="shell">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-slate-900" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
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

      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-120px] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-100/60 blur-3xl" />

          <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />
        </div>

        <div className="shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-slate-900" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                Our Mission
              </span>

              <span className="h-px w-9 bg-slate-900" />
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
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
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-shadow duration-500 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                >
                  <div
                    className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${styles.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold tracking-tight">
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

      <section className="bg-white py-24 sm:py-28 lg:py-32">
        <div className="shell">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-slate-900" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                  The Zenvix Journey
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
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
              <div className="absolute bottom-10 left-[25px] top-10 hidden w-px bg-slate-200 sm:block" />

              <div className="space-y-5">
                {journey.map((item, index) => {
                  const Icon = item.icon;

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
                      <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-slate-950 text-white shadow-[0_8px_25px_rgba(15,23,42,0.12)]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="flex-1 rounded-[1.35rem] border border-slate-200 bg-white p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)] sm:p-6">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {item.number}
                          </span>

                          <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>

                        <h3 className="mt-3 text-lg font-semibold tracking-tight">
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

      <section className="bg-slate-950 py-24 sm:py-28 lg:py-32">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-sky-300" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-300">
                  More Than Learning
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Build skills.
                <span className="block text-white/35">
                  Build confidence.
                </span>
                <span className="block">Build momentum.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                A strong career journey needs more than course completion.
                Zenvix brings together learning, practical development and
                career preparation to help learners take meaningful next
                steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <HeartHandshake className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Career Support
                  </p>

                  <p className="mt-1 text-[11px] text-white/35">
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
                    className="flex items-start gap-3 border-b border-white/8 pb-4 last:border-0 last:pb-0"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                    <span className="text-sm leading-6 text-white/60">
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
            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

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

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Contact Zenvix
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}