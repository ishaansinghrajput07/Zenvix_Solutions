import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Clock3,
  FolderKanban,
  Sparkles,
  X,
} from 'lucide-react'

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { programs } from '../data/programs.js'

const accentStyles = {
  electric: {
    icon: 'text-electric-500',
    iconBg: 'bg-electric-500/10',
    border: 'hover:border-electric-500/30',
    glow: 'bg-electric-500/10',
    line: 'bg-electric-500',
    badge: 'bg-electric-500/10 text-electric-600',
  },

  cyan: {
    icon: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10',
    border: 'hover:border-cyan-500/30',
    glow: 'bg-cyan-500/10',
    line: 'bg-cyan-500',
    badge: 'bg-cyan-500/10 text-cyan-600',
  },

  violet: {
    icon: 'text-violet-500',
    iconBg: 'bg-violet-500/10',
    border: 'hover:border-violet-500/30',
    glow: 'bg-violet-500/10',
    line: 'bg-violet-500',
    badge: 'bg-violet-500/10 text-violet-600',
  },

  emerald: {
    icon: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10',
    border: 'hover:border-emerald-500/30',
    glow: 'bg-emerald-500/10',
    line: 'bg-emerald-500',
    badge: 'bg-emerald-500/10 text-emerald-600',
  },
}

const categories = [
  'All Programs',
  'Development',
  'Data & AI',
  'Cloud & DevOps',
  'Cyber Security',
  'Design',
  'Business',
]

function getCategory(program) {
  const name = program.name.toLowerCase()
  const tags = program.tags.join(' ').toLowerCase()

  if (
    name.includes('data') ||
    name.includes('analytics') ||
    name.includes('machine learning') ||
    name.includes('ai') ||
    name.includes('python')
  ) {
    return 'Data & AI'
  }

  if (
    name.includes('cloud') ||
    name.includes('devops')
  ) {
    return 'Cloud & DevOps'
  }

  if (
    name.includes('security') ||
    name.includes('hacking')
  ) {
    return 'Cyber Security'
  }

  if (
    name.includes('design') ||
    name.includes('ui/ux')
  ) {
    return 'Design'
  }

  if (
    name.includes('marketing') ||
    name.includes('project management')
  ) {
    return 'Business'
  }

  if (
    name.includes('development') ||
    name.includes('engineering') ||
    tags.includes('react') ||
    tags.includes('node')
  ) {
    return 'Development'
  }

  return 'Development'
}

function ProgramCard({ program, index }) {
  const styles =
    accentStyles[program.accent] ?? accentStyles.electric

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.035, 0.25),
        ease: 'easeOut',
      }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-soft transition-all duration-300 hover:shadow-lift ${styles.border}`}
    >
      {/* Glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
      />

      {/* Accent line */}
      <div
        className={`absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${styles.line}`}
      />

      {/* Top */}
      <div className="relative flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.iconBg} ${styles.icon}`}
        >
          <Sparkles size={18} strokeWidth={2} />
        </span>

        <span
          className={`rounded-full px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] uppercase ${styles.badge}`}
        >
          Job Ready
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-4">
        <p className="mb-1 font-mono text-[9px] tracking-[0.12em] text-slate-400 uppercase">
          {getCategory(program)}
        </p>

        <h3 className="font-display text-[17px] font-semibold leading-snug text-navy">
          {program.name}
        </h3>

        <p className="mt-2.5 line-clamp-3 font-body text-[12.5px] leading-[1.65] text-slate-500">
          {program.description}
        </p>
      </div>

      {/* Tags */}
      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {program.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[9.5px] text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div className="relative mt-5 flex items-center gap-4 border-t border-border pt-4">
        <div className="flex items-center gap-1.5">
          <Clock3 size={13} className="text-slate-400" />
          <span className="font-body text-[11px] text-slate-500">
            {program.duration}
          </span>
        </div>

        <div className="h-3 w-px bg-border" />

        <div className="flex items-center gap-1.5">
          <FolderKanban
            size={13}
            className="text-slate-400"
          />

          <span className="font-body text-[11px] text-slate-500">
            {program.projects} projects
          </span>
        </div>
      </div>

      {/* CTA */}
      <a
        href={`/programs/${program.id}`}
        className="relative mt-4 flex items-center justify-between rounded-lg bg-surface px-3 py-2.5 transition-all duration-200 hover:bg-navy"
      >
        <span className="font-body text-[11.5px] font-semibold text-navy transition-colors group-hover:text-white">
          Explore Program
        </span>

        <ArrowRight
          size={14}
          className="text-slate-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white"
        />
      </a>
    </motion.article>
  )
}

