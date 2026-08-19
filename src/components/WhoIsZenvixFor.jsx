import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  RefreshCcw,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const audiences = [
  {
    number: '01',
    title: 'Students & Beginners',
    description:
      'Start from the fundamentals and build practical, job-ready skills with a structured learning path.',
    icon: GraduationCap,
    color: '#8B5CF6',
    bg: 'bg-violet-500/10',
  },
  {
    number: '02',
    title: 'Career Changers',
    description:
      'Build the skills and confidence you need to transition into a new career with a clear direction.',
    icon: RefreshCcw,
    color: '#4C74F0',
    bg: 'bg-blue-500/10',
  },
  {
    number: '03',
    title: 'Working Professionals',
    description:
      'Upskill with practical training and prepare yourself for better career opportunities.',
    icon: BriefcaseBusiness,
    color: '#14B8C9',
    bg: 'bg-cyan-500/10',
  },
  {
    number: '04',
    title: 'Career-Focused Learners',
    description:
      'Turn your learning into practical experience, interview readiness and a path toward employment.',
    icon: Rocket,
    color: '#12A76B',
    bg: 'bg-emerald-500/10',
  },
]

export default function WhoIsZenvixFor() {
  return (
    <section
      id="who-is-zenvix-for"
      className="relative overflow-hidden border-y border-slate-100 bg-white py-24 sm:py-28"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-emerald-500/[0.05] blur-3xl"
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
              Who Zenvix Is For
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.2rem]">
            Wherever you are,
            <span className="block text-slate-400">
              your next step starts here.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
            Whether you're starting from scratch, changing careers or
            leveling up your skills, Zenvix gives you a structured path
            from learning to employment.
          </p>
        </motion.div>

        {/* =====================================================
            AUDIENCE CARDS
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.number}
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
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -6,
                }}
                className="h-full"
              >
                <Link
                  to="/career"
                  className="group relative block h-full overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-2 focus:ring-slate-950/10"
                >
                  {/* =================================================
                      HOVER GLOW
                  ================================================== */}

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  {/* =================================================
                      TOP ROW
                  ================================================== */}

                  <div className="relative flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}
                    >
                      <Icon
                        size={17}
                        strokeWidth={2.15}
                        style={{
                          color: item.color,
                        }}
                      />
                    </motion.div>

                    <span className="font-mono text-[9px] font-medium tracking-[0.16em] text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative mt-6">
                    <h3 className="text-[15px] font-semibold tracking-[-0.015em] text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  {/* =================================================
                      BOTTOM INDICATOR
                  ================================================== */}

                  <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        color: item.color,
                      }}
                    >
                      Your Journey
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-8 flex max-w-6xl items-center justify-center gap-2 text-center"
        >
          <Sparkles
            size={14}
            className="text-violet-500"
            strokeWidth={2}
          />

          <p className="text-[11px] text-slate-400">
            One goal connects every learner:
            <span className="ml-1 font-semibold text-slate-700">
              build skills that lead to opportunity.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}