
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Code2,
  BarChart3,
  BrainCircuit,
  Compass,
  MessagesSquare,
  Briefcase,
  BookOpen,
  Trophy,
  FileText,
  ArrowRight,
  Phone
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo.jsx";

/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [
  {
    label: "Programs",
    href: "/programs",
    items: [
      {
        label: "Software Engineering",
        href: "/programs/software-engineering",
        description: "Build real-world software development skills.",
      },
      {
        label: "Data Analytics",
        href: "/programs/data-analytics",
        description: "Learn data analysis and business intelligence.",
      },
      {
        label: "AI & Machine Learning",
        href: "/programs/ai-machine-learning",
        description: "Build practical AI and machine learning skills.",
      },
    ],
  },

  {
    label: "Career Support",
    href: "/career",
    items: [
      {
        label: "Career Support",
        href: "/career",
        description: "Get guidance to build your career roadmap.",
      },
      {
        label: "Interview Preparation",
        href: "/interview-preparation",
        description: "Prepare confidently for technical interviews.",
      },
      {
        label: "Job Preparation",
        href: "/job-preparation",
        description: "Get job-ready with practical preparation.",
      },
    ],
  },

  {
    label: "Resources",
    href: "/resources",
    items: [
      {
        label: "Blog",
        href: "/blog",
        description: "Insights, guides and career advice.",
      },
      {
        label: "Free Resources",
        href: "/resources",
        description: "Useful learning resources at no cost.",
      },
    ],
  },

  {
    label: "Success Stories",
    href: "/success-stories",
  },

  {
    label: "About Us",
    href: "/about",
  },
];

/* =========================================================
   DROPDOWN ICONS
========================================================= */

const dropdownIcons = {
  "Software Engineering": Code2,
  "Data Analytics": BarChart3,
  "AI & Machine Learning": BrainCircuit,
  "Career Support": Compass,
  "Interview Preparation": MessagesSquare,
  "Job Preparation": Briefcase,
  Blog: BookOpen,
  "Success Stories": Trophy,
  "Free Resources": FileText,
};

/* =========================================================
   ICON COLORS
========================================================= */

