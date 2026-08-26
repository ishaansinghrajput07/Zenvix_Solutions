import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Menu,
  X,
  LogOut,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { logoutUser } from "../../services/authService";

// =====================================================
// ADMIN NAVIGATION
// =====================================================

const navigation = [
  {
    label: "Overview",
    items: [
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    label: "Management",
    items: [
      {
        name: "Leads",
        path: "/admin/leads",
        icon: Users,
      },

      {
        name: "Students",
        path: "/admin/students",
        icon: GraduationCap,
      },

      {
        name: "Programs",
        path: "/admin/courses",
        icon: BookOpen,
      },

      {
        name: "Enrollments",
        path: "/admin/enrollments",
        icon: ClipboardCheck,
      },
    ],
  },
];

// =====================================================
// ADMIN LAYOUT
// =====================================================

export default function AdminLayout() {
  const navigate = useNavigate();

  const [mobileSidebar, setMobileSidebar] = useState(false);

  // ===================================================
  // LOGOUT
  // ===================================================

  const handleLogout = () => {
    logoutUser();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {mobileSidebar && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebar(false)}
        />
      )}

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col
          border-r border-white/10 bg-slate-950 text-white
          transition-transform duration-300
          lg:translate-x-0
          ${
            mobileSidebar
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3"
            onClick={() => setMobileSidebar(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950 shadow-lg">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <p className="text-base font-bold tracking-tight">
                Zenvix
              </p>

              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Admin Panel
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileSidebar(false)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div className="flex-1 overflow-y-auto px-3 py-6">
          {navigation.map((section) => (
            <div key={section.label} className="mb-7">
              <p className="mb-2 px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                {section.label}
              </p>

              <nav className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileSidebar(false)}
                      className={({ isActive }) =>
                        `
                        group flex items-center gap-3 rounded-xl px-3 py-3
                        text-sm font-medium transition-all duration-200
                        ${
                          isActive
                            ? "bg-white text-slate-950 shadow-sm"
                            : "text-slate-400 hover:bg-white/10 hover:text-white"
                        }
                        `
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={`
                              h-[17px] w-[17px] shrink-0
                              transition-colors
                              ${
                                isActive
                                  ? "text-slate-950"
                                  : "text-slate-500 group-hover:text-white"
                              }
                            `}
                          />

                          <span className="flex-1">
                            {item.name}
                          </span>

                          <ChevronRight
                            className={`
                              h-3.5 w-3.5
                              transition-all duration-200
                              ${
                                isActive
                                  ? "translate-x-0 opacity-100"
                                  : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                              }
                            `}
                          />
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* =================================================
            SIDEBAR FOOTER
        ================================================= */}

        <div className="shrink-0 border-t border-white/10 p-4">
          <div className="mb-3 rounded-xl bg-white/5 p-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Workspace
            </p>

            <p className="mt-1 text-xs font-semibold text-white">
              Zenvix Administration
            </p>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[9px] font-medium text-slate-500">
                System operational
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="
              flex w-full items-center gap-3 rounded-xl
              px-3 py-3 text-sm font-medium
              text-slate-400 transition
              hover:bg-red-500/10 hover:text-red-400
            "
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <div className="lg:pl-[270px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* LEFT */}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileSidebar(true)}
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-slate-200 bg-white
                  text-slate-700 transition
                  hover:bg-slate-50
                  lg:hidden
                "
                aria-label="Open sidebar"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Administration
                </p>

                <h1 className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                  Zenvix Admin Panel
                </h1>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span className="text-[10px] font-semibold text-slate-500">
                  System Active
                </span>
              </div>

              <Link
                to="/"
                className="
                  hidden rounded-xl border border-slate-200
                  px-3 py-2 text-xs font-semibold
                  text-slate-600 transition
                  hover:bg-slate-50 hover:text-slate-950
                  sm:block
                "
              >
                Visit Website
              </Link>
            </div>
          </div>
        </header>

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <main className="min-h-[calc(100vh-76px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}