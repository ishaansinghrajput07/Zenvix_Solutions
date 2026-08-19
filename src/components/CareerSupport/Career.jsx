import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Code2,
  FileText,
  GraduationCap,
  Laptop,
  MessageCircle,
  Rocket,
  Target,
  Users,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const supportServices = [
  {
    id: "career-guidance",
    title: "Career Guidance",
    description:
      "Get clear and practical guidance to understand your career direction, strengths, opportunities, and next steps.",
    icon: Target,
    accent: "sky",
    tags: ["Career Planning", "Roadmap", "Guidance"],
  },
  {
    id: "resume-building",
    title: "Resume & CV Building",
    description:
      "Build a professional and ATS-friendly resume that presents your skills, projects, experience, and achievements effectively.",
    icon: FileText,
    accent: "cyan",
    tags: ["ATS Resume", "CV Review", "Profile"],
  },
  {
    id: "technical-skills",
    title: "Technical Skill Development",
    description:
      "Strengthen your technical foundation through practical learning and industry-relevant technologies.",
    icon: Code2,
    accent: "violet",
    tags: ["Coding", "Projects", "Technology"],
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    description:
      "Prepare for technical and HR interviews with structured practice, common questions, and personalized feedback.",
    icon: Video,
    accent: "emerald",
    tags: ["Technical", "HR", "Mock Interview"],
  },
  {
    id: "job-preparation",
    title: "Job Preparation",
    description:
      "Understand job requirements, improve your professional profile, and prepare strategically for relevant opportunities.",
    icon: BriefcaseBusiness,
    accent: "amber",
    tags: ["Job Search", "Applications", "Preparation"],
  },
  {
    id: "project-support",
    title: "Project & Portfolio Support",
    description:
      "Build practical projects and a strong portfolio that demonstrates your real-world technical capabilities.",
    icon: Laptop,
    accent: "pink",
    tags: ["Projects", "Portfolio", "GitHub"],
  },
  {
    id: "professional-profile",
    title: "Professional Profile",
    description:
      "Improve your LinkedIn, GitHub, portfolio, and overall online presence to create a stronger professional identity.",
    icon: Users,
    accent: "orange",
    tags: ["LinkedIn", "GitHub", "Portfolio"],
  },
  {
    id: "career-growth",
    title: "Career Growth",
    description:
      "Continue developing your skills and professional confidence with a structured approach toward long-term career growth.",
    icon: Rocket,
    accent: "indigo",
    tags: ["Growth", "Skills", "Future"],
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

const careerSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your skills, interests, goals, and the career direction that fits you best.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Develop practical technical skills, projects, resume, portfolio, and professional presence.",
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Practice technical interviews, HR interviews, communication, and job-specific preparation.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Keep improving your skills and move forward with a clear and practical career strategy.",
  },
];

const benefits = [
  "Personalized career guidance",
  "Professional resume support",
  "Practical project guidance",
  "Technical interview preparation",
  "HR interview preparation",
  "Portfolio improvement",
  "LinkedIn & GitHub profile guidance",
  "Industry-focused skill development",
];

export default function CareerSupport() {
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
              Career Support
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Build your skills.
            <span className="block text-slate-400">
              Shape your career.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Practical career support designed to help students, freshers, and
            aspiring professionals build skills, strengthen their profiles,
            prepare for interviews, and move confidently toward their career
            goals.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Get Career Support

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href="#career-services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-950 hover:text-slate-950"
            >
              Explore Support
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            QUICK STATS
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)] sm:grid-cols-4"
        >
          {[
            {
              icon: GraduationCap,
              title: "Students",
              text: "Career Direction",
            },
            {
              icon: Code2,
              title: "Skills",
              text: "Practical Learning",
            },
            {
              icon: FileText,
              title: "Profile",
              text: "Resume & Portfolio",
            },
            {
              icon: BriefcaseBusiness,
              title: "Career",
              text: "Job Preparation",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-3 p-5 ${
                  index !== 0 ? "border-t border-slate-100 sm:border-l sm:border-t-0" : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* =====================================================
            SERVICES HEADER
        ====================================================== */}

        <motion.div
          id="career-services"
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
              What We Support
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="block text-slate-400">
              move forward.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            From career planning to interview preparation, get structured
            support for the most important stages of your professional journey.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportServices.map((service, index) => {
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
                  className={`group relative flex h-full min-h-[285px] flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.085)] ${styles.hover}`}
                >
                  {/* Glow */}

                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${styles.glow} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100`}
                  />

                  {/* TOP */}

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

                  {/* CONTENT */}

                  <div className="relative mt-5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                      />

                      <span
                        className={`text-[9px] font-bold uppercase tracking-[0.18em] ${styles.text}`}
                      >
                        Career Support
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] font-semibold leading-tight tracking-tight text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-slate-500">
                      {service.description}
                    </p>
                  </div>

                  {/* TAGS */}

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

                  {/* FOOTER */}

                  <div className="relative mt-auto pt-5">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
                      <span className="text-[9px] font-medium text-slate-400">
                        Career-focused
                      </span>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-950"
                      >
                        Get Support

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Accent */}

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            CAREER JOURNEY
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
            duration: 0.6,
          }}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Your Journey
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            A simple path.
            <span className="block text-slate-400">
              A stronger future.
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {careerSteps.map((step, index) => (
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)]"
            >
              <span className="text-4xl font-semibold tracking-tight text-slate-100">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            WHY US
        ====================================================== */}

        <div className="mt-28 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
              <GraduationCap className="h-5 w-5" />
            </div>

            <h3 className="mt-7 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Build more than a resume.
              <span className="block text-slate-500">
                Build your professional identity.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Career growth comes from the combination of technical skills,
              practical experience, communication, confidence, and a strong
              professional profile.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              Talk to Our Team

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

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
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Why Career Support
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

                  <span className="text-sm text-slate-600">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CTA
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
            <MessageCircle className="h-5 w-5" />
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Ready to take your next step?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Let's understand your goals and find the right direction for your
            career journey.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
          >
            Start Your Journey

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}