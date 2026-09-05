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
      className="relative overflow-hidden bg-white py-[30px]"
    >
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
          }}
          className="w-full pt-[50px] text-center"
        >
          {/* LABEL */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="!m-0 text-[14px] font-[900] uppercase tracking-[0.18em] !text-teal-700">
              Career Domains
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          {/* HEADING */}

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Where can your
            <span className="block font-[900] text-teal-700">
              career take you?
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Build practical skills that can help you pursue opportunities
            across modern technology, business and professional career paths.
          </p>

          {/* DESKTOP CAREER PATH INDICATOR */}

          <motion.div
            whileHover={{
              y: -2,
            }}
            className="mx-auto mt-6 hidden w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-[0_6px_20px_rgba(15,23,42,0.04)] lg:flex"
          >
            <Sparkles
              size={14}
              className="text-violet-500"
              strokeWidth={2.5}
            />

            <span className="text-[10px] font-[900] text-slate-600">
              Explore career paths
            </span>

            <ArrowUpRight
              size={13}
              className="text-slate-400"
              strokeWidth={2.5}
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            CAREER GRID
        ====================================================== */}

        <div className="mx-auto mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careerDomains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.div
                key={domain.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="h-full"
              >
                <MotionLink
                  to={domain.link}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`group relative flex h-full min-h-[245px] flex-col overflow-hidden rounded-[1.35rem] border bg-white p-5 transition-all duration-500 ${
                    domain.featured
                      ? "border-slate-300 shadow-[0_12px_40px_rgba(15,23,42,0.07)]"
                      : "border-slate-200 shadow-[0_8px_28px_rgba(15,23,42,0.035)]"
                  } hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-2 focus:ring-slate-950/10`}
                >
                  {/* =================================================
                      HOVER GLOW
                  ================================================== */}

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: domain.color,
                    }}
                  />

                  {/* =================================================
                      TOP
                  ================================================== */}

                  <div className="relative flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
                      style={{
                        backgroundColor: domain.soft,
                      }}
                    >
                      <Icon
                        className="h-[19px] w-[19px]"
                        strokeWidth={2.5}
                        style={{
                          color: domain.color,
                        }}
                      />
                    </motion.div>

                    <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
                      {domain.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative mt-5">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: domain.color,
                        }}
                      />

                      <span
                        className="text-[9px] font-[900] uppercase tracking-[0.18em]"
                        style={{
                          color: domain.color,
                        }}
                      >
                        Career Path
                      </span>
                    </div>

                    <h3 className="mt-2 text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                      {domain.title}
                    </h3>

                    <p className="!mt-2.5 min-h-[48px] text-[11px] font-medium leading-5 !text-slate-500">
                      {domain.description}
                    </p>
                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div className="relative mt-auto pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
                      <span
                        className="text-[9px] font-[900] uppercase tracking-[0.18em]"
                        style={{
                          color: domain.color,
                        }}
                      >
                        Explore Opportunities
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                        <ArrowUpRight
                          className="h-[13px] w-[13px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          strokeWidth={2.5}
                        />
                      </span>
                    </div>
                  </div>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <span
                    aria-hidden
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
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto mt-7 flex max-w-6xl items-center justify-center gap-2 text-center"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-50">
            <Sparkles
              className="h-3.5 w-3.5 text-yellow-500"
              strokeWidth={2.5}
            />
          </div>

          <p className="!m-0 text-[12px] font-medium leading-6 !text-slate-500">
            Your skills can open the door.
            <span className="ml-1 font-[900] text-slate-700">
              Zenvix helps you prepare for what comes next.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}