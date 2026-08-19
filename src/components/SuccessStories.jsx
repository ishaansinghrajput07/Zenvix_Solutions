import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Quote,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const stories = [
  {
    id: '01',
    initials: 'JS',
    role: 'Software Engineering',
    journey: 'Learning → Projects → Career Ready',
    result: 'Built a job-ready portfolio',
    color: '#8B5CF6',
    bg: 'bg-violet-500/10',
  },
  {
    id: '02',
    initials: 'DA',
    role: 'Data & Analytics',
    journey: 'Skills → Practice → Interview Ready',
    result: 'Prepared for real opportunities',
    color: '#14B8C9',
    bg: 'bg-cyan-500/10',
  },
  {
    id: '03',
    initials: 'AI',
    role: 'AI & Machine Learning',
    journey: 'Training → Projects → Career Support',
    result: 'Turned learning into practical experience',
    color: '#12A76B',
    bg: 'bg-emerald-500/10',
  },
]

export default function SuccessStories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-violet-500/[0.035] blur-3xl" />

        <div className="absolute right-[-180px] bottom-10 h-[420px] w-[420px] rounded-full bg-emerald-500/[0.035] blur-3xl" />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
              Success Stories
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.25rem]">
            Learning that leads
            <span className="block text-slate-400">
              somewhere meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
            Every learner starts with a different goal. Zenvix is designed
            to help turn learning, practice and preparation into meaningful
            career progress.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED STORY AREA
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mx-auto mt-14 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
            {/* background glow */}

            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/[0.12] blur-3xl"
            />

            <div
              aria-hidden
              className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-emerald-500/[0.08] blur-3xl"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT */}

              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                  <Quote
                    size={19}
                    className="text-violet-400"
                  />
                </div>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                  The Zenvix Journey
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                  Don't just learn a skill.
                  <span className="block text-white/40">
                    Build a career around it.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                  From your first lesson to your first opportunity, every
                  stage is designed to keep your career goal in sight.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    'Practical Training',
                    'Real Projects',
                    'Career Preparation',
                    'Placement Support',
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-medium text-slate-300"
                    >
                      <CheckCircle2
                        size={11}
                        className="text-emerald-400"
                      />

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — JOURNEY VISUAL */}

              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                        Career Progress
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        From learner to professional
                      </p>
                    </div>

                    <TrendingUp
                      size={16}
                      className="text-emerald-400"
                    />
                  </div>

                  <div className="mt-6 space-y-5">
                    {[
                      {
                        label: 'Learn',
                        value: 'Skills',
                        width: '28%',
                        color: '#8B5CF6',
                      },
                      {
                        label: 'Build',
                        value: 'Projects',
                        width: '52%',
                        color: '#4C74F0',
                      },
                      {
                        label: 'Prepare',
                        value: 'Career Ready',
                        width: '74%',
                        color: '#14B8C9',
                      },
                      {
                        label: 'Move Forward',
                        value: 'Opportunity',
                        width: '92%',
                        color: '#12A76B',
                      },
                    ].map((stage, index) => (
                      <div key={stage.label}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[10px] font-medium text-slate-400">
                            {stage.label}
                          </span>

                          <span className="text-[10px] font-semibold text-white">
                            {stage.value}
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: stage.width }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.9,
                              delay: 0.25 + index * 0.12,
                              ease: 'easeOut',
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

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {stories.map((story, index) => {
            const Icon =
              index === 0
                ? BriefcaseBusiness
                : index === 1
                  ? TrendingUp
                  : Sparkles

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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_6px_25px_rgba(15,23,42,0.025)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-[10px] font-bold"
                      style={{
                        backgroundColor: story.bg.includes('violet')
                          ? 'rgba(139,92,246,0.10)'
                          : story.bg.includes('cyan')
                            ? 'rgba(20,184,201,0.10)'
                            : 'rgba(18,167,107,0.10)',
                        color: story.color,
                      }}
                    >
                      {story.initials}
                    </div>

                    <div>
                      <p className="text-[12px] font-semibold text-slate-900">
                        Career Journey
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-400">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <Icon
                    size={16}
                    style={{
                      color: story.color,
                    }}
                  />
                </div>

                <div className="mt-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400">
                    Journey
                  </p>

                  <p className="mt-2 text-[12px] font-medium leading-5 text-slate-700">
                    {story.journey}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400">
                    Progress
                  </p>

                  <p
                    className="mt-1 text-[11px] font-semibold"
                    style={{
                      color: story.color,
                    }}
                  >
                    {story.result}
                  </p>
                </div>

                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    backgroundColor: story.color,
                  }}
                />
              </motion.article>
            )
          })}
        </div>

        {/* =====================================================
            NOTE / CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5">
            <Sparkles
              size={13}
              className="text-violet-500"
            />

            <span className="text-[10px] text-slate-500">
              Real learner stories will appear here as the Zenvix community grows.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}