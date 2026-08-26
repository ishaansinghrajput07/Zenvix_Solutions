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
    icon: "bg-sky-50 text-sky-600 ring-sky-100",
    badge: "bg-sky-50 text-sky-600 border-sky-100",
    glow: "bg-sky-400/20",
    border: "hover:border-sky-200",
    dot: "bg-sky-500",
    text: "text-sky-600",
    line: "from-sky-400",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600 ring-violet-100",
    badge: "bg-violet-50 text-violet-600 border-violet-100",
    glow: "bg-violet-400/20",
    border: "hover:border-violet-200",
    dot: "bg-violet-500",
    text: "text-violet-600",
    line: "via-violet-400",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600 ring-amber-100",
    badge: "bg-amber-50 text-amber-600 border-amber-100",
    glow: "bg-amber-400/20",
    border: "hover:border-amber-200",
    dot: "bg-amber-500",
    text: "text-amber-600",
    line: "via-amber-400",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    badge: "bg-emerald-50 text-emerald-600 border-emerald-100",
    glow: "bg-emerald-400/20",
    border: "hover:border-emerald-200",
    dot: "bg-emerald-500",
    text: "text-emerald-600",
    line: "to-emerald-400",
  },
};

function StepCard({ step, index }) {
  const Icon = step.icon;
  const styles = colorStyles[step.color];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{
          y: -5,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
        }}
        className={`relative h-full overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white/95 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.045)] backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] ${styles.border}`}
      >
        {/* Soft card glow */}

        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${styles.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Top highlight */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Header */}

        <div className="relative flex items-center justify-between">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon} ring-1`}
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
          </motion.div>

          <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-slate-300">
            {step.number}
          </span>
        </div>

        {/* Content */}

        <div className="relative mt-5">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[8px] font-bold tracking-[0.18em] ${styles.badge}`}
          >
            {step.label}
          </span>

          <h3 className="mt-3.5 text-[17px] font-semibold leading-6 tracking-[-0.02em] text-slate-950">
            {step.title}
          </h3>

          <p className="mt-2.5 text-[11.5px] leading-[1.7] text-slate-500">
            {step.description}
          </p>
        </div>

        {/* Points */}

        <div className="relative mt-5 border-t border-slate-100 pt-4">
          <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
            What you get
          </p>

          <div className="space-y-2.5">
            {step.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5"
              >
                <CheckCircle2
                  className={`mt-[2px] h-[13px] w-[13px] shrink-0 ${styles.text}`}
                  strokeWidth={2}
                />

                <span className="text-[10.5px] leading-[1.55] text-slate-500">
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

      <section className="relative overflow-hidden pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-18 lg:pt-14">
        {/* Background */}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          {/* Main soft white / sky glow */}

          <motion.div
            animate={{
              x: [0, 35, 0],
              y: [0, -18, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-sky-100/70 blur-3xl"
          />

          {/* Violet glow */}

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-0 h-[460px] w-[460px] rounded-full bg-violet-100/60 blur-3xl"
          />

          {/* Center white glow */}

          <div className="absolute left-1/2 top-1/3 h-[400px] w-[650px] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

          {/* Soft grid */}

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Bottom fade */}

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="shell relative z-10">
          {/* Breadcrumb */}

          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mb-7 flex items-center justify-center gap-2 text-[9px] font-medium text-slate-400"
          >
            <Link
              to="/"
              className="transition-colors hover:text-slate-900"
            >
              Home
            </Link>

            <ChevronRight className="h-3 w-3 text-slate-300" />

            <span className="text-slate-600">
              How It Works
            </span>
          </motion.div>

          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Label */}

            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-slate-300" />

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  How It Works
                </p>
              </div>

              <span className="h-px w-7 bg-slate-300" />
            </div>

            {/* Heading */}

            <h1 className="text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
              Four steps.
              <span className="block bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 bg-clip-text text-transparent">
                One career direction.
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-4 max-w-[620px] text-[12px] leading-6 text-slate-500 sm:text-sm sm:leading-6.5">
              Zenvix turns learning into a clear career journey — helping you
              choose the right path, build practical skills, prepare for
              opportunities and move forward with confidence.
            </p>
          </motion.div>

          {/* Journey overview */}

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
  className="mx-auto mt-12 max-w-5xl rounded-[1.5rem] border border-slate-200 bg-white/85 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:p-5"
>
  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
    {steps.map((step, index) => {
      const Icon = step.icon;
      const styles = colorStyles[step.color];

      return (
        <div
          key={step.number}
          className="group relative flex items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-300 hover:bg-slate-50"
        >
          {/* Icon */}

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.icon} shadow-sm`}
          >
            <Icon className="h-4.5 w-4.5" />
          </div>

          {/* Text */}

          <div className="min-w-0">
            <p
              className={`text-[10px] font-bold uppercase tracking-[0.16em] ${styles.text}`}
            >
              {step.number}
            </p>

            <p className="mt-0.5 text-[13px] font-semibold text-slate-800 sm:text-[14px]">
              {step.shortTitle}
            </p>
          </div>

          {/* Arrow */}

          {index < steps.length - 1 && (
            <ArrowRight className="ml-auto hidden h-4 w-4 shrink-0 text-slate-300 sm:block transition-transform duration-300 group-hover:translate-x-1 group-hover:text-slate-400" />
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

      <section className="relative overflow-hidden bg-slate-50/70 py-14 sm:py-16 lg:py-20">
        {/* Section ambient glow */}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

          <div className="absolute right-[5%] bottom-10 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />
        </div>

        <div className="shell relative">
          {/* Section heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-slate-300" />

              <p className="text-[9px] font-bold uppercase tracking-[0.27em] text-slate-500">
                Your Journey
              </p>

              <span className="h-px w-7 bg-slate-300" />
            </div>

            <h2 className="text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950] sm:text-4xl lg:text-[3rem]">
              Simple steps.
              <span className="block text-slate-400">
                Meaningful progress.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 text-slate-500 sm:text-sm">
              Each stage builds on the previous one, creating a structured
              journey from learning to career readiness.
            </p>
          </motion.div>

          {/* Desktop timeline */}

          <div className="relative mx-auto mt-12 hidden max-w-6xl lg:block">
            {/* Base line */}

            <div className="absolute left-[12.5%] right-[12.5%] top-[30px] h-px bg-slate-200" />

            {/* Animated colorful line */}

            <motion.div
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "75%",
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
              className="absolute left-[12.5%] top-[30px] h-[2px] bg-gradient-to-r from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
            />

            <div className="grid grid-cols-4 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const styles = colorStyles[step.color];

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 20,
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
                      duration: 0.5,
                      delay: 0.12 + index * 0.1,
                    }}
                    className="relative"
                  >
                    {/* Timeline node */}

                    <div className="relative z-10 mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full border-[7px] border-slate-50 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.09)]">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.icon} ring-1`}
                      >
                        <Icon className="h-[17px] w-[17px]" />
                      </div>
                    </div>

                    {/* Card */}

                    <div className="mt-6">
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

          <div className="relative mt-10 lg:hidden">
            <div className="absolute bottom-8 left-[22px] top-8 w-px bg-gradient-to-b from-sky-200 via-violet-200 to-emerald-200" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const styles = colorStyles[step.color];

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="relative flex gap-4"
                  >
                    <div className="relative z-10 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-[0_7px_20px_rgba(15,23,42,0.08)]">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${styles.icon}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
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

      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-100/30 blur-3xl" />

          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-100/30 blur-3xl" />
        </div>

        <div className="shell relative">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-14">
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
              className="order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 shadow-[0_25px_65px_rgba(15,23,42,0.14)] sm:p-7">
                {/* Glows */}

                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl"
                />

                <motion.div
                  animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl"
                />

                {/* Grid */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />

                <div className="relative">
                  {/* Header */}

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        Career Journey
                      </p>

                      <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.02em] text-white">
                        Learn. Build. Prepare. Launch.
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07]">
                      <Rocket className="h-4 w-4 text-sky-300" />
                    </div>
                  </div>

                  {/* Journey */}

                  <div className="mt-7 space-y-3">
                    {steps.map((step, index) => {
                      const styles = colorStyles[step.color];

                      return (
                        <motion.div
                          key={step.number}
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.08,
                          }}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${styles.icon}`}
                          >
                            <span className="text-[8px] font-bold">
                              {step.number}
                            </span>
                          </div>

                          <span className="text-[10.5px] font-medium text-slate-300">
                            {step.title}
                          </span>

                          <Check className="ml-auto h-3.5 w-3.5 text-emerald-400" />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Footer */}

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Structured career progression
                      </p>
                    </div>

                    <p className="mt-2 text-[9.5px] leading-5 text-slate-500">
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
              className="order-1 lg:order-2"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-slate-300" />

                <p className="text-[9px] font-bold uppercase tracking-[0.27em] text-slate-500">
                  The Zenvix Approach
                </p>
              </div>

              <h2 className="text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950] sm:text-4xl lg:text-[3rem]">
                Learning should
                <span className="block bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent">
                  lead somewhere.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-[12px] leading-6 text-slate-500 sm:text-sm">
                The goal is not simply to complete a course. It is to help
                learners develop useful skills, gain practical experience and
                become better prepared for the next stage of their career.
              </p>

              {/* Features */}

              <div className="mt-7 space-y-4">
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
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className="group flex gap-3.5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 transition-transform duration-300 group-hover:scale-105">
                      <CheckCircle2
                        className="h-4 w-4 text-emerald-500"
                        strokeWidth={2}
                      />
                    </div>

                    <div>
                      <h3 className="text-[13px] font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[10.5px] leading-5 text-slate-500">
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

      <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-16 lg:py-20">
        {/* Background */}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[-220px] h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div className="absolute bottom-[-220px] left-[-100px] h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.025]"
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
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Icon */}

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] shadow-[0_0_30px_rgba(56,189,248,0.08)]">
              <Sparkles className="h-4 w-4 text-sky-300" />
            </div>

            {/* Heading */}

            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1.06] tracking-[-0.05em] text-white sm:text-4xl lg:text-[3rem]">
              Your next step
              <span className="block text-slate-500">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[12px] leading-6 text-slate-400 sm:text-sm">
              Explore the programs, find the right learning path and start
              building skills for the career you want.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(255,255,255,0.13)]"
              >
                Explore Programs

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[12px] font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                Talk to us

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}