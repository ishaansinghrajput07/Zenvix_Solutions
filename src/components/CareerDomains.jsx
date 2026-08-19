import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Database,
  HeartPulse,
  LineChart,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const careerDomains = [
  {
    number: "01",
    title: "Technology & IT",
    description:
      "Software development, IT and technology-driven career paths.",
    icon: Code2,
    color: "#4C74F0",
    soft: "rgba(76, 116, 240, 0.10)",
    featured: true,
    link: "/programs/software-engineering",
  },

  {
    number: "02",
    title: "Data & Analytics",
    description:
      "Turn data into insights, decisions and business value.",
    icon: Database,
    color: "#14B8C9",
    soft: "rgba(20, 184, 201, 0.10)",
    link: "/programs/data-analytics",
  },

  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Build skills for the next generation of intelligent technology.",
    icon: BrainCircuit,
    color: "#8B5CF6",
    soft: "rgba(139, 92, 246, 0.10)",
    link: "/programs/ai-ml",
  },

  {
    number: "04",
    title: "Cloud & DevOps",
    description:
      "Develop modern skills across cloud and engineering environments.",
    icon: Cloud,
    color: "#0EA5E9",
    soft: "rgba(14, 165, 233, 0.10)",
    link: "/programs/cloud-computing",
  },

  {
    number: "05",
    title: "Business & Operations",
    description:
      "Combine business knowledge with practical professional skills.",
    icon: BriefcaseBusiness,
    color: "#12A76B",
    soft: "rgba(18, 167, 107, 0.10)",
    link: "/programs/business-analytics",
  },

  {
    number: "06",
    title: "Finance & Banking",
    description:
      "Explore technology and analytical opportunities across finance.",
    icon: LineChart,
    color: "#F59E0B",
    soft: "rgba(245, 158, 11, 0.10)",
    link: "/programs",
  },

  {
    number: "07",
    title: "Healthcare",
    description:
      "Build career-ready skills for modern healthcare environments.",
    icon: HeartPulse,
    color: "#F43F5E",
    soft: "rgba(244, 63, 94, 0.10)",
    link: "/programs",
  },

  {
    number: "08",
    title: "Consulting & Services",
    description:
      "Develop skills for professional services and consulting careers.",
    icon: Building2,
    color: "#64748B",
    soft: "rgba(100, 116, 139, 0.10)",
    link: "/programs",
  },
];

export default function CareerDomains() {
  return (
    <section
      id="career-domains"
      className="relative overflow-hidden bg-[#F8FAFC] py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-violet-500/[0.045] blur-3xl" />

        <div className="absolute right-[-180px] bottom-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E8ECF2 1px, transparent 1px), linear-gradient(to bottom, #E8ECF2 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 75% 60% at 50% 50%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 60% at 50% 50%, black 25%, transparent 100%)",
          }}
        />
      </div>

      <div className="shell relative">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
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
            ease: "easeOut",
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-900" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Career Domains
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.25rem]">
              Where can your
              <span className="block text-slate-400">
                career take you?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              Build practical skills that can help you pursue opportunities
              across modern technology, business and professional career paths.
            </p>
          </div>

          {/* Explore career paths */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            className="hidden shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm lg:flex lg:items-center lg:gap-2"
          >
            <Sparkles
              size={14}
              className="text-violet-500"
            />

            <span className="text-[10px] font-semibold text-slate-600">
              Explore career paths
            </span>

            <ArrowUpRight
              size={13}
              className="text-slate-400"
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            CAREER GRID
        ====================================================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {careerDomains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.055,
                  ease: "easeOut",
                }}
                className="h-full"
              >

                <MotionLink
                  to={domain.link}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`group relative flex h-full min-h-[235px] flex-col overflow-hidden rounded-[1.25rem] border bg-white p-5 transition-all duration-500 ${
                    domain.featured
                      ? "border-slate-300 shadow-[0_12px_40px_rgba(15,23,42,0.07)]"
                      : "border-slate-200 shadow-[0_6px_25px_rgba(15,23,42,0.025)]"
                  } hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]`}
                >

                  {/* =================================================
                      HOVER GLOW
                  ================================================== */}

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: domain.color,
                    }}
                  />

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="relative flex items-start justify-between">

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: domain.soft,
                      }}
                    >
                      <Icon
                        size={17}
                        strokeWidth={2.1}
                        style={{
                          color: domain.color,
                        }}
                      />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.16em] text-slate-300">
                      {domain.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative mt-6">

                    <div className="flex items-center gap-2">

                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: domain.color,
                        }}
                      />

                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.17em]"
                        style={{
                          color: domain.color,
                        }}
                      >
                        Career Path
                      </span>

                    </div>

                    <h3 className="mt-2 text-[15px] font-semibold tracking-[-0.015em] text-slate-950">
                      {domain.title}
                    </h3>

                    <p className="mt-2.5 min-h-[48px] text-[11.5px] leading-5 text-slate-500">
                      {domain.description}
                    </p>
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-4">

                    <span className="text-[9px] font-medium text-slate-400">
                      Explore opportunities
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">

                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                    </span>
                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      backgroundColor: domain.color,
                    }}
                  />

                </MotionLink>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

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
          }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
          className="mt-9 flex justify-center"
        >

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <p className="text-[10px] text-slate-500">
              Your skills can open the door.

              <span className="ml-1 font-semibold text-slate-800">
                Zenvix helps you prepare for what comes next.
              </span>
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}