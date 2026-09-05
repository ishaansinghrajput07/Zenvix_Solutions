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
  Search,
  Send,
  Target,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   PREPARATION AREAS
========================================================= */

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

/* =========================================================
   ACCENT STYLES
========================================================= */

const accentStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600",
    text: "text-sky-600",
    dot: "bg-sky-500",
    hover: "hover:border-sky-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    text: "text-cyan-600",
    dot: "bg-cyan-500",
    hover: "hover:border-cyan-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    text: "text-violet-600",
    dot: "bg-violet-500",
    hover: "hover:border-violet-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
    hover: "hover:border-emerald-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    text: "text-amber-600",
    dot: "bg-amber-500",
    hover: "hover:border-amber-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    text: "text-pink-600",
    dot: "bg-pink-500",
    hover: "hover:border-pink-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    text: "text-orange-600",
    dot: "bg-orange-500",
    hover: "hover:border-orange-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    text: "text-indigo-600",
    dot: "bg-indigo-500",
    hover: "hover:border-indigo-200",
  },
};

/* =========================================================
   JOB JOURNEY
========================================================= */

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

/* =========================================================
   PROFILE CHECKLIST
========================================================= */

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

/* =========================================================
   JOB PLATFORMS
========================================================= */

const jobPlatforms = [
  {
    title: "LinkedIn",
    description: "Professional networking and job opportunities",
    icon: Linkedin,
    accent: "sky",
  },
  {
    title: "GitHub",
    description: "Showcase your technical work and projects",
    icon: Github,
    accent: "violet",
  },
  {
    title: "Job Portals",
    description: "Discover relevant openings and opportunities",
    icon: BriefcaseBusiness,
    accent: "emerald",
  },
  {
    title: "Portfolio",
    description: "Present your skills and work professionally",
    icon: Globe2,
    accent: "amber",
  },
];

