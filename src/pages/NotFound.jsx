import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Home, SearchX } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-white px-5 py-20 sm:px-8">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Sky glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-3xl"
        />

        {/* Violet glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/50 blur-3xl"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100/50 blur-3xl" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* Small Label */}

          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900 sm:w-10" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 sm:text-[11px]">
              Page Not Found
            </span>

            <span className="h-px w-8 bg-slate-900 sm:w-10" />
          </div>

          {/* 404 */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="relative mx-auto w-fit"
          >
            <div className="absolute inset-0 scale-75 rounded-full bg-sky-200/40 blur-3xl" />

            <h1 className="relative select-none text-[7rem] font-semibold leading-none tracking-[-0.08em] text-slate-950 sm:text-[10rem] lg:text-[12rem]">
              404
            </h1>
          </motion.div>

          {/* Icon */}

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
              delay: 0.25,
            }}
            className="mx-auto mt-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
          >
            <SearchX className="h-5 w-5" />
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="mx-auto mt-7 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl"
          >
            Looks like you took
            <span className="text-slate-400"> a wrong turn.</span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base"
          >
            The page you're looking for doesn't exist, may have been moved,
            or the link might be incorrect.
          </motion.p>

          {/* Actions */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            {/* Home */}

            <Link
              to="/"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_40px_rgba(15,23,42,0.16)] sm:w-auto"
            >
              <Home className="h-4 w-4" />

              Back to Home

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Go Back */}

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />

              Go Back
            </button>
          </motion.div>

          {/* Bottom hint */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.65,
            }}
            className="mt-10"
          >
            <p className="text-[10px] tracking-wide text-slate-400">
              You can return to the homepage and continue exploring Zenvix.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}