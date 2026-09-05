import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Clock3,
  FolderKanban,
  Sparkles,
  X,
  Check,
} from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { programs } from "../data/programs.js";

// =====================================================
// ACCENT STYLES
// =====================================================

const accentStyles = {
  electric: {
    icon: "bg-sky-50 text-sky-600",
    iconBg: "bg-sky-50",
    border: "hover:border-sky-200",
    glow: "bg-sky-400/20",
    line: "bg-sky-400",
    badge: "bg-sky-50 text-sky-600",
    dot: "bg-sky-400",
  },

  sky: {
    icon: "bg-sky-50 text-sky-600",
    iconBg: "bg-sky-50",
    border: "hover:border-sky-200",
    glow: "bg-sky-400/20",
    line: "bg-sky-400",
    badge: "bg-sky-50 text-sky-600",
    dot: "bg-sky-400",
  },

  cyan: {
    icon: "bg-cyan-50 text-cyan-600",
    iconBg: "bg-cyan-50",
    border: "hover:border-cyan-200",
    glow: "bg-cyan-400/20",
    line: "bg-cyan-400",
    badge: "bg-cyan-50 text-cyan-600",
    dot: "bg-cyan-400",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600",
    iconBg: "bg-violet-50",
    border: "hover:border-violet-200",
    glow: "bg-violet-400/20",
    line: "bg-violet-400",
    badge: "bg-violet-50 text-violet-600",
    dot: "bg-violet-400",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    glow: "bg-emerald-400/20",
    line: "bg-emerald-400",
    badge: "bg-emerald-50 text-emerald-600",
    dot: "bg-emerald-400",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600",
    iconBg: "bg-amber-50",
    border: "hover:border-amber-200",
    glow: "bg-amber-400/20",
    line: "bg-amber-400",
    badge: "bg-amber-50 text-amber-600",
    dot: "bg-amber-400",
  },

  pink: {
    icon: "bg-pink-50 text-pink-600",
    iconBg: "bg-pink-50",
    border: "hover:border-pink-200",
    glow: "bg-pink-400/20",
    line: "bg-pink-400",
    badge: "bg-pink-50 text-pink-600",
    dot: "bg-pink-400",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
    glow: "bg-orange-400/20",
    line: "bg-orange-400",
    badge: "bg-orange-50 text-orange-600",
    dot: "bg-orange-400",
  },

  indigo: {
    icon: "bg-indigo-50 text-indigo-600",
    iconBg: "bg-indigo-50",
    border: "hover:border-indigo-200",
    glow: "bg-indigo-400/20",
    line: "bg-indigo-400",
    badge: "bg-indigo-50 text-indigo-600",
    dot: "bg-indigo-400",
  },

  slate: {
    icon: "bg-slate-100 text-slate-700",
    iconBg: "bg-slate-100",
    border: "hover:border-slate-300",
    glow: "bg-slate-400/20",
    line: "bg-slate-500",
    badge: "bg-slate-100 text-slate-700",
    dot: "bg-slate-500",
  },
};

// =====================================================
// CATEGORIES
// =====================================================

const categories = [
  "All Programs",
  "Development",
  "Data & AI",
  "Cloud & DevOps",
  "Cyber Security",
  "Design",
  "Business",
];

// =====================================================
// CATEGORY DETECTION
// =====================================================

function getCategory(program) {
  const title = (program?.name || "").toLowerCase();
  const category = (program?.category || "").toLowerCase();

  const skills = Array.isArray(program?.skills)
    ? program.skills.join(" ").toLowerCase()
    : "";

  if (
    category.includes("data") ||
    category.includes("ai") ||
    title.includes("data") ||
    title.includes("machine learning") ||
    title.includes("artificial intelligence") ||
    title.includes("generative ai") ||
    skills.includes("machine learning") ||
    skills.includes("python")
  ) {
    return "Data & AI";
  }

  if (
    category.includes("cloud") ||
    category.includes("devops") ||
    title.includes("cloud") ||
    title.includes("devops") ||
    title.includes("site reliability")
  ) {
    return "Cloud & DevOps";
  }

  if (
    category.includes("security") ||
    category.includes("cyber") ||
    title.includes("security") ||
    title.includes("cyber") ||
    title.includes("ethical hacking") ||
    title.includes("penetration")
  ) {
    return "Cyber Security";
  }

  if (
    category.includes("design") ||
    title.includes("design") ||
    title.includes("ui/ux") ||
    title.includes("ui ux")
  ) {
    return "Design";
  }

  if (
    category.includes("business") ||
    category.includes("marketing") ||
    category.includes("management") ||
    title.includes("marketing") ||
    title.includes("business") ||
    title.includes("management") ||
    title.includes("financial")
  ) {
    return "Business";
  }

  return "Development";
}

// =====================================================
// PROGRAM CARD
// =====================================================

