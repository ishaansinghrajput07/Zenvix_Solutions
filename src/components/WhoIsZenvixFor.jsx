
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  RefreshCcw,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   AUDIENCE DATA
========================================================= */

const audiences = [
  {
    number: "01",
    title: "Students & Beginners",
    description:
      "Start from the fundamentals and build practical, job-ready skills with a structured learning path.",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-50",
    ring: "ring-violet-100",
    glow: "bg-violet-400/20",
    hoverBorder: "group-hover:border-violet-200",
  },
  {
    number: "02",
    title: "Career Changers",
    description:
      "Build the skills and confidence you need to transition into a new career with a clear direction.",
    icon: RefreshCcw,
    color: "text-blue-600",
    bg: "bg-blue-50",
    ring: "ring-blue-100",
    glow: "bg-blue-400/20",
    hoverBorder: "group-hover:border-blue-200",
  },
  {
    number: "03",
    title: "Working Professionals",
    description:
      "Upskill with practical training and prepare yourself for better career opportunities.",
    icon: BriefcaseBusiness,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    ring: "ring-cyan-100",
    glow: "bg-cyan-400/20",
    hoverBorder: "group-hover:border-cyan-200",
  },
  {
    number: "04",
    title: "Career-Focused Learners",
    description:
      "Turn your learning into practical experience, interview readiness and a path toward employment.",
    icon: Rocket,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    glow: "bg-emerald-400/20",
    hoverBorder: "group-hover:border-emerald-200",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function WhoIsZenvixFor() {
  return (
    <section
      id="who-is-zenvix-for"
      className="relative overflow-hidden bg-white py-[30px]"
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
          {/* LABEL */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Who Zenvix Is For
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          {/* HEADING */}

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Wherever you are,
            <span className="block font-[900] text-teal-700">
              your next step starts here.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
            Whether you're starting from scratch, changing careers or
            leveling up your skills, Zenvix gives you a structured path
            from learning to employment.
          </p>
        </motion.div>

        {/* =====================================================
            AUDIENCE CARDS
        ====================================================== */}

        <div className="mx-auto mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className="h-full"
              >
                <Link
                  to="/career"
                  className={`
                    group
                    relative
                    flex
                    h-full
                    min-h-[245px]
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
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                    ${item.hoverBorder}
                    focus:outline-none
                    focus:ring-2
                    focus:ring-slate-950/10
                  `}
                >

                  {/* =================================================
                      HOVER GLOW
                  ================================================== */}

                  <div
                    aria-hidden
                    className={`
                      pointer-events-none
                      absolute
                      -right-14
                      -top-14
                      h-36
                      w-36
                      rounded-full
                      ${item.glow}
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    `}
                  />

                  {/* =================================================
                      TOP ROW
                  ================================================== */}

                  <div className="relative flex items-center justify-between">

                    {/* COLORFUL ICON */}

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`
                        relative
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        ${item.bg}
                        ring-1
                        ${item.ring}
                        transition-all
                        duration-300
                      `}
                    >
                      <Icon
                        className={`h-[19px] w-[19px] ${item.color}`}
                        strokeWidth={2.5}
                      />
                    </motion.div>

                    {/* YELLOW NUMBER */}

                    <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                      {item.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative mt-5">

                    <h3 className="text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-[11px] font-semibold leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* =================================================
                      BOTTOM INDICATOR
                  ================================================== */}

                  <div className="relative mt-auto pt-5">

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">

                      <span
                        className={`
                          text-[9px]
                          font-[900]
                          uppercase
                          tracking-[0.18em]
                          ${item.color}
                        `}
                      >
                        Your Journey
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                        <ArrowUpRight
                          className="
                            h-[13px]
                            w-[13px]
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <span
                    aria-hidden
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      origin-left
                      scale-x-0
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    `}
                    style={{
                      background:
                        index === 0
                          ? "#8B5CF6"
                          : index === 1
                            ? "#2563EB"
                            : index === 2
                              ? "#0891B2"
                              : "#059669",
                    }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <motion.div
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto mt-7 flex max-w-6xl items-center justify-center gap-2 text-center"
        >
          {/* COLORFUL ICON */}

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-500"
              strokeWidth={2.5}
            />
          </div>

          <p className="text-[12px] font-semibold leading-6 text-slate-500">
            One goal connects every learner:
            <span className="ml-1 font-[900] text-slate-700">
              build skills that lead to opportunity.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

