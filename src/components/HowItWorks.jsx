import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  GraduationCap,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description:
      "Explore career-focused courses and choose a learning path that matches your goals and interests.",
    icon: Target,
    color: "sky",
    label: "START",
  },
  {
    number: "02",
    title: "Learn With Purpose",
    description:
      "Build your knowledge through structured lessons designed to help you understand the skills that matter.",
    icon: GraduationCap,
    color: "violet",
    label: "LEARN",
  },
  {
    number: "03",
    title: "Train & Get Ready",
    description:
      "Put your knowledge into practice with hands-on training, career preparation and real-world guidance.",
    icon: Sparkles,
    color: "amber",
    label: "PREPARE",
  },
  {
    number: "04",
    title: "Move Toward Your Career",
    description:
      "Build confidence, prepare for opportunities and take the next step toward your professional career.",
    icon: BriefcaseBusiness,
    color: "emerald",
    label: "LAUNCH",
  },
];

const colorStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    ring: "border-sky-200",
    glow: "bg-sky-400/20",
    badge: "bg-sky-50 text-sky-600",
    line: "from-sky-400",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    ring: "border-violet-200",
    glow: "bg-violet-400/20",
    badge: "bg-violet-50 text-violet-600",
    line: "via-violet-400",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    ring: "border-amber-200",
    glow: "bg-amber-400/20",
    badge: "bg-amber-50 text-amber-600",
    line: "via-amber-400",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    ring: "border-emerald-200",
    glow: "bg-emerald-400/20",
    badge: "bg-emerald-50 text-emerald-600",
    line: "to-emerald-400",
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              How It Works
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Four steps.
            <span className="block text-slate-400">
              One career direction.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Zenvix turns learning into a clear journey — from choosing the
            right path to building the skills and confidence needed for the
            next stage of your career.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP JOURNEY
        ====================================================== */}

        <div className="relative mt-20 hidden lg:block">
          {/* Main connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[72px] h-px bg-slate-200" />

          {/* Animated progress line */}
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
              duration: 2,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="absolute left-[12.5%] top-[72px] h-px bg-gradient-to-r from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
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
                    y: 30,
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
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                  }}
                  className="group relative"
                >
                  {/* Icon Node */}
                  <div className="relative z-10 mx-auto flex w-fit">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Glow */}
                      <div
                        className={`absolute inset-0 scale-150 rounded-full ${styles.glow} opacity-30 blur-xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-70`}
                      />

                      {/* Outer Ring */}
                      <div
                        className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-white bg-white shadow-[0_10px_30px_rgba(15,23,42,0.1)]`}
                      >
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full ${styles.icon} transition-transform duration-500 group-hover:scale-110`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -7,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-shadow duration-500 group-hover:border-slate-300 group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.18em] ${styles.badge}`}
                      >
                        {step.label}
                      </span>

                      <span className="text-xs font-bold tracking-wider text-slate-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors duration-300 group-hover:text-slate-900">
                      Step {step.number}

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET JOURNEY
        ====================================================== */}

        <div className="relative mt-14 lg:hidden">
          {/* Vertical line */}
          <div className="absolute bottom-8 left-[23px] top-8 w-px bg-slate-200" />

          <motion.div
            initial={{
              height: "0%",
            }}
            whileInView={{
              height: "85%",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="absolute left-[23px] top-8 w-px bg-gradient-to-b from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
          />

          <div className="space-y-7">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const styles = colorStyles[step.color];

              return (
                <motion.div
                  key={step.number}
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
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="relative flex gap-5"
                >
                  {/* Node */}
                  <div className="relative z-10 shrink-0">
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_8px_25px_rgba(15,23,42,0.1)]"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${styles.icon}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    className="flex-1 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.18em] ${styles.badge}`}
                      >
                        {step.label}
                      </span>

                      <span className="text-xs font-bold text-slate-300">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CAREER STATEMENT
        ====================================================== */}

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
            delay: 0.2,
          }}
          className="mt-20 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-7 shadow-[0_25px_70px_rgba(15,23,42,0.14)] sm:p-9 lg:p-10"
        >
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-sky-300" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-300">
                  The Zenvix Way
                </p>
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                From where you are now to where you want to be.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
                Every step is designed to help you keep moving — from
                learning a new skill to becoming confident enough to use it
                in the professional world.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="/programs"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Start Your Journey

              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Mini Progress */}
          <div className="relative mt-9 grid grid-cols-4 gap-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2">
                <div
                  className={`h-1.5 flex-1 rounded-full ${
                    index === 0
                      ? "bg-sky-400"
                      : index === 1
                        ? "bg-violet-400"
                        : index === 2
                          ? "bg-amber-400"
                          : "bg-emerald-400"
                  }`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}