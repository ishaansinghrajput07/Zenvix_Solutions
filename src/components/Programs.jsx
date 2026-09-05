import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  HeartPulse,
  LineChart,
  Megaphone,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { programs } from "../data/programs.js";

/* =========================================================
   PROGRAM ICONS
========================================================= */

const iconMap = {
  "software-engineering": Code2,
  "frontend-development": Code2,
  "backend-development": Database,
  "react-development": Code2,
  "nodejs-development": Database,
  "python-development": Code2,
  "java-development": Code2,
  "data-analytics": BarChart3,
  "data-science": LineChart,
  "business-analytics": BriefcaseBusiness,
  "ai-ml": BrainCircuit,
  "generative-ai": BrainCircuit,
  "prompt-engineering": Sparkles,
  cybersecurity: ShieldCheck,
  "cloud-computing": Cloud,
  "aws-cloud": Cloud,
  "azure-cloud": Cloud,
  devops: Cloud,
  "ui-ux-design": Palette,
  "product-design": Palette,
  "digital-marketing": Megaphone,
  "seo-content": Megaphone,
  "product-management": BriefcaseBusiness,
  "business-intelligence": BarChart3,
  "sql-database": Database,
  salesforce: BriefcaseBusiness,
  "it-support": ShieldCheck,
  "qa-testing": Check,
  "automation-testing": Check,
  fintech: LineChart,
  "healthcare-technology": HeartPulse,
  "project-management": BriefcaseBusiness,
  "supply-chain-analytics": LineChart,
  "hr-analytics": BarChart3,
  "cloud-security": ShieldCheck,
  "technical-project-management": BriefcaseBusiness,
  networking: Cloud,
};

/* =========================================================
   COLOR SYSTEM
========================================================= */

const accentStyles = {
  electric: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-600",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  sky: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-600",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-400/20",
    text: "text-cyan-600",
    dot: "bg-cyan-400",
    hover: "group-hover:border-cyan-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    text: "text-violet-600",
    dot: "bg-violet-400",
    hover: "group-hover:border-violet-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
    hover: "group-hover:border-emerald-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    text: "text-amber-600",
    dot: "bg-amber-400",
    hover: "group-hover:border-amber-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    glow: "bg-pink-400/20",
    text: "text-pink-600",
    dot: "bg-pink-400",
    hover: "group-hover:border-pink-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    glow: "bg-orange-400/20",
    text: "text-orange-600",
    dot: "bg-orange-400",
    hover: "group-hover:border-orange-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    glow: "bg-indigo-400/20",
    text: "text-indigo-600",
    dot: "bg-indigo-400",
    hover: "group-hover:border-indigo-200",
  },

  slate: {
    icon: "bg-slate-100 text-slate-700",
    glow: "bg-slate-400/20",
    text: "text-slate-700",
    dot: "bg-slate-500",
    hover: "group-hover:border-slate-300",
  },
};

/* =========================================================
   FEATURED PROGRAMS
========================================================= */

const featuredProgramIds = [
  "software-engineering",
  "data-analytics",
  "ai-ml",
  "cybersecurity",
  "cloud-computing",
  "devops",
  "ui-ux-design",
  "digital-marketing",
  "business-analytics",
  "generative-ai",
  "qa-testing",
  "product-management",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Programs() {
  const featuredPrograms = featuredProgramIds
    .map((id) => programs.find((program) => program.id === id))
    .filter(Boolean);

  return (
    <section
      id="programs"
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
              Programs
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Choose your path.
            <span className="block font-[900] text-teal-700">
              Build your future.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
            Career-focused programs designed around practical skills,
            real projects and professional preparation for modern
            career opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            PROGRAM GRID
        ====================================================== */}

        <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {featuredPrograms.map((program, index) => {
            const Icon = iconMap[program.id] ?? GraduationCap;

            const styles =
              accentStyles[program.accent] ??
              accentStyles.electric;

            return (
              <motion.div
                key={program.id}
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
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -5,
                }}
                className="h-full"
              >
                <div
                  className={`
                    group
                    relative
                    flex
                    h-full
                    min-h-[275px]
                    flex-col
                    overflow-hidden
                    rounded-[1.35rem]
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-[0_8px_28px_rgba(15,23,42,0.035)]
                    transition-all
                    duration-500
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.085)]
                    ${styles.hover}
                  `}
                >

                  {/* =================================================
                      GLOW
                  ================================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      ${styles.glow}
                      opacity-0
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:opacity-100
                    `}
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
                      className={`
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        ${styles.icon}
                      `}
                    >
                      <div
                        className={`
                          absolute
                          inset-0
                          scale-125
                          rounded-xl
                          ${styles.glow}
                          opacity-0
                          blur-lg
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        `}
                      />

                      <Icon
                        className="relative h-[19px] w-[19px]"
                        strokeWidth={2.5}
                      />
                    </motion.div>

                    <div className="flex items-center gap-2">

                      {index === 0 && (
                        <span className="rounded-full bg-slate-950 px-2.5 py-1 text-[8px] font-[900] uppercase tracking-[0.15em] text-white">
                          Featured
                        </span>
                      )}

                      <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
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
                        className={`
                          text-[9px]
                          font-[900]
                          uppercase
                          tracking-[0.18em]
                          ${styles.text}
                        `}
                      >
                        Career Program
                      </span>
                    </div>

                    <h3 className="mt-2 line-clamp-2 text-[17px] font-[900] leading-tight tracking-tight text-slate-950">
                      {program.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-[11px] font-semibold leading-5 text-slate-500">
                      {program.description}
                    </p>
                  </div>

                  {/* =================================================
                      PROGRAM INFO
                  ================================================== */}

                  <div className="relative mt-4 flex flex-wrap gap-1.5">

                    <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-[800] text-slate-500">
                      {program.duration}
                    </span>

                    <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-[800] text-slate-500">
                      {program.mode}
                    </span>

                    <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-[800] text-slate-500">
                      Career Support
                    </span>
                  </div>

                  {/* =================================================
                      SKILLS
                  ================================================== */}

                  <div className="relative mt-3 flex flex-wrap gap-1.5">

                    {program.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-100 bg-white px-2 py-1 text-[9px] font-semibold text-slate-500"
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${styles.text}`}
                          strokeWidth={2.8}
                        />

                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="relative mt-auto pt-5">

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">

                      <span className="text-[9px] font-semibold text-slate-400">
                        Career-focused
                      </span>

                      <Link
                        to={`/programs/${program.id}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-3 py-2 text-[10px] font-[900] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300"
                      >
                        View Details

                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={2.8}
                        />
                      </Link>
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      origin-left
                      scale-x-0
                      ${styles.dot}
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    `}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            VIEW ALL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
          className="mt-8 flex justify-center"
        >
          <Link
            to="/programs"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-xl
              bg-yellow-400
              px-5
              py-3
              text-[13px]
              font-[900]
              text-black
              shadow-[0_10px_25px_rgba(250,204,21,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300
              hover:shadow-[0_14px_30px_rgba(250,204,21,0.35)]
              active:translate-y-0
            "
          >
            View All 35 Programs

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>

        {/* =====================================================
            NOTE
        ====================================================== */}

        <p className="mt-4 text-center text-[12px] font-[700] leading-6 text-slate-500">
          Explore career-focused learning paths and choose the program
          that best matches your goals.
        </p>
      </div>
    </section>
  );
}