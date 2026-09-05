import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Quote,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const stories = [
  {
    id: "01",
    initials: "JS",
    role: "Software Engineering",
    journey: "Learning → Projects → Career Ready",
    result: "Built a job-ready portfolio",
    color: "#8B5CF6",
    bg: "bg-violet-500/10",
  },
  {
    id: "02",
    initials: "DA",
    role: "Data & Analytics",
    journey: "Skills → Practice → Interview Ready",
    result: "Prepared for real opportunities",
    color: "#14B8C9",
    bg: "bg-cyan-500/10",
  },
  {
    id: "03",
    initials: "AI",
    role: "AI & Machine Learning",
    journey: "Training → Projects → Career Support",
    result: "Turned learning into practical experience",
    color: "#12A76B",
    bg: "bg-emerald-500/10",
  },
];

const journeyStages = [
  {
    label: "Learn",
    value: "Skills",
    width: "28%",
    color: "#8B5CF6",
  },
  {
    label: "Build",
    value: "Projects",
    width: "52%",
    color: "#4C74F0",
  },
  {
    label: "Prepare",
    value: "Career Ready",
    width: "74%",
    color: "#14B8C9",
  },
  {
    label: "Move Forward",
    value: "Opportunity",
    width: "92%",
    color: "#12A76B",
  },
];

const supportPoints = [
  "Practical Training",
  "Real Projects",
  "Career Preparation",
  "Placement Support",
];

export default function SuccessStories() {
  return (
    <section
      id="stories"
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
              Success Stories
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Learning that leads
            <span className="block font-[900] text-teal-700">
              somewhere meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Every learner starts with a different goal. Zenvix is designed
            to help turn learning, practice and preparation into meaningful
            career progress.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED STORY AREA
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
          }}
          className="mx-auto mt-10 w-full overflow-hidden rounded-[1.35rem] border border-slate-200 bg-slate-950 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
        >
          {/* Internal visual glows */}

          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/[0.12] blur-3xl"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-emerald-500/[0.08] blur-3xl"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              {/* =================================================
                  LEFT MESSAGE
              ================================================== */}

              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Quote
                    size={19}
                    className="text-violet-400"
                    strokeWidth={2.2}
                  />
                </div>

                <p className="text-[9px] font-[800] uppercase tracking-[0.2em] text-yellow-500">
                  The Zenvix Journey
                </p>

                <h3 className="mt-3 max-w-md text-[24px] font-[900] leading-[1.15] tracking-[-0.025em] text-white sm:text-[30px]">
                  Don't just learn a skill.
                  <span className="block font-[900] text-white/40">
                    Build a career around it.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-[13px] font-medium leading-6 text-slate-400 sm:text-[14px] sm:leading-7">
                  From your first lesson to your first opportunity, every
                  stage is designed to keep your career goal in sight.
                </p>

                {/* Support Points */}

                <div className="mt-7 flex flex-wrap gap-2">
                  {supportPoints.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium text-slate-300"
                    >
                      <CheckCircle2
                        size={11}
                        className="text-emerald-400"
                        strokeWidth={2.5}
                      />

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  RIGHT — JOURNEY VISUAL
              ================================================== */}

              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur sm:p-6">
                  {/* Journey Header */}

                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-yellow-500">
                        Career Progress
                      </p>

                      <p className="mt-1 text-[12px] font-[800] text-white">
                        From learner to professional
                      </p>
                    </div>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                      <TrendingUp
                        size={16}
                        className="text-emerald-400"
                        strokeWidth={2.4}
                      />
                    </span>
                  </div>

                  {/* Progress Stages */}

                  <div className="mt-6 space-y-5">
                    {journeyStages.map((stage, index) => (
                      <div key={stage.label}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-[10px] font-medium text-slate-400">
                            {stage.label}
                          </span>

                          <span className="text-[10px] font-[800] text-white">
                            {stage.value}
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: stage.width,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.9,
                              delay: 0.25 + index * 0.12,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: stage.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            STORY CARDS
        ====================================================== */}

        <div className="mt-5 grid w-full gap-4 md:grid-cols-3">
          {stories.map((story, index) => {
            const Icon =
              index === 0
                ? BriefcaseBusiness
                : index === 1
                  ? TrendingUp
                  : Sparkles;

            const iconBackground =
              index === 0
                ? "rgba(139,92,246,0.10)"
                : index === 1
                  ? "rgba(20,184,201,0.10)"
                  : "rgba(18,167,107,0.10)";

            return (
              <motion.article
                key={story.id}
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
                className="group relative flex min-h-[205px] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                {/* Top */}

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Initials */}

                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[10px] font-[900]"
                      style={{
                        backgroundColor: iconBackground,
                        color: story.color,
                      }}
                    >
                      {story.initials}
                    </div>

                    {/* Role */}

                    <div>
                      <p className="text-[12px] font-[800] text-slate-900">
                        Career Journey
                      </p>

                      <p className="mt-0.5 text-[9px] font-medium text-slate-400">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <Icon
                    size={16}
                    strokeWidth={2.3}
                    style={{
                      color: story.color,
                    }}
                  />
                </div>

                {/* Journey */}

                <div className="mt-6">
                  <p className="text-[9px] font-[800] uppercase tracking-[0.17em] text-slate-400">
                    Journey
                  </p>

                  <p className="mt-2 text-[12px] font-medium leading-5 text-slate-700">
                    {story.journey}
                  </p>
                </div>

                {/* Progress */}

                <div className="mt-auto border-t border-slate-100 pt-4">
                  <p className="text-[9px] font-[800] uppercase tracking-[0.17em] text-slate-400">
                    Progress
                  </p>

                  <p
                    className="mt-1 text-[11px] font-[800]"
                    style={{
                      color: story.color,
                    }}
                  >
                    {story.result}
                  </p>
                </div>

                {/* Bottom Accent */}

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundColor: story.color,
                  }}
                />
              </motion.article>
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
          className="mx-auto mt-7 flex max-w-5xl items-center justify-center gap-2 text-center"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-500"
              strokeWidth={2.5}
            />
          </div>

          <p className="text-[12px] font-semibold leading-6 text-slate-500">
            Real learner stories will appear here as the Zenvix community
            grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}