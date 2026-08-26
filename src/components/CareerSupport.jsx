import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  MessageCircle,
  Send,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const supportSteps = [
  {
    number: "01",
    title: "Build Your Portfolio",
    description:
      "Turn your learning into a professional portfolio that helps you stand out to employers.",
    icon: FileText,
    color: "sky",
  },
  {
    number: "02",
    title: "Prepare for Interviews",
    description:
      "Develop the confidence and communication skills needed to perform better in interviews.",
    icon: MessageCircle,
    color: "violet",
  },
  {
    number: "03",
    title: "Practice with Mock Interviews",
    description:
      "Experience realistic interview scenarios and identify areas where you can improve.",
    icon: UserRoundCheck,
    color: "amber",
  },
  {
    number: "04",
    title: "Move Toward Opportunities",
    description:
      "Get career guidance and support as you take the next step toward job opportunities.",
    icon: BriefcaseBusiness,
    color: "emerald",
  },
];

const colorStyles = {
  sky: {
    icon: "bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white",
    glow: "bg-sky-400/20",
    text: "text-sky-500",
  },

  violet: {
    icon: "bg-violet-50 text-violet-600 group-hover:bg-violet-500 group-hover:text-white",
    glow: "bg-violet-400/20",
    text: "text-violet-500",
  },

  amber: {
    icon: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    glow: "bg-amber-400/20",
    text: "text-amber-500",
  },

  emerald: {
    icon: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    glow: "bg-emerald-400/20",
    text: "text-emerald-500",
  },
};

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

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function CareerSupport() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const API_URL = "http://localhost:5000/api/leads";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      submit: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (
      !/^[0-9+\\-\s()]{8,18}$/.test(form.phone.trim())
    ) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      newErrors.message =
        "Please tell us a little about your goal.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),

        // Required by backend
        interestedCourse: "Career Guidance",

        service: form.service.trim(),
        message: form.message.trim(),
        source: "Career Support Form",
      };

      const response = await axios.post(API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data?.success) {
        setSubmitted(true);
        setForm(INITIAL_FORM);
        setErrors({});
      } else {
        throw new Error(
          response.data?.message || "Unable to submit enquiry."
        );
      }
    } catch (error) {
      console.error("Career Support Lead Error:", error);

      const backendMessage =
        error.response?.data?.message ||
        "Unable to submit your enquiry. Please try again.";

      setErrors({
        submit: backendMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) => `
    w-full rounded-xl border
    ${
      errors[field]
        ? "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-500/5"
        : "border-slate-200 bg-slate-50/60 focus:border-sky-400 focus:bg-white focus:ring-sky-500/5"
    }
    px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200
    placeholder:text-slate-400 focus:ring-4
  `;

  return (
    <section
      id="career"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-violet-100/70 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-slate-900" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Career Support
            </p>

            <span className="h-px w-10 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Learning is only
            <span className="block text-slate-400">
              the beginning.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Your course should open the door to what&apos;s next. Zenvix helps
            students turn their skills into confidence, professional
            readiness and real career opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-12">
          {/* =================================================
              LEFT — CAREER SUPPORT STEPS
          ================================================== */}

          <div className="space-y-4">
            {supportSteps.map((step, index) => {
              const Icon = step.icon;
              const styles = colorStyles[step.color];

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >
                  <div
                    className={`pointer-events-none absolute -inset-1 rounded-[1.4rem] ${styles.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <motion.div
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                    className="relative flex gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6"
                  >
                    <div className="hidden pt-1 text-xs font-bold tracking-[0.15em] text-slate-300 sm:block">
                      {step.number}
                    </div>

                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative shrink-0"
                    >
                      <div
                        className={`absolute inset-0 scale-150 rounded-2xl ${styles.glow} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                      />

                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 transition-all duration-500 ${styles.icon}`}
                      >
                        <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p
                            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${styles.text}`}
                          >
                            Career Step {step.number}
                          </p>

                          <h3 className="mt-1.5 text-base font-semibold text-slate-950 sm:text-lg">
                            {step.title}
                          </h3>
                        </div>

                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-700" />
                      </div>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative"
          >
            {/* FORM CARD */}

            <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)] sm:p-7">
              {/* Soft background effects */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-100/80 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-100/70 blur-3xl" />

              <div className="relative">
                {!submitted ? (
                  <>
                    {/* FORM HEADER */}

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                            <Sparkles className="h-4 w-4" />
                          </span>

                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                            Career Support
                          </p>
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.75rem]">
                          Let&apos;s talk about
                          <span className="block text-slate-400">
                            your next move.
                          </span>
                        </h3>

                        <p className="mt-3 max-w-md text-xs leading-5 text-slate-500">
                          Tell us what you&apos;re working toward and our team
                          will help you find the right direction.
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-sky-600 sm:flex">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                    </div>

                    {/* FORM */}

                    <form
                      onSubmit={handleSubmit}
                      className="mt-6 space-y-4"
                      noValidate
                    >
                      {/* Name + Email */}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-name"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            Full Name
                          </label>

                          <input
                            id="career-name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            autoComplete="name"
                            className={inputClass("name")}
                          />

                          {errors.name && (
                            <p className="mt-1 text-[9px] text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-email"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            Email Address
                          </label>

                          <input
                            id="career-email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                            className={inputClass("email")}
                          />

                          {errors.email && (
                            <p className="mt-1 text-[9px] text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone + Service */}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-phone"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            Phone Number
                          </label>

                          <input
                            id="career-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 000 000 0000"
                            autoComplete="tel"
                            className={inputClass("phone")}
                          />

                          {errors.phone && (
                            <p className="mt-1 text-[9px] text-red-500">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-service"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            What can we help with?
                          </label>

                          <select
                            id="career-service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={inputClass("service")}
                          >
                            <option value="">
                              Select a service
                            </option>

                            {supportOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          {errors.service && (
                            <p className="mt-1 text-[9px] text-red-500">
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}

                      <div>
                        <label
                          htmlFor="career-message"
                          className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                        >
                          Tell us more
                        </label>

                        <textarea
                          id="career-message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your goals, current situation, or what you need help with..."
                          className={
                            inputClass("message") + " resize-none"
                          }
                        />

                        {errors.message && (
                          <p className="mt-1 text-[9px] text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Backend Error */}

                      {errors.submit && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-[10px] text-red-600">
                          {errors.submit}
                        </div>
                      )}

                      {/* Submit Button */}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{
                          scale: 1.01,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting
                          ? "Sending..."
                          : "Send Enquiry"}

                        {!isSubmitting && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                            <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        )}
                      </motion.button>

                      <div className="flex items-center justify-center gap-1.5 pt-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />

                        <p className="text-center text-[9px] text-slate-400">
                          Your information is used only to respond to
                          your enquiry.
                        </p>
                      </div>
                    </form>
                  </>
                ) : (
                  /* SUCCESS STATE */

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="flex min-h-[500px] flex-col items-center justify-center px-4 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                      Enquiry submitted
                      <span className="block text-slate-400">
                        successfully.
                      </span>
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                      Thank you for contacting Zenvix Solutions. Our
                      team will review your enquiry and get back to you
                      soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
                    >
                      Send Another Enquiry

                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Your next step
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              Ready to turn your skills into opportunity?
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Start learning today and build toward the career you want
              tomorrow.
            </p>
          </div>

          <motion.a
            href="/programs"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-colors hover:bg-slate-800"
          >
            Explore Courses

            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        <div className="h-16 sm:h-20" />
      </div>
    </section>
  );
}