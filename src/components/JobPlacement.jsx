import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Search,
  Sparkles,
  Target,
  UserCheck,
} from 'lucide-react'

const placementSteps = [
  {
    number: '01',
    title: 'Complete Your Training',
    description:
      'Build practical, job-ready skills through structured learning and real-world projects.',
    icon: CheckCircle2,
    color: '#8B5CF6',
    bg: 'bg-violet-500/10',
  },
  {
    number: '02',
    title: 'Become Career Ready',
    description:
      'Prepare your resume, portfolio and professional profile with focused career guidance.',
    icon: FileText,
    color: '#4C74F0',
    bg: 'bg-blue-500/10',
  },
  {
    number: '03',
    title: 'Prepare for Interviews',
    description:
      'Practice interviews, strengthen communication and build confidence for real opportunities.',
    icon: Target,
    color: '#14B8C9',
    bg: 'bg-cyan-500/10',
  },
  {
    number: '04',
    title: 'Get Placement Support',
    description:
      'Receive ongoing guidance and support as you move through the job search and hiring process.',
    icon: UserCheck,
    color: '#12A76B',
    bg: 'bg-emerald-500/10',
  },
]

export default function JobPlacement() {
  return (
    <section
      id="job-placement"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-260px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.09] blur-3xl" />

        <div className="absolute bottom-[-220px] left-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500/[0.07] blur-3xl" />

        <div className="absolute right-[-140px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-3xl" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 70% at 50% 45%, black 20%, transparent 100%)',
          }}
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/20" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-400">
              From Learning to Employment
            </span>

            <span className="h-px w-8 bg-white/20" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.3rem]">
            Your course doesn't end
            <span className="block text-white/40">
              when the training ends.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
            Zenvix takes your journey beyond learning — with practical
            training, career preparation and job placement support designed
            to help you move toward employment.
          </p>
        </motion.div>

        {/* =====================================================
            SIGNATURE PLACEMENT JOURNEY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur sm:p-7 lg:p-9">
            {/* top label */}

            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Zenvix Career Path
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  A guided path from training to placement
                </p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
                  Career Focused
                </span>
              </div>
            </div>

            {/* journey line */}

            <div className="relative mt-9">
              {/* desktop connecting line */}

              <div className="absolute left-[7%] right-[7%] top-5 hidden h-px bg-gradient-to-r from-violet-400/30 via-blue-400/30 to-emerald-400/40 lg:block" />

              <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {placementSteps.map((step, index) => {
                  const Icon = step.icon

                  return (
                    <motion.div
                      key={step.number}
                      initial={{
                        opacity: 0,
                        y: 18,
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
                        delay: 0.15 + index * 0.08,
                      }}
                      className="group relative"
                    >
                      <div className="relative z-10 flex items-center gap-3 lg:block">
                        <motion.div
                          whileHover={{
                            scale: 1.06,
                          }}
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 ${step.bg}`}
                        >
                          <Icon
                            size={16}
                            strokeWidth={2.15}
                            style={{
                              color: step.color,
                            }}
                          />
                        </motion.div>

                        <span className="font-mono text-[9px] tracking-[0.16em] text-white/25 lg:absolute lg:left-12 lg:top-3">
                          {step.number}
                        </span>
                      </div>

                      <div className="ml-[52px] mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-[14px] font-semibold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[11.5px] leading-5.5 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM FEATURE ROW
        ====================================================== */}

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3">
          {[
            {
              icon: BriefcaseBusiness,
              title: 'Career Focused',
              text: 'Training aligned with real career goals.',
              color: '#8B5CF6',
            },
            {
              icon: Search,
              title: 'Job Search Support',
              text: 'Guidance throughout your job search.',
              color: '#14B8C9',
            },
            {
              icon: Sparkles,
              title: 'Built for Progress',
              text: 'A clear path from learner to professional.',
              color: '#12A76B',
            },
          ].map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 transition-colors duration-300 hover:bg-white/[0.045]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${item.color}12`,
                    }}
                  >
                    <Icon
                      size={14}
                      style={{
                        color: item.color,
                      }}
                    />
                  </span>

                  <div>
                    <p className="text-[11.5px] font-semibold text-white">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <a
            href="#programs"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs font-semibold text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
          >
            Explore Programs

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#contact"
            className="text-xs font-medium text-slate-400 transition-colors duration-300 hover:text-white"
          >
            Talk to Zenvix
          </a>
        </motion.div>
      </div>
    </section>
  )
}