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
    line: "bg-sky-400",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600 ring-violet-100",
    line: "bg-violet-400",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    line: "bg-emerald-400",
  },
  amber: {
    icon: "bg-amber-50 text-amber-600 ring-amber-100",
    line: "bg-amber-400",
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden bg-white text-slate-950">
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="pt-[50px] pb-[30px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Eyebrow */}

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-teal-700" />

              <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                About Zenvix
              </span>

              <span className="h-px w-9 bg-teal-700" />
            </div>

            {/* Heading */}

            <h1 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
              Learn with purpose.
              <span className="block text-teal-700">
                Build your future.
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-base">
              Zenvix is built around a simple idea — learning becomes more
              meaningful when it connects with the future you want to build.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
              >
                Explore Programs

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-black text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
              >
                Contact Zenvix

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Hero Bottom Cards */}

          <div className="mx-auto mt-[30px] grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Learn",
                text: "Build meaningful skills",
                accent: "sky",
              },
              {
                icon: BrainCircuit,
                title: "Practice",
                text: "Apply what you learn",
                accent: "violet",
              },
              {
                icon: Rocket,
                title: "Grow",
                text: "Move toward your goals",
                accent: "emerald",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const styles = accentStyles[item.accent];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${styles.icon} transition-all duration-300 group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="text-left">
                      <p className="text-[14px] font-black text-slate-950">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[12px] font-medium text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="py-[30px]">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-teal-700" />

                  <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                    Why Zenvix
                  </span>
                </div>

                <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                  Education should move
                  <span className="block text-teal-700">
                    you forward.
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                <p className="text-[15px] font-medium leading-7 text-slate-500 sm:text-base">
                  The modern career landscape changes quickly. Knowing
                  something is no longer enough — learners need the ability to
                  apply knowledge, solve problems and communicate their value.
                </p>

                <p className="text-[15px] font-medium leading-7 text-slate-500 sm:text-base">
                  Zenvix focuses on creating a learning experience that
                  connects knowledge with practical skills and career
                  preparation. The goal is not simply to complete a course, but
                  to help learners become more confident about what comes next.
                </p>

                <div className="pt-1">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[13px] font-bold text-slate-700">
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

        <section className="py-[30px]">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-9 bg-teal-700" />

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Our Mission
                </span>

                <span className="h-px w-9 bg-teal-700" />
              </div>

              <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                Make career learning
                <span className="block text-teal-700">
                  clearer and more practical.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-base">
                We want learners to understand not only what they are
                learning, but why it matters and how it can be applied in the
                real world.
              </p>
            </div>

            {/* Values */}

            <div className="mx-auto mt-[30px] grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                const styles = accentStyles[value.accent];

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${styles.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-[18px] font-black tracking-tight text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-[14px] font-medium leading-6 text-slate-500">
                      {value.description}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.line} transition-transform duration-300 group-hover:scale-x-100`}
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

        <section className="py-[30px]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-teal-700" />

                  <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                    The Zenvix Journey
                  </span>
                </div>

                <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                  A better way to move
                  <span className="block text-teal-700">
                    from learning to action.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-[15px] font-medium leading-7 text-slate-500 sm:text-base">
                  Every learner has a different starting point. Our approach is
                  designed to create a clear progression from discovery to
                  career readiness.
                </p>

                <Link
                  to="/how-it-works"
                  className="group mt-6 inline-flex items-center gap-2 text-[14px] font-black text-slate-950"
                >
                  See how it works

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Journey Cards */}

              <div className="relative">
                <div className="absolute bottom-10 left-[25px] top-10 hidden w-px bg-slate-200 sm:block" />

                <div className="space-y-4">
                  {journey.map((item, index) => {
                    const Icon = item.icon;
                    const styles = accentStyles[item.accent];

                    return (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.07,
                        }}
                        className="group relative flex gap-4"
                      >
                        {/* Icon */}

                        <div
                          className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-4 border-white ${styles.icon} shadow-sm ring-1`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>

                        {/* Content */}

                        <div className="flex-1 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_25px_rgba(15,23,42,0.03)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:shadow-[0_16px_35px_rgba(15,23,42,0.07)] sm:p-6">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-700">
                              {item.number}
                            </span>

                            <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>

                          <h3 className="mt-3 text-[18px] font-black tracking-tight text-slate-950">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[14px] font-medium leading-6 text-slate-500">
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

        <section className="py-[30px]">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-100">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                    More Than Learning
                  </span>
                </div>

                <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                  Build skills.
                  <span className="block text-teal-700">
                    Build confidence.
                  </span>
                  <span className="block">Build momentum.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-base">
                  A strong career journey needs more than course completion.
                  Zenvix brings together learning, practical development and
                  career preparation to help learners take meaningful next
                  steps.
                </p>

                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2.5 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
                >
                  Talk to Zenvix

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Support Card */}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.06)] sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <HeartHandshake className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[15px] font-black text-slate-950">
                      Career Support
                    </p>

                    <p className="mt-1 text-[12px] font-medium text-slate-400">
                      Guidance beyond the classroom
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
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

                      <span className="text-[14px] font-medium leading-6 text-slate-500">
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

        <section className="py-[30px]">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="rounded-[24px] border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_15px_45px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12 lg:px-14 lg:py-14"
            >
              <div className="mb-4 flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-yellow-500" />

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Start Your Journey
                </span>
              </div>

              <h2 className="mx-auto max-w-3xl text-[30px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[38px] lg:text-[44px]">
                Your next chapter can
                <span className="text-teal-700"> start today.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
                Explore the right learning path and take the next step toward
                your career goals with Zenvix.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/programs"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-md"
                >
                  Explore Programs

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-black text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                >
                  Contact Zenvix

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom spacing */}

        <div className="h-[30px]" />
      </div>
    </main>
  );
}