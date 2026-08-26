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
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    number: '02',
    title: 'Become Career Ready',
    description:
      'Prepare your resume, portfolio and professional profile with focused career guidance.',
    icon: FileText,
    color: '#4C74F0',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    number: '03',
    title: 'Prepare for Interviews',
    description:
      'Practice interviews, strengthen communication and build confidence for real opportunities.',
    icon: Target,
    color: '#14B8C9',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    number: '04',
    title: 'Get Placement Support',
    description:
      'Receive ongoing guidance and support as you move through the job search and hiring process.',
    icon: UserCheck,
    color: '#12A76B',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
]

export default function JobPlacement() {
  return (
    <section
      id="job-placement"
      className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16"
    >
      {/* =====================================================
          PREMIUM WHITE BLUR BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Soft Violet Glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-40 -top-44 h-[520px] w-[520px] rounded-full bg-violet-200/25 blur-[110px]"
        />

        {/* Soft Sky Glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-44 top-[-40px] h-[520px] w-[520px] rounded-full bg-sky-200/30 blur-[115px]"
        />

        {/* Soft Emerald Glow */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -18, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[-260px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-200/20 blur-[120px]"
        />

        {/* Center White Light */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[100px]" />

        {/* Very Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 10%, transparent 85%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 10%, transparent 85%)',
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="shell relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-slate-200" />

            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.24em] text-emerald-600">
              From Learning to Employment
            </span>

            <span className="h-px w-7 bg-slate-200" />
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3rem]">
            Your course doesn't end

            <span className="block bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              when the training ends.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-slate-500 sm:text-sm">
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
            y: 18,
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
          className="mx-auto mt-8 max-w-5xl"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[1.5rem]
              border border-slate-200/80
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

                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Zenvix Career Path
                  </p>

                </div>

                <p className="mt-2 text-sm font-semibold text-slate-900">
                  A guided path from training to placement
                </p>
              </div>

              {/* Career Focused Badge */}

              <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 shadow-sm">

                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-600">
                  Career Focused
                </span>

              </div>
            </div>

            {/* =================================================
                JOURNEY STEPS
            ================================================== */}

            <div className="relative mt-6">

              {/* Connecting Line */}

              <div className="absolute left-[8%] right-[8%] top-5 hidden h-[2px] overflow-hidden rounded-full bg-gradient-to-r from-violet-200 via-sky-200 to-emerald-200 lg:block" />

              {/* Small Line Glow */}

              <div className="absolute left-[12%] right-[12%] top-[19px] hidden h-[4px] rounded-full bg-gradient-to-r from-violet-100 via-sky-100 to-emerald-100 opacity-60 blur-[5px] lg:block" />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

                {placementSteps.map((step, index) => {
                  const Icon = step.icon

                  return (
                    <motion.div
                      key={step.number}
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
                        duration: 0.45,
                        delay: 0.12 + index * 0.08,
                      }}
                      className="group relative"
                    >
                      {/* =================================================
                          ICON + NUMBER
                      ================================================== */}

                      <div className="relative z-10 flex items-center gap-3 lg:block">

                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            y: -3,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          }}
                          className={`
                            relative
                            flex h-10 w-10 shrink-0
                            items-center justify-center
                            rounded-xl
                            border
                            ${step.border}
                            ${step.bg}
                            shadow-[0_6px_18px_rgba(15,23,42,0.06)]
                            transition-shadow duration-300
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

                        <h3 className="text-[13px] font-bold leading-5 text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 text-[10.5px] leading-5 text-slate-500">
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
            FEATURE ROW
        ====================================================== */}

        <div className="mx-auto mt-5 grid max-w-5xl gap-3 sm:grid-cols-3">

          {[
            {
              icon: BriefcaseBusiness,
              title: 'Career Focused',
              text: 'Training aligned with real career goals.',
              color: '#8B5CF6',
              bg: 'bg-violet-50',
            },
            {
              icon: Search,
              title: 'Job Search Support',
              text: 'Guidance throughout your job search.',
              color: '#14B8C9',
              bg: 'bg-cyan-50',
            },
            {
              icon: Sparkles,
              title: 'Built for Progress',
              text: 'A clear path from learner to professional.',
              color: '#12A76B',
              bg: 'bg-emerald-50',
            },
          ].map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.08,
                }}
                className="
                  group
                  rounded-xl
                  border border-slate-200/80
                  bg-white/80
                  px-4 py-3
                  shadow-[0_8px_25px_rgba(15,23,42,0.035)]
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-slate-200
                  hover:bg-white
                  hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
                "
              >
                <div className="flex items-center gap-3">

                  <span
                    className={`
                      flex h-8 w-8 shrink-0
                      items-center justify-center
                      rounded-lg
                      ${item.bg}
                      shadow-sm
                    `}
                  >
                    <Icon
                      size={14}
                      style={{
                        color: item.color,
                      }}
                    />
                  </span>

                  <div>
                    <p className="text-[11px] font-bold text-slate-900">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[9.5px] leading-4 text-slate-500">
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
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >

          {/* Primary CTA */}

          <a
            href="#programs"
            className="
              group
              inline-flex items-center gap-2
              rounded-full
              bg-slate-950
              px-5 py-2.5
              text-[11px]
              font-semibold
              text-white
              shadow-[0_10px_25px_rgba(15,23,42,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-slate-800
              hover:shadow-[0_15px_35px_rgba(15,23,42,0.16)]
            "
          >
            Explore Programs

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          {/* Secondary CTA */}

          <a
            href="#contact"
            className="
              group
              inline-flex items-center gap-1.5
              rounded-full
              border border-slate-200
              bg-white
              px-5 py-2.5
              text-[11px]
              font-semibold
              text-slate-700
              shadow-[0_5px_18px_rgba(15,23,42,0.04)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-slate-300
              hover:bg-slate-50
              hover:shadow-[0_8px_22px_rgba(15,23,42,0.07)]
            "
          >
            Talk to Zenvix

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </motion.div>
      </div>
    </section>
  )
}