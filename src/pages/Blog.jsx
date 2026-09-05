import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

import blogs from "../data/blogs.js";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Career Guidance",
  "Technology",
  "Interview Preparation",
  "Job Preparation",
  "Learning",
];

/* =========================================================
   ACCENT COLORS
========================================================= */

const accentMap = {
  violet: {
    badge: "bg-violet-50 text-violet-600",
    icon: "bg-violet-50 text-violet-600",
    border: "hover:border-violet-200",
  },

  sky: {
    badge: "bg-sky-50 text-sky-600",
    icon: "bg-sky-50 text-sky-600",
    border: "hover:border-sky-200",
  },

  cyan: {
    badge: "bg-cyan-50 text-cyan-600",
    icon: "bg-cyan-50 text-cyan-600",
    border: "hover:border-cyan-200",
  },

  emerald: {
    badge: "bg-emerald-50 text-emerald-600",
    icon: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
  },

  pink: {
    badge: "bg-pink-50 text-pink-600",
    icon: "bg-pink-50 text-pink-600",
    border: "hover:border-pink-200",
  },

  blue: {
    badge: "bg-blue-50 text-blue-600",
    icon: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
  },

  orange: {
    badge: "bg-orange-50 text-orange-600",
    icon: "bg-orange-50 text-orange-600",
    border: "hover:border-orange-200",
  },

  indigo: {
    badge: "bg-indigo-50 text-indigo-600",
    icon: "bg-indigo-50 text-indigo-600",
    border: "hover:border-indigo-200",
  },
};

/* =========================================================
   MOTION
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
   BLOG
========================================================= */

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  /* =======================================================
     FEATURED BLOG
  ======================================================= */

  const featuredPost = blogs.find((blog) => blog.featured);

  /* =======================================================
     FILTER BLOGS
  ======================================================= */

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        blog.title.toLowerCase().includes(searchText) ||
        blog.excerpt.toLowerCase().includes(searchText) ||
        blog.category.toLowerCase().includes(searchText) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  /* =======================================================
     NORMAL BLOGS
  ======================================================= */

  const normalBlogs = filteredBlogs.filter(
    (blog) => blog.id !== featuredPost?.id
  );

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
          {/* LABEL */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-teal-700" />

            <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
              Zenvix Insights
            </span>

            <span className="h-px w-8 bg-teal-700" />
          </div>

          {/* HEADING */}

          <h1 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Learn something useful.
            <span className="block text-teal-700">
              Move your career forward.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-2xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Practical insights on technology, career development, interview
            preparation, job readiness, and the skills that help you build
            your professional future.
          </p>

          {/* SEARCH */}

          <div className="mx-auto mt-7 max-w-xl">
            <div className="flex items-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 focus-within:border-teal-300 focus-within:shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
              <Search className="ml-3 h-4 w-4 shrink-0 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search career, technology, interviews..."
                className="w-full bg-transparent px-3 py-2.5 text-[13px] font-medium text-slate-700 outline-none placeholder:text-slate-400"
              />

              <div className="hidden rounded-lg bg-yellow-400 px-4 py-2 text-[11px] font-black text-slate-950 sm:block">
                Search
              </div>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            FEATURED ARTICLE
        ====================================================== */}

        {featuredPost && activeCategory === "All" && !search && (
          <motion.section
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto mt-[60px] max-w-7xl"
          >
            {/* SECTION LABEL */}

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                <Sparkles className="h-4 w-4" />
              </div>

              <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                Featured Article
              </span>
            </div>

            {/* FEATURED CARD */}

            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.055)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)] lg:grid-cols-2"
            >
              {/* IMAGE */}

              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-yellow-400 px-3 py-1.5 text-[10px] font-black text-slate-950">
                    Featured
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${
                      accentMap[featuredPost.accent]?.badge ??
                      accentMap.sky.badge
                    }`}
                  >
                    {featuredPost.category}
                  </span>

                  <span className="text-[11px] font-semibold text-slate-400">
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-5 text-[28px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[34px] lg:text-[40px]">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 text-[15px] font-medium leading-7 text-slate-500">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="!m-0 text-[12px] font-black text-slate-700">
                      {featuredPost.author}
                    </p>

                    <p className="!m-0 mt-1 text-[11px] font-medium text-slate-400">
                      {featuredPost.date}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.section>
        )}

        {/* =====================================================
            CATEGORIES
        ====================================================== */}

        <section className="mx-auto mt-[60px] max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* HEADER */}

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-teal-700" />

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Explore Articles
                </span>
              </div>

              <h2 className="text-[38px] font-black leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                Ideas worth reading.
              </h2>
            </div>

            {/* CATEGORY FILTER */}

            <div className="flex flex-wrap gap-2 lg:max-w-3xl lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl px-4 py-2.5 text-[11px] font-black transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-yellow-400 text-slate-950 shadow-sm"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-teal-700 hover:text-teal-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BLOG GRID
        ====================================================== */}

        <section className="mx-auto mt-[35px] max-w-7xl pb-[30px]">
          {normalBlogs.length === 0 ? (
            <div className="rounded-[24px] border border-slate-200 bg-white p-14 text-center shadow-[0_8px_28px_rgba(15,23,42,0.035)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-300">
                <BookOpen className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-[20px] font-black text-slate-900">
                No articles found
              </h3>

              <p className="mt-2 text-[14px] font-medium text-slate-500">
                Try another search term or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {normalBlogs.map((blog, index) => {
                const styles =
                  accentMap[blog.accent] ?? accentMap.sky;

                return (
                  <motion.article
                    key={blog.id}
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
                    className={`group flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${styles.border}`}
                  >
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="flex h-full flex-col"
                    >
                      {/* IMAGE */}

                      <div className="relative h-[220px] overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

                        <div className="absolute left-4 top-4">
                          <span
                            className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] ${styles.badge}`}
                          >
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}

                      <div className="flex flex-1 flex-col p-6">
                        {/* META */}

                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-400">
                          <Clock3 className="h-3.5 w-3.5" />

                          <span>{blog.readTime}</span>

                          <span className="h-1 w-1 rounded-full bg-slate-300" />

                          <span>{blog.date}</span>
                        </div>

                        {/* TITLE */}

                        <h3 className="mt-4 text-[19px] font-black leading-[1.2] tracking-[-0.015em] text-slate-950">
                          {blog.title}
                        </h3>

                        {/* EXCERPT */}

                        <p className="mt-3 line-clamp-3 text-[14px] font-medium leading-6 text-slate-500">
                          {blog.excerpt}
                        </p>

                        {/* FOOTER */}

                        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                          <span className="text-[11px] font-black text-slate-400">
                            Read article
                          </span>

                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-slate-950">
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
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
          className="mx-auto mt-[30px] mb-[30px] max-w-7xl rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-10 lg:p-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            {/* CTA CONTENT */}

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                  <Sparkles className="h-4 w-4" />
                </div>

                <span className="text-[14px] font-black uppercase tracking-[0.18em] text-teal-700">
                  Keep Growing
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-[30px] font-black leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[38px]">
                Reading is the beginning.
                <span className="block text-teal-700">
                  Now put your skills into action.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-slate-500">
                Explore Zenvix programs and build practical skills that can
                help you move toward your career goals.
              </p>
            </div>

            {/* CTA BUTTON */}

            <Link
              to="/programs"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-[14px] font-black text-slate-950 transition-all duration-300 hover:bg-yellow-300"
            >
              Explore Programs

              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/10">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}