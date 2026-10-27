import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
<section
  id="contact"
  className="
    relative mb-[40px]
    mx-[20px] sm:mx-[30px] lg:mx-[40px]
    overflow-hidden
    rounded-[2rem]
    border border-slate-200
    bg-[#EEF3FA]
    py-[30px] pb-[60px]
    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
  "
>
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
        {/* =====================================================
            CONTENT
        ====================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mt-[20px]
            flex flex-col gap-7
            rounded-[1.35rem]
            border border-slate-200
            bg-white
            px-5 py-6
            shadow-[0_12px_35px_rgba(15,23,42,0.05)]
            sm:px-6
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-7
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
                flex h-14 w-14 shrink-0
                items-center justify-center
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
              "
            >
              <img
                src="/images/zenvix-logo.png"
                alt="Zenvix Solution"
                className="max-h-9 max-w-10 object-contain"
              />
            </div>

            {/* Text */}

            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-teal-600"
                  strokeWidth={2.5}
                />

                <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                  Start Your Journey
                </p>
              </div>

              <h2
                className="
                  text-[28px]
                  font-[900]
                  leading-[1.1]
                  tracking-[-0.025em]
                  text-slate-950
                  sm:text-[32px]
                "
              >
                Ready to build what comes next?
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-[13px]
                  font-semibold
                  leading-6
                  text-slate-500
                  sm:text-[14px]
                "
              >
                Learn practical skills, build real projects, and move
                confidently toward your career goals.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — BUTTON ROW
          ================================================== */}

          <div
            className="
              flex shrink-0
              flex-col gap-2.5
              sm:flex-row
              lg:justify-end
            "
          >
            {/* Explore Programs */}

            <a
              href="#programs"
              className="
                group inline-flex items-center justify-center
                gap-2.5 whitespace-nowrap
                rounded-xl
                bg-yellow-400
                px-5 py-3
                text-[12px]
                font-[900]
                text-black
                shadow-[0_8px_20px_rgba(250,204,21,0.25)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-yellow-300
                hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]
                active:translate-y-0
              "
            >
              Explore Programs

              <ArrowRight
                size={15}
                strokeWidth={2.8}
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
                group inline-flex items-center justify-center
                gap-2.5 whitespace-nowrap
                rounded-xl
                border border-slate-200
                bg-white
                px-5 py-3
                text-[12px]
                font-[900]
                text-slate-950
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-slate-300
                hover:bg-slate-50
              "
            >
              <Mail
                size={15}
                className="text-teal-700 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={2.5}
              />

              Contact Us
            </a>

            {/* Start Your Journey */}

            <a
              href="/contact"
              className="
                group inline-flex items-center justify-center
                gap-2.5 whitespace-nowrap
                rounded-xl
                border border-slate-950
                bg-slate-950
                px-5 py-3
                text-[12px]
                font-[900]
                text-white
                shadow-[0_8px_20px_rgba(15,23,42,0.12)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-[0_12px_28px_rgba(15,23,42,0.16)]
              "
            >
              Start Your Journey

              <ArrowRight
                size={15}
                strokeWidth={2.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM MESSAGE
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
          className="mx-auto mt-6 flex items-center justify-center gap-2 text-center"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-500"
              strokeWidth={2.5}
            />
          </div>

          <p className="text-[12px] font-semibold leading-6 text-slate-500">
            Your next opportunity starts with one step.
            <span className="ml-1 font-[900] text-slate-950">
              Start today.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}