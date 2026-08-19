import { motion } from 'framer-motion'
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
} from 'lucide-react'

const advantages = [
  {
    number: '01',
    title: 'Learning With a Career Goal',
    description:
      'Every learning path is designed with your career direction in mind — not just course completion.',
    icon: Compass,
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.09)',
  },
  {
    number: '02',
    title: 'Practical, Project-Based Training',
    description:
      'Move beyond theory by working on practical projects that help turn knowledge into usable skills.',
    icon: Layers3,
    color: '#4C74F0',
    bg: 'rgba(76,116,240,0.09)',
  },
  {
    number: '03',
    title: 'Mentorship & Guidance',
    description:
      'Get guidance throughout your learning journey so you always know what to focus on next.',
    icon: UsersRound,
    color: '#14B8C9',
    bg: 'rgba(20,184,201,0.09)',
  },
  {
    number: '04',
    title: 'Career Preparation',
    description:
      'Build your resume, portfolio, communication and interview confidence before entering the job market.',
    icon: Target,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.09)',
  },
  {
    number: '05',
    title: 'Placement Support',
    description:
      'Your journey continues beyond training with career guidance and support toward employment opportunities.',
    icon: BriefcaseBusiness,
    color: '#12A76B',
    bg: 'rgba(18,167,107,0.09)',
  },
  {
    number: '06',
    title: 'One Continuous Journey',
    description:
      'Learning, building, preparing and moving toward employment — connected in one experience.',
    icon: BadgeCheck,
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.09)',
  },
]

export default function WhyZenvix() {
  return (
    <section
      id="why-zenvix"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-violet-500/[0.045] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-500/[0.045] blur-3xl"
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
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
            ease: 'easeOut',
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
              Why Zenvix
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.25rem]">
            More than a course.
            <span className="block text-slate-400">
              A path toward your career.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
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
          className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.07)]"
        >
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* =================================================
                LEFT MESSAGE
            ================================================== */}

            <div className="relative overflow-hidden bg-slate-950 p-7 sm:p-9 lg:p-10">
              <div
                aria-hidden
                className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-violet-500/[0.12] blur-3xl"
              />

              <div
                aria-hidden
                className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-emerald-500/[0.08] blur-3xl"
              />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Sparkles
                    size={18}
                    className="text-violet-400"
                  />
                </div>

                <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                  The Zenvix difference
                </p>

                <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                  Don't stop at
                  <span className="block text-white/40">
                    knowing.
                  </span>

                  <span className="block">
                    Learn to move forward.
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                  A strong career is built through more than watching lessons.
                  It takes practice, feedback, preparation and the right
                  support at the right time.
                </p>

                <a
                  href="#how-it-works"
                  className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold text-white"
                >
                  See how Zenvix works

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT JOURNEY VISUAL
            ================================================== */}

            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    One connected experience
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    From learning to opportunity
                  </p>
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                  <CheckCircle2
                    size={15}
                    className="text-emerald-500"
                  />
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    step: '01',
                    title: 'Learn',
                    text: 'Build the right foundation.',
                    color: '#8B5CF6',
                    width: '35%',
                  },
                  {
                    step: '02',
                    title: 'Build',
                    text: 'Apply knowledge through projects.',
                    color: '#4C74F0',
                    width: '54%',
                  },
                  {
                    step: '03',
                    title: 'Prepare',
                    text: 'Get ready for real opportunities.',
                    color: '#14B8C9',
                    width: '72%',
                  },
                  {
                    step: '04',
                    title: 'Move Forward',
                    text: 'Take the next step toward employment.',
                    color: '#12A76B',
                    width: '92%',
                  },
                ].map((item, index) => (
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
                    className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          backgroundColor: `${item.color}12`,
                        }}
                      >
                        <span
                          className="font-mono text-[9px] font-semibold"
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.step}
                        </span>
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11.5px] font-semibold text-slate-900">
                            {item.title}
                          </span>

                          <span className="hidden text-[9px] text-slate-400 sm:block">
                            {item.text}
                          </span>
                        </div>

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

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon

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
                className="group relative overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white p-5 shadow-[0_5px_22px_rgba(15,23,42,0.02)] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: item.bg,
                    }}
                  >
                    <Icon
                      size={16}
                      strokeWidth={2.1}
                      style={{
                        color: item.color,
                      }}
                    />
                  </span>

                  <span className="font-mono text-[9px] tracking-[0.16em] text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-[14px] font-semibold tracking-[-0.01em] text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-[11.5px] leading-5.5 text-slate-500">
                  {item.description}
                </p>

                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}