import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    shortTitle: "Choose",
    description:
      "Explore career-focused courses and choose a learning path that matches your goals, interests and future ambitions.",
    icon: Target,
    color: "sky",
    label: "START",
    points: [
      "Explore career-focused programs",
      "Understand different career paths",
      "Choose a direction aligned with your goals",
    ],
  },
  {
    number: "02",
    title: "Learn With Purpose",
    shortTitle: "Learn",
    description:
      "Build your knowledge through structured learning designed to help you understand and apply the skills that matter.",
    icon: GraduationCap,
    color: "violet",
    label: "LEARN",
    points: [
      "Learn structured concepts",
      "Build practical technical skills",
      "Strengthen your fundamentals",
    ],
  },
  {
    number: "03",
    title: "Train & Get Ready",
    shortTitle: "Prepare",
    description:
      "Put your knowledge into practice with hands-on training, projects, career preparation and real-world guidance.",
    icon: Sparkles,
    color: "amber",
    label: "PREPARE",
    points: [
      "Practice through hands-on work",
      "Build projects and practical experience",
      "Prepare for interviews and opportunities",
    ],
  },
  {
    number: "04",
    title: "Move Toward Your Career",
    shortTitle: "Launch",
    description:
      "Build confidence, showcase your skills and take the next step toward your professional career with greater clarity.",
    icon: BriefcaseBusiness,
    color: "emerald",
    label: "LAUNCH",
    points: [
      "Build career confidence",
      "Prepare for relevant opportunities",
      "Take the next step in your career",
    ],
  },
];

const colorStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    badge: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    border: "hover:border-sky-200",
    dot: "bg-sky-400",
    text: "text-sky-600",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    badge: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    border: "hover:border-violet-200",
    dot: "bg-violet-400",
    text: "text-violet-600",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    border: "hover:border-amber-200",
    dot: "bg-amber-400",
    text: "text-amber-600",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    badge: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    border: "hover:border-emerald-200",
    dot: "bg-emerald-400",
    text: "text-emerald-600",
  },
};