function CourseCard({ program, index }) {
  const styles =
    accentStyles[program?.accent] || accentStyles.electric;

  const skills = Array.isArray(program?.skills)
    ? program.skills
    : [];

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.035, 0.25),
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className={`
        group
        relative
        flex
        h-full
        min-h-[275px]
        flex-col
        overflow-hidden
        rounded-[1.35rem]
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_8px_28px_rgba(15,23,42,0.035)]
        transition-all
        duration-500
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.085)]
        ${styles.border}
      `}
    >
      {/* =================================================
          GLOW
      ================================================== */}

      <div
        aria-hidden
        className={`
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          ${styles.glow}
          opacity-0
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-100
        `}
      />

      {/* =================================================
          TOP
      ================================================== */}

      <div className="relative flex items-start justify-between gap-3">
        <span
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            ${styles.icon}
          `}
        >
          <Sparkles
            size={18}
            strokeWidth={2.5}
          />
        </span>

        <div className="flex items-center gap-2">
          <span
            className={`
              rounded-full
              px-2.5
              py-1
              text-[8px]
              font-[900]
              uppercase
              tracking-[0.12em]
              ${styles.badge}
            `}
          >
            Job Ready
          </span>

          <span className="text-[10px] font-[900] tracking-[0.15em] text-yellow-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="relative mt-5">
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
          />

          <span
            className={`
              text-[9px]
              font-[900]
              uppercase
              tracking-[0.18em]
              ${styles.icon.replace("bg-", "text-").split(" ")[1] || "text-sky-600"}
            `}
          >
            {getCategory(program)}
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 text-[17px] font-[900] leading-tight tracking-tight text-slate-950">
          {program.name}
        </h3>

        <p className="mt-2 line-clamp-3 text-[11px] font-semibold leading-5 text-slate-500">
          {program.description ||
            "Build practical skills through structured learning."}
        </p>
      </div>

      {/* =================================================
          PROGRAM INFO
      ================================================== */}

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-[800] text-slate-500">
          {program.duration || "Flexible"}
        </span>

        <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-[800] text-slate-500">
          {program.mode || "Online"}
        </span>

        <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-[800] text-slate-500">
          Career Support
        </span>
      </div>

      {/* =================================================
          SKILLS
      ================================================== */}

      <div className="relative mt-3 flex flex-wrap gap-1.5">
        {skills.length > 0 ? (
          skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 rounded-full border border-slate-100 bg-white px-2 py-1 text-[9px] font-semibold text-slate-500"
            >
              <Check
                className="h-2.5 w-2.5 text-emerald-500"
                strokeWidth={2.8}
              />

              {skill}
            </span>
          ))
        ) : (
          <span className="rounded-full border border-slate-100 bg-slate-50 px-2 py-1 text-[9px] font-semibold text-slate-400">
            Practical Skills
          </span>
        )}
      </div>

      {/* =================================================
          FOOTER
      ================================================== */}

      <div className="relative mt-auto pt-5">
        <div className="flex items-center justify-between border-t border-slate-100 pt-3.5">
          <span className="text-[9px] font-semibold text-slate-400">
            Career-focused
          </span>

          <Link
            to={`/programs/${program.id}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-yellow-400
              px-3
              py-2
              text-[10px]
              font-[900]
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300
            "
          >
            View Details

            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.8}
            />
          </Link>
        </div>
      </div>

      {/* =================================================
          BOTTOM ACCENT
      ================================================== */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          scale-x-0
          ${styles.line}
          transition-transform
          duration-500
          group-hover:scale-x-100
        `}
      />
    </motion.article>
  );
}

// =====================================================
// PROGRAMS PAGE
// =====================================================

export default function ProgramsPage() {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All Programs");

  // ===================================================
  // FILTER PROGRAMS
  // ===================================================

  const filteredPrograms = useMemo(() => {
    const query = search.trim().toLowerCase();

    return programs.filter((program) => {
      const categoryMatch =
        activeCategory === "All Programs" ||
        getCategory(program) === activeCategory;

      if (!query) {
        return categoryMatch;
      }

      const searchableText = [
        program.name,
        program.description,
        program.category,
        program.duration,
        program.mode,
        program.level,
        program.language,
        ...(Array.isArray(program.skills)
          ? program.skills
          : []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        categoryMatch &&
        searchableText.includes(query)
      );
    });
  }, [search, activeCategory]);

  // ===================================================
  // CLEAR FILTERS
  // ===================================================

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All Programs");
  };

  const hasFilters =
    search.trim() ||
    activeCategory !== "All Programs";

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* =================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden bg-white py-[30px]">
          <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
            <motion.div
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
              }}
              className="w-full pt-[115px] text-center sm:pt-[125px]"
            >
              {/* LABEL */}

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-slate-900" />

                <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                  Explore Zenvix Programs
                </p>

                <span className="h-px w-10 bg-slate-900" />
              </div>

              {/* HEADING */}

              <h1 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                Programs built for
                <span className="block font-[900] text-teal-700">
                  where you want to go.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p className="mx-auto mt-5 max-w-3xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
                Choose a structured learning path designed
                to develop practical skills, build real
                projects, prepare for interviews, and move
                you toward career opportunities.
              </p>
            </motion.div>

            {/* =================================================
                STATS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                mx-auto
                mt-10
                grid
                max-w-2xl
                grid-cols-3
                overflow-hidden
                rounded-[1.35rem]
                border
                border-slate-200
                bg-white
                shadow-[0_8px_28px_rgba(15,23,42,0.035)]
              "
            >
              {/* PROGRAMS */}

              <div className="border-r border-slate-200 px-4 py-4 text-center">
                <p className="text-xl font-[900] text-slate-950">
                  {programs.length}+
                </p>

                <p className="mt-1 text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  Career Programs
                </p>
              </div>

              {/* PROJECTS */}

              <div className="border-r border-slate-200 px-4 py-4 text-center">
                <p className="text-xl font-[900] text-slate-950">
                  100+
                </p>

                <p className="mt-1 text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  Practical Projects
                </p>
              </div>

              {/* GUIDANCE */}

              <div className="px-4 py-4 text-center">
                <p className="text-xl font-[900] text-slate-950">
                  1:1
                </p>

                <p className="mt-1 text-[10px] font-semibold text-slate-500 sm:text-[11px]">
                  Career Guidance
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            PROGRAMS
        ================================================== */}

        <section className="bg-white py-[30px] pb-[80px]">
          <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
            {/* =================================================
                SEARCH + FILTER
            ================================================== */}

            <div className="mb-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* SEARCH */}

                <div className="relative w-full lg:max-w-sm">
                  <Search
                    size={17}
                    className="
                      pointer-events-none
                      absolute
                      left-3.5
                      top-1/2
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search programs, skills..."
                    className="
                      h-11
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      pl-10
                      pr-10
                      text-[13px]
                      font-medium
                      text-slate-950
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-yellow-400
                      focus:ring-4
                      focus:ring-yellow-400/10
                    "
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition-colors
                        hover:text-slate-950
                      "
                      aria-label="Clear search"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>

                {/* RESULT COUNT */}

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-500">
                    <SlidersHorizontal size={14} />

                    <span className="text-[12px] font-medium">
                      Showing{" "}
                      <strong className="font-[900] text-slate-950">
                        {filteredPrograms.length}
                      </strong>{" "}
                      programs
                    </span>
                  </div>

                  {hasFilters && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="
                        text-[12px]
                        font-[800]
                        text-teal-700
                        hover:underline
                      "
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>

              {/* =================================================
                  CATEGORIES
              ================================================== */}

              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((category) => {
                  const active =
                    activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setActiveCategory(category)
                      }
                      className={`
                        whitespace-nowrap
                        rounded-lg
                        border
                        px-3.5
                        py-2
                        text-[11.5px]
                        font-[800]
                        transition-all
                        duration-200
                        ${
                          active
                            ? "border-slate-950 bg-slate-950 text-white shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                            : "border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-950"
                        }
                      `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                EMPTY
            ================================================== */}

            {filteredPrograms.length === 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  rounded-[1.35rem]
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-20
                  text-center
                  shadow-[0_8px_28px_rgba(15,23,42,0.035)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-50
                  "
                >
                  <Search
                    size={20}
                    className="text-slate-400"
                  />
                </div>

                <h3 className="mt-4 text-lg font-[900] text-slate-950">
                  No programs found
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-[13px] font-medium leading-relaxed text-slate-500">
                  Try another search term or choose
                  a different category.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-yellow-400
                    px-5
                    py-3
                    text-[12px]
                    font-[900]
                    text-black
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-yellow-300
                  "
                >
                  View All Programs
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* =================================================
                PROGRAM GRID
            ================================================== */}

            {filteredPrograms.length > 0 && (
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  className="
                    grid
                    grid-cols-1
                    gap-4
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                  "
                >
                  {filteredPrograms.map(
                    (program, index) => (
                      <CourseCard
                        key={program.id}
                        program={program}
                        index={index}
                      />
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            )}

            {/* =================================================
                BOTTOM MESSAGE
            ================================================== */}

            <div className="mt-8 text-center">
              <p className="text-[12px] font-[700] leading-6 text-slate-500">
                Explore career-focused learning paths,
                build practical skills, and choose the
                program that best matches your goals.
              </p>

              <Link
                to="/programs"
                className="
                  group
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-yellow-400
                  px-5
                  py-3
                  text-[12px]
                  font-[900]
                  text-black
                  shadow-[0_8px_20px_rgba(250,204,21,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow-300
                "
              >
                Explore All Programs

                <ArrowRight
                  size={15}
                  strokeWidth={2.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}