/* =========================================================
   REUSABLE MOTION
========================================================= */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 25,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.6,
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function JobPreparation() {
  return (
    <section className="relative w-full bg-white py-[30px]">
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl pt-[50px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <p className="!m-0 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Job Preparation
            </p>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h1 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Prepare smarter.
            <span className="block text-teal-700">
              Find the right opportunity.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            A structured approach to job preparation that helps you build a
            stronger professional profile, discover relevant opportunities,
            apply strategically, and move forward with confidence.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
            >
              Start Your Job Preparation

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href="#job-support"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-black text-slate-700 transition-all duration-300 hover:border-teal-700 hover:text-teal-700"
            >
              Explore Job Support
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            HERO FEATURE
        ====================================================== */}

        <motion.div
          {...fadeUp}
          className="mx-auto mt-[50px] max-w-6xl"
        >
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <p className="!m-0 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                    Career Ready
                  </p>
                </div>

                <h2 className="mt-5 max-w-2xl text-[28px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[34px]">
                  Build a profile employers can understand.
                </h2>

                <p className="mt-4 max-w-2xl text-[15px] font-medium leading-7 text-slate-500">
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
                    color: "bg-sky-50 text-sky-600",
                  },
                  {
                    icon: Search,
                    title: "Search",
                    color: "bg-violet-50 text-violet-600",
                  },
                  {
                    icon: Send,
                    title: "Apply",
                    color: "bg-emerald-50 text-emerald-600",
                  },
                  {
                    icon: TrendingUp,
                    title: "Grow",
                    color: "bg-amber-50 text-amber-600",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex min-w-[110px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-sm"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.color}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <span className="mt-2 text-[12px] font-black text-slate-700">
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
          {...fadeUp}
          className="mx-auto mt-[60px] max-w-4xl pt-[10px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <p className="!m-0 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Job Support
            </p>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Everything around the job search.
            <span className="block text-teal-700">
              One focused approach.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Build the right profile, find relevant opportunities, and create a
            consistent process for your job search.
          </p>
        </motion.div>

        {/* =====================================================
            SUPPORT GRID
        ====================================================== */}

        <div className="mx-auto mt-[35px] grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -5,
                }}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full min-h-[310px] flex-col rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)] ${styles.hover}`}
                >
                  {/* TOP */}

                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[11px] font-black tracking-[0.15em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="mt-6">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                      />

                      <span
                        className={`text-[11px] font-black uppercase tracking-[0.16em] ${styles.text}`}
                      >
                        Job Preparation
                      </span>
                    </div>

                    <h3 className="mt-3 text-[19px] font-black leading-[1.2] tracking-[-0.015em] text-slate-950">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-[14px] font-medium leading-6 text-slate-500">
                      {area.description}
                    </p>
                  </div>

                  {/* TAGS */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-500"
                      >
                        <Check
                          className={`h-3 w-3 ${styles.text}`}
                          strokeWidth={2.5}
                        />

                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER */}

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-semibold text-slate-400">
                        Career-focused
                      </span>

                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-1.5 text-[12px] font-black text-slate-950"
                      >
                        Get Started

                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
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
          {...fadeUp}
          className="mx-auto mt-[60px] max-w-4xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <p className="!m-0 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Job Journey
            </p>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            From profile.
            <span className="block text-teal-700">
              To opportunity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500">
            A simple and repeatable process to make your job search more
            focused and organized.
          </p>
        </motion.div>

        {/* =====================================================
            JOB JOURNEY CARDS
        ====================================================== */}

        <div className="mx-auto mt-[35px] grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
            >
              <span className="text-4xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-teal-100">
                {step.number}
              </span>

              <h3 className="mt-5 text-[20px] font-black tracking-tight text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-[14px] font-medium leading-6 text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            PROFILE SECTION
        ====================================================== */}

        <div className="mt-[60px] grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">

          {/* PROFILE INTRO */}

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
            transition={{
              duration: 0.6,
            }}
            className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.045)] sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <UserRound className="h-5 w-5" />
            </div>

            <p className="!m-0 mt-7 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Professional Profile
            </p>

            <h3 className="mt-4 text-[28px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[32px]">
              Make every part of your profile work together.
            </h3>

            <p className="mt-4 text-[15px] font-medium leading-7 text-slate-500">
              Your resume, LinkedIn, GitHub, portfolio, projects, and
              applications should communicate a consistent professional story.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-[13px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
            >
              Improve Your Profile

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* PROFILE CHECKLIST */}

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
            transition={{
              duration: 0.6,
            }}
            className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.045)] sm:p-9"
          >
            <p className="!m-0 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Profile Checklist
            </p>

            <h3 className="mt-3 text-[24px] font-black tracking-tight text-slate-950">
              Is your profile ready?
            </h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {profileChecklist.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition-all duration-300 hover:border-teal-100 hover:bg-white"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  </div>

                  <span className="text-[13px] font-semibold leading-5 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PLATFORMS HEADER
        ====================================================== */}

        <motion.div
          {...fadeUp}
          className="mx-auto mt-[60px] max-w-4xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <p className="!m-0 text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Build Your Presence
            </p>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Be visible in the right places.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            A professional online presence can help you communicate your
            skills, experience, projects, and career interests more effectively.
          </p>
        </motion.div>

        {/* =====================================================
            PLATFORMS
        ====================================================== */}

        <div className="mx-auto mt-[35px] grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            const styles =
              accentStyles[platform.accent] ?? accentStyles.sky;

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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className={`group rounded-[20px] border border-slate-200 bg-white p-6 text-center shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)] ${styles.hover}`}
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-[17px] font-black tracking-tight text-slate-950">
                  {platform.title}
                </h3>

                <p className="mt-2 text-[13px] font-medium leading-6 text-slate-500">
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
          {...fadeUp}
          className="mx-auto mt-[60px] max-w-4xl rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-12"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-[30px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[38px]">
            Ready to take the next step in your career?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
            Build a stronger profile, create a focused job search strategy, and
            prepare yourself for the opportunities ahead.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
          >
            Start Job Preparation

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}