import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Rocket,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const learningStages = [
  {
    id: "01",
    title: "Learn",
    shortTitle: "Build Knowledge",
    description:
      "Understand the fundamentals through structured, career-focused learning designed around practical outcomes.",
    icon: BookOpen,
    accent: "sky",
  },
  {
    id: "02",
    title: "Build",
    shortTitle: "Apply Your Skills",
    description:
      "Move beyond theory by practicing what you learn and building skills you can actually demonstrate.",
    icon: Code2,
    accent: "violet",
  },
  {
    id: "03",
    title: "Grow",
    shortTitle: "Build Confidence",
    description:
      "Strengthen your abilities, improve your confidence and develop the mindset needed for professional growth.",
    icon: TrendingUp,
    accent: "amber",
  },
  {
    id: "04",
    title: "Move Forward",
    shortTitle: "Career Ready",
    description:
      "Take everything you've built and move toward your next opportunity with career-focused guidance.",
    icon: Rocket,
    accent: "emerald",
  },
];

const accentStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-400",
    border: "border-sky-400/20",
    line: "bg-sky-400",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    text: "text-violet-400",
    border: "border-violet-400/20",
    line: "bg-violet-400",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    text: "text-amber-400",
    border: "border-amber-400/20",
    line: "bg-amber-400",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    text: "text-emerald-400",
    border: "border-emerald-400/20",
    line: "bg-emerald-400",
  },
};

export default function LearningExperience() {
  return (
    <section
      id="learning-experience"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/60 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
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
              How You Learn
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            A learning model
            <span className="block text-slate-400">
              built to move you forward.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Zenvix combines learning with practical growth so you're not
            just collecting knowledge — you're building the skills and
            confidence to use it.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN EXPERIENCE
        ====================================================== */}

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-[0_35px_90px_rgba(15,23,42,0.16)]">
          {/* =================================================
              TOP BAR
          ================================================== */}

          <div className="relative border-b border-white/10 px-6 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Sparkles className="h-4 w-4 text-sky-300" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                    Zenvix Learning Experience
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-white/80">
                    From knowledge to career readiness
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                <span className="text-xs text-white/40">
                  Designed around progress
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              DESKTOP STAGES
          ================================================== */}

          <div className="relative hidden lg:block">
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Glow */}
            <motion.div
              animate={{
                x: [0, 80, 0],
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[100px]"
            />

            <div className="relative grid grid-cols-4">
              {learningStages.map((stage, index) => {
                const Icon = stage.icon;
                const styles = accentStyles[stage.accent];

                return (
                  <motion.div
                    key={stage.id}
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
                      delay: index * 0.12,
                    }}
                    className={`group relative min-h-[420px] border-r border-white/10 p-7 last:border-r-0 xl:p-9`}
                  >
                    {/* Number */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/25">
                        {stage.id}
                      </span>

                      <span
                        className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] ${styles.border} ${styles.text}`}
                      >
                        {index === 0
                          ? "Start"
                          : index === 3
                            ? "Next"
                            : "Progress"}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mt-12">
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative inline-flex"
                      >
                        <div
                          className={`absolute inset-0 scale-150 rounded-2xl ${styles.glow} opacity-30 blur-2xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-80`}
                        />

                        <div
                          className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon} transition-transform duration-500 group-hover:scale-110`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <p
                        className={`text-[10px] font-bold uppercase tracking-[0.22em] ${styles.text}`}
                      >
                        {stage.shortTitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-white/40">
                        {stage.description}
                      </p>
                    </div>

                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-7 right-7 h-px bg-white/5 transition-all duration-500 group-hover:bg-white/15" />

                    {/* Arrow */}
                    {index < learningStages.length - 1 && (
                      <div className="absolute bottom-7 right-7 text-white/15 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white/50">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}

                    {/* Hover highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-white/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                PROGRESS TRACK
            ================================================== */}

            <div className="border-t border-white/10 px-8 py-6 lg:px-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="h-4 w-4 text-sky-300" />

                  <span className="text-xs font-medium text-white/45">
                    Your progress
                  </span>
                </div>

                <span className="text-xs font-semibold text-white/60">
                  Learn → Build → Grow → Move Forward
                </span>
              </div>

              <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET
          ================================================== */}

          <div className="relative lg:hidden">
            <div className="absolute bottom-10 left-[39px] top-10 w-px bg-white/10" />

            <motion.div
              initial={{
                height: "0%",
              }}
              whileInView={{
                height: "85%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute left-[39px] top-10 w-px bg-gradient-to-b from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
            />

            <div className="space-y-0">
              {learningStages.map((stage, index) => {
                const Icon = stage.icon;
                const styles = accentStyles[stage.accent];

                return (
                  <motion.div
                    key={stage.id}
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
                      delay: index * 0.1,
                    }}
                    className="relative flex gap-5 border-b border-white/10 p-6 last:border-b-0 sm:p-8"
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
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-slate-950 bg-white/[0.05]"
                      >
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl ${styles.icon}`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p
                          className={`text-[10px] font-bold uppercase tracking-[0.2em] ${styles.text}`}
                        >
                          {stage.shortTitle}
                        </p>

                        <span className="text-[10px] font-bold text-white/20">
                          {stage.id}
                        </span>
                      </div>

                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {stage.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/40">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BENEFITS
        ====================================================== */}

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: CheckCircle2,
              title: "Practical",
              text: "Learn skills you can apply.",
            },
            {
              icon: Zap,
              title: "Progressive",
              text: "Keep building from one stage to the next.",
            },
            {
              icon: Rocket,
              title: "Career Focused",
              text: "Always move toward what's next.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      {item.title}
                    </h4>

                    <p className="mt-0.5 text-xs text-slate-400">
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
  );
}