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
    <footer
      className="relative overflow-hidden border-t border-slate-200"
      style={{ backgroundColor: "#EEF3FA" }}
    >
      <div className="relative w-full px-[30px] sm:px-[30px] lg:px-[30px]">
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
          className="border-b border-slate-200/80 py-[30px] pt-[50px]"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-slate-900" />

                <p className="text-[14px] font-[900] uppercase tracking-[0.18em] text-teal-700">
                  Start Your Journey
                </p>
              </div>

              <h2 className="text-[38px] font-[900] leading-[1.1] tracking-[-0.025em] text-slate-950 sm:text-[46px] lg:text-[52px]">
                Ready to move your{" "}
                <span className="font-[900] text-teal-700">
                  career forward?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] font-semibold leading-7 text-slate-500 sm:text-[16px]">
                Find the right program, build practical skills and take the
                next step with Zenvix.
              </p>
            </div>

            <a
              href="#contact"
              className="
                group inline-flex w-fit items-center gap-2.5
                rounded-xl bg-yellow-400
                px-5 py-3
                text-[12px] font-[900] text-black
                shadow-[0_8px_20px_rgba(250,204,21,0.25)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-yellow-300
                hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]
                active:translate-y-0
              "
            >
              Get Started

              <ArrowUpRight
                size={15}
                strokeWidth={2.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-10 py-[30px] lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* =================================================
              BRAND
          ================================================== */}

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
              duration: 0.5,
            }}
          >
            <Logo />

            <p className="mt-5 max-w-sm text-[13px] font-medium leading-6 text-slate-500">
              Career-focused learning designed to help students learn
              practical skills, build confidence and move toward meaningful
              opportunities.
            </p>

            {/* Location */}

            <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-teal-700" />

              <span>United States</span>
            </div>

            {/* Socials */}

            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/zenvix-solution-llc/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl border border-slate-200
                  bg-white/70 text-slate-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-slate-950
                  hover:bg-slate-950
                  hover:text-white
                "
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl border border-slate-200
                  bg-white/70 text-slate-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-slate-950
                  hover:bg-slate-950
                  hover:text-white
                "
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl border border-slate-200
                  bg-white/70 text-slate-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-slate-950
                  hover:bg-slate-950
                  hover:text-white
                "
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>

              <a
                href="mailto:support@zenvixsolution.com"
                aria-label="Email"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl border border-slate-200
                  bg-white/70 text-slate-500
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-slate-950
                  hover:bg-slate-950
                  hover:text-white
                "
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* =================================================
              LINK COLUMNS
          ================================================== */}

          <FooterColumn
            title="Explore"
            links={footerLinks.Explore}
          />

          <FooterColumn
            title="Career"
            links={footerLinks.Career}
          />

          <FooterColumn
            title="Company"
            links={footerLinks.Company}
          />
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col gap-5 border-t border-slate-200/80 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-[800] leading-5 text-slate-600">
            © 2021 Zenvix Solution. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[10px] font-[900] uppercase tracking-[0.15em] text-slate-500">
              Learn
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span className="text-[10px] font-[900] uppercase tracking-[0.15em] text-slate-500">
              Build
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span className="text-[10px] font-[900] uppercase tracking-[0.15em] text-slate-500">
              Prepare
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span className="text-[10px] font-[900] uppercase tracking-[0.15em] text-teal-700">
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
        duration: 0.5,
      }}
    >
      <h3 className="text-[12px] font-[900] uppercase tracking-[0.18em] text-slate-950">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                group inline-flex items-center gap-1
                text-[12px] font-semibold text-slate-500
                transition-colors duration-300
                hover:text-slate-950
              "
            >
              {link.label}

              <ArrowUpRight
                className="
                  h-3 w-3
                  translate-y-0.5 opacity-0
                  transition-all duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:opacity-100
                "
              />
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}