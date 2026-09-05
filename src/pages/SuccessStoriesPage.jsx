import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  Quote,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================
   SUCCESS STORIES
========================================================= */

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

/* =========================================================
   COLORS
========================================================= */

const colorStyles = {
  violet: {
    icon: "bg-violet-50 text-violet-600",
    badge: "bg-violet-50 text-violet-600",
    accent: "bg-violet-500",
    border: "hover:border-violet-200",
  },

  sky: {
    icon: "bg-sky-50 text-sky-600",
    badge: "bg-sky-50 text-sky-600",
    accent: "bg-sky-500",
    border: "hover:border-sky-200",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    badge: "bg-emerald-50 text-emerald-600",
    accent: "bg-emerald-500",
    border: "hover:border-emerald-200",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    badge: "bg-orange-50 text-orange-600",
    accent: "bg-orange-500",
    border: "hover:border-orange-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    badge: "bg-cyan-50 text-cyan-600",
    accent: "bg-cyan-500",
    border: "hover:border-cyan-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    badge: "bg-pink-50 text-pink-600",
    accent: "bg-pink-500",
    border: "hover:border-pink-200",
  },
};

/* =========================================================
   JOURNEY
========================================================= */

const journey = [
  {
    number: "01",
    title: "Learn",
    description:
      "Build a strong foundation through structured and practical learning.",
    icon: GraduationCap,
    color: "violet",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Turn knowledge into practical projects and meaningful experience.",
    icon: Code2,
    color: "sky",
  },
  {
    number: "03",
    title: "Prepare",
    description:
      "Improve your resume, portfolio and interview confidence.",
    icon: Target,
    color: "emerald",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Apply your skills and pursue the opportunities that match your goals.",
    icon: Rocket,
    color: "orange",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SuccessStoriesPage() {
  return (
    <main className="relative w-full bg-white py-[30px]">
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl pt-[50px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Success Stories
            </span>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h1 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Real journeys.
            <span className="block text-teal-700">
              Meaningful progress.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Discover how learners use structured learning, practical
            projects, career preparation and professional guidance to move
            closer to their career goals.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/programs"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
            >
              Explore Programs

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/10">
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-black text-slate-700 transition-all duration-300 hover:border-teal-700 hover:text-teal-700"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-[60px] grid max-w-5xl grid-cols-2 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.04)] sm:grid-cols-4"
        >
          {[
            {
              icon: Users,
              title: "Learner Journeys",
              text: "Different goals",
              color: "text-violet-600",
              bg: "bg-violet-50",
            },
            {
              icon: Code2,
              title: "Practical Skills",
              text: "Project focused",
              color: "text-sky-600",
              bg: "bg-sky-50",
            },
            {
              icon: BriefcaseBusiness,
              title: "Career Focus",
              text: "Job preparation",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              icon: TrendingUp,
              title: "Continuous Growth",
              text: "Long-term journey",
              color: "text-orange-600",
              bg: "bg-orange-50",
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
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="!m-0 text-[13px] font-black text-slate-900">
                    {item.title}
                  </p>

                  <p className="!m-0 mt-0.5 text-[10px] font-medium text-slate-400">
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
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-[60px] max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Learner Experiences
            </span>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Every career journey
            <span className="block text-teal-700">
              starts somewhere.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
            Explore examples of learners working toward different career
            directions through practical skills and structured preparation.
          </p>
        </motion.section>

        {/* =====================================================
            STORY GRID
        ====================================================== */}

        <section className="mx-auto mt-[35px] max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => {
              const styles =
                colorStyles[story.color] ?? colorStyles.sky;

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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${styles.border}`}
                >
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${styles.icon}`}
                      >
                        <span className="text-[12px] font-black">
                          {story.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-[14px] font-black text-slate-950">
                          {story.name}
                        </h3>

                        <p className="!m-0 mt-0.5 text-[10px] font-medium text-slate-400">
                          {story.role}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1.5 text-[9px] font-black ${styles.badge}`}
                    >
                      {story.result}
                    </span>
                  </div>

                  {/* RATING */}

                  <div className="mt-5 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3 w-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* QUOTE */}

                  <div className="mt-4">
                    <Quote
                      className="h-5 w-5 text-slate-100"
                      strokeWidth={2.5}
                    />

                    <p className="mt-1 text-[12px] font-medium leading-6 text-slate-600">
                      {story.quote}
                    </p>
                  </div>

                  {/* CAREER JOURNEY */}

                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                        Career Journey
                      </span>

                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div>
                        <p className="!m-0 text-[9px] font-medium text-slate-400">
                          Starting point
                        </p>

                        <p className="!m-0 mt-1 text-[11px] font-black text-slate-800">
                          {story.previous}
                        </p>
                      </div>

                      <div>
                        <p className="!m-0 text-[9px] font-medium text-slate-400">
                          Career direction
                        </p>

                        <p className="!m-0 mt-1 text-[11px] font-black text-slate-800">
                          {story.current}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* DETAILS */}

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness className="h-3.5 w-3.5 text-slate-400" />

                      <span className="text-[10px] font-medium text-slate-500">
                        {story.program}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />

                      <span className="text-[10px] font-medium text-slate-500">
                        {story.location}
                      </span>
                    </div>
                  </div>

                  {/* SKILLS */}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {story.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-semibold text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* FOOTER */}

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[9px] font-semibold text-slate-400">
                      Learner story
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-slate-900">
                      Read story
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  {/* COLOR ACCENT */}

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.accent} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            JOURNEY SECTION
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-[60px] max-w-7xl"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-teal-700" />

              <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                The Zenvix Approach
              </span>

              <span className="h-px w-8 bg-teal-700" />
            </div>

            <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px]">
              From learning
              <span className="text-teal-700">
                {" "}
                to opportunity.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
              A successful career is not built in one step. It is developed
              through consistent learning, practical experience and focused
              preparation.
            </p>
          </div>

          <div className="mt-[35px] grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, index) => {
              const Icon = step.icon;

              const styles =
                colorStyles[step.color] ?? colorStyles.sky;

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
                  whileHover={{
                    y: -4,
                  }}
                  className={`group relative overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)] ${styles.border}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="font-mono text-[10px] font-semibold text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[19px] font-black leading-[1.2] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[12px] font-medium leading-6 text-slate-500">
                    {step.description}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.accent} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <motion.section
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
            duration: 0.6,
          }}
          className="mx-auto my-[30px] max-w-7xl rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-10 lg:p-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                  <TrendingUp className="h-4 w-4" />
                </div>

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Your Story Could Be Next
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-[30px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[38px]">
                Build skills with purpose.
                <span className="block text-teal-700">
                  Prepare for the opportunity ahead.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
                Start with a clear direction, build practical skills and
                prepare yourself for the next stage of your professional
                journey.
              </p>
            </div>

            <Link
              to="/programs"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
            >
              Start Your Journey

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/10">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </motion.section>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}

        <p className="mx-auto mt-8 mb-[30px] max-w-3xl text-center text-[10px] font-medium leading-5 text-slate-400">
          Success experiences may vary based on individual effort,
          background, skills, market conditions and other factors. Stories
          shown on this page should be presented as representative learner
          experiences unless independently verified by Zenvix.
        </p>
      </div>
    </main>
  );
}