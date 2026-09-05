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
    text: "text-sky-600",
    dot: "bg-sky-400",
    hover: "group-hover:border-sky-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-400/20",
    text: "text-cyan-600",
    dot: "bg-cyan-400",
    hover: "group-hover:border-cyan-200",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/20",
    text: "text-violet-600",
    dot: "bg-violet-400",
    hover: "group-hover:border-violet-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/20",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
    hover: "group-hover:border-emerald-200",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    glow: "bg-amber-400/20",
    text: "text-amber-600",
    dot: "bg-amber-400",
    hover: "group-hover:border-amber-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    glow: "bg-pink-400/20",
    text: "text-pink-600",
    dot: "bg-pink-400",
    hover: "group-hover:border-pink-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    glow: "bg-orange-400/20",
    text: "text-orange-600",
    dot: "bg-orange-400",
    hover: "group-hover:border-orange-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    glow: "bg-indigo-400/20",
    text: "text-indigo-600",
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
    <section className="relative w-full bg-white px-[30px] py-[30px] sm:px-[30px] lg:px-[30px]">
      <div className="relative mx-auto w-full max-w-[1400px]">
        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="pt-[50px] text-center"
        >
          <p className="mb-4 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
            Career Support
          </p>

          <h1 className="mx-auto max-w-4xl text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Build your skills.
            <span className="block text-teal-700">
              Shape your career.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Practical career support designed to help students, freshers, and
            aspiring professionals build skills, strengthen their profiles,
            prepare for interviews, and move confidently toward their career
            goals.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3.5 text-[14px] font-[900] text-slate-950 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.98]"
            >
              Get Career Support

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href="#career-services"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-[900] text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-950"
            >
              Explore Support
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            QUICK STATS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-4"
        >
          {[
            {
              icon: GraduationCap,
              title: "Students",
              text: "Career Direction",
              color: "text-violet-600",
              bg: "bg-violet-50",
            },
            {
              icon: Code2,
              title: "Skills",
              text: "Practical Learning",
              color: "text-sky-600",
              bg: "bg-sky-50",
            },
            {
              icon: FileText,
              title: "Profile",
              text: "Resume & Portfolio",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              icon: BriefcaseBusiness,
              title: "Career",
              text: "Job Preparation",
              color: "text-amber-600",
              bg: "bg-amber-50",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-3 p-5 ${
                  index !== 0
                    ? "border-t border-slate-100 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[13px] font-[900] text-slate-950">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[11px] font-medium text-slate-400">
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl pt-[50px] text-center"
        >
          <p className="mb-4 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
            What We Support
          </p>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px]">
            Everything you need to
            <span className="block text-teal-700">
              move forward.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            From career planning to interview preparation, get structured
            support for the most important stages of your professional journey.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportServices.map((service, index) => {
            const Icon = service.icon;
            const styles =
              accentStyles[service.accent] ?? accentStyles.sky;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <div
                  className={`group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${styles.hover}`}
                >
                  {/* TOP */}

                  <div className="relative flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.06, rotate: 3 }}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon className="h-[19px] w-[19px]" />
                    </motion.div>

                    <span className="text-[11px] font-[900] tracking-[0.15em] text-slate-200">
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
                        className={`text-[10px] font-[900] uppercase tracking-[0.18em] ${styles.text}`}
                      >
                        Career Support
                      </span>
                    </div>

                    <h3 className="mt-2 text-[18px] font-[900] leading-tight tracking-[-0.015em] text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[12px] font-medium leading-5 text-slate-500">
                      {service.description}
                    </p>
                  </div>

                  {/* TAGS */}

                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-semibold text-slate-500"
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
                      <span className="text-[10px] font-semibold text-slate-400">
                        Career-focused
                      </span>

                      <Link
                        to="/contact"
                        className="group/link inline-flex items-center gap-1.5 text-[11px] font-[900] text-slate-950"
                      >
                        Get Support

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl pt-[50px] text-center"
        >
          <p className="mb-4 text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
            Your Journey
          </p>

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px]">
            A simple path.
            <span className="block text-teal-700">
              A stronger future.
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {careerSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
            >
              <span className="text-4xl font-[900] tracking-tight text-slate-100">
                {step.number}
              </span>

              <h3 className="mt-5 text-[18px] font-[900] text-slate-950">
                {step.title}
              </h3>

              <p className="mt-2 text-[12px] font-medium leading-5 text-slate-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            WHY US
        ====================================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <GraduationCap className="h-5 w-5" />
            </div>

            <h3 className="mt-6 max-w-lg text-[28px] font-[900] leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[32px]">
              Build more than a resume.
              <span className="block text-teal-700">
                Build your professional identity.
              </span>
            </h3>

            <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
              Career growth comes from the combination of technical skills,
              practical experience, communication, confidence, and a strong
              professional profile.
            </p>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-[13px] font-[900] text-slate-950 transition hover:bg-yellow-300"
            >
              Talk to Our Team

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
              Why Career Support
            </p>

            <div className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />

                  <span className="text-[14px] font-semibold text-slate-600">
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 text-center sm:p-12"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
            <MessageCircle className="h-5 w-5" />
          </div>

          <h2 className="mt-5 text-[28px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[32px]">
            Ready to take your next step?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
            Let's understand your goals and find the right direction for your
            career journey.
          </p>

          <Link
            to="/contact"
            className="group mt-6 inline-flex items-center gap-3 rounded-lg bg-yellow-400 px-6 py-3.5 text-[14px] font-[900] text-slate-950 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.98]"
          >
            Start Your Journey

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}