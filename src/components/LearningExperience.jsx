
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Layers3,
  Target,
  BriefcaseBusiness,
  Zap,
  Users,
} from "lucide-react";

const learningSteps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build strong fundamentals through structured, career-focused learning.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Apply what you learn through practical tasks, projects and guided practice.",
    icon: Target,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn your knowledge into real skills through hands-on project experience.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Prepare for your next opportunity with career-focused guidance and support.",
    icon: BriefcaseBusiness,
  },
];

const learningBenefits = [
  {
    title: "Practical",
    description: "Learn skills you can apply.",
    icon: Zap,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    iconRing: "ring-orange-100",
  },
  {
    title: "Progressive",
    description: "Keep building from one stage to the next.",
    icon: Layers3,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    iconRing: "ring-violet-100",
  },
  {
    title: "Career Focused",
    description: "Always move toward what's next.",
    icon: Target,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    iconRing: "ring-emerald-100",
  },
];

export default function LearningExperience() {
  return (
    <section
      id="learning"
      className="relative overflow-hidden bg-white py-[30px]"
    >
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full pt-[50px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            {/* YELLOW */}
            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Zenvix Learning Experience
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Designed around progress
            <span className="block font-[900] text-teal-700">
              built to move you forward.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
            Zenvix combines structured learning, practical experience and
            career-focused guidance so every stage of your learning takes you
            closer to your next opportunity.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN LEARNING CARD
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-10 w-full"
        >
          <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-[0_35px_90px_rgba(15,23,42,0.16)] sm:min-h-[450px] lg:min-h-[430px]">

            {/* =================================================
                INTERNAL CARD GLOW
            ================================================== */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.45, 0.3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/20 blur-[100px]"
            />

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.12, 0.25, 0.12],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px]"
            />

            {/* =================================================
                INTERNAL GRID
            ================================================== */}
            <div
              className="absolute inset-0 opacity-[0.055]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            {/* =================================================
                CARD CONTENT
            ================================================== */}
           
<div className="relative z-10 flex min-h-[470px] items-center px-6 py-8 sm:min-h-[450px] sm:px-10 lg:min-h-[430px] lg:px-16">

  <div className="grid w-full gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-md"
    >
      <div className="mb-4 flex items-center gap-3">

        {/* BLUE ICON */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10">
          <GraduationCap className="h-4 w-4 text-sky-400" />
        </div>

        <p className="text-[10px] font-[900] uppercase tracking-[0.2em] text-yellow-400">
          Learn With Purpose
        </p>
      </div>

      <h3 className="text-[30px] font-[900] leading-[1.1] tracking-[-0.025em] text-white sm:text-[36px]">
        Learn.
        <span className="block text-white/45">
          Practice.
        </span>
        <span className="block text-white/45">
          Progress.
        </span>
      </h3>

      <p className="mt-4 max-w-sm text-[13px] font-semibold leading-6 text-white/60">
        Every stage is designed to help you understand concepts,
        practice them in real situations and build confidence for
        what comes next.
      </p>

      {/* GREEN CHECK ICON */}
      <div className="mt-5 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />

        <span className="text-[11px] font-[800] text-white/70">
          Structured for real progress
        </span>
      </div>
    </motion.div>


    {/* RIGHT STEPS */}
    <div className="relative">

      {/* CONNECTING LINE */}
      <div className="absolute left-[21px] top-7 hidden h-[calc(100%-56px)] w-px bg-white/10 sm:block">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-1/2 w-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent"
        />
      </div>


      <div className="space-y-3.5">

        {learningSteps.map((step, index) => {
          const Icon = step.icon;

          /* ============================================
             EACH STEP ICON DIFFERENT COLOR
          ============================================ */
          const iconColors = [
            {
              bg: "bg-sky-400",
              border: "border-sky-300/30",
              text: "text-slate-950",
              glow: "shadow-[0_0_25px_rgba(56,189,248,0.20)]",
              hover: "group-hover:bg-sky-300",
              arrow: "group-hover:text-sky-300",
            },
            {
              bg: "bg-violet-400",
              border: "border-violet-300/30",
              text: "text-slate-950",
              glow: "shadow-[0_0_25px_rgba(167,139,250,0.20)]",
              hover: "group-hover:bg-violet-300",
              arrow: "group-hover:text-violet-300",
            },
            {
              bg: "bg-emerald-400",
              border: "border-emerald-300/30",
              text: "text-slate-950",
              glow: "shadow-[0_0_25px_rgba(52,211,153,0.20)]",
              hover: "group-hover:bg-emerald-300",
              arrow: "group-hover:text-emerald-300",
            },
            {
              bg: "bg-rose-400",
              border: "border-rose-300/30",
              text: "text-slate-950",
              glow: "shadow-[0_0_25px_rgba(251,113,133,0.20)]",
              hover: "group-hover:bg-rose-300",
              arrow: "group-hover:text-rose-300",
            },
          ];

          const colors = iconColors[index % iconColors.length];

          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="group relative flex items-center gap-4"
            >

              {/* STEP ICON */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 shrink-0"
              >
                <div
                  className={`
                    flex h-[43px] w-[43px] items-center justify-center
                    rounded-xl
                    border
                    ${colors.border}
                    ${colors.bg}
                    ${colors.text}
                    ${colors.glow}
                    transition-all
                    duration-300
                    group-hover:scale-110
                    ${colors.hover}
                  `}
                >
                  <Icon
                    className="h-[18px] w-[18px]"
                    strokeWidth={2.6}
                  />
                </div>
              </motion.div>


              {/* STEP CONTENT */}
              <motion.div
                whileHover={{ x: 4 }}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.1]"
              >
                <div className="flex items-center justify-between gap-4">

                  <div className="min-w-0">

                    {/* YELLOW NUMBER */}
                    <p className="text-[9px] font-[900] uppercase tracking-[0.2em] text-yellow-400">
                      Step {step.number}
                    </p>

                    <h4 className="mt-0.5 text-[14px] font-[900] leading-tight text-white">
                      {step.title}
                    </h4>

                    <p className="mt-1 text-[10px] font-semibold leading-4 text-white/55">
                      {step.description}
                    </p>

                  </div>

                  {/* DIFFERENT ARROW COLOR */}
                  <ArrowRight
                    className={`
                      h-4 w-4 shrink-0
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      ${colors.arrow}
                    `}
                  />

                </div>
              </motion.div>

            </motion.div>
          );
        })}

      </div>
    </div>
  </div>
</div>



            {/* BOTTOM FADE */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        {/* =====================================================
            BENEFITS
        ====================================================== */}
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {learningBenefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                {/* FULL COLOR ICON */}
                <div
                  className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ring-1 ${item.iconRing} transition-all duration-300 group-hover:scale-110`}
                >
                  <Icon
                    className={`h-[20px] w-[20px] ${item.iconColor}`}
                    strokeWidth={2.6}
                  />
                </div>

                <div>
                  <h4 className="text-[14px] font-[900] text-slate-950">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-[11px] font-semibold leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href="/programs"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-yellow-400 px-5 py-3 text-[13px] font-[900] text-black shadow-[0_10px_25px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_14px_30px_rgba(250,204,21,0.35)]"
          >
            Explore Learning Programs

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:rotate-45">
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
