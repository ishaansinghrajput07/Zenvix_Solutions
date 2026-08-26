
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  Sparkles,
} from 'lucide-react'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200
        bg-slate-50
        py-14
        sm:py-16
        lg:py-18
      "
    >
      {/* =====================================================
          SOFT BACKGROUND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -left-32
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/[0.08]
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            -bottom-44
            -right-32
            h-[440px]
            w-[440px]
            rounded-full
            bg-violet-400/[0.07]
            blur-3xl
          "
        />

        {/* subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
          "
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 70% 100% at 50% 50%, black, transparent 85%)',
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="shell relative">
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="
            flex
            flex-col
            gap-7
            rounded-3xl
            border
            border-slate-200/80
            bg-white/80
            px-6
            py-7
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            backdrop-blur-xl
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
            lg:py-7
          "
        >

          {/* =================================================
              LEFT — LOGO + TEXT
          ================================================== */}

          <div className="flex min-w-0 items-center gap-5">

            {/* Logo */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >
              <img
                src="/images/zenvix-logo.png"
                alt="Zenvix Solutions"
                className="
                  max-h-9
                  max-w-10
                  object-contain
                "
              />
            </div>

            {/* Text */}

            <div className="min-w-0">

              <div className="mb-1.5 flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-cyan-500"
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-cyan-600
                  "
                >
                  Start your journey
                </span>
              </div>

              <h2
                className="
                  text-[22px]
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-slate-900
                  sm:text-[25px]
                "
              >
                Ready to build what comes next?
              </h2>

              <p
                className="
                  mt-1.5
                  max-w-xl
                  text-[13px]
                  leading-5
                  text-slate-500
                  sm:text-[14px]
                "
              >
                Learn practical skills, build real projects,
                and move confidently toward your career goals.
              </p>

            </div>
          </div>

          {/* =================================================
              RIGHT — BUTTON ROW
          ================================================== */}

          <div
            className="
              flex
              shrink-0
              flex-col
              gap-2.5
              sm:flex-row
              lg:justify-end
            "
          >

            {/* Explore Programs */}

            <a
              href="#programs"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-slate-900
                px-5
                py-3
                text-[12px]
                font-semibold
                text-white
                shadow-[0_8px_24px_rgba(15,23,42,0.14)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-slate-800
              "
            >
              Explore Programs

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Contact Us */}

            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-full
                border
                border-cyan-200
                bg-cyan-50
                px-5
                py-3
                text-[12px]
                font-semibold
                text-cyan-700
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-300
                hover:bg-cyan-100
              "
            >
              <Mail
                size={14}
                className="
                  text-cyan-600
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              Contact Us
            </a>

            {/* Start Your Journey */}

            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-indigo-600
                px-5
                py-3
                text-[12px]
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(99,102,241,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Start Your Journey

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

