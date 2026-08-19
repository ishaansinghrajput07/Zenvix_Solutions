import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

import Logo from "./Logo.jsx";

const footerLinks = {
  Explore: [
    { label: "Programs", href: "#programs" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Learning Experience", href: "#learning-experience" },
    { label: "Success Stories", href: "#stories" },
  ],

  Career: [
    { label: "Career Support", href: "#career" },
    { label: "Get Started", href: "#contact" },
    { label: "View Programs", href: "/programs" },
  ],

  Company: [
    { label: "About Zenvix", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

        <div className="absolute -right-40 top-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />
      </div>

      <div className="shell relative">
        {/* =====================================================
            TOP CTA
        ====================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="border-b border-slate-100 py-14 sm:py-16"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Start your journey
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Ready to move your
                <span className="text-slate-400"> career forward?</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                Find the right program, build practical skills and take the
                next step with Zenvix.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-slate-950 px-5 py-3.5 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)]"
            >
              Get Started

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Logo />

            <p className="mt-5 max-w-xs text-xs leading-6 text-slate-500">
              Career-focused learning designed to help students learn
              practical skills, build confidence and move toward meaningful
              opportunities.
            </p>

            {/* Location */}

            <div className="mt-5 flex items-center gap-2 text-[10px] text-slate-400">
              <MapPin className="h-3.5 w-3.5" />

              <span>United States</span>
            </div>

            {/* Socials */}

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* =================================================
              LINK COLUMNS
          ================================================== */}

          <FooterColumn title="Explore" links={footerLinks.Explore} />

          <FooterColumn title="Career" links={footerLinks.Career} />

          <FooterColumn title="Company" links={footerLinks.Company} />
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-4 border-t border-slate-100 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-slate-400">
            © {year} Zenvix Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-300">
              Learn
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-200" />

            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-300">
              Build
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-200" />

            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-300">
              Prepare
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-200" />

            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-emerald-500">
              Get Hired
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-1 text-xs text-slate-500 transition-colors duration-300 hover:text-slate-950"
            >
              {link.label}

              <ArrowUpRight className="h-2.5 w-2.5 translate-y-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}