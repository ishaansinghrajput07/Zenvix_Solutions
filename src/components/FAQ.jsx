import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Zenvix?",
    answer:
      "Zenvix is a career-focused learning platform that combines structured training, practical projects, career preparation and job placement support into one continuous journey.",
  },
  {
    question: "What happens after I complete a program?",
    answer:
      "Completing the training is only one part of the journey. Zenvix helps you move into career preparation through portfolio building, resume guidance, interview preparation and placement support.",
  },
  {
    question: "Does Zenvix provide job placement support?",
    answer:
      "Yes. Zenvix is designed to support learners beyond training with career guidance and placement support as they work toward employment opportunities.",
  },
  {
    question: "Are the programs project-based?",
    answer:
      "Yes. The learning experience is designed around practical application so you can build projects and develop skills that are relevant to real-world work.",
  },
  {
    question: "Do I get career and interview preparation?",
    answer:
      "Yes. Career preparation can include portfolio and resume guidance, interview preparation, mock interview practice and other support designed to help you become more confident and job-ready.",
  },
  {
    question: "Who are Zenvix programs designed for?",
    answer:
      "Zenvix is designed for learners at different stages, including students, beginners, career changers and professionals looking to develop practical, career-focused skills.",
  },
  {
    question: "Which career domains can I prepare for?",
    answer:
      "Programs and career paths can span technology, data, AI, cloud, business and other professional domains depending on the available Zenvix programs.",
  },
  {
    question: "How do I get started with Zenvix?",
    answer:
      "Start by exploring the available programs and choosing the learning path that matches your career goal. You can then connect with the Zenvix team for guidance on the next step.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-[30px]"
    >
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full pt-[50px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Frequently Asked Questions
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
  Questions, <span className="font-[900] text-teal-700">answered.</span>
</h2>

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
            Everything you need to know about learning with Zenvix,
            preparing for your career and taking the next step.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN FAQ LAYOUT
        ====================================================== */}

        <div className="mt-10 grid w-full gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =================================================
              LEFT CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="
              relative overflow-hidden rounded-[1.35rem]
              bg-slate-950 p-5
              shadow-[0_20px_60px_rgba(15,23,42,0.10)]
              sm:p-6 lg:p-7
            "
          >
            {/* Internal glow */}

            <div
              aria-hidden
              className="
                absolute -right-28 -top-28
                h-72 w-72 rounded-full
                bg-violet-500/[0.12] blur-3xl
              "
            />

            <div
              aria-hidden
              className="
                absolute -bottom-28 -left-20
                h-64 w-64 rounded-full
                bg-emerald-500/[0.08] blur-3xl
              "
            />

            <div className="relative">
              {/* Icon */}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                <CircleHelp
                  size={19}
                  className="text-violet-400"
                  strokeWidth={2.4}
                />
              </div>

              {/* Eyebrow */}

              <p className="mt-6 text-[10px] font-[900] uppercase tracking-[0.18em] text-yellow-500">
                Need more clarity?
              </p>

              {/* Heading */}

              <h3 className="mt-3 text-[24px] font-[900] leading-[1.15] tracking-[-0.025em] text-white sm:text-[28px]">
                Your career
                <span className="block text-white/40">
                  questions matter.
                </span>
              </h3>

              {/* Description */}

              <p className="mt-5 text-[12px] font-medium leading-6 text-slate-400 sm:text-[13px]">
                Still unsure which program or career path is right for you?
                Talk to the Zenvix team and get guidance before you begin.
              </p>

              {/* Mini Points */}

              <div className="mt-7 space-y-3">
                {[
                  "Choose the right learning path",
                  "Understand the career journey",
                  "Get guidance before you start",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                      <Sparkles
                        size={11}
                        className="text-emerald-400"
                        strokeWidth={2.5}
                      />
                    </span>

                    <span className="text-[11px] font-semibold leading-5 text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <a
                href="/contact"
                className="
                  group mt-8 inline-flex items-center gap-2
                  rounded-xl bg-yellow-400
                  px-5 py-3
                  text-[12px] font-[900] text-black
                  shadow-[0_8px_20px_rgba(250,204,21,0.25)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-300
                  hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]
                  active:translate-y-0
                "
              >
                Talk to Zenvix

                <ArrowRight
                  size={14}
                  strokeWidth={2.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Bottom Message */}

              <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5">
                <MessageCircle
                  size={14}
                  className="text-slate-500"
                />

                <span className="text-[10px] font-semibold text-yellow-500">
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
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    overflow-hidden rounded-[1rem] border
                    transition-all duration-300
                    ${
                      isOpen
                        ? "border-slate-300 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex w-full items-center justify-between
                      gap-5 px-5 py-4 text-left
                      sm:px-6 sm:py-5
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      {/* Number */}

                      <span
                        className={`
                          text-[10px] font-[900]
                          tracking-[0.12em]
                          transition-colors duration-300
                          ${
                            isOpen
                              ? "text-violet-500"
                              : "text-slate-300"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <span
                        className={`
                          text-[13px] font-[900]
                          leading-5
                          transition-colors duration-300
                          sm:text-[14px]
                          ${
                            isOpen
                              ? "text-slate-950"
                              : "text-slate-700"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon */}

                    <span
                      className={`
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full
                        transition-all duration-300
                        ${
                          isOpen
                            ? "bg-slate-950 text-white"
                            : "bg-slate-50 text-slate-400"
                        }
                      `}
                    >
                      <ChevronDown
                        size={15}
                        strokeWidth={2.5}
                        className={`
                          transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </span>
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6">
                          <p className="max-w-2xl pl-[25px] text-[12px] font-medium leading-6 text-slate-500 sm:text-[13px]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-7 flex w-full items-center justify-center gap-2 text-center"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-500"
              strokeWidth={2.5}
            />
          </div>

          <p className="text-[12px] font-semibold leading-6 text-slate-500">
            Still have questions?
            <span className="ml-1 font-[900] text-slate-700">
              We're here to help you move forward.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}