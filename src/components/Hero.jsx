
import { motion } from 'framer-motion'
import {
  ArrowRight,
  PlayCircle,
  Globe2,
  Layers,
  Users,
} from 'lucide-react'

const headline = ['Learn the skills.', 'Build the future.', 'Get hired.']

const trustIndicators = [
  {
    icon: Layers,
    label: 'Structured, project-based curriculum',
  },
  {
    icon: Users,
    label: '1:1 mentorship & career guidance',
  },
  {
    icon: Globe2,
    label: 'Built for learners, everywhere',
  },
]

export default function Hero() {
  return (
    <section
      className="
        relative isolate
        h-[680px]
        overflow-hidden
        pt-[115px]
        pb-10
        sm:h-[700px]
        sm:pt-[125px]
        lg:h-[700px]
        lg:min-h-0
        lg:pt-[125px]
        lg:pb-10
      "
    >

      {/* =========================================================
          FULL WIDTH BACKGROUND IMAGE
          Very slow + subtle zoom
      ========================================================= */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          overflow-hidden
        "
        animate={{
          scale: [1, 1.018, 1.008, 1.02, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        <img
          src="/images/zenvix-hero.webp"
          alt=""
          className="
            h-full
            w-full
            object-fill
          "
        />
      </motion.div>

      {/* =========================================================
          VERY SOFT OVERLAY
      ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          bg-white/[0.04]
        "
      />

      {/* =========================================================
          LEFT SIDE READABILITY GLOW
      ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          -z-10
          w-full
          lg:w-[66%]
        "
      >
        {/* Main white glow */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white/[0.97]
            via-white/[0.88]
            via-[58%]
            to-transparent
          "
        />

        {/* Very soft blur behind text */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[68%]
            backdrop-blur-[3px]
          "
        />

        {/* Soft transition */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-36
            bg-gradient-to-r
            from-white/20
            to-transparent
            blur-2xl
          "
        />
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-20
          bg-gradient-to-t
          from-slate-950/10
          to-transparent
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div
        className="
          shell
          relative
          z-10
          flex
          h-full
          items-center
        "
      >
        <div className="w-full max-w-[650px]">

          {/* =====================================================
              BADGE
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200/80
              bg-white/75
              px-3.5
              py-1.5
              shadow-soft
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="eyebrow">
              Career-learning platform · Global
            </span>
          </motion.div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}
          <h1
            className="
              text-[38px]
              leading-[1.06]
              font-semibold
              tracking-[-0.025em]
              text-navy
              sm:text-[44px]
              lg:text-[56px]
            "
          >
            {headline.map((line, i) => (
              <motion.span
                key={line}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 * i,
                  ease: 'easeOut',
                }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.32,
            }}
            className="
              mt-5
              max-w-lg
              font-body
              text-[16px]
              leading-relaxed
              text-slate-700
            "
          >
            Zenvix connects structured learning, real-world projects,
            and career preparation into one continuous journey — so
            the skills you build translate directly into the job
            you're working toward.
          </motion.p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.42,
            }}
            className="
              mt-7
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            <a
              href="#programs"
              className="btn-primary group"
            >
              Explore Programs

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </a>

            <a
              href="#how-it-works"
              className="
                btn-secondary
                group
                border-slate-300/80
                bg-white/70
                backdrop-blur-md
              "
            >
              <PlayCircle
                size={18}
                className="text-slate-500"
              />

              See How It Works
            </a>
          </motion.div>

          {/* =====================================================
              TRUST INDICATORS
          ===================================================== */}
          <motion.ul
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.55,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              border-t
              border-slate-300/70
              pt-5
              sm:flex-row
              sm:gap-6
            "
          >
            {trustIndicators.map(
              ({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5"
                >
                  <Icon
                    size={16}
                    className="shrink-0 text-navy-400"
                    strokeWidth={2}
                  />

                  <span className="font-body text-[13px] text-slate-700">
                    {label}
                  </span>
                </li>
              )
            )}
          </motion.ul>

        </div>
      </div>
    </section>
  )
}

