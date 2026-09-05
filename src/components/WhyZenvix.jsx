import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Compass,
  Layers3,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    title: "Learning With a Career Goal",
    description:
      "Every learning path is designed with your career direction in mind — not just course completion.",
    icon: Compass,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.09)",
  },
  {
    number: "02",
    title: "Practical, Project-Based Training",
    description:
      "Move beyond theory by working on practical projects that help turn knowledge into usable skills.",
    icon: Layers3,
    color: "#4C74F0",
    bg: "rgba(76,116,240,0.09)",
  },
  {
    number: "03",
    title: "Mentorship & Guidance",
    description:
      "Get guidance throughout your learning journey so you always know what to focus on next.",
    icon: UsersRound,
    color: "#14B8C9",
    bg: "rgba(20,184,201,0.09)",
  },
  {
    number: "04",
    title: "Career Preparation",
    description:
      "Build your resume, portfolio, communication and interview confidence before entering the job market.",
    icon: Target,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.09)",
  },
  {
    number: "05",
    title: "Placement Support",
    description:
      "Your journey continues beyond training with career guidance and support toward employment opportunities.",
    icon: BriefcaseBusiness,
    color: "#12A76B",
    bg: "rgba(18,167,107,0.09)",
  },
  {
    number: "06",
    title: "One Continuous Journey",
    description:
      "Learning, building, preparing and moving toward employment — connected in one experience.",
    icon: BadgeCheck,
    color: "#EC4899",
    bg: "rgba(236,72,153,0.09)",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Learn",
    text: "Build the right foundation.",
    color: "#1D283D",
    width: "35%",
  },
  {
    step: "02",
    title: "Build",
    text: "Apply knowledge through projects.",
    color: "#4C74F0",
    width: "54%",
  },
  {
    step: "03",
    title: "Prepare",
    text: "Get ready for real opportunities.",
    color: "#14B8C9",
    width: "72%",
  },
  {
    step: "04",
    title: "Move Forward",
    text: "Take the next step toward employment.",
    color: "#12A76B",
    width: "92%",
  },
];

export default function WhyZenvix() {
  return (
    <section
      id="why-zenvix"
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
              Why Zenvix
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            More than a course.
            <span className="block font-[900] text-teal-700">
              A path toward your career.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Zenvix connects the parts that learners often have to figure out
            on their own — skills, projects, preparation, guidance and the
            next step toward employment.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FEATURE PANEL
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
          className="mx-auto mt-10 w-full overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.06)]"
        >
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* =================================================
                LEFT MESSAGE
            ================================================== */}

            <div className="relative overflow-hidden bg-slate-950 p-6 sm:p-8 lg:p-9">
              {/* Internal visual glow — section background nahi */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-violet-500/[0.12] blur-3xl"
              />

              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-emerald-500/[0.08] blur-3xl"
              />

              <div className="relative">
                {/* Icon */}

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Sparkles
                    size={18}
                    className="text-violet-400"
                    strokeWidth={2.2}
                  />
                </div>

                {/* Eyebrow */}

                <p className="mt-7 font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-yellow-500">
                  The Zenvix difference
                </p>

                {/* Heading */}

                <h3 className="mt-3 max-w-sm text-[24px] font-[900] leading-[1.15] tracking-[-0.025em] text-white sm:text-[30px]">
                  Don't stop at
                  <span className="block font-[900] text-white/40">
                    knowing.
                  </span>

                  <span className="block font-[900]">
                    Learn to move forward.
                  </span>
                </h3>

                {/* Description */}

                <p className="mt-5 max-w-sm text-[13px] font-medium leading-6 text-slate-400 sm:text-[14px] sm:leading-7">
                  A strong career is built through more than watching lessons.
                  It takes practice, feedback, preparation and the right
                  support at the right time.
                </p>

                {/* Link */}

                <a
                  href="#how-it-works"
                  className="group mt-7 inline-flex items-center gap-2 text-[11px] font-[800] text-white transition-colors duration-300 hover:text-violet-300"
                >
                  See how Zenvix works

                  <ArrowRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT JOURNEY VISUAL
            ================================================== */}

            <div className="relative p-6 sm:p-8 lg:p-9">
              {/* Header */}

              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    One connected experience
                  </p>

                  <p className="mt-1 text-[14px] font-[800] text-slate-900">
                    From learning to opportunity
                  </p>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                    strokeWidth={2.5}
                  />
                </span>
              </div>

              {/* Journey Steps */}

              <div className="space-y-3">
                {journeySteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      {/* Step Number */}

                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: `${item.color}12`,
                        }}
                      >
                        <span
                          className="font-mono text-[9px] font-[800]"
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.step}
                        </span>
                      </span>

                      {/* Content */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[12px] font-[800] text-slate-900">
                            {item.title}
                          </span>

                          <span className="hidden text-[9px] font-medium text-slate-400 sm:block">
                            {item.text}
                          </span>
                        </div>

                        {/* Progress */}

                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-200">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: item.width,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3 + index * 0.1,
                            }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: item.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            ADVANTAGES GRID
        ====================================================== */}

        <div className="mt-5 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative flex min-h-[205px] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
              >
                {/* Top */}

                <div className="flex items-start justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: item.bg,
                    }}
                  >
                    <Icon
                      size={17}
                      strokeWidth={2.3}
                      style={{
                        color: item.color,
                      }}
                    />
                  </span>

                  <span className="font-mono text-[9px] font-[800] tracking-[0.16em] text-yellow-500">
                    {item.number}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-5">
                  <h3 className="text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-[11.5px] font-medium leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Accent */}

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundColor: item.color,
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
            One experience connects every step:
            <span className="ml-1 font-[900] text-slate-700">
              learn, build, prepare and move forward.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}