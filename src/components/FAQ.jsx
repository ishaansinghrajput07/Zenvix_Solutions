import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is Zenvix?',
    answer:
      'Zenvix is a career-focused learning platform that combines structured training, practical projects, career preparation and job placement support into one continuous journey.',
  },
  {
    question: 'What happens after I complete a program?',
    answer:
      'Completing the training is only one part of the journey. Zenvix helps you move into career preparation through portfolio building, resume guidance, interview preparation and placement support.',
  },
  {
    question: 'Does Zenvix provide job placement support?',
    answer:
      'Yes. Zenvix is designed to support learners beyond training with career guidance and placement support as they work toward employment opportunities.',
  },
  {
    question: 'Are the programs project-based?',
    answer:
      'Yes. The learning experience is designed around practical application so you can build projects and develop skills that are relevant to real-world work.',
  },
  {
    question: 'Do I get career and interview preparation?',
    answer:
      'Yes. Career preparation can include portfolio and resume guidance, interview preparation, mock interview practice and other support designed to help you become more confident and job-ready.',
  },
  {
    question: 'Who are Zenvix programs designed for?',
    answer:
      'Zenvix is designed for learners at different stages, including students, beginners, career changers and professionals looking to develop practical, career-focused skills.',
  },
  {
    question: 'Which career domains can I prepare for?',
    answer:
      'Programs and career paths can span technology, data, AI, cloud, business and other professional domains depending on the available Zenvix programs.',
  },
  {
    question: 'How do I get started with Zenvix?',
    answer:
      'Start by exploring the available programs and choosing the learning path that matches your career goal. You can then connect with the Zenvix team for guidance on the next step.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32"
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
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-violet-500/[0.045] blur-3xl"
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
          className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-500/[0.04] blur-3xl"
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
              Frequently Asked Questions
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.2rem]">
            Questions,
            <span className="text-slate-400"> answered.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
            Everything you need to know about learning with Zenvix,
            preparing for your career and taking the next step.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FAQ LAYOUT
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =================================================
              LEFT CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[1.5rem] bg-slate-950 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8 lg:p-9"
          >
            {/* glow */}

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
                <CircleHelp
                  size={19}
                  className="text-violet-400"
                />
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                Need more clarity?
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                Your career
                <span className="block text-white/40">
                  questions matter.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Still unsure which program or career path is right for you?
                Talk to the Zenvix team and get guidance before you begin.
              </p>

              {/* mini points */}

              <div className="mt-7 space-y-3">
                {[
                  'Choose the right learning path',
                  'Understand the career journey',
                  'Get guidance before you start',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10">
                      <Sparkles
                        size={10}
                        className="text-emerald-400"
                      />
                    </span>

                    <span className="text-[10.5px] text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <a
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[10px] font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5"
              >
                Talk to Zenvix

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6">
                <MessageCircle
                  size={13}
                  className="text-slate-500"
                />

                <span className="text-[9px] text-slate-500">
                  We're here to help you take the next step.
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FAQ ACCORDION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-2.5"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-slate-300 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]'
                      : 'border-slate-200 bg-white/70 hover:bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span
                        className={`font-mono text-[9px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
                          isOpen
                            ? 'text-violet-500'
                            : 'text-slate-300'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`text-[12px] font-semibold transition-colors duration-300 sm:text-[13px] ${
                          isOpen
                            ? 'text-slate-950'
                            : 'text-slate-700'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-slate-950 text-white'
                          : 'bg-slate-50 text-slate-400'
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: 'easeOut',
                        }}
                      >
                        <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                          <p className="max-w-2xl pl-[25px] text-[11.5px] leading-6 text-slate-500 sm:text-[12px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}