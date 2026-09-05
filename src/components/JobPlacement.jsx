
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Search,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";

/* =========================================================
   PLACEMENT STEPS
========================================================= */

const placementSteps = [
  {
    number: "01",
    title: "Complete Your Training",
    description:
      "Build practical, job-ready skills through structured learning and real-world projects.",
    icon: CheckCircle2,
    color: "#8B5CF6",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    number: "02",
    title: "Become Career Ready",
    description:
      "Prepare your resume, portfolio and professional profile with focused career guidance.",
    icon: FileText,
    color: "#4C74F0",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    number: "03",
    title: "Prepare for Interviews",
    description:
      "Practice interviews, strengthen communication and build confidence for real opportunities.",
    icon: Target,
    color: "#14B8C9",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    number: "04",
    title: "Get Placement Support",
    description:
      "Receive ongoing guidance and support as you move through the job search and hiring process.",
    icon: UserCheck,
    color: "#12A76B",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function JobPlacement() {
  return (
    <section
      id="job-placement"
      className="relative overflow-hidden bg-white py-[30px]"
    >
      {/* =====================================================
          MAIN CONTAINER
          SAME AS WHO IS ZENVIX FOR
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
              From Learning to Employment
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          {/* HEADING */}

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Your course doesn't end
            <span className="block font-[900] text-teal-700">
              when the training ends.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
            Zenvix takes your journey beyond learning — with practical
            training, career preparation and job placement support designed
            to help you move toward employment.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN JOURNEY CARD
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-10 w-full"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.5rem]
              border
              border-slate-200/80
              bg-white/90
              p-5
              shadow-[0_20px_70px_rgba(15,23,42,0.07)]
              backdrop-blur-xl
              sm:p-6
              lg:p-7
            "
          >
            {/* =================================================
                CARD DECORATIVE GLOWS
            ================================================== */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-200/25 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-200/20 blur-[90px]" />

            {/* =================================================
                CARD HEADER
            ================================================== */}

            <div className="relative flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <div className="flex items-center gap-2">

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </span>

                  <p className="text-[9px] font-[900] uppercase tracking-[0.22em] text-slate-400">
                    Zenvix Career Path
                  </p>

                </div>

                <p className="mt-2 text-[14px] font-[900] leading-tight text-slate-900">
                  A guided path from training to placement
                </p>
              </div>

              {/* CAREER FOCUSED */}

              <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 shadow-sm">

                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[9px] font-[900] uppercase tracking-[0.14em] text-emerald-600">
                  Career Focused
                </span>

              </div>
            </div>

            {/* =================================================
                JOURNEY STEPS
            ================================================== */}

            <div className="relative mt-7">

              {/* =================================================
                  DESKTOP LINE

                  ICON = 40px
                  ICON CENTER = 20px

                  Therefore line is EXACTLY at top 20px.
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[12.5%]
                  right-[12.5%]
                  top-[20px]
                  z-0
                  hidden
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-violet-200
                  via-sky-200
                  to-emerald-200
                  lg:block
                "
              />

              {/* LINE GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[12.5%]
                  right-[12.5%]
                  top-[18px]
                  z-0
                  hidden
                  h-[5px]
                  rounded-full
                  bg-gradient-to-r
                  from-violet-100
                  via-sky-100
                  to-emerald-100
                  opacity-60
                  blur-[5px]
                  lg:block
                "
              />

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

                {placementSteps.map((step, index) => {
                  const Icon = step.icon;

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
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.07,
                      }}
                      className="group relative"
                    >

                      {/* =================================================
                          ICON + NUMBER
                      ================================================== */}

                      <div className="relative z-10 flex items-center gap-3 lg:block">

                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            y: -3,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className={`
                            relative
                            z-20
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            ${step.border}
                            ${step.bg}
                            shadow-[0_6px_18px_rgba(15,23,42,0.06)]
                            transition-shadow
                            duration-300
                            group-hover:shadow-[0_10px_25px_rgba(15,23,42,0.10)]
                          `}
                        >
                          <Icon
                            size={16}
                            strokeWidth={2.2}
                            style={{
                              color: step.color,
                            }}
                          />
                        </motion.div>

                        {/* NUMBER */}

                        <span
                          className="
                            font-mono
                            text-[8px]
                            font-semibold
                            tracking-[0.15em]
                            text-slate-300
                            lg:absolute
                            lg:left-12
                            lg:top-3
                          "
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* =================================================
                          CONTENT
                      ================================================== */}

                      <div className="ml-[52px] mt-0 lg:ml-0 lg:mt-5">

                        <h3 className="text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                          {step.title}
                        </h3>

                        <p className="mt-2.5 text-[11px] font-semibold leading-5 text-slate-500">
                          {step.description}
                        </p>

                      </div>
                    </motion.div>
                  );
                })}

              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FEATURE ROW
        ====================================================== */}

        <div className="mt-7 grid w-full gap-4 sm:grid-cols-3">

          {[
            {
              icon: BriefcaseBusiness,
              title: "Career Focused",
              text: "Training aligned with real career goals.",
              color: "#8B5CF6",
              bg: "bg-violet-50",
            },
            {
              icon: Search,
              title: "Job Search Support",
              text: "Guidance throughout your job search.",
              color: "#14B8C9",
              bg: "bg-cyan-50",
            },
            {
              icon: Sparkles,
              title: "Built for Progress",
              text: "A clear path from learner to professional.",
              color: "#12A76B",
              bg: "bg-emerald-50",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  rounded-[1.35rem]
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-[0_8px_28px_rgba(15,23,42,0.035)]
                  transition-all
                  duration-300
                  hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                "
              >
                <div className="flex items-center gap-3">

                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      ${item.bg}
                    `}
                  >
                    <Icon
                      size={16}
                      strokeWidth={2.4}
                      style={{
                        color: item.color,
                      }}
                    />
                  </span>

                  <div>
                    <p className="text-[13px] font-[900] text-slate-950">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] font-semibold leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            CTA
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
          className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >

          {/* PRIMARY */}

          <a
            href="#programs"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-xl
              bg-yellow-400
              px-5
              py-3
              text-[12px]
              font-[900]
              text-black
              shadow-[0_8px_20px_rgba(250,204,21,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300
              hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]
              active:translate-y-0
            "
          >
            Explore Programs

            <ArrowRight
              size={15}
              strokeWidth={2.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* SECONDARY */}

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-5
              py-3
              text-[12px]
              font-[900]
              text-slate-950
              shadow-[0_5px_18px_rgba(15,23,42,0.04)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-slate-300
              hover:bg-slate-50
            "
          >
            Talk to Zenvix

            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </motion.div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mx-auto mt-5 max-w-4xl text-center text-[12px] font-bold leading-6 text-slate-500">
          Career support is designed to improve your readiness and access to
          opportunities. Outcomes may vary based on skills, performance,
          experience and market conditions.
        </p>

      </div>
    </section>
  );
}