function StepCard({ step, index }) {
  const Icon = step.icon;
  const styles = colorStyles[step.color];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
        }}
        className={`relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)] ${styles.border}`}
      >
        {/* Glow */}

        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${styles.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Header */}

        <div className="relative flex items-center justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
          >
            <Icon className="h-5 w-5" />
          </div>

          <span className="text-xs font-bold tracking-[0.18em] text-slate-300">
            {step.number}
          </span>
        </div>

        {/* Content */}

        <div className="relative mt-6">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.18em] ${styles.badge}`}
          >
            {step.label}
          </span>

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {step.description}
          </p>
        </div>

        {/* Points */}

        <div className="relative mt-6 border-t border-slate-100 pt-5">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
            What you get
          </p>

          <div className="space-y-2.5">
            {step.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5"
              >
                <CheckCircle2
                  className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${styles.text}`}
                />

                <span className="text-[11px] leading-5 text-slate-500">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}

        <div
          className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
        />
      </motion.div>
    </motion.article>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        {/* Background */}

        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              x: [0, 35, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-48 -top-32 h-[30rem] w-[30rem] rounded-full bg-sky-100/50 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-48 top-20 h-[32rem] w-[32rem] rounded-full bg-violet-100/40 blur-3xl"
          />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="shell relative">
          {/* Breadcrumb */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-10 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-400"
          >
            <Link
              to="/"
              className="transition-colors hover:text-slate-900"
            >
              Home
            </Link>

            <ChevronRight className="h-3 w-3" />

            <span className="text-slate-600">
              How It Works
            </span>
          </motion.div>

          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-slate-900" />

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
                How It Works
              </p>

              <span className="h-px w-9 bg-slate-900" />
            </div>

            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4rem]">
              Four steps.
              <span className="block text-slate-400">
                One career direction.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Zenvix turns learning into a clear career journey — helping you
              choose the right path, build practical skills, prepare for
              opportunities and move forward with confidence.
            </p>
          </motion.div>

          {/* Journey overview */}

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
              duration: 0.7,
              delay: 0.15,
            }}
            className="mx-auto mt-12 max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.035)] backdrop-blur-sm sm:p-5"
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {steps.map((step, index) => {
                const styles = colorStyles[step.color];

                return (
                  <div
                    key={step.number}
                    className="flex items-center gap-2 rounded-xl px-3 py-3"
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${styles.dot}`}
                    />

                    <div>
                      <p className="text-[9px] font-bold tracking-[0.15em] text-slate-300">
                        {step.number}
                      </p>

                      <p className="text-[10px] font-semibold text-slate-700">
                        {step.shortTitle}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <ArrowRight className="ml-auto hidden h-3 w-3 text-slate-300 sm:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DETAILED JOURNEY
      ====================================================== */}

      <section className="relative bg-slate-50/70 py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-900" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Your Journey
              </p>

              <span className="h-px w-8 bg-slate-900" />
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
              Simple steps.
              <span className="block text-slate-400">
                Meaningful progress.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              Each stage builds on the previous one, creating a structured
              journey from learning to career readiness.
            </p>
          </motion.div>

          {/* Desktop timeline */}

          <div className="relative mx-auto mt-16 hidden max-w-6xl lg:block">
            <div className="absolute left-[12.5%] right-[12.5%] top-[34px] h-px bg-slate-200" />

            <motion.div
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "75%",
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 1.8,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="absolute left-[12.5%] top-[34px] h-px bg-gradient-to-r from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
            />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const styles = colorStyles[step.color];

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15 + index * 0.12,
                    }}
                    className="relative"
                  >
                    {/* Node */}

                    <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border-8 border-white bg-white shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${styles.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Card */}

                    <div className="mt-8">
                      <StepCard
                        step={step}
                        index={index}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile / tablet */}

          <div className="relative mt-12 lg:hidden">
            <div className="absolute bottom-8 left-[23px] top-8 w-px bg-slate-200" />

            <div className="space-y-7">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const styles = colorStyles[step.color];

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="relative flex gap-5"
                  >
                    <div className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.1)]">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${styles.icon}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <StepCard
                        step={step}
                        index={index}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY THIS APPROACH
      ====================================================== */}

      <section className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="shell">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            {/* Visual */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
              className="order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 shadow-[0_25px_65px_rgba(15,23,42,0.12)] sm:p-9">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        Career Journey
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        Learn. Build. Prepare. Launch.
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Rocket className="h-4 w-4 text-sky-300" />
                    </div>
                  </div>

                  <div className="mt-9 space-y-4">
                    {steps.map((step, index) => {
                      const styles = colorStyles[step.color];

                      return (
                        <div
                          key={step.number}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${styles.icon}`}
                          >
                            <span className="text-[9px] font-bold">
                              {step.number}
                            </span>
                          </div>

                          <span className="text-[11px] font-medium text-slate-300">
                            {step.title}
                          </span>

                          <Check className="ml-auto h-3.5 w-3.5 text-emerald-400" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-[9px] leading-5 text-slate-500">
                      A focused journey designed to connect learning with
                      practical career preparation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
              }}
              className="order-1 lg:order-2"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-slate-900" />

                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                  The Zenvix Approach
                </p>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
                Learning should
                <span className="block text-slate-400">
                  lead somewhere.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                The goal is not simply to complete a course. It is to help
                learners develop useful skills, gain practical experience and
                become better prepared for the next stage of their career.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    title: "Career-focused learning",
                    text: "Learn skills with a clear connection to real professional goals.",
                  },
                  {
                    title: "Practical experience",
                    text: "Apply what you learn through practice, projects and hands-on work.",
                  },
                  {
                    title: "Career preparation",
                    text: "Build the confidence and readiness needed to pursue opportunities.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="shell relative">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <Sparkles className="h-5 w-5 text-sky-300" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.2rem]">
              Your next step
              <span className="block text-slate-500">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Explore the programs, find the right learning path and start
              building skills for the career you want.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Explore Programs

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Talk to us

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}