export default function ProgramsPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] =
    useState('All Programs')

  const filteredPrograms = useMemo(() => {
    const query = search.trim().toLowerCase()

    return programs.filter((program) => {
      const categoryMatch =
        activeCategory === 'All Programs' ||
        getCategory(program) === activeCategory

      if (!query) {
        return categoryMatch
      }

      const searchableText = [
        program.name,
        program.description,
        program.level,
        program.duration,
        ...program.tags,
      ]
        .join(' ')
        .toLowerCase()

      return (
        categoryMatch &&
        searchableText.includes(query)
      )
    })
  }, [search, activeCategory])

  const clearFilters = () => {
    setSearch('')
    setActiveCategory('All Programs')
  }

  const hasFilters =
    search.trim() || activeCategory !== 'All Programs'

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-surface">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden pt-[132px] pb-16 sm:pt-[152px] sm:pb-20">
          {/* Background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/10 via-electric-500/8 to-transparent blur-3xl" />

            <div className="absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-emerald-500/8 blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.3]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)',
                backgroundSize: '64px 64px',
                maskImage:
                  'radial-gradient(ellipse 65% 55% at 50% 0%, black 35%, transparent 100%)',
              }}
            />
          </div>

          <div className="shell relative">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-500" />

                <span className="eyebrow">
                  Explore Zenvix Programs
                </span>
              </div>

              <h1 className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-[54px]">
                Programs built for
                <span className="block">
                  where you want to go.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-slate-500 sm:text-[16px]">
                Choose a structured learning path designed to
                develop practical skills, build real projects,
                prepare for interviews, and move you toward
                career opportunities.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto mt-10 grid max-w-2xl grid-cols-3 overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
            >
              <div className="border-r border-border px-4 py-4 text-center">
                <p className="font-display text-xl font-semibold text-navy">
                  {programs.length}+
                </p>
                <p className="mt-1 font-body text-[10px] text-slate-500 sm:text-[11px]">
                  Career Programs
                </p>
              </div>

              <div className="border-r border-border px-4 py-4 text-center">
                <p className="font-display text-xl font-semibold text-navy">
                  100+
                </p>
                <p className="mt-1 font-body text-[10px] text-slate-500 sm:text-[11px]">
                  Practical Projects
                </p>
              </div>

              <div className="px-4 py-4 text-center">
                <p className="font-display text-xl font-semibold text-navy">
                  1:1
                </p>
                <p className="mt-1 font-body text-[10px] text-slate-500 sm:text-[11px]">
                  Career Guidance
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section className="shell pb-28">
          {/* Search + filter */}
          <div className="sticky top-[72px] z-30 -mx-4 mb-8 border-y border-border bg-surface/90 px-4 py-4 backdrop-blur-xl sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}
              <div className="relative w-full lg:max-w-sm">
                <Search
                  size={17}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search programs, skills..."
                  className="h-11 w-full rounded-xl border border-border bg-white pl-10 pr-10 font-body text-[13px] text-navy outline-none transition-all placeholder:text-slate-400 focus:border-electric-500/40 focus:ring-4 focus:ring-electric-500/5"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-navy"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Result count */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-slate-500">
                  <SlidersHorizontal size={14} />

                  <span className="font-body text-[12px]">
                    Showing{' '}
                    <strong className="text-navy">
                      {filteredPrograms.length}
                    </strong>{' '}
                    programs
                  </span>
                </div>

                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="font-body text-[12px] font-medium text-electric-600 hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((category) => {
                const active = activeCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`whitespace-nowrap rounded-lg border px-3.5 py-2 font-body text-[11.5px] font-medium transition-all duration-200 ${
                      active
                        ? 'border-navy bg-navy text-white shadow-soft'
                        : 'border-border bg-white text-slate-500 hover:border-navy-100 hover:text-navy'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            {filteredPrograms.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredPrograms.map(
                  (program, index) => (
                    <ProgramCard
                      key={program.id}
                      program={program}
                      index={index}
                    />
                  ),
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-border bg-white px-6 py-20 text-center shadow-soft"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-surface">
                  <Search
                    size={20}
                    className="text-slate-400"
                  />
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  No programs found
                </h3>

                <p className="mx-auto mt-2 max-w-sm font-body text-[13px] leading-relaxed text-slate-500">
                  Try another search term or choose a different
                  category to explore available programs.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-secondary mt-5"
                >
                  View All Programs
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </>
  )
}