import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import blogs from "../data/blogs.js";

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

export default function BlogDetail() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-white px-5 pt-[120px]">
        <div className="text-center">

          <BookOpen className="mx-auto h-10 w-10 text-slate-300" />

          <h1 className="mt-5 text-2xl font-semibold text-slate-950">
            Article not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The article you're looking for doesn't exist.
          </p>

          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

        </div>
      </main>
    );
  }

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.id !== blog.id &&
        item.category === blog.category
    )
    .slice(0, 3);

  return (
    <main className="relative overflow-hidden bg-white pt-[120px]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-48 top-10 h-[420px] w-[420px] rounded-full bg-violet-100/40 blur-3xl" />

        <div className="absolute -right-48 top-[600px] h-[420px] w-[420px] rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="shell relative">

        {/* =====================================================
            BACK BUTTON
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />

            Back to Insights
          </Link>
        </motion.div>

        {/* =====================================================
            ARTICLE HEADER
        ====================================================== */}

        <motion.header
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
          className="mx-auto max-w-4xl pt-12 text-center"
        >

          <span
            className={`inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] ${
              accentMap[blog.accent]
            }`}
          >
            {blog.category}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            {blog.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            {blog.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">

            <span className="font-semibold text-slate-700">
              {blog.author}
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span>{blog.date}</span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span className="flex items-center gap-1">
              <Clock3 className="h-3 w-3" />
              {blog.readTime}
            </span>

          </div>
        </motion.header>

        {/* =====================================================
            COVER IMAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
        >

          <img
            src={blog.image}
            alt={blog.title}
            className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[520px]"
          />

        </motion.div>

        {/* =====================================================
            ARTICLE BODY
        ====================================================== */}

        <div className="mx-auto mt-14 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,760px)_260px]">

          <motion.article
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
            className="min-w-0"
          >

            {blog.content.map((block, index) => {

              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="mt-10 text-2xl font-semibold tracking-[-0.025em] text-slate-950 first:mt-0 sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              return (
                <p
                  key={index}
                  className="mt-5 text-[15px] leading-8 text-slate-600"
                >
                  {block.text}
                </p>
              );
            })}

            {/* Tags */}

            <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-100 pt-7">

              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500"
                >
                  #{tag}
                </span>
              ))}

            </div>

          </motion.article>

          {/* =====================================================
              SIDEBAR
          ====================================================== */}

          <aside className="lg:sticky lg:top-28 lg:h-fit">

            <div className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Sparkles className="h-4 w-4" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                Keep building.
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Turn what you learn into practical skills and career-ready
                experience.
              </p>

              <Link
                to="/programs"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Programs

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

            </div>

          </aside>

        </div>

        {/* =====================================================
            RELATED ARTICLES
        ====================================================== */}

        {relatedBlogs.length > 0 && (
          <section className="mt-24 pb-24">

            <div className="flex items-center justify-between">

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-slate-900" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                    Continue Reading
                  </span>
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  You may also like.
                </h2>
              </div>

              <Link
                to="/blog"
                className="hidden items-center gap-2 text-xs font-semibold text-slate-600 transition hover:text-slate-950 sm:flex"
              >
                View all articles
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              {relatedBlogs.map((item, index) => (
                <motion.article
                  key={item.id}
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
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.035)]"
                >

                  <Link to={`/blog/${item.slug}`}>

                    <div className="h-[190px] overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    </div>

                    <div className="p-5">

                      <span
                        className={`inline-flex rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] ${
                          accentMap[item.accent]
                        }`}
                      >
                        {item.category}
                      </span>

                      <h3 className="mt-4 text-lg font-semibold leading-tight text-slate-950">
                        {item.title}
                      </h3>

                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                        <span className="text-[10px] text-slate-400">
                          {item.readTime}
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-slate-950 group-hover:text-white">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>

                      </div>

                    </div>

                  </Link>

                </motion.article>
              ))}

            </div>

          </section>
        )}

      </div>
    </main>
  );
}