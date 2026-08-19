import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  UserRoundCheck,
} from "lucide-react";

const supportSteps = [
  {
    number: "01",
    title: "Build Your Portfolio",
    description:
      "Turn your learning into a professional portfolio that helps you stand out to employers.",
    icon: FileText,
    color: "sky",
  },
  {
    number: "02",
    title: "Prepare for Interviews",
    description:
      "Develop the confidence and communication skills needed to perform better in interviews.",
    icon: MessageSquare,
    color: "violet",
  },
  {
    number: "03",
    title: "Practice with Mock Interviews",
    description:
      "Experience realistic interview scenarios and identify areas where you can improve.",
    icon: UserRoundCheck,
    color: "amber",
  },
  {
    number: "04",
    title: "Move Toward Opportunities",
    description:
      "Get career guidance and support as you take the next step toward job opportunities.",
    icon: BriefcaseBusiness,
    color: "emerald",
  },
];

const colorStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white",
    glow: "bg-sky-400/20",
    text: "text-sky-500",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
    glow: "bg-violet-400/20",
    text: "text-violet-500",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    glow: "bg-amber-400/20",
    text: "text-amber-500",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    glow: "bg-emerald-400/20",
    text: "text-emerald-500",
  },
};

export default function CareerSupport() {
  return (
    <section
      id="career"
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
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/70 blur-3xl"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Career Support
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Learning is only
            <span className="block text-slate-400">
              the beginning.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Your course should open the door to what's next. Zenvix helps
            students turn their skills into confidence, professional
            readiness and real career opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* =================================================
              LEFT — CAREER SUPPORT STEPS
          ================================================== */}

          <div className="space-y-4">
            {supportSteps.map((step, index) => {
              const Icon = step.icon;
              const styles = colorStyles[step.color];

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: -30,
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
                  className="group relative"
                >
                  {/* Glow */}
                  <div
                    className={`pointer-events-none absolute -inset-1 rounded-[1.4rem] ${styles.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className="relative flex gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6"
                  >
                    {/* Number */}
                    <div className="hidden pt-1 text-xs font-bold tracking-[0.15em] text-slate-300 sm:block">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative shrink-0"
                    >
                      <div
                        className={`absolute inset-0 scale-150 rounded-2xl ${styles.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 transition-all duration-500 ${styles.icon}`}
                      >
                        <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${styles.text}`}
                          >
                            Career Step {step.number}
                          </p>

                          <h3 className="mt-1.5 text-base font-semibold text-slate-950 sm:text-lg">
                            {step.title}
                          </h3>
                        </div>

                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-700" />
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              RIGHT — PREMIUM CAREER VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.8,
              delay: 0.1,
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-7 shadow-[0_35px_90px_rgba(15,23,42,0.18)] sm:p-9">
              {/* Animated Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[100px]"
              />

              <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px]"
              />

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="relative">
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                      Zenvix Career System
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Ready for what’s next?
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                    <Rocket className="h-5 w-5 text-sky-300" />
                  </div>
                </div>

                {/* Career Progress */}
                <div className="mt-10">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/50">
                      Career readiness
                    </span>

                    <span className="text-xs font-semibold text-white">
                      Growing
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{
                        width: "0%",
                      }}
                      whileInView={{
                        width: "82%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                      className="relative h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400"
                    >
                      <motion.div
                        animate={{
                          x: ["-100%", "400%"],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 w-20 bg-white/40 blur-md"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Career Cards */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                      <FileText className="h-4 w-4" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        Professional Portfolio
                      </p>

                      <p className="mt-0.5 text-xs text-white/35">
                        Showcase your skills
                      </p>
                    </div>

                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                      <MessageSquare className="h-4 w-4" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        Interview Preparation
                      </p>

                      <p className="mt-0.5 text-xs text-white/35">
                        Build confidence
                      </p>
                    </div>

                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        Career Opportunities
                      </p>

                      <p className="mt-0.5 text-xs text-white/35">
                        Take the next step
                      </p>
                    </div>

                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />

                    <p className="text-sm leading-6 text-white/50">
                      We don't just help students learn a skill. We help
                      them prepare to put that skill to work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)] sm:-left-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-950">
                    Career Focused
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Beyond the classroom
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM CTA
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
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Your next step
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              Ready to turn your skills into opportunity?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Start learning today and build toward the career you want
              tomorrow.
            </p>
          </div>

          <motion.a
            href="/programs"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-colors hover:bg-slate-800"
          >
            Explore Courses

            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}