import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build a strong foundation with career-focused courses designed around real-world skills.",
    icon: GraduationCap,
    color: "sky",
  },
  {
    number: "02",
    title: "Train",
    description:
      "Turn knowledge into practical ability through hands-on training and guided learning.",
    icon: Target,
    color: "violet",
  },
  {
    number: "03",
    title: "Get Hired",
    description:
      "Prepare for the workplace with career guidance, interview support and job opportunities.",
    icon: BriefcaseBusiness,
    color: "emerald",
  },
];

const highlights = [
  "Career-focused courses",
  "Practical hands-on training",
  "Industry-ready skills",
  "Career & interview preparation",
  "Job opportunity support",
  "Student-focused guidance",
];

const colorStyles = {
  sky: {
    icon:
      "bg-sky-50 text-sky-600 ring-sky-100 group-hover:bg-sky-500 group-hover:text-white",
    glow: "bg-sky-400/20",
    line: "from-sky-400",
    number: "text-sky-500",
  },

  violet: {
    icon:
      "bg-violet-50 text-violet-600 ring-violet-100 group-hover:bg-violet-500 group-hover:text-white",
    glow: "bg-violet-400/20",
    line: "via-violet-400",
    number: "text-violet-500",
  },

  emerald: {
    icon:
      "bg-emerald-50 text-emerald-600 ring-emerald-100 group-hover:bg-emerald-500 group-hover:text-white",
    glow: "bg-emerald-400/20",
    line: "to-emerald-400",
    number: "text-emerald-500",
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/50 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              About Zenvix
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Learn today.
            <span className="block bg-gradient-to-r from-slate-500 via-slate-400 to-slate-300 bg-clip-text text-transparent">
              Build your career tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Zenvix helps students go beyond simply completing a course.
            We combine focused learning, practical training and career
            support to help students build skills that can move them toward
            real job opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =================================================
              LEFT — CAREER JOURNEY VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-xl">
              {/* Main dark visual */}
              <div className="relative min-h-[580px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_35px_90px_rgba(15,23,42,0.16)]">
                {/* Animated glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.35, 0.5, 0.35],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-[100px]"
                />

                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px]"
                />

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.075]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                  }}
                />

                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
                />

                {/* =================================================
                    JOURNEY
                ================================================== */}

                <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2">
                  {/* Connecting line */}
                  <div className="absolute left-[23px] top-8 h-[calc(100%-64px)] w-px overflow-hidden bg-white/10">
                    <motion.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-1/2 w-full bg-gradient-to-b from-transparent via-sky-300 to-transparent"
                    />
                  </div>

                  <div className="space-y-7">
                    {journey.map((item, index) => {
                      const Icon = item.icon;
                      const styles = colorStyles[item.color];

                      return (
                        <motion.div
                          key={item.number}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.15,
                          }}
                          className="group relative flex items-center gap-4"
                        >
                          {/* Icon */}
                          <motion.div
                            animate={{
                              y: [0, -4, 0],
                            }}
                            transition={{
                              duration: 4 + index,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative z-20 shrink-0"
                          >
                            {/* Glow */}
                            <div
                              className={`absolute inset-0 scale-150 rounded-full ${styles.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                            />

                            <div
                              className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-white shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:scale-110 ${styles.icon}`}
                            >
                              <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                          </motion.div>

                          {/* Card */}
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex-1 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.1]"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p
                                  className={`text-[10px] font-bold uppercase tracking-[0.22em] ${styles.number}`}
                                >
                                  Step {item.number}
                                </p>

                                <h4 className="mt-1 font-semibold text-white">
                                  {item.title}
                                </h4>

                                <p className="mt-1.5 max-w-[260px] text-xs leading-5 text-white/45">
                                  {item.description}
                                </p>
                              </div>

                              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Brand label */}
                <div className="absolute bottom-6 left-7">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-white/50" />

                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                      Zenvix Career Journey
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING CARD
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                animate={{
                  y: [0, -7, 0],
                }}
                className="absolute -bottom-6 -right-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.14)] sm:-right-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      Career Ready
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Skills that move you forward
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Top floating badge */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 -top-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(15,23,42,0.1)] sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.8)]" />

                  <span className="text-xs font-semibold text-slate-700">
                    Built for your future
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50">
                <Users className="h-4 w-4 text-sky-600" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                More Than A Course
              </p>
            </div>

            {/* Heading */}
            <h3 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[2.8rem]">
              Education should take you{" "}
              <span className="text-slate-400">
                closer to your career.
              </span>
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              At Zenvix, we believe completing a course is only the beginning.
              Students need practical skills, confidence and the right
              preparation to take the next step into the professional world.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              That's why we connect learning with hands-on training and
              career support — helping students transform what they learn
              into skills they can take into real opportunities.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + index * 0.07,
                  }}
                  className="group flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-sky-50">
                      <CheckCircle2 className="h-4 w-4 text-sky-600" />
                    </div>
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                BOTTOM MINI STATS
            ================================================== */}

            <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_15px_40px_rgba(15,23,42,0.05)]">
              <div className="px-3 first:pl-0">
                <p className="text-2xl font-semibold tracking-tight text-slate-950">
                  01
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Learn
                </p>
              </div>

              <div className="px-4">
                <p className="text-2xl font-semibold tracking-tight text-slate-950">
                  02
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Train
                </p>
              </div>

              <div className="px-4 last:pr-0">
                <p className="text-2xl font-semibold tracking-tight text-slate-950">
                  03
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Get Hired
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/programs"
              whileHover={{
                x: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-slate-950"
            >
              Explore the Zenvix journey

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}