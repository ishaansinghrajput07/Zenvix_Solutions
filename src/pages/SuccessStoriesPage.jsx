import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  Linkedin,
  MapPin,
  Quote,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    previous: "Student",
    current: "Frontend Developer",
    company: "Technology Company",
    location: "Bengaluru, India",
    program: "Web Development",
    result: "Job Ready",
    quote:
      "The structured learning path helped me move from basic concepts to practical projects and interview preparation with much more confidence.",
    skills: ["React.js", "JavaScript", "HTML", "CSS"],
    color: "violet",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Data Analyst",
    previous: "Fresher",
    current: "Data Analyst",
    company: "Analytics Company",
    location: "Pune, India",
    program: "Data & Analytics",
    result: "Career Started",
    quote:
      "I finally understood how to connect what I was learning with real-world job requirements. The practical approach made a huge difference.",
    skills: ["SQL", "Excel", "Power BI", "Analytics"],
    color: "sky",
  },
  {
    id: 3,
    name: "Arjun Kumar",
    role: "Full Stack Developer",
    previous: "Career Changer",
    current: "MERN Stack Developer",
    company: "Software Company",
    location: "Noida, India",
    program: "Full Stack Development",
    result: "Career Transition",
    quote:
      "Changing careers felt difficult at first. Having a clear roadmap, projects and interview preparation gave me the confidence to make the transition.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    color: "emerald",
  },
  {
    id: 4,
    name: "Sneha Singh",
    role: "Software Engineer",
    previous: "Graduate",
    current: "Software Engineer",
    company: "IT Services",
    location: "Hyderabad, India",
    program: "Software Development",
    result: "Interview Ready",
    quote:
      "The interview preparation helped me understand how to present my projects, explain technical concepts and communicate my strengths.",
    skills: ["JavaScript", "React", "Git", "Problem Solving"],
    color: "orange",
  },
  {
    id: 5,
    name: "Aman Gupta",
    role: "Cloud Engineer",
    previous: "IT Professional",
    current: "Cloud Engineer",
    company: "Technology Company",
    location: "Gurugram, India",
    program: "Cloud & DevOps",
    result: "Upskilled",
    quote:
      "The learning structure helped me focus on the skills that actually mattered for my target role instead of trying to learn everything at once.",
    skills: ["AWS", "Linux", "Docker", "DevOps"],
    color: "cyan",
  },
  {
    id: 6,
    name: "Neha Kumari",
    role: "UI Developer",
    previous: "Beginner",
    current: "UI Developer",
    company: "Digital Company",
    location: "Delhi, India",
    program: "Frontend Development",
    result: "Career Started",
    quote:
      "Building projects and improving my portfolio made me much more confident when applying for opportunities.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "pink",
  },
];

const colorStyles = {
  violet: {
    icon: "bg-violet-50 text-violet-600",
    badge: "bg-violet-50 text-violet-600",
    glow: "bg-violet-400/10",
    dot: "bg-violet-500",
  },
  sky: {
    icon: "bg-sky-50 text-sky-600",
    badge: "bg-sky-50 text-sky-600",
    glow: "bg-sky-400/10",
    dot: "bg-sky-500",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    badge: "bg-emerald-50 text-emerald-600",
    glow: "bg-emerald-400/10",
    dot: "bg-emerald-500",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-600",
    glow: "bg-orange-400/10",
    dot: "bg-orange-500",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    badge: "bg-cyan-50 text-cyan-600",
    glow: "bg-cyan-400/10",
    dot: "bg-cyan-500",
  },
  pink: {
    icon: "bg-pink-50 text-pink-600",
    badge: "bg-pink-50 text-pink-600",
    glow: "bg-pink-400/10",
    dot: "bg-pink-500",
  },
};

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build a strong foundation through structured and practical learning.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn knowledge into practical projects and meaningful experience.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Improve your resume, portfolio and interview confidence.",
    icon: Target,
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Apply your skills and pursue the opportunities that match your goals.",
    icon: Rocket,
  },
];

