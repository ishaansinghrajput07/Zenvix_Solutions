import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Megaphone,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { programs } from "../data/programs.js";

const iconMap = {
  "software-engineering": Code2,
  "data-analytics": BarChart3,
  "ai-ml": BrainCircuit,
  cybersecurity: ShieldCheck,
  "cloud-computing": Cloud,
  "ui-ux-design": Palette,
  "digital-marketing": Megaphone,
  "business-analytics": BriefcaseBusiness,
};

const accentStyles = {
  electric: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-500",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  sky: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-500",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-400/20",
    text: "text-cyan-500",
    dot: "bg-cyan-400",
    hover: "group-hover:border-cyan-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    text: "text-violet-500",
    dot: "bg-violet-400",
    hover: "group-hover:border-violet-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    text: "text-emerald-500",
    dot: "bg-emerald-400",
    hover: "group-hover:border-emerald-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    text: "text-amber-500",
    dot: "bg-amber-400",
    hover: "group-hover:border-amber-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    glow: "bg-pink-400/20",
    text: "text-pink-500",
    dot: "bg-pink-400",
    hover: "group-hover:border-pink-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    glow: "bg-orange-400/20",
    text: "text-orange-500",
    dot: "bg-orange-400",
    hover: "group-hover:border-orange-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    glow: "bg-indigo-400/20",
    text: "text-indigo-500",
    dot: "bg-indigo-400",
    hover: "group-hover:border-indigo-200",
  },
};

export default function Programs() {
  // Home page par sirf first 8 programs
  const homePrograms = programs.slice(0, 8);

  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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
          className="absolute -left-48 top-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/50 blur-3xl"
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
          className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/40 blur-3xl"
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
        {/* =====================================================
            HEADER
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
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Programs
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Choose your path.
            <span className="block text-slate-400">
              Build your future.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Career-focused programs designed to help you build practical
            skills and take your next professional step with confidence.
          </p>
        </motion.div>

        {/* =====================================================
            PROGRAM GRID — 4 × 2
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homePrograms.map((program, index) => {
            const Icon = iconMap[program.id] ?? Code2;

            const styles =
              accentStyles[program.accent] ?? accentStyles.electric;

            return (
              <motion.div
                key={program.id}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="h-full"
              >
                <Link
                  to={`/programs/${program.id}`}
                  className={`group relative flex h-full min-h-[270px] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.085)] ${styles.hover}`}
                >
                  {/* Card Glow */}

                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${styles.glow} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100`}
                  />

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="relative flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <div
                        className={`absolute inset-0 scale-125 rounded-xl ${styles.glow} opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <Icon className="relative h-[19px] w-[19px]" />
                    </motion.div>

                    <div className="flex items-center gap-2">
                      {index === 0 && (
                        <span className="rounded-full bg-slate-950 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white">
                          Featured
                        </span>
                      )}

                      <span className="text-[10px] font-bold tracking-[0.15em] text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative mt-5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                      />

                      <span
                        className={`text-[9px] font-bold uppercase tracking-[0.18em] ${styles.text}`}
                      >
                        Career Program
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] font-semibold leading-tight tracking-tight text-slate-950">
                      {program.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-slate-500">
                      {program.description}
                    </p>
                  </div>

                  {/* =================================================
                      SKILLS
                  ================================================== */}

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {program.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-500"
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${styles.text}`}
                          strokeWidth={2.5}
                        />

                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="relative mt-auto pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
                      <span className="text-[9px] font-medium text-slate-400">
                        Career-focused
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-950">
                        Explore

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent */}

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL PROGRAMS
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/programs"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_8px_25px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white hover:shadow-[0_15px_35px_rgba(15,23,42,0.12)]"
          >
            View All Programs

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-white/10">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>

        <p className="mt-4 text-center text-[10px] tracking-wide text-slate-400">
          Explore all available learning paths and find the right fit for your
          career goals.
        </p>
      </div>
    </section>
  );
}