const iconAccents = {
  "Software Engineering":
    "text-electric-500 bg-electric-500/10",

  "Data Analytics":
    "text-cyan-500 bg-cyan-500/10",

  "AI & Machine Learning":
    "text-violet-500 bg-violet-500/10",

  "Career Support":
    "text-emerald-500 bg-emerald-500/10",

  "Interview Preparation":
    "text-electric-500 bg-electric-500/10",

  "Job Preparation":
    "text-violet-500 bg-violet-500/10",

  Blog:
    "text-slate-600 bg-surface2",

  "Success Stories":
    "text-emerald-500 bg-emerald-500/10",

  "Free Resources":
    "text-cyan-500 bg-cyan-500/10",
};

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const closeTimer = useRef(null);

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================================
     BODY LOCK
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  /* =========================================================
     CLEANUP
  ========================================================= */

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
    };
  }, []);

  /* =========================================================
     DESKTOP DROPDOWN HANDLERS
  ========================================================= */

  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
    }, 120);
  };

  /* =========================================================
     ACTIVE ROUTE
  ========================================================= */

  const isActive = (href) => {
    if (!href) return false;

    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  const isParentActive = (link) => {
    if (!link) return false;

    if (link.items?.length) {
      return (
        isActive(link.href) ||
        link.items.some((item) => isActive(item.href))
      );
    }

    return isActive(link.href);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-border/80
        transition-all
        duration-300
        ${
         scrolled
  ? "bg-[#FEFFFF]/95 shadow-soft backdrop-blur-xl"
  : "bg-[#FEFFFF]/90 backdrop-blur-md"
        }
      `}
    >
      {/* =====================================================
          NAVBAR
          SAME 30px LEFT / RIGHT SPACING
          AS BATTERY SOLUTION
      ===================================================== */}

      <nav
        className="
          flex
          h-[72px]
          w-full
          items-center
          justify-between
          px-[30px]
          sm:px-[30px]
        "
        aria-label="Primary"
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          to="/"
          className="shrink-0"
          aria-label="Zenvix Solution — Home"
        >
          <Logo />
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isParentActive(link);

            return (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.items && handleEnter(link.label)
                }
                onMouseLeave={() =>
                  link.items && handleLeave()
                }
              >
                <Link
                  to={link.href}
                  className={`
                    relative
                    flex
                    items-center
                    gap-1
                    rounded-md
                    px-4
                    py-2.5
                    font-body
                    text-[14px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      active
                        ? "bg-surface text-navy"
                        : "text-navy-600 hover:bg-surface hover:text-navy"
                    }
                  `}
                  aria-haspopup={!!link.items}
                  aria-expanded={
                    openMenu === link.label
                  }
                >
                  {link.label}

                  {link.items && (
                    <ChevronDown
                      size={15}
                      className={`
                        transition-transform
                        duration-200
                        ${
                          openMenu === link.label
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  )}

                  {active && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="
                        absolute
                        bottom-1
                        left-4
                        right-4
                        h-[2px]
                        rounded-full
                        bg-navy
                      "
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  )}
                </Link>

                {/* =================================================
                    DESKTOP DROPDOWN
                ================================================== */}

                <AnimatePresence>
                  {link.items &&
                    openMenu === link.label && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                          scale: 0.98,
                        }}
                        transition={{
                          duration: 0.16,
                          ease: "easeOut",
                        }}
                        className="
                          absolute
                          left-1/2
                          top-full
                          w-[320px]
                          -translate-x-1/2
                          pt-3
                        "
                        onMouseEnter={() =>
                          clearTimeout(
                            closeTimer.current
                          )
                        }
                        onMouseLeave={handleLeave}
                      >
                        <div
                          className="
                            overflow-hidden
                            rounded-2xl
                            border
                            border-border
                            bg-white
                            p-2
                            shadow-lift
                          "
                        >
                          {link.items.map((item) => {
                            const Icon =
                              dropdownIcons[item.label] ??
                              Compass;

                            const itemActive =
                              isActive(item.href);

                            return (
                              <Link
                                key={item.label}
                                to={item.href}
                                className={`
                                  group
                                  flex
                                  items-start
                                  gap-3
                                  rounded-xl
                                  p-2.5
                                  transition-colors
                                  ${
                                    itemActive
                                      ? "bg-surface"
                                      : "hover:bg-surface"
                                  }
                                `}
                              >
                                <span
                                  className={`
                                    mt-0.5
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-lg
                                    ${
                                      iconAccents[
                                        item.label
                                      ] ??
                                      "bg-surface2 text-navy-600"
                                    }
                                  `}
                                >
                                  <Icon
                                    size={17}
                                    strokeWidth={2}
                                  />
                                </span>

                                <span
                                  className="
                                    flex
                                    min-w-0
                                    flex-1
                                    flex-col
                                  "
                                >
                                  <span
                                    className="
                                      flex
                                      items-center
                                      justify-between
                                      gap-2
                                    "
                                  >
                                    <span
                                      className="
                                        font-body
                                        text-[14px]
                                        font-semibold
                                        text-navy
                                      "
                                    >
                                      {item.label}
                                    </span>

                                    <ArrowRight
                                      size={13}
                                      className="
                                        text-slate-300
                                        opacity-0
                                        transition-all
                                        duration-200
                                        group-hover:translate-x-0.5
                                        group-hover:opacity-100
                                      "
                                    />
                                  </span>

                                  <span
                                    className="
                                      mt-0.5
                                      font-body
                                      text-[12.5px]
                                      leading-5
                                      text-slate-500
                                    "
                                  >
                                    {item.description}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* ===================================================
            DESKTOP RIGHT SIDE
        =================================================== */}

       <div className="hidden items-center gap-2 lg:flex">
  <Link
    to="/contact"
    className={`
      flex items-center gap-2
      rounded-md
      border border-navy/20
      bg-transparent
      px-5
      py-2.5
      font-body
      text-[14px]
      font-medium
      text-navy
      transition-all
      hover:border-navy
      hover:bg-navy/5
    `}
  >
    <Phone className="h-4 w-4" />
    Contact
  </Link>

  <Link
    to="/programs"
    className="
      btn-primary
      !px-5
      !py-2.5
      !text-[14px]
    "
  >
    Explore Programs
  </Link>
</div>

        {/* ===================================================
            MOBILE TOGGLE
        =================================================== */}

        <button
          type="button"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            text-navy
            transition-colors
            hover:bg-surface
            lg:hidden
          "
          onClick={() =>
            setMobileOpen((value) => !value)
          }
          aria-label={
            mobileOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={mobileOpen}
        >
          <AnimatePresence
            mode="wait"
            initial={false}
          >
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 90,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{
                  rotate: 90,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -90,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.22,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              border-t
              border-border
              bg-white
              lg:hidden
            "
          >
            <div
              className="
                flex
                max-h-[calc(100dvh-72px)]
                flex-col
                gap-1
                overflow-y-auto
                px-[30px]
                py-4
                sm:px-[30px]
              "
            >
              {navLinks.map((link) => {
                const active =
                  isParentActive(link);

                return (
                  <div
                    key={link.label}
                    className="
                      border-b
                      border-border/70
                      py-1
                      last:border-none
                    "
                  >
                    {link.items ? (
                      <>
                        {/* MOBILE PARENT */}

                        <div className="flex items-center">
                          <Link
                            to={link.href}
                            className={`
                              flex-1
                              py-3
                              font-body
                              text-[15px]
                              font-medium
                              ${
                                active
                                  ? "text-navy"
                                  : "text-navy-600"
                              }
                            `}
                            onClick={() =>
                              setMobileOpen(false)
                            }
                          >
                            {link.label}
                          </Link>

                          <button
                            type="button"
                            onClick={() =>
                              setMobileSubmenu(
                                (value) =>
                                  value === link.label
                                    ? null
                                    : link.label
                              )
                            }
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-lg
                              text-slate-500
                              hover:bg-surface
                            "
                            aria-label={`Toggle ${link.label} submenu`}
                            aria-expanded={
                              mobileSubmenu ===
                              link.label
                            }
                          >
                            <ChevronDown
                              size={17}
                              className={`
                                transition-transform
                                duration-200
                                ${
                                  mobileSubmenu ===
                                  link.label
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </button>
                        </div>

                        {/* MOBILE SUBMENU */}

                        <AnimatePresence>
                          {mobileSubmenu ===
                            link.label && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.18,
                              }}
                              className="overflow-hidden"
                            >
                              <div
                                className="
                                  mb-2
                                  ml-1
                                  rounded-xl
                                  bg-surface
                                  p-1
                                "
                              >
                                {link.items.map(
                                  (item) => {
                                    const Icon =
                                      dropdownIcons[
                                        item.label
                                      ] ?? Compass;

                                    const itemActive =
                                      isActive(
                                        item.href
                                      );

                                    return (
                                      <Link
                                        key={item.label}
                                        to={item.href}
                                        className={`
                                          flex
                                          items-center
                                          gap-3
                                          rounded-lg
                                          p-2.5
                                          ${
                                            itemActive
                                              ? "bg-white shadow-soft"
                                              : ""
                                          }
                                        `}
                                        onClick={() =>
                                          setMobileOpen(
                                            false
                                          )
                                        }
                                      >
                                        <span
                                          className={`
                                            flex
                                            h-8
                                            w-8
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-lg
                                            ${
                                              iconAccents[
                                                item.label
                                              ] ??
                                              "bg-surface2 text-navy-600"
                                            }
                                          `}
                                        >
                                          <Icon
                                            size={15}
                                          />
                                        </span>

                                        <span className="flex flex-col">
                                          <span
                                            className="
                                              font-body
                                              text-[13px]
                                              font-semibold
                                              text-navy
                                            "
                                          >
                                            {item.label}
                                          </span>

                                          <span
                                            className="
                                              mt-0.5
                                              font-body
                                              text-[11px]
                                              text-slate-500
                                            "
                                          >
                                            {
                                              item.description
                                            }
                                          </span>
                                        </span>
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className={`
                          block
                          py-3
                          font-body
                          text-[15px]
                          font-medium
                          ${
                            active
                              ? "text-navy"
                              : "text-navy-600"
                          }
                        `}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* =================================================
                  MOBILE ACTIONS
              ================================================== */}

              <div className="flex flex-col gap-3 pt-5">
  <Link
    to="/contact"
    className="
      flex items-center justify-center gap-2
      rounded-md
      border border-navy/20
      bg-transparent
      px-5
      py-2.5
      font-body
      text-[14px]
      font-medium
      text-navy
      transition-all
      hover:border-navy
      hover:bg-navy/5
    "
    onClick={() => setMobileOpen(false)}
  >
    <Phone className="h-4 w-4" />
    Contact
  </Link>

  <Link
    to="/programs"
    className="btn-primary"
    onClick={() => setMobileOpen(false)}
  >
    Explore Programs
  </Link>
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

