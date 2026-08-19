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

const categories = [
  "All",
  "Career Guidance",
  "Technology",
  "Interview Preparation",
  "Job Preparation",
  "Learning",
];

const accentMap = {
  violet: "bg-violet-50 text-violet-600",
  sky: "bg-sky-50 text-sky-600",
  cyan: "bg-cyan-50 text-cyan-600",
  emerald: "bg-emerald-50 text-emerald-600",
  pink: "bg-pink-50 text-pink-600",
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
  indigo: "bg-indigo-50 text-indigo-600",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featuredPost = blogs.find((blog) => blog.featured);

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

  const normalBlogs = filteredBlogs.filter(
    (blog) => blog.id !== featuredPost?.id
  );

  return (
    <main className="relative overflow-hidden bg-white pt-[120px]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-violet-100/50 blur-3xl" />

        <div className="absolute -right-48 top-[550px] h-[420px] w-[420px] rounded-full bg-sky-100/40 blur-3xl" />

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
          className="mx-auto max-w-4xl pt-10 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Zenvix Insights
            </span>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Learn something useful.
            <span className="block text-slate-400">
              Move your career forward.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Practical insights on technology, career development, interview
            preparation, job readiness, and the skills that help you build
            your professional future.
          </p>

          {/* Search */}

          <div className="mx-auto mt-8 max-w-xl">
            <div className="flex items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">

              <Search className="ml-3 h-4 w-4 shrink-0 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search career, technology, interviews..."
                className="w-full bg-transparent px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <div className="hidden rounded-full bg-slate-950 px-4 py-2 text-[10px] font-semibold text-white sm:block">
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-20"
          >

            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-violet-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Featured Article
              </span>
            </div>

            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.055)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.10)] lg:grid-cols-2"
            >

              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[430px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-slate-900 backdrop-blur">
                    Featured
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] ${
                      accentMap[featuredPost.accent]
                    }`}
                  >
                    {featuredPost.category}
                  </span>

                  <span className="text-[10px] text-slate-400">
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-[2.6rem]">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">

                  <div>
                    <p className="text-[10px] font-semibold text-slate-700">
                      {featuredPost.author}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {featuredPost.date}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1">
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

        <section className="mt-20">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-slate-900" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                  Explore Articles
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Ideas worth reading.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2.5 text-[10px] font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-slate-950 text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-slate-950 hover:text-slate-950"
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

        <section className="mt-10 pb-24">

          {normalBlogs.length === 0 ? (
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-14 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-slate-300" />

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try another search term or category.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {normalBlogs.map((blog, index) => (
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-shadow duration-500 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="flex h-full flex-col"
                  >

                    {/* Image */}

                    <div className="relative h-[210px] overflow-hidden">

                      <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

                      <div className="absolute left-4 top-4">
                        <span
                          className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] ${
                            accentMap[blog.accent]
                          }`}
                        >
                          {blog.category}
                        </span>
                      </div>

                    </div>

                    {/* Content */}

                    <div className="flex flex-1 flex-col p-5">

                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <Clock3 className="h-3 w-3" />

                        {blog.readTime}

                        <span className="h-1 w-1 rounded-full bg-slate-300" />

                        {blog.date}
                      </div>

                      <h3 className="mt-4 text-lg font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                        {blog.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-500">
                        {blog.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">

                        <span className="text-[10px] font-semibold text-slate-400">
                          Read article
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>

                      </div>

                    </div>
                  </Link>
                </motion.article>
              ))}

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
          className="mb-24 overflow-hidden rounded-[1.75rem] bg-slate-950 p-8 sm:p-12 lg:p-14"
        >

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  Keep Growing
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Reading is the beginning.
                <span className="block text-slate-500">
                  Now put your skills into action.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Explore Zenvix programs and build practical skills that can
                help you move toward your career goals.
              </p>

            </div>

            <Link
              to="/programs"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              Explore Programs

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

          </div>
        </motion.section>

      </div>
    </main>
  );
}