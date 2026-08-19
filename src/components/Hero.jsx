import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, CheckCircle2, FolderCheck, MessageSquareText, LifeBuoy, Globe2, Layers, Users } from 'lucide-react'
import ProgressRail from './ProgressRail.jsx'

const headline = ['Learn the skills.', 'Build the future.', 'Get hired.']

const trustIndicators = [
  { icon: Layers, label: 'Structured, project-based curriculum' },
  { icon: Users, label: '1:1 mentorship & career guidance' },
  { icon: Globe2, label: 'Built for learners, everywhere' },
]

const floatingCards = [
  {
    icon: FolderCheck,
    label: 'Project Completed',
    sub: 'E-commerce platform',
    color: 'text-electric-500 bg-electric-500/10',
    position: 'left-[-8%] top-[14%]',
    delay: 0.5,
    float: 'animate-float',
  },
  {
    icon: CheckCircle2,
    label: 'Portfolio Ready',
    sub: '6 projects shipped',
    color: 'text-emerald-500 bg-emerald-500/10',
    position: 'right-[-6%] top-[6%]',
    delay: 0.7,
    float: 'animate-float-slow',
  },
  {
    icon: MessageSquareText,
    label: 'Interview Ready',
    sub: '3 mock rounds passed',
    color: 'text-violet-500 bg-violet-500/10',
    position: 'left-[-4%] bottom-[10%]',
    delay: 0.9,
    float: 'animate-float-slow',
  },
  {
    icon: LifeBuoy,
    label: 'Career Support',
    sub: 'Guidance, on demand',
    color: 'text-cyan-500 bg-cyan-500/10',
    position: 'right-[-8%] bottom-[18%]',
    delay: 1.1,
    float: 'animate-float',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[132px] pb-20 sm:pt-[152px] sm:pb-28 lg:pb-32">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/10 via-electric-500/8 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] h-[380px] w-[380px] rounded-full bg-emerald-500/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="shell grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Left: message */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3.5 py-1.5 shadow-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="eyebrow">Career-learning platform · Global</span>
          </motion.div>

          <h1 className="text-[38px] leading-[1.08] font-semibold sm:text-[46px] lg:text-[52px]">
            {headline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * i, ease: 'easeOut' }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-6 max-w-lg font-body text-[16.5px] leading-relaxed text-slate-600"
          >
            Zenvix connects structured learning, real-world projects, and career preparation into one
            continuous journey — so the skills you build translate directly into the job you're working toward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#programs" className="btn-primary group">
              Explore Programs
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="#how-it-works" className="btn-secondary group">
              <PlayCircle size={18} className="text-slate-500" />
              See How It Works
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-11 flex flex-col gap-3.5 border-t border-border pt-7 sm:flex-row sm:gap-7"
          >
            {trustIndicators.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon size={16} className="shrink-0 text-navy-400" strokeWidth={2} />
                <span className="font-body text-[13.5px] text-slate-600">{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: career journey dashboard visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none"
        >
          <div className="relative rounded-2xl border border-border bg-white shadow-lift">
            {/* frame bar */}
            <div className="flex items-center gap-1.5 rounded-t-2xl border-b border-border bg-surface px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-navy-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy-100" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy-100" />
              <span className="ml-3 font-mono text-[11px] text-slate-400">zenvix.app/journey</span>
            </div>

            <div className="p-6 sm:p-7">
              <p className="eyebrow mb-1">Your journey</p>
              <p className="mb-6 font-display text-[17px] font-semibold text-navy">Career progress overview</p>

              <ProgressRail activeIndex={2} />

              <div className="mt-8 rounded-xl border border-border bg-surface p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-body text-[12.5px] font-medium text-slate-500">Stage 03 · Prepare</span>
                  <span className="font-mono text-[11px] text-emerald-500">On track</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '68%' }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    className="h-full rounded-full bg-journey-gradient"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* floating status cards */}
          {floatingCards.map(({ icon: Icon, label, sub, color, position, delay, float }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay }}
              className={`absolute ${position} ${float} hidden w-[172px] rounded-xl border border-border bg-white/95 p-3 shadow-lift backdrop-blur sm:block`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color}`}>
                  <Icon size={15} strokeWidth={2.25} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="font-body text-[12.5px] font-semibold text-navy">{label}</span>
                  <span className="font-body text-[11px] text-slate-500">{sub}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
