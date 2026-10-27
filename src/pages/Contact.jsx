import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

/* =========================================================
   SUPPORT OPTIONS
========================================================= */

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

/* =========================================================
   JOURNEY
========================================================= */

const journey = [
  {
    number: "01",
    title: "Tell us your goal",
    description:
      "Share where you are today and what you want to achieve next.",
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

/* =========================================================
   LOCAL STORAGE
========================================================= */

const CONTACT_STORAGE_KEY = "zenvixContactLeads";

/* =========================================================
   INITIAL FORM
========================================================= */

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

/* =========================================================
   CREATE UNIQUE LEAD ID
========================================================= */

const createLeadId = () => {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `lead_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
};

/* =========================================================
   READ EXISTING LEADS SAFELY
========================================================= */

const getStoredLeads = () => {
  try {
    const storedLeads = localStorage.getItem(CONTACT_STORAGE_KEY);

    if (!storedLeads) {
      return [];
    }

    const parsedLeads = JSON.parse(storedLeads);

    return Array.isArray(parsedLeads) ? parsedLeads : [];
  } catch (error) {
    console.error("Contact Lead Read Error:", error);
    return [];
  }
};

/* =========================================================
   SAVE LEADS SAFELY
========================================================= */

const saveLeads = (leads) => {
  try {
    localStorage.setItem(
      CONTACT_STORAGE_KEY,
      JSON.stringify(leads)
    );

    return true;
  } catch (error) {
    console.error("Contact Lead Storage Error:", error);
    return false;
  }
};

/* =========================================================
   CONTACT COMPONENT
========================================================= */

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* =======================================================
     HANDLE CHANGE
  ======================================================= */

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

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    /* Name */
    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    /* Email */
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim()
      )
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    /* Phone */
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (
      !/^[0-9+\-\s()]{8,18}$/.test(
        form.phone.trim()
      )
    ) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    /* Service */
    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    /* Message */
    if (!form.message.trim()) {
      newErrors.message =
        "Please tell us a little about your goal.";
    } else if (form.message.trim().length < 5) {
      newErrors.message =
        "Please provide a little more information.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =======================================================
     SUBMIT — LOCAL STORAGE ONLY
  ======================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    /* Validate */
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      /* =====================================================
         CREATE NEW LEAD
      ===================================================== */

      const lead = {
        id: createLeadId(),

        name: form.name.trim(),

        email: form.email
          .trim()
          .toLowerCase(),

        phone: form.phone.trim(),

        interestedCourse: "Career Guidance",

        service: form.service.trim(),

        message: form.message.trim(),

        source: "Contact Form",

        status: "New",

        createdAt: new Date().toISOString(),

        /* Useful for dashboard */
        updatedAt: new Date().toISOString(),
      };

      /* =====================================================
         GET OLD LEADS
      ===================================================== */

      const existingLeads = getStoredLeads();

      /* =====================================================
         ADD NEW LEAD WITHOUT DELETING OLD LEADS
      ===================================================== */

      const updatedLeads = [
        lead,
        ...existingLeads,
      ];

      /* =====================================================
         SAVE TO LOCAL STORAGE
      ===================================================== */

      const saved = saveLeads(updatedLeads);

      if (!saved) {
        throw new Error(
          "Unable to save enquiry to localStorage."
        );
      }

      /* =====================================================
         NOTIFY ADMIN DASHBOARD
         
         Dashboard can listen for this event and
         refresh leads without page reload.
      ===================================================== */

      window.dispatchEvent(
        new Event("contactLeadAdded")
      );

      /* =====================================================
         SUCCESS
      ===================================================== */

      setSubmitted(true);

      setForm(INITIAL_FORM);

      setErrors({});
    } catch (error) {
      console.error(
        "Contact Lead Storage Error:",
        error
      );

      setErrors({
        submit:
          "Unable to save your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================================================
     INPUT STYLE
  ======================================================= */

  const inputClass = (field) => `
    w-full rounded-xl border
    ${
      errors[field]
        ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:ring-red-500/5"
        : "border-slate-200 bg-slate-50/60 focus:border-sky-400 focus:bg-white focus:ring-sky-500/5"
    }
    px-4 py-3 text-sm leading-5 text-slate-900
    outline-none transition duration-200
    placeholder:text-slate-400
    focus:ring-4
  `;

  /* =======================================================
     UI
  ======================================================= */

  return (
    <main
      id="contact-form"
      className="relative min-h-screen overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
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
          className="absolute -left-48 top-10 h-[28rem] w-[28rem] rounded-full bg-sky-100/60 blur-3xl"
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
          className="absolute -right-48 top-40 h-[28rem] w-[28rem] rounded-full bg-violet-100/50 blur-3xl"
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

      {/* =====================================================
          MAIN SHELL
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =====================================================
            HERO
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
            duration: 0.65,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5">
            <span className="h-px w-7 bg-slate-900 sm:w-9" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-teal-700 sm:text-[11px]">
              Get in touch
            </p>

            <span className="h-px w-7 bg-slate-900 sm:w-9" />
          </div>

          {/* Heading */}

          <h1 className="text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.75rem]">
            Let&apos;s build your

            <span className="block text-teal-700">
              next career move.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-6 sm:text-[15px] sm:leading-7">
            Tell us about your goals, challenges, or career
            direction. Zenvix can help you identify the right
            path and take the next step with confidence.
          </p>
        </motion.section>

        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <section className="mx-auto mt-10 grid max-w-6xl items-stretch gap-5 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">

          {/* =================================================
              LEFT CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="relative flex h-full overflow-hidden rounded-[1.5rem] bg-slate-950 p-6 sm:p-8 lg:p-9"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative flex w-full flex-col">

              {/* Icon */}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-400">
                <Sparkles className="h-5 w-5" />
              </div>

              {/* Label */}

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] text-yellow-500">
                Your journey
              </p>

              {/* Heading */}

              <h2 className="mt-2.5 text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-3xl">
                From where you are

                <span className="block text-slate-500">
                  to where you want to be.
                </span>
              </h2>

              {/* Description */}

              <p className="mt-4 max-w-md text-[13px] leading-6 text-slate-400 sm:text-sm sm:leading-6.5">
                Whether you are starting your career,
                changing direction, preparing for interviews,
                or looking for your next opportunity, start
                with a conversation.
              </p>

              {/* Journey */}

              <div className="mt-7 space-y-5">
                {journey.map((item, index) => (
                  <div
                    key={item.number}
                    className="relative flex gap-3.5"
                  >
                    {index !== journey.length - 1 && (
                      <div className="absolute left-[15px] top-9 h-[calc(100%+4px)] w-px bg-white/10" />
                    )}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-[9px] font-bold text-sky-400">
                      {item.number}
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-[13px] font-semibold text-white sm:text-sm">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Details */}

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

                  {/* Email */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400">
                      <Mail className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-600">
                        Email
                      </p>

                      <a
                        href="mailto:support@zenvixsolution.com"
                        className="mt-0.5 block text-xs text-slate-300 hover:text-white"
                      >
                        support@zenvixsolution.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400">
                      <Phone className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-600">
                        Phone
                      </p>

                      <a
                        href="tel:+13072927889"
                        className="mt-0.5 block text-xs text-slate-300 hover:text-white"
                      >
                        +1 (307) 292-7889
                      </a>
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
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.15,
            }}
            className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.055)] sm:p-8 lg:p-9"
          >
            {!submitted ? (
              <>
                {/* Form Header */}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-teal-700">
                      Start a conversation
                    </p>

                    <h2 className="mt-2 text-[1.55rem] font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-2xl">
                      Tell us what you need.
                    </h2>

                    <p className="mt-2 max-w-md text-xs leading-5.5 text-slate-500 sm:text-[13px]">
                      Share a few details and our team can
                      understand how to support your career
                      journey.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 sm:flex">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                </div>

                {/* Form */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-4.5 sm:mt-8 sm:space-y-5"
                  noValidate
                >
                  {/* Name + Email */}

                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                    {/* Name */}

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-[11px] font-semibold text-slate-700"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        className={inputClass("name")}
                      />

                      {errors.name && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[11px] font-semibold text-slate-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputClass("email")}
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone + Service */}

                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">

                    {/* Phone */}

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[11px] font-semibold text-slate-700"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (307) 292-7889"
                        autoComplete="tel"
                        className={inputClass("phone")}
                      />

                      {errors.phone && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service */}

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-[11px] font-semibold text-slate-700"
                      >
                        What can we help with?
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass("service")}
                      >
                        <option value="">
                          Select a service
                        </option>

                        {supportOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </select>

                      {errors.service && (
                        <p className="mt-1.5 text-[10px] text-red-500">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[11px] font-semibold text-slate-700"
                    >
                      Tell us more
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, current situation, or what you need help with..."
                      className={`${inputClass(
                        "message"
                      )} resize-none`}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-[10px] text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Storage Error */}

                  {errors.submit && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600">
                      {errors.submit}
                    </div>
                  )}

                  {/* Submit */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-500 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-slate-800 hover:text-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting
                      ? "Saving..."
                      : "Send Enquiry"}

                    {!isSubmitting && (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                        <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    )}
                  </button>

                  {/* Privacy */}

                  <p className="flex items-center justify-center gap-1.5 px-2 text-center text-[10px] leading-4 text-slate-400">
                    <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500" />

                    Your information is used only to respond
                    to your enquiry.
                  </p>
                </form>
              </>
            ) : (
              /* =================================================
                 SUCCESS STATE
              ================================================== */

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex min-h-[430px] flex-col items-center justify-center px-3 text-center sm:min-h-[460px]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  Enquiry submitted successfully.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Thank you for contacting Zenvix Solution.
                  Our team will review your enquiry and get
                  back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
                >
                  Send Another Enquiry

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* =====================================================
            QUICK SUPPORT
        ====================================================== */}

        <motion.section
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20"
        >
          <div className="rounded-[1.4rem] border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)] sm:p-7 lg:p-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center md:gap-8">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-teal-700">
                  Career support
                </p>

                <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  Not sure where to start?
                </h2>

                <p className="mt-2 max-w-xl text-xs leading-5.5 text-slate-500 sm:text-[13px]">
                  That&apos;s okay. Tell us your current
                  situation and we&apos;ll help you identify the
                  most suitable next step.
                </p>
              </div>

              <a
                href="#contact-form"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-yellow-400 bg-yellow-400 px-5 py-3 text-xs font-semibold text-black transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
              >
                Start with a conversation

                <ArrowUpRight className="h-3.5 w-3.5 text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Bottom spacing */}

        <div className="h-16 sm:h-20 lg:h-24" />
      </div>
    </main>
  );
}