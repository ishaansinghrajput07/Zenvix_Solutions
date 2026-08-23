
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService.js";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setServerError("");

    try {
      const response = await loginUser({
        email: formData.email.trim(),
        password: formData.password,
      });

      if (!response?.success || !response?.token || !response?.user) {
        throw new Error(
          response?.message || "Unable to login. Please try again."
        );
      }

      const storage = formData.remember
        ? localStorage
        : sessionStorage;

      const otherStorage = formData.remember
        ? sessionStorage
        : localStorage;

      otherStorage.removeItem("zenvix_token");
      otherStorage.removeItem("zenvix_user");

      storage.setItem("zenvix_token", response.token);
      storage.setItem(
        "zenvix_user",
        JSON.stringify(response.user)
      );

      /*
       * Login successful.
       *
       * For now we send the user to the student dashboard.
       * Dashboard will be created in the next step.
       */

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Login Error:", error);

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to login. Please check your credentials and try again.";

      setServerError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
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
          className="absolute -left-40 top-[-120px] h-[30rem] w-[30rem] rounded-full bg-sky-100/50 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-[-120px] h-[30rem] w-[30rem] rounded-full bg-violet-100/40 blur-3xl"
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
          TOP NAV
      ====================================================== */}

      <div className="relative z-10 px-5 py-5 sm:px-8 sm:py-7">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600 transition-colors hover:text-slate-950"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Zenvix
          </Link>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Secure Login
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 flex min-h-[calc(100vh-90px)] items-center justify-center px-5 pb-12 pt-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT PANEL
          ================================================== */}

          <div className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="relative">
              <div className="mb-10 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950">
                  <Sparkles className="h-4 w-4" />
                </div>

                <span className="text-sm font-bold tracking-tight">
                  Zenvix
                </span>
              </div>

              <div className="max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
                  Your career journey
                </p>

                <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] xl:text-5xl">
                  Learn.
                  <br />
                  Build.
                  <br />
                  <span className="text-slate-500">
                    Get hired.
                  </span>
                </h1>

                <p className="mt-6 text-sm leading-7 text-slate-400">
                  Access your learning experience, track your progress,
                  explore career resources and continue building your
                  professional future.
                </p>
              </div>
            </div>

            <div className="relative mt-12">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-white">
                    Secure account access
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-500">
                    Your account information stays protected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              LOGIN FORM
          ================================================== */}

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">

              {/* Mobile Brand */}

              <div className="mb-8 flex items-center gap-2 lg:hidden">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>

                <span className="text-sm font-bold text-slate-950">
                  Zenvix
                </span>
              </div>

              {/* Header */}

              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  <LockKeyhole className="h-3 w-3 text-slate-500" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Account Login
                  </span>
                </div>

                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Welcome back.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Sign in to continue your Zenvix journey.
                </p>
              </div>

              {/* Server Error */}

              {serverError && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
                >
                  <p className="text-xs font-medium leading-relaxed text-red-600">
                    {serverError}
                  </p>
                </motion.div>
              )}

              {/* Form */}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500"
                  >
                    Email Address
                  </label>

                  <div
                    className={`group flex h-12 items-center rounded-xl border bg-white px-3 transition-all duration-300 ${
                      errors.email
                        ? "border-red-300 ring-4 ring-red-50"
                        : "border-slate-200 focus-within:border-slate-950 focus-within:ring-4 focus-within:ring-slate-950/5"
                    }`}
                  >
                    <Mail className="mr-2.5 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-700" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={isLoading}
                      className="h-full w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-[10px] font-semibold text-slate-500 transition-colors hover:text-slate-950"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div
                    className={`group flex h-12 items-center rounded-xl border bg-white px-3 transition-all duration-300 ${
                      errors.password
                        ? "border-red-300 ring-4 ring-red-50"
                        : "border-slate-200 focus-within:border-slate-950 focus-within:ring-4 focus-within:ring-slate-950/5"
                    }`}
                  >
                    <LockKeyhole className="mr-2.5 h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-700" />

                    <input
                      id="password"
                      name="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      autoComplete="current-password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      disabled={isLoading}
                      className="h-full w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (previous) => !previous
                        )
                      }
                      disabled={isLoading}
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-700 disabled:cursor-not-allowed"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <p className="mt-1.5 text-[10px] font-medium text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember */}

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-3.5 w-3.5 rounded border-slate-300 accent-slate-950"
                  />

                  <span className="text-[10px] font-medium text-slate-500">
                    Keep me signed in
                  </span>
                </label>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_15px_35px_rgba(15,23,42,0.18)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Register */}

              <div className="mt-8 text-center">
                <p className="text-xs text-slate-400">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-slate-900 transition-colors hover:text-violet-600"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Security */}

              <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-100 pt-6">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />

                <p className="text-[9px] text-slate-400">
                  Secure and protected account access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
