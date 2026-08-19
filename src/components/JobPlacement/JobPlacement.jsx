import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  FileCheck2,
  Handshake,
  MapPin,
  Search,
  Send,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const placementServices = [
  {
    id: "job-matching",
    title: "Job Matching",
    description:
      "Identify suitable opportunities based on your skills, qualifications, experience, preferred role, and career direction.",
    icon: Target,
    accent: "sky",
    tags: ["Skills", "Roles", "Matching"],
  },
  {
    id: "opportunity-search",
    title: "Opportunity Search",
    description:
      "Discover relevant job opportunities and understand which positions align best with your professional profile.",
    icon: Search,
    accent: "cyan",
    tags: ["Search", "Jobs", "Opportunities"],
  },
  {
    id: "application-support",
    title: "Application Support",
    description:
      "Get guidance throughout the application process, from identifying suitable roles to submitting stronger applications.",
    icon: Send,
    accent: "violet",
    tags: ["Apply", "Support", "Guidance"],
  },
  {
    id: "profile-review",
    title: "Profile Review",
    description:
      "Review your resume, professional profiles, skills, and project presentation before approaching suitable opportunities.",
    icon: FileCheck2,
    accent: "emerald",
    tags: ["Resume", "Profile", "Review"],
  },
  {
    id: "employer-connect",
    title: "Employer Connect",
    description:
      "Connect suitable candidates with relevant employers and opportunities based on role requirements and candidate profiles.",
    icon: Handshake,
    accent: "amber",
    tags: ["Employers", "Connection", "Roles"],
  },
  {
    id: "career-guidance",
    title: "Career Guidance",
    description:
      "Receive practical guidance on roles, industries, locations, career choices, and the next steps in your professional journey.",
    icon: TrendingUp,
    accent: "pink",
    tags: ["Career", "Direction", "Growth"],
  },
  {
    id: "placement-coordination",
    title: "Placement Coordination",
    description:
      "Stay organized throughout the placement journey with structured communication, opportunity updates, and application coordination.",
    icon: Users,
    accent: "orange",
    tags: ["Coordination", "Updates", "Support"],
  },
  {
    id: "location-flexibility",
    title: "Location Support",
    description:
      "Explore opportunities across preferred cities, work locations, and career markets that match your requirements.",
    icon: MapPin,
    accent: "indigo",
    tags: ["Location", "Cities", "Career"],
  },
];

const accentStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/20",
    text: "text-sky-500",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-400/20",
    text: "text-cyan-500",
    dot: "bg-cyan-400",
    hover: "group-hover:border-cyan-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    text: "text-violet-500",
    dot: "bg-violet-400",
    hover: "group-hover:border-violet-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    text: "text-emerald-500",
    dot: "bg-emerald-400",
    hover: "group-hover:border-emerald-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    text: "text-amber-500",
    dot: "bg-amber-400",
    hover: "group-hover:border-amber-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    glow: "bg-pink-400/20",
    text: "text-pink-500",
    dot: "bg-pink-400",
    hover: "group-hover:border-pink-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    glow: "bg-orange-400/20",
    text: "text-orange-500",
    dot: "bg-orange-400",
    hover: "group-hover:border-orange-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    glow: "bg-indigo-400/20",
    text: "text-indigo-500",
    dot: "bg-indigo-400",
    hover: "group-hover:border-indigo-200",
  },
};

const placementSteps = [
  {
    number: "01",
    title: "Profile",
    description:
      "Understand your skills, experience, qualifications, preferences, and career goals.",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Match",
    description:
      "Identify opportunities and employers that align with your professional profile.",
    icon: Target,
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Get support with applications, employer communication, and opportunity coordination.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Progress through the recruitment process and take the next step in your career.",
    icon: ArrowRight,
  },
];

const candidateBenefits = [
  "Opportunity discovery",
  "Role matching",
  "Application guidance",
  "Resume and profile review",
  "Employer coordination",
  "Career direction",
  "Location-based opportunities",
  "Placement journey support",
];

