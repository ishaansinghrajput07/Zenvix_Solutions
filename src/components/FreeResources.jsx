import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  FileText,
  Filter,
  GraduationCap,
  Grid2X2,
  Linkedin,
  Search,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

/* =========================================================
   RESOURCE DATA
========================================================= */

const resources = [
  {
    id: 1,
    title: "ATS Resume Checklist",
    description:
      "A practical checklist to improve your resume structure, readability and ATS compatibility before applying for jobs.",
    category: "Resume",
    type: "Checklist",
    icon: FileText,
    color: "violet",
    featured: true,
    action: "Download",
    actionType: "download",
    file: "/resources/ats-resume-checklist.pdf",
    tags: ["ATS", "Resume", "Job Search"],
  },

  {
    id: 2,
    title: "Technical Interview Question Bank",
    description:
      "Practice commonly asked technical questions across programming, web development, databases and computer science.",
    category: "Interview",
    type: "Question Bank",
    icon: Target,
    color: "sky",
    featured: true,
    action: "Practice Now",
    actionType: "route",
    route: "/interview-preparation",
    tags: ["Technical", "Interview", "Practice"],
  },

  {
    id: 3,
    title: "Fresher Job Preparation Guide",
    description:
      "A step-by-step guide covering resume preparation, applications, interview preparation and professional readiness.",
    category: "Jobs",
    type: "Guide",
    icon: BriefcaseBusiness,
    color: "emerald",
    featured: true,
    action: "Start Guide",
    actionType: "route",
    route: "/job-preparation",
    tags: ["Fresher", "Jobs", "Career"],
  },

  {
    id: 4,
    title: "HR Interview Questions",
    description:
      "Prepare answers for common HR interview questions and learn how to communicate your experience with confidence.",
    category: "Interview",
    type: "Guide",
    icon: GraduationCap,
    color: "orange",
    featured: false,
    action: "Practice Now",
    actionType: "route",
    route: "/interview-preparation",
    tags: ["HR", "Interview", "Communication"],
  },

  {
    id: 5,
    title: "JavaScript Interview Cheat Sheet",
    description:
      "Quick revision material covering important JavaScript concepts frequently discussed in frontend interviews.",
    category: "Coding",
    type: "Cheat Sheet",
    icon: Code2,
    color: "amber",
    featured: true,
    action: "View Resource",
    actionType: "download",
    file: "/resources/javascript-interview-cheatsheet.pdf",
    tags: ["JavaScript", "Frontend", "Interview"],
  },

  {
    id: 6,
    title: "React Interview Preparation",
    description:
      "Revise React fundamentals, hooks, component architecture, state management and commonly discussed concepts.",
    category: "Coding",
    type: "Cheat Sheet",
    icon: Code2,
    color: "cyan",
    featured: false,
    action: "Practice Now",
    actionType: "route",
    route: "/interview-preparation",
    tags: ["React", "Frontend", "Technical"],
  },

  {
    id: 7,
    title: "LinkedIn Profile Checklist",
    description:
      "Improve your LinkedIn profile with a simple checklist covering headline, about section, skills, projects and experience.",
    category: "Career",
    type: "Checklist",
    icon: Linkedin,
    color: "blue",
    featured: false,
    action: "Download",
    actionType: "download",
    file: "/resources/linkedin-profile-checklist.pdf",
    tags: ["LinkedIn", "Profile", "Career"],
  },

  {
    id: 8,
    title: "GitHub Portfolio Guide",
    description:
      "Learn how to organize your repositories and present your projects professionally to potential employers.",
    category: "Career",
    type: "Guide",
    icon: Code2,
    color: "indigo",
    featured: false,
    action: "Download",
    actionType: "download",
    file: "/resources/github-portfolio-guide.pdf",
    tags: ["GitHub", "Portfolio", "Projects"],
  },

  {
    id: 9,
    title: "Career Roadmap",
    description:
      "Understand the major stages of building a career from learning fundamentals to professional growth.",
    category: "Career",
    type: "Roadmap",
    icon: GraduationCap,
    color: "pink",
    featured: false,
    action: "Explore",
    actionType: "route",
    route: "/career",
    tags: ["Roadmap", "Career", "Skills"],
  },

  {
    id: 10,
    title: "Job Application Checklist",
    description:
      "Use this checklist before submitting an application to make sure your resume, profile and application are ready.",
    category: "Jobs",
    type: "Checklist",
    icon: CheckCircle2,
    color: "emerald",
    featured: false,
    action: "Download",
    actionType: "download",
    file: "/resources/job-application-checklist.pdf",
    tags: ["Jobs", "Applications", "Checklist"],
  },

  {
    id: 11,
    title: "Mock Interview Preparation",
    description:
      "Prepare yourself for mock interviews with technical, behavioral and HR-focused practice.",
    category: "Interview",
    type: "Practice",
    icon: Target,
    color: "violet",
    featured: false,
    action: "Practice Now",
    actionType: "route",
    route: "/interview-preparation",
    tags: ["Mock Interview", "HR", "Technical"],
  },

  {
    id: 12,
    title: "Professional Growth Guide",
    description:
      "Practical ideas for improving your technical skills, communication, portfolio and long-term career direction.",
    category: "Career",
    type: "Guide",
    icon: BookOpen,
    color: "sky",
    featured: false,
    action: "Explore",
    actionType: "route",
    route: "/career",
    tags: ["Growth", "Skills", "Career"],
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    name: "All",
    icon: Grid2X2,
  },
  {
    name: "Interview",
    icon: Target,
  },
  {
    name: "Jobs",
    icon: BriefcaseBusiness,
  },
  {
    name: "Resume",
    icon: FileText,
  },
  {
    name: "Coding",
    icon: Code2,
  },
  {
    name: "Career",
    icon: GraduationCap,
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

  amber: {
    icon: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-600",
    accent: "bg-amber-500",
    border: "hover:border-amber-200",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    badge: "bg-cyan-50 text-cyan-600",
    accent: "bg-cyan-500",
    border: "hover:border-cyan-200",
  },

  blue: {
    icon: "bg-blue-50 text-blue-600",
    badge: "bg-blue-50 text-blue-600",
    accent: "bg-blue-500",
    border: "hover:border-blue-200",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    badge: "bg-indigo-50 text-indigo-600",
    accent: "bg-indigo-500",
    border: "hover:border-indigo-200",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    badge: "bg-pink-50 text-pink-600",
    accent: "bg-pink-500",
    border: "hover:border-pink-200",
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FreeResources() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All" ||
        resource.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        resource.title.toLowerCase().includes(searchText) ||
        resource.description.toLowerCase().includes(searchText) ||
        resource.category.toLowerCase().includes(searchText) ||
        resource.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      const matchesFeatured =
        !showFeaturedOnly || resource.featured;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesFeatured
      );
    });
  }, [activeCategory, search, showFeaturedOnly]);

  return (
    <main className="relative w-full bg-white py-[30px]">
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl pt-[50px] text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Free Resource Hub
            </span>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          <h1 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Learn more.
            <span className="block text-teal-700">
              Prepare better.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Explore free career resources, interview preparation materials,
            resume guides, coding resources and practical tools designed to
            help you take your next step with confidence.
          </p>

          {/* SEARCH */}

          <div className="mx-auto mt-7 max-w-xl">
            <div className="flex items-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 focus-within:border-teal-300 focus-within:shadow-[0_10px_35px_rgba(15,23,42,0.08)]">

              <Search
                className="ml-3 h-4 w-4 shrink-0 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search interview questions, resume guides, coding..."
                className="w-full bg-transparent px-3 py-2.5 text-[13px] font-medium text-slate-700 outline-none placeholder:text-slate-400"
              />

              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <div className="hidden rounded-lg bg-yellow-400 px-4 py-2 text-[11px] font-black text-slate-950 sm:block">
                  Search
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            QUICK LINKS
        ====================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto mt-[60px] grid max-w-5xl grid-cols-2 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.04)] sm:grid-cols-4"
        >
          {[
            {
              icon: Target,
              title: "Interview",
              description: "Prepare smarter",
              route: "/interview-preparation",
              color: "text-violet-600",
              bg: "bg-violet-50",
            },
            {
              icon: BriefcaseBusiness,
              title: "Jobs",
              description: "Get job ready",
              route: "/job-preparation",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              icon: FileText,
              title: "Resume",
              description: "Build your profile",
              route: "/career",
              color: "text-orange-600",
              bg: "bg-orange-50",
            },
            {
              icon: GraduationCap,
              title: "Career",
              description: "Find your direction",
              route: "/career",
              color: "text-sky-600",
              bg: "bg-sky-50",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.route}
                className={`group flex items-center gap-3 p-5 transition hover:bg-slate-50 ${
                  index !== 0
                    ? "border-t border-slate-100 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="!m-0 text-[13px] font-black text-slate-900">
                    {item.title}
                  </p>

                  <p className="!m-0 mt-0.5 text-[10px] font-medium text-slate-400">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  className="ml-auto h-3.5 w-3.5 text-slate-300 transition group-hover:text-slate-900"
                />
              </Link>
            );
          })}
        </motion.section>

        {/* =====================================================
            FEATURED RESOURCES
        ====================================================== */}

        <section className="mx-auto mt-[60px] max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-teal-700" />

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Featured Resources
                </span>
              </div>

              <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                Start with these.
              </h2>

              <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
                High-value resources selected to help you prepare for the
                most important stages of your career journey.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setShowFeaturedOnly((value) => !value)
              }
              className={`inline-flex w-fit items-center gap-2 rounded-xl px-4 py-2.5 text-[11px] font-black transition-all duration-300 ${
                showFeaturedOnly
                  ? "bg-yellow-400 text-slate-950"
                  : "border border-slate-200 bg-white text-slate-500 hover:border-teal-700 hover:text-teal-700"
              }`}
            >
              <Filter className="h-3.5 w-3.5" />

              {showFeaturedOnly
                ? "Showing Featured"
                : "Show Featured Only"}
            </button>
          </div>

          <div className="mt-[35px] grid gap-5 lg:grid-cols-3">
            {resources
              .filter((resource) => resource.featured)
              .slice(0, 3)
              .map((resource, index) => {
                const Icon = resource.icon;
                const styles =
                  colorStyles[resource.color] ?? colorStyles.sky;

                return (
                  <motion.article
                    key={resource.id}
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
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${styles.border}`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="rounded-full bg-yellow-50 px-3 py-1.5 text-[9px] font-black text-yellow-700">
                        FREE
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
                          {resource.type}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="text-[10px] font-semibold text-slate-400">
                          {resource.category}
                        </span>
                      </div>

                      <h3 className="mt-3 text-[20px] font-black leading-[1.2] tracking-[-0.015em] text-slate-950">
                        {resource.title}
                      </h3>

                      <p className="mt-3 text-[13px] font-medium leading-6 text-slate-500">
                        {resource.description}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[9px] font-semibold text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <ResourceAction resource={resource} />
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.accent} transition-transform duration-500 group-hover:scale-x-100`}
                    />
                  </motion.article>
                );
              })}
          </div>
        </section>

        {/* =====================================================
            ALL RESOURCES
        ====================================================== */}

        <section className="mx-auto mt-[60px] max-w-7xl pb-[30px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-teal-700" />

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Resource Library
                </span>
              </div>

              <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                Explore everything.
              </h2>

              <p className="mt-4 text-[15px] font-medium leading-7 text-slate-500">
                {filteredResources.length} resources available
              </p>
            </div>

            {/* CATEGORY FILTER */}

            <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
              {categories.map((category) => {
                const Icon = category.icon;
                const active =
                  activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category.name)
                    }
                    className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-[10px] font-black transition-all duration-300 ${
                      active
                        ? "bg-yellow-400 text-slate-950"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-teal-700 hover:text-teal-700"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RESOURCE GRID */}

          <div className="mt-[35px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource, index) => {
                const Icon = resource.icon;
                const styles =
                  colorStyles[resource.color] ?? colorStyles.sky;

                return (
                  <motion.article
                    layout
                    key={resource.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.025,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_7px_28px_rgba(15,23,42,0.03)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] ${styles.border}`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${styles.icon}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="flex items-center gap-2">
                        {resource.featured && (
                          <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-black text-amber-600">
                            FEATURED
                          </span>
                        )}

                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-black text-emerald-600">
                          FREE
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[9px] font-black uppercase tracking-[0.17em] ${styles.badge
                            .split(" ")
                            .pop()}`}
                        >
                          {resource.category}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        <span className="text-[9px] font-semibold text-slate-400">
                          {resource.type}
                        </span>
                      </div>

                      <h3 className="mt-2 text-[16px] font-black leading-[1.25] tracking-[-0.01em] text-slate-950">
                        {resource.title}
                      </h3>

                      <p className="mt-2.5 line-clamp-3 text-[12px] font-medium leading-5 text-slate-500">
                        {resource.description}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[8px] font-semibold text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <ResourceAction resource={resource} />
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 ${styles.accent} transition-transform duration-500 group-hover:scale-x-100`}
                    />
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* EMPTY */}

          {filteredResources.length === 0 && (
            <div className="mt-5 rounded-[20px] border border-dashed border-slate-200 bg-slate-50 px-6 py-20 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
                <Search className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-[20px] font-black text-slate-900">
                No resources found
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-[14px] font-medium leading-6 text-slate-500">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                  setShowFeaturedOnly(false);
                }}
                className="mt-5 rounded-xl bg-yellow-400 px-5 py-2.5 text-[11px] font-black text-slate-950 transition hover:bg-yellow-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* =====================================================
            CAREER CTA
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
                  <Sparkles className="h-4 w-4" />
                </div>

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Need More Guidance?
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-[30px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[38px]">
                Free resources are a start.
                <span className="block text-teal-700">
                  Your journey can go further.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
                Explore structured programs and career support designed to
                help you build practical skills and prepare for your next
                opportunity.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/programs"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
              >
                Explore Programs

                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/10">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                to="/career"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-[14px] font-black text-slate-700 transition-all duration-300 hover:border-teal-700 hover:text-teal-700"
              >
                Career Support
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

/* =========================================================
   RESOURCE ACTION
========================================================= */

function ResourceAction({ resource }) {
  if (resource.actionType === "download") {
    return (
      <button
        type="button"
        onClick={() => {
          if (!resource.file) return;

          const link = document.createElement("a");
          link.href = resource.file;
          link.download = resource.file.split("/").pop();

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="relative mt-6 flex w-full items-center justify-between border-t border-slate-100 pt-4 text-[11px] font-black text-slate-900"
      >
        <span>{resource.action}</span>

        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-slate-950">
          <Download className="h-3.5 w-3.5" />
        </span>
      </button>
    );
  }

  return (
    <Link
      to={resource.route}
      className="relative mt-6 flex w-full items-center justify-between border-t border-slate-100 pt-4 text-[11px] font-black text-slate-900"
    >
      <span>{resource.action}</span>

      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-slate-950">
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}