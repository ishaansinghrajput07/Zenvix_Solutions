import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  FileText,
  MessageCircle,
  Send,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const STORAGE_KEY = "careerSupportLeads";

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

  /* =========================================================
     HANDLE INPUT CHANGE
  ========================================================= */

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

  /* =========================================================
     FORM VALIDATION
  ========================================================= */

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
    } else if (!/^[0-9+\-\s()]{8,18}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us a little about your goal.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     SAVE LEAD TO LOCAL STORAGE
  ========================================================= */

  const saveLeadToLocalStorage = (lead) => {
    try {
      const existingLeads = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      const updatedLeads = [lead, ...existingLeads];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedLeads)
      );

      /*
        Custom event:
        Dashboard same browser tab mein bhi instantly update
        kar sakta hai agar hum is event ko listen karein.
      */
      window.dispatchEvent(
        new CustomEvent("careerSupportLeadCreated", {
          detail: lead,
        })
      );

      return true;
    } catch (error) {
      console.error("LocalStorage Save Error:", error);
      return false;
    }
  };

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      /*
        Small delay so button loading state
        feels natural.
      */
      await new Promise((resolve) => setTimeout(resolve, 500));

      const lead = {
        id: `CS-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase()}`,

        name: form.name.trim(),

        email: form.email.trim().toLowerCase(),

        phone: form.phone.trim(),

        interestedCourse: "Career Guidance",

        service: form.service.trim(),

        message: form.message.trim(),

        source: "Career Support Form",

        status: "New",

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),
      };

      const saved = saveLeadToLocalStorage(lead);

      if (!saved) {
        throw new Error(
          "Unable to save your enquiry. Please try again."
        );
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      console.error("Career Support Lead Error:", error);

      setErrors({
        submit:
          error.message ||
          "Unable to submit your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     INPUT CLASS
  ========================================================= */

  const inputClass = (field) => `
    w-full rounded-xl border
    ${
      errors[field]
        ? "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-500/5"
        : "border-slate-200 bg-slate-50/60 focus:border-yellow-400 focus:bg-white focus:ring-yellow-500/5"
    }
    px-4 py-3 text-[13px] font-medium text-slate-900 outline-none
    transition-all duration-200
    placeholder:text-slate-400
    focus:ring-4
  `;

  return (
    <section
      id="career"
      className="relative overflow-hidden bg-white py-[30px]"
    >
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
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
          className="w-full pt-[50px] text-center"
        >
          {/* LABEL */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-teal-700" />

            <p className="!m-0 text-[14px] font-[900] uppercase tracking-[0.18em] !text-teal-700">
              Career Support
            </p>

            <span className="h-px w-9 bg-teal-700" />
          </div>

          {/* HEADING */}

          <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
            Learning is only
            <span className="block font-[900] text-slate-400">
              the beginning.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-5 max-w-3xl text-[15px] font-medium leading-7 text-slate-500 sm:text-[16px]">
            Your course should open the door to what&apos;s next. Zenvix
            helps students turn their skills into confidence, professional
            readiness and real career opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="mt-10 grid w-full gap-6 lg:grid-cols-2">
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
                    y: 20,
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
                    delay: index * 0.07,
                  }}
                  className="group relative"
                >
                  {/* CARD */}

                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="relative flex min-h-[145px] gap-4 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-5"
                  >
                    {/* NUMBER */}

                    <div className="hidden pt-1 text-[10px] font-[900] tracking-[0.15em] text-yellow-500 sm:block">
                      {step.number}
                    </div>

                    {/* ICON */}

                    <div className="relative shrink-0">
                      <div
                        className={`relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 transition-all duration-500 ${styles.icon}`}
                      >
                        <Icon
                          className="h-[19px] w-[19px] transition-transform duration-500 group-hover:scale-110"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className={`!m-0 text-[9px] font-[900] uppercase tracking-[0.18em] ${styles.text}`}
                          >
                            Career Step {step.number}
                          </p>

                          <h3 className="mt-1.5 text-[16px] font-[900] leading-tight tracking-[-0.015em] text-slate-950 sm:text-[17px]">
                            {step.title}
                          </h3>
                        </div>

                        <ArrowUpRight
                          className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-700"
                          strokeWidth={2.5}
                        />
                      </div>

                      <p className="!mt-2.5 text-[12px] font-medium leading-5 !text-slate-500 sm:text-[13px]">
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
              y: 20,
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
              duration: 0.6,
              delay: 0.1,
            }}
            className="relative"
          >
            {/* FORM CARD */}

            <div className="relative h-full overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] sm:p-6">
              <div className="relative">
                {!submitted ? (
                  <>
                    {/* FORM HEADER */}

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50">
                            <Sparkles
                              className="h-4 w-4 text-sky-600"
                              strokeWidth={2.5}
                            />
                          </div>

                          <p className="!m-0 text-[10px] font-[900] uppercase tracking-[0.18em] !text-slate-400">
                            Career Support
                          </p>
                        </div>

                        <h3 className="text-[24px] font-[900] leading-[1.15] tracking-[-0.025em] text-slate-950 sm:text-[28px]">
                          Let&apos;s talk about
                          <span className="block text-teal-700">
                            your next move.
                          </span>
                        </h3>

                        <p className="!mt-3 max-w-md text-[12px] font-medium leading-6 !text-slate-500 sm:text-[13px]">
                          Tell us what you&apos;re working toward and our team
                          will help you find the right direction.
                        </p>
                      </div>

                      <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-sky-600 sm:flex">
                        <MessageCircle
                          className="h-5 w-5"
                          strokeWidth={2.3}
                        />
                      </div>
                    </div>

                    {/* FORM */}

                    <form
                      onSubmit={handleSubmit}
                      className="mt-6 space-y-4"
                      noValidate
                    >
                      {/* NAME + EMAIL */}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-name"
                            className="mb-1.5 block text-[10px] font-[900] text-slate-700"
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
                            <p className="!mt-1 text-[9px] font-medium !text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-email"
                            className="mb-1.5 block text-[10px] font-[900] text-slate-700"
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
                            <p className="!mt-1 text-[9px] font-medium !text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* PHONE + SERVICE */}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career-phone"
                            className="mb-1.5 block text-[10px] font-[900] text-slate-700"
                          >
                            Phone Number
                          </label>

                          <input
                            id="career-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (307) 292-7889"
                            autoComplete="tel"
                            className={inputClass("phone")}
                          />

                          {errors.phone && (
                            <p className="!mt-1 text-[9px] font-medium !text-red-500">
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="career-service"
                            className="mb-1.5 block text-[10px] font-[900] text-slate-700"
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
                            <p className="!mt-1 text-[9px] font-medium !text-red-500">
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label
                          htmlFor="career-message"
                          className="mb-1.5 block text-[10px] font-[900] text-slate-700"
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
                          className={`${inputClass(
                            "message"
                          )} resize-none`}
                        />

                        {errors.message && (
                          <p className="!mt-1 text-[9px] font-medium !text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* LOCAL STORAGE ERROR */}

                      {errors.submit && (
                        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-[10px] font-medium text-red-600">
                          {errors.submit}
                        </div>
                      )}

                      {/* SUBMIT BUTTON */}

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{
                          y: -1,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 px-6 py-3.5 text-[13px] font-[900] text-black shadow-[0_8px_20px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Saving..." : "Send Enquiry"}

                        {!isSubmitting && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                            <Send
                              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                              strokeWidth={2.5}
                            />
                          </span>
                        )}
                      </motion.button>

                      {/* PRIVACY NOTE */}

                      <div className="flex items-center justify-center gap-1.5 pt-1">
                        <CheckCircle2
                          className="h-3 w-3 shrink-0 text-emerald-500"
                          strokeWidth={2.5}
                        />

                        <p className="!m-0 text-center text-[9px] font-medium !text-slate-400">
                          Your information is stored locally for enquiry
                          management.
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
                      <CheckCircle2
                        className="h-8 w-8"
                        strokeWidth={2.3}
                      />
                    </div>

                    <h3 className="mt-6 text-[24px] font-[900] leading-tight tracking-[-0.025em] text-slate-950 sm:text-[28px]">
                      Enquiry submitted
                      <span className="block text-teal-700">
                        successfully.
                      </span>
                    </h3>

                    <p className="!mt-3 max-w-sm text-[13px] font-medium leading-6 !text-slate-500">
                      Thank you for contacting Zenvix Solution. Your enquiry
                      has been saved successfully. Our team will review it and
                      get back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrors({});
                      }}
                      className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-[12px] font-[900] text-black shadow-[0_8px_20px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-300"
                    >
                      Send Another Enquiry

                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2.5}
                      />
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
            y: 15,
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
            delay: 0.15,
          }}
          className="mt-7 flex flex-col items-center justify-between gap-5 rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] sm:flex-row sm:p-6"
        >
          <div>
            <p className="!m-0 text-[10px] font-[900] uppercase tracking-[0.18em] !text-teal-700">
              Your Next Step
            </p>

            <h3 className="mt-2 text-[19px] font-[900] leading-tight tracking-[-0.02em] text-slate-950 sm:text-[21px]">
              Ready to turn your skills into opportunity?
            </h3>

            <p className="!mt-2 max-w-xl text-[12px] font-medium leading-6 !text-slate-500 sm:text-[13px]">
              Start learning today and build toward the career you want
              tomorrow.
            </p>
          </div>

          <motion.a
            href="/programs"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-yellow-400 px-5 py-3 text-[12px] font-[900] text-black shadow-[0_8px_20px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]"
          >
            Explore Courses

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2.8}
            />
          </motion.a>
        </motion.div>

        {/* Bottom spacing */}

        <div className="h-[30px]" />
      </div>
    </section>
  );
}