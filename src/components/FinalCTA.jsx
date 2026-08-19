import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  Target,
} from 'lucide-react'

const journeyPoints = [
  {
    icon: GraduationCap,
    label: 'Learn',
    color: '#8B5CF6',
  },
  {
    icon: Sparkles,
    label: 'Build',
    color: '#4C74F0',
  },
  {
    icon: Target,
    label: 'Prepare',
    color: '#14B8C9',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Get Hired',
    color: '#12A76B',
  },
]

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          AMBIENT GLOW
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-40 top-[-120px] h-[500px] w-[500px] rounded-full bg-violet-500/[0.12] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-40 bottom-[-150px] h-[520px] w-[520px] rounded-full bg-emerald-500/[0.09] blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse 65% 70% at 50% 50%, black 15%, transparent 100%)',
          }}
        />
      </div>

      <div className="shell relative">
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="mx-auto max-w-5xl"
        >
          {/* =================================================
              TOP LABEL
          ================================================== */}

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">
                Your career journey starts here
              </span>
            </div>
          </div>

          {/* =================================================
              HEADLINE
          ================================================== */}

          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.4rem]">
              Your next chapter
              <span className="block text-white/35">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              Learn practical skills. Build meaningful projects. Prepare for
              real opportunities. Get the support you need to move your career
              forward.
            </p>
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#programs"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[11px] font-semibold text-slate-950 shadow-[0_12px_35px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,255,255,0.12)]"
            >
              Explore Programs

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[11px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
            >
              Start Your Journey

              <ArrowRight
                size={15}
                className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
              />
            </a>
          </div>

          {/* =================================================
              TRUST POINTS
          ================================================== */}

          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              'Practical learning',
              'Real-world projects',
              'Career preparation',
              'Placement support',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5"
              >
                <CheckCircle2
                  size={12}
                  className="text-emerald-400"
                />

                <span className="text-[9px] text-slate-500">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              JOURNEY CARD
          ================================================== */}

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                  The Zenvix journey
                </p>

                <p className="mt-1 text-[11px] font-medium text-slate-300">
                  From learning to career
                </p>
              </div>

              <Sparkles
                size={15}
                className="text-violet-400"
              />
            </div>

            <div className="relative">
              {/* connecting line */}

              <div className="absolute left-[20px] right-[20px] top-5 hidden h-px bg-white/10 sm:block" />

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {journeyPoints.map(
                  ({ icon: Icon, label, color }, index) => (
                    <motion.div
                      key={label}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                      }}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      <motion.span
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950"
                        style={{
                          boxShadow: `0 0 0 5px ${color}08`,
                        }}
                      >
                        <Icon
                          size={15}
                          style={{
                            color,
                          }}
                        />
                      </motion.span>

                      <span className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-white/25">
                        0{index + 1}
                      </span>

                      <span className="mt-1 text-[10px] font-semibold text-slate-300">
                        {label}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}