const employerBenefits = [
  "Access relevant candidate profiles",
  "Role-based candidate matching",
  "Candidate profile screening",
  "Structured communication",
  "Hiring coordination",
  "Support throughout the hiring process",
];

export default function JobPlacement() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
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
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/50 blur-3xl"
        />

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
          className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/40 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Job Placement
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Connect your skills.
            <span className="block text-slate-400">
              Find your opportunity.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Professional placement support designed to connect candidates with
            relevant opportunities while helping employers discover suitable
            talent.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Explore Opportunities

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href="#placement-services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-950 hover:text-slate-950"
            >
              Explore Placement Support
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            HERO FEATURE
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sky-400">
                    <Handshake className="h-4 w-4" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400">
                    Placement Support
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  The right connection can change your career direction.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  We focus on creating a structured connection between
                  candidates, skills, roles, and relevant employment
                  opportunities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {[
                  {
                    icon: UserCheck,
                    title: "Candidates",
                  },
                  {
                    icon: Building2,
                    title: "Employers",
                  },
                  {
                    icon: Target,
                    title: "Matching",
                  },
                  {
                    icon: Handshake,
                    title: "Connect",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex min-w-[105px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <Icon className="h-5 w-5 text-sky-400" />

                      <span className="mt-2 text-[10px] font-medium text-slate-300">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            SERVICES HEADER
        ====================================================== */}

        <motion.div
          id="placement-services"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Placement Services
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            More than job listings.
            <span className="block text-slate-400">
              Real placement support.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            From finding suitable roles to coordinating opportunities, our
            placement support is designed around the complete career journey.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placementServices.map((service, index) => {
            const Icon = service.icon;

            const styles =
              accentStyles[service.accent] ?? accentStyles.sky;

            return (
              <motion.div
                key={service.id}
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.085)] ${styles.hover}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${styles.glow} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <div
                        className={`absolute inset-0 scale-125 rounded-xl ${styles.glow} opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <Icon className="relative h-[19px] w-[19px]" />
                    </motion.div>

                    <span className="text-[10px] font-bold tracking-[0.15em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                      />

                      <span
                        className={`text-[9px] font-bold uppercase tracking-[0.18em] ${styles.text}`}
                      >
                        Placement Support
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] font-semibold leading-tight tracking-tight text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-slate-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-500"
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${styles.text}`}
                          strokeWidth={2.5}
                        />

                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-auto pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
                      <span className="text-[9px] font-medium text-slate-400">
                        Career-focused
                      </span>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-950"
                      >
                        Learn More

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            PLACEMENT PROCESS
        ====================================================== */}

        <motion.div
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
          }}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Placement Process
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            A simple path.
            <span className="block text-slate-400">
              A better connection.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Our placement process is designed to keep candidates focused and
            the journey organized.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {placementSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
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
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" />
                  </div>

                  <span className="text-3xl font-semibold tracking-tight text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            CANDIDATE + EMPLOYER
        ====================================================== */}

        <div className="mt-28 grid gap-5 lg:grid-cols-2">
          {/* Candidate */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[1.5rem] bg-slate-950 p-7 sm:p-9"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-400">
              <UserCheck className="h-5 w-5" />
            </div>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
              For Candidates
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Move closer to the right opportunity.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Get structured placement support that helps you discover
              opportunities and present your professional profile effectively.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {candidateBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[11px] text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              Find Opportunities

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Employer */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_8px_28px_rgba(15,23,42,0.035)] sm:p-9"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
              <Building2 className="h-5 w-5" />
            </div>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
              For Employers
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Find talent aligned with your requirements.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Build a more focused hiring pipeline by connecting with
              candidates whose skills and profiles match your requirements.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {employerBenefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-[11px] leading-5 text-slate-600"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              Connect With Us

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.div
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
          }}
          className="mx-auto mt-20 max-w-4xl rounded-[1.5rem] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-12"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Your next opportunity could be closer than you think.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Take the next step with structured placement support and a
            professional approach to your career journey.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
          >
            Get Placement Support

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}