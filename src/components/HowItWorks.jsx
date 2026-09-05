
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
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
    hover: "group-hover:border-sky-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    ring: "border-violet-200",
    glow: "bg-violet-400/20",
    badge: "bg-violet-50 text-violet-600",
    line: "via-violet-400",
    hover: "group-hover:border-violet-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    ring: "border-amber-200",
    glow: "bg-amber-400/20",
    badge: "bg-amber-50 text-amber-600",
    line: "via-amber-400",
    hover: "group-hover:border-amber-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    ring: "border-emerald-200",
    glow: "bg-emerald-400/20",
    badge: "bg-emerald-50 text-emerald-600",
    line: "to-emerald-400",
    hover: "group-hover:border-emerald-200",
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-[30px]"
    >
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
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
          className="w-full pt-[50px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              How It Works
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Four steps.
            <span className="block font-[900] text-teal-700">
              One career direction.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
            Zenvix turns learning into a clear journey — from choosing the
            right path to building the skills and confidence needed for the
            next stage of your career.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP JOURNEY
        ====================================================== */}

        <div className="relative mx-auto mt-10 hidden w-full lg:block">
          {/* =================================================
              CONNECTING LINE
              Exact center of 72px icons = 36px
          ================================================== */}

          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[36px] z-0 h-[2px] rounded-full bg-slate-200" />

          {/* Animated colored progress line */}
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
            className="pointer-events-none absolute left-[12.5%] top-[36px] z-0 h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
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
                  {/* =================================================
                      ICON NODE
                  ================================================== */}

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
                        className={`pointer-events-none absolute inset-0 scale-150 rounded-full ${styles.glow} opacity-30 blur-xl transition-all duration-500 group-hover:scale-[1.8] group-hover:opacity-70`}
                      />

                      {/* White outer ring */}
                      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-white bg-white shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
                        {/* Colored icon */}
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full ${styles.icon} transition-transform duration-500 group-hover:scale-110`}
                        >
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* =================================================
                      STEP CARD
                  ================================================== */}

                  <motion.div
                    whileHover={{
                      y: -7,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className={`mt-8 min-h-[245px] rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 ${styles.hover} group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]`}
                  >
                    {/* Top */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`rounded-full px-3 py-1 text-[9px] font-[900] tracking-[0.18em] ${styles.badge}`}
                      >
                        {step.label}
                      </span>

                      <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-[11px] font-semibold leading-5 text-slate-500">
                      {step.description}
                    </p>

                    {/* Bottom */}
                    <div
                      className={`mt-5 flex items-center gap-2 text-[9px] font-[900] uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:${styles.icon}`}
                    >
                      Step {step.number}

                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>

                  {/* Bottom accent */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      background:
                        index === 0
                          ? "#38BDF8"
                          : index === 1
                            ? "#8B5CF6"
                            : index === 2
                              ? "#F59E0B"
                              : "#10B981",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET JOURNEY
        ====================================================== */}

        <div className="relative mt-10 lg:hidden">
          {/* Vertical connecting line */}
          <div className="pointer-events-none absolute bottom-8 left-[24px] top-8 z-0 w-[2px] rounded-full bg-slate-200" />

          {/* Animated vertical progress */}
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
            className="pointer-events-none absolute left-[24px] top-8 z-0 w-[2px] rounded-full bg-gradient-to-b from-sky-400 via-violet-400 via-amber-400 to-emerald-400"
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
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={2.5}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    className={`min-h-[190px] flex-1 rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 ${styles.hover}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[9px] font-[900] tracking-[0.18em] ${styles.badge}`}
                      >
                        {step.label}
                      </span>

                      <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2.5 text-[11px] font-semibold leading-5 text-slate-500">
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[9px] font-[900] uppercase tracking-[0.18em] text-slate-400">
                      Step {step.number}

                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
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
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-950 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.12)] sm:p-8 lg:p-9"
        >
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Internal glow */}
            <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="relative">
              <div className="mb-3 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-sky-300" />

                <p className="text-[10px] font-[900] uppercase tracking-[0.2em] text-sky-300">
                  The Zenvix Way
                </p>
              </div>

              <h3 className="max-w-2xl text-[22px] font-[900] leading-tight tracking-[-0.02em] text-white sm:text-[28px]">
                From where you are now to where you want to be.
              </h3>

              <p className="mt-3 max-w-2xl text-[12px] font-semibold leading-6 text-white/45">
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
              className="relative inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-yellow-400 px-5 py-3 text-[12px] font-[900] text-black shadow-[0_8px_20px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]"
            >
              Start Your Journey

              <ArrowRight className="h-[15px] w-[15px]" strokeWidth={2.8} />
            </motion.a>
          </div>

          {/* Mini Progress */}
          <div className="relative mt-8 grid grid-cols-4 gap-2">
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

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-7 flex max-w-5xl items-center justify-center gap-2 text-center"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-500"
              strokeWidth={2.5}
            />
          </div>

          <p className="text-[12px] font-semibold leading-6 text-slate-500">
            A structured journey designed to turn learning into
            <span className="ml-1 font-[900] text-slate-700">
              practical career progress.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

