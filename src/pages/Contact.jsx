import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const supportOptions = [
  "Career Guidance",
  "Resume & CV Building",
  "Technical Skill Development",
  "Interview Preparation",
  "Job Preparation",
  "Project & Portfolio Support",
  "Professional Profile",
  "Career Growth",
];

const journey = [
  {
    number: "01",
    title: "Tell us your goal",
    description: "Share where you are today and what you want to achieve next.",
  },
  {
    number: "02",
    title: "Choose your direction",
    description:
      "We'll help you identify the right learning or career support path.",
  },
  {
    number: "03",
    title: "Start your journey",
    description:
      "Take the next step with practical guidance built around your goals.",
  },
];

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white pt-[110px] sm:pt-[125px]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-10 h-[30rem] w-[30rem] rounded-full bg-sky-100/60 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-40 h-[30rem] w-[30rem] rounded-full bg-violet-100/50 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="shell relative z-10">
        {/* =====================================================
            HERO
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Get in touch
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h1 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[4rem]">
            Let&apos;s build your
            <span className="block text-slate-400">next career move.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Tell us about your goals, challenges, or career direction. Zenvix
            can help you identify the right path and take the next step with
            confidence.
          </p>
        </motion.section>

        {/* =====================================================
            MAIN CONTACT AREA
        ====================================================== */}

        <section className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          {/* =================================================
              LEFT — CAREER JOURNEY CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-[1.6rem] bg-slate-950 p-7 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-400">
                <Sparkles className="h-5 w-5" />
              </div>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Your journey
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                From where you are
                <span className="block text-slate-500">
                  to where you want to be.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Whether you are starting your career, changing direction,
                preparing for interviews, or looking for your next opportunity,
                start with a conversation.
              </p>

              <div className="mt-8 space-y-6">
                {journey.map((item, index) => (
                  <div key={item.number} className="relative flex gap-4">
                    {index !== journey.length - 1 && (
                      <div className="absolute left-[15px] top-9 h-[calc(100%+8px)] w-px bg-white/10" />
                    )}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-[9px] font-bold text-sky-400">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact information */}

              <div className="mt-9 border-t border-white/10 pt-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sky-400">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-slate-600">
                        Email
                      </p>
                      <p className="mt-0.5 text-xs text-slate-300">
                        hello@zenvix.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sky-400">
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-slate-600">
                        Phone
                      </p>
                      <p className="mt-0.5 text-xs text-slate-300">
                        Contact our team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.06)] sm:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Start a conversation
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Tell us what you need.
                </h2>

                <p className="mt-2 max-w-md text-xs leading-5 text-slate-500">
                  Share a few details and our team can understand how to support
                  your career journey.
                </p>
              </div>

              <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 sm:flex">
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>

            <form className="mt-8 space-y-5">
              {/* Name + Email */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/5"
                  />
                </div>
              </div>

              {/* Phone + Service */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[11px] font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[11px] font-semibold text-slate-700"
                  >
                    What can we help with?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/5"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {supportOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-semibold text-slate-700"
                >
                  Tell us more
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals, current situation, or what you need help with..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/5"
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(15,23,42,0.15)]"
              >
                Send Enquiry
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                  <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>

              <p className="flex items-center justify-center gap-1.5 text-center text-[10px] text-slate-400">
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                Your information is used only to respond to your enquiry.
              </p>
            </form>
          </motion.div>
        </section>

        {/* =====================================================
            QUICK SUPPORT OPTIONS
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-6xl"
        >
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.04)] sm:p-9">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Career support
                </p>

                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  Not sure where to start?
                </h2>

                <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
                  That's okay. Tell us your current situation and we'll help you
                  identify the most suitable next step.
                </p>
              </div>

              <a
                href="#contact-form"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-900 transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                Start with a conversation
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Bottom spacing */}
        <div className="h-24 sm:h-28" />
      </div>
    </main>
  );
}