export default function SuccessStoriesPage() {
  return (
    <main className="relative overflow-hidden bg-white pt-[120px]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/[0.06] blur-3xl" />

        <div className="absolute -right-48 top-[500px] h-[420px] w-[420px] rounded-full bg-sky-500/[0.05] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #E8ECF2 1px, transparent 1px), linear-gradient(to bottom, #E8ECF2 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 45% at 50% 0%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 45% at 50% 0%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="shell">
        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Success Stories
            </span>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[4.5rem]">
            Real journeys.
            <span className="block text-slate-400">
              Meaningful progress.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover how learners use structured learning, practical projects,
            career preparation and professional guidance to move closer to
            their career goals.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Explore Programs

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Explore Career Support
            </Link>
          </div>
        </motion.section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.05)] sm:grid-cols-4"
        >
          {[
            {
              icon: Users,
              title: "Learner Journeys",
              text: "Different goals",
            },
            {
              icon: Code2,
              title: "Practical Skills",
              text: "Project focused",
            },
            {
              icon: BriefcaseBusiness,
              title: "Career Focus",
              text: "Job preparation",
            },
            {
              icon: TrendingUp,
              title: "Continuous Growth",
              text: "Long-term journey",
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900 sm:text-sm">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.section>

        {/* =====================================================
            STORIES HEADER
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
              Learner Experiences
            </span>

            <span className="h-px w-8 bg-slate-900" />
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
            Every career journey
            <span className="block text-slate-400">
              starts somewhere.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Explore examples of learners working toward different career
            directions through practical skills and structured preparation.
          </p>
        </motion.section>

        {/* =====================================================
            STORY GRID
        ====================================================== */}

        <section className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const styles = colorStyles[story.color];

            return (
              <motion.article
                key={story.id}
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
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.035)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              >
                {/* Glow */}

                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${styles.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Top */}

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${styles.icon}`}
                    >
                      <span className="text-sm font-bold">
                        {story.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">
                        {story.name}
                      </h3>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${styles.badge}`}
                  >
                    {story.result}
                  </div>
                </div>

                {/* Rating */}

                <div className="relative mt-6 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}

                <div className="relative mt-4">
                  <Quote
                    size={22}
                    className="text-slate-100"
                    strokeWidth={2.5}
                  />

                  <p className="mt-1 text-[12px] leading-6 text-slate-600">
                    {story.quote}
                  </p>
                </div>

                {/* Journey */}

                <div className="relative mt-5 rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Career journey
                    </span>

                    <CheckCircle2
                      size={14}
                      className="text-emerald-500"
                    />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[9px] text-slate-400">
                        Starting point
                      </p>

                      <p className="mt-1 text-[11px] font-semibold text-slate-800">
                        {story.previous}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Career direction
                      </p>

                      <p className="mt-1 text-[11px] font-semibold text-slate-800">
                        {story.current}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Details */}

                <div className="relative mt-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness
                      size={13}
                      className="text-slate-400"
                    />

                    <span className="text-[10px] text-slate-500">
                      {story.program}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-slate-400" />

                    <span className="text-[10px] text-slate-500">
                      {story.location}
                    </span>
                  </div>
                </div>

                {/* Skills */}

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {story.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-100 bg-white px-2.5 py-1 text-[9px] font-medium text-slate-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}

                <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[9px] font-medium text-slate-400">
                    Learner story
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-900"
                  >
                    Read story
                    <ArrowUpRight size={12} />
                  </button>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.dot} transition-transform duration-500 group-hover:scale-x-100`}
                />
              </motion.article>
            );
          })}
        </section>

        {/* =====================================================
            JOURNEY SECTION
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-900" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                The Zenvix Approach
              </span>

              <span className="h-px w-8 bg-slate-900" />
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">
              From learning
              <span className="text-slate-400"> to opportunity.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              A successful career is not built in one step. It is developed
              through consistent learning, practical experience and focused
              preparation.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => {
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
                  className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.035)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                      <Icon size={17} />
                    </div>

                    <span className="font-mono text-[10px] text-slate-300">
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
        </motion.section>

        {/* =====================================================
            IMPORTANT NOTE
        ====================================================== */}

        <section className="mt-28 rounded-[1.75rem] bg-slate-950 p-8 sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-violet-300">
                  <TrendingUp size={17} />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Your story could be next
                </span>
              </div>

              <h2 className="mt-6 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Build skills with purpose.
                <span className="block text-slate-500">
                  Prepare for the opportunity ahead.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Start with a clear direction, build practical skills and
                prepare yourself for the next stage of your professional
                journey.
              </p>
            </div>

            <Link
              to="/programs"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Start Your Journey

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mx-auto mb-20 mt-8 max-w-3xl text-center text-[10px] leading-5 text-slate-400">
          Success experiences may vary based on individual effort,
          background, skills, market conditions and other factors. Stories
          shown on this page should be presented as representative learner
          experiences unless independently verified by Zenvix.
        </p>
      </div>
    </main>
  );
}