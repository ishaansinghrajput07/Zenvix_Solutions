import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  FileSearch,
  FileText,
  Github,
  Globe2,
  Linkedin,
  MessageCircle,
  Search,
  Send,
  Target,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const preparationAreas = [
  {
    id: "career-planning",
    title: "Career Planning",
    description:
      "Define your target role, understand your strengths, and create a practical roadmap for your next career move.",
    icon: Target,
    accent: "sky",
    tags: ["Goals", "Roadmap", "Direction"],
  },
  {
    id: "job-search",
    title: "Job Search Strategy",
    description:
      "Learn how to find relevant opportunities across job platforms and focus your search on roles that match your profile.",
    icon: Search,
    accent: "cyan",
    tags: ["Search", "Roles", "Opportunities"],
  },
  {
    id: "resume-profile",
    title: "Resume & Profile",
    description:
      "Build a professional resume and optimize your overall profile to communicate your skills and experience clearly.",
    icon: FileText,
    accent: "violet",
    tags: ["Resume", "ATS", "Profile"],
  },
  {
    id: "job-description",
    title: "Job Description Analysis",
    description:
      "Understand job descriptions, identify important requirements, and evaluate how your skills match the position.",
    icon: FileSearch,
    accent: "emerald",
    tags: ["Requirements", "Skills", "Matching"],
  },
  {
    id: "application-strategy",
    title: "Application Strategy",
    description:
      "Learn how to customize applications, prioritize opportunities, and maintain a consistent job application process.",
    icon: Send,
    accent: "amber",
    tags: ["Applications", "Planning", "Tracking"],
  },
  {
    id: "linkedin-profile",
    title: "LinkedIn Optimization",
    description:
      "Create a stronger professional presence with an optimized LinkedIn profile, headline, summary, and skills.",
    icon: Linkedin,
    accent: "pink",
    tags: ["LinkedIn", "Branding", "Networking"],
  },
  {
    id: "portfolio",
    title: "Portfolio & GitHub",
    description:
      "Present your projects, technical work, achievements, and practical experience through a professional online portfolio.",
    icon: Github,
    accent: "orange",
    tags: ["GitHub", "Projects", "Portfolio"],
  },
  {
    id: "professional-brand",
    title: "Professional Branding",
    description:
      "Develop a consistent professional identity across your resume, portfolio, LinkedIn, GitHub, and job applications.",
    icon: Globe2,
    accent: "indigo",
    tags: ["Brand", "Presence", "Visibility"],
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

const jobJourney = [
  {
    number: "01",
    title: "Define",
    description:
      "Identify your target role, preferred industry, skills, experience level, and career direction.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Strengthen your resume, LinkedIn, GitHub, portfolio, projects, and professional profile.",
  },
  {
    number: "03",
    title: "Apply",
    description:
      "Discover relevant jobs, analyze requirements, customize applications, and maintain consistency.",
  },
  {
    number: "04",
    title: "Track",
    description:
      "Track applications, follow up professionally, learn from outcomes, and continuously improve.",
  },
];

const profileChecklist = [
  "Professional ATS-friendly resume",
  "Clear career objective",
  "Updated LinkedIn profile",
  "Relevant GitHub repositories",
  "Professional portfolio",
  "Strong project descriptions",
  "Relevant technical skills",
  "Consistent professional branding",
];

const jobPlatforms = [
  {
    title: "LinkedIn",
    description: "Professional networking and job opportunities",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    description: "Showcase your technical work and projects",
    icon: Github,
  },
  {
    title: "Job Portals",
    description: "Discover relevant openings and opportunities",
    icon: BriefcaseBusiness,
  },
  {
    title: "Portfolio",
    description: "Present your skills and work professionally",
    icon: Globe2,
  },
];

export default function JobPreparation() {
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
              Job Preparation
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Prepare smarter.
            <span className="block text-slate-400">
              Find the right opportunity.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            A structured approach to job preparation that helps you build a
            stronger professional profile, discover relevant opportunities,
            apply strategically, and move forward with confidence.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Start Your Job Preparation

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href="#job-support"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-950 hover:text-slate-950"
            >
              Explore Job Support
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
                    <TrendingUp className="h-4 w-4" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400">
                    Career Ready
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Build a profile employers can understand.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Your job search becomes stronger when your skills, resume,
                  portfolio, projects, professional profiles, and applications
                  tell one clear story.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {[
                  {
                    icon: UserRound,
                    title: "Profile",
                  },
                  {
                    icon: Search,
                    title: "Search",
                  },
                  {
                    icon: Send,
                    title: "Apply",
                  },
                  {
                    icon: TrendingUp,
                    title: "Grow",
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
            SUPPORT HEADER
        ====================================================== */}

        <motion.div
          id="job-support"
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
              Job Support
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Everything around the job search.
            <span className="block text-slate-400">
              One focused approach.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Build the right profile, find relevant opportunities, and create a
            consistent process for your job search.
          </p>
        </motion.div>

        {/* =====================================================
            SUPPORT GRID
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preparationAreas.map((area, index) => {
            const Icon = area.icon;

            const styles =
              accentStyles[area.accent] ?? accentStyles.sky;

            return (
              <motion.div
                key={area.id}
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
                        Job Preparation
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] font-semibold leading-tight tracking-tight text-slate-950">
                      {area.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-slate-500">
                      {area.description}
                    </p>
                  </div>

                  {/* TAGS */}

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {area.tags.map((tag) => (
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
                        Get Started

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* ACCENT */}

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            JOB JOURNEY
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
              Job Journey
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            From profile.
            <span className="block text-slate-400">
              To opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            A simple and repeatable process to make your job search more
            focused and organized.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {jobJourney.map((step, index) => (
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
              className="group rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
            >
              <span className="text-4xl font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-sky-100">
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
            PROFILE SECTION
        ====================================================== */}

        <div className="mt-28 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
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
              <UserRound className="h-5 w-5" />
            </div>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
              Professional Profile
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Make every part of your profile work together.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Your resume, LinkedIn, GitHub, portfolio, projects, and
              applications should communicate a consistent professional story.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              Improve Your Profile

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
              Profile Checklist
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {profileChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

                  <span className="text-[11px] font-medium leading-5 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PLATFORMS
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
              Build Your Presence
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Be visible in the right places.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            A professional online presence can help you communicate your
            skills, experience, projects, and career interests more effectively.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {jobPlatforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <motion.div
                key={platform.title}
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
                  delay: index * 0.07,
                }}
                className="group rounded-[1.35rem] border border-slate-200 bg-white p-5 text-center shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-sm font-semibold text-slate-950">
                  {platform.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-500">
                  {platform.description}
                </p>
              </motion.div>
            );
          })}
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
            Ready to take the next step in your career?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
            Build a stronger profile, create a focused job search strategy, and
            prepare yourself for the opportunities ahead.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
          >
            Start Job Preparation

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}