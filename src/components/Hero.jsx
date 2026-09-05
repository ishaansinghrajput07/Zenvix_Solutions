
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Globe2,
  Layers,
  Users,
} from "lucide-react";

const trustIndicators = [
  {
    icon: Layers,
    label: "Structured, project-based curriculum",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/15",
    iconBorder: "border-violet-300/30",
  },
  {
    icon: Users,
    label: "1:1 mentorship & career guidance",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/15",
    iconBorder: "border-cyan-300/30",
  },
  {
    icon: Globe2,
    label: "Built for learners, everywhere",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/15",
    iconBorder: "border-emerald-300/30",
  },
];

export default function Hero() {
  return (
    <section
      className="
        relative
        isolate
        h-[680px]
        overflow-hidden
        pt-[115px]
        pb-10
        sm:h-[700px]
        sm:pt-[125px]
        lg:h-[700px]
        lg:min-h-0
        lg:pt-[125px]
        lg:pb-10
      "
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          overflow-hidden
        "
        animate={{
          scale: [1, 1.018, 1.008, 1.02, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/zenvix-hero.webp"
          alt="Zenvix Hero Background"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* FULL EXTENDED GRADIENT OVERLAY */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.65) 35%, rgba(15, 23, 42, 0.25) 70%, rgba(15, 23, 42, 0.08) 100%)",
        }}
      />

      {/* CONTENT CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-full
          px-[30px]
          sm:px-[40px]
          lg:px-[50px]
        "
      >
        <div className="flex w-full items-center">
          <div className="w-full max-w-[580px]">

            {/* TOP BADGE / EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-white/10
                px-3
                py-1
                backdrop-blur-sm
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />

              <span className="text-[12px] font-bold tracking-widest text-white uppercase">
                Career-learning platform · Global
              </span>
            </motion.div>

            {/* EXACT IMAGE-MATCHING BOLD HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="
                text-[38px]
                font-[900]
                leading-[1.1]
                tracking-tight
                text-white
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              Learn the skills. Build the future. Get hired.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                mt-4
                max-w-[480px]
                text-[15px]
                font-normal
                leading-relaxed
                text-slate-100/90
                drop-shadow-sm
              "
            >
              Zenvix connects structured learning, real-world projects,
              and career preparation into one continuous journey — so
              the skills you build translate directly into the job
              you're working toward.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="
                mt-7
                flex
                flex-col
                gap-3.5
                sm:flex-row
                sm:items-center
              "
            >
              {/* =====================================================
                  EXPLORE PROGRAMS
                  Soft blue/violet glow behind button
              ===================================================== */}
              <div className="relative">
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-xl
                    bg-blue-500/20
                    blur-xl
                  "
                />

                <a
                  href="#programs"
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#1e293b]
                    px-6
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-white
                    shadow-[0_0_24px_rgba(59,130,246,0.18)]
                    transition-all
                    duration-200
                    hover:bg-[#0f172a]
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.32)]
                  "
                >
                  Explore Programs

                  <ArrowRight size={16} />
                </a>
              </div>

              {/* =====================================================
                  SEE HOW IT WORKS
                  Soft cyan glow behind button
              ===================================================== */}
              <div className="relative">
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-xl
                    bg-cyan-400/15
                    blur-xl
                  "
                />

                <a
                  href="#how-it-works"
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-white/40
                    bg-white/10
                    px-6
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-white
                    backdrop-blur-md
                    shadow-[0_0_24px_rgba(34,211,238,0.12)]
                    transition-all
                    duration-200
                    hover:bg-white/20
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.24)]
                  "
                >
                  <PlayCircle
                    size={18}
                    className="text-white"
                  />

                  See How It Works
                </a>
              </div>
            </motion.div>

            {/* FEATURE BADGES */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-2.5
                pt-2
              "
            >
              {trustIndicators.map(
                ({
                  icon: Icon,
                  label,
                  iconColor,
                  iconBg,
                  iconBorder,
                }) => (
                  <li
                    key={label}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      border-white/30
                      bg-white/15
                      px-3.5
                      py-1.5
                      backdrop-blur-md
                    "
                  >
                    {/* COLORFUL ICON */}
                    <span
                      className={`
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-md
                        border
                        ${iconBg}
                        ${iconBorder}
                      `}
                    >
                      <Icon
                        size={14}
                        className={iconColor}
                        strokeWidth={2.5}
                      />
                    </span>

                    <span className="text-[12px] font-medium text-white">
                      {label}
                    </span>
                  </li>
                )
              )}
            </motion.ul>

          </div>
        </div>
      </div>
    </section>
  );
}
