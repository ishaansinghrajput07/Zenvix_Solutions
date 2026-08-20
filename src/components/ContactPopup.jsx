import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  X,
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

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const POPUP_DELAY = 45 * 1000;

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const alreadySubmitted =
      sessionStorage.getItem("zenvix-contact-submitted") === "true";

    const alreadyClosed =
      sessionStorage.getItem("zenvix-contact-popup-closed") === "true";

    if (alreadySubmitted || alreadyClosed) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);

    sessionStorage.setItem(
      "zenvix-contact-popup-closed",
      "true"
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{8,18}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us a little about your goal.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    /*
      IMPORTANT:
      Connect your backend/API here.

      Example:

      await axios.post("/api/contact", form);

      For now we show the production-style success state.
    */

    sessionStorage.setItem(
      "zenvix-contact-submitted",
      "true"
    );

    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border ${
      errors[field]
        ? "border-red-300 bg-red-50/30 focus:border-red-400 focus:ring-red-500/5"
        : "border-slate-200 bg-slate-50/50 focus:border-sky-400 focus:bg-white focus:ring-sky-500/5"
    } px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-popup-title"
        >
          {/* =====================================================
              BACKDROP
          ====================================================== */}

          <motion.button
            type="button"
            aria-label="Close contact form"
            onClick={handleClose}
            className="absolute inset-0 cursor-default bg-slate-950/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* =====================================================
              MODAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.25)] sm:max-h-[90vh] lg:flex-row"
          >
            {/* =================================================
                CLOSE
            ================================================== */}

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-500 shadow-sm backdrop-blur transition-all hover:border-slate-300 hover:bg-slate-950 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {/* =================================================
                LEFT PANEL
            ================================================== */}

            <div className="relative hidden overflow-hidden bg-slate-950 p-8 text-white lg:flex lg:w-[39%] lg:flex-col lg:justify-between">
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-300">
                  Career Guidance
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight">
                  Ready to take the next step?
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Tell us what you're looking for and our team can help you
                  identify the right learning or career direction.
                </p>
              </div>

              <div className="relative mt-10 space-y-4">
                {[
                  "Personalized career guidance",
                  "Practical learning direction",
                  "Interview & job preparation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-xs text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sky-300">
                    <MessageCircle className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-600">
                      Start a conversation
                    </p>

                    <p className="mt-0.5 text-xs text-slate-300">
                      We're here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT / FORM
            ================================================== */}

            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
              <div className="p-6 sm:p-8">
                {!submitted ? (
                  <>
                    {/* Header */}

                    <div className="pr-10">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                          Let's connect
                        </p>
                      </div>

                      <h2
                        id="contact-popup-title"
                        className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
                      >
                        Tell us what you need.
                      </h2>

                      <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">
                        Share a few details and we'll help you find the right
                        next step.
                      </p>
                    </div>

                    {/* Form */}

                    <form
                      onSubmit={handleSubmit}
                      className="mt-7 space-y-4"
                      noValidate
                    >
                      {/* Name + Email */}

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="popup-name"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            Full Name
                          </label>

                          <input
                            id="popup-name"
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
                            htmlFor="popup-email"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            Email Address
                          </label>

                          <input
                            id="popup-email"
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
                            htmlFor="popup-phone"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            Phone Number
                          </label>

                          <input
                            id="popup-phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
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
                            htmlFor="popup-service"
                            className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                          >
                            What can we help with?
                          </label>

                          <select
                            id="popup-service"
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
                            <p className="mt-1 text-[9px] text-red-500">
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}

                      <div>
                        <label
                          htmlFor="popup-message"
                          className="mb-1.5 block text-[10px] font-semibold text-slate-700"
                        >
                          Tell us more
                        </label>

                        <textarea
                          id="popup-message"
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your goal or what you need help with..."
                          className={`${inputClass(
                            "message"
                          )} resize-none`}
                        />

                        {errors.message && (
                          <p className="mt-1 text-[9px] text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(15,23,42,0.15)] active:scale-[0.99]"
                      >
                        Get Career Guidance

                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </button>

                      <p className="flex items-center justify-center gap-1.5 text-center text-[9px] leading-4 text-slate-400">
                        <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500" />
                        Your information is used only to respond to your
                        enquiry.
                      </p>
                    </form>
                  </>
                ) : (
                  /* =================================================
                     SUCCESS STATE
                  ================================================== */

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                      Thanks for reaching out.
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                      We've received your enquiry. Our team will review your
                      details and get back to you soon.
                    </p>

                    <button
                      type="button"
                      onClick={handleClose}
                      className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-slate-800"
                    >
                      Continue Exploring

                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}