import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

const companiesRow1 = [
  {
    name: 'Microsoft',
    logo: '/companies/microsoft.png',
  },
  {
    name: 'Amazon',
    logo: '/companies/amazon.png',
  },
  {
    name: 'Google',
    logo: '/companies/google.png',
  },
  {
    name: 'IBM',
    logo: '/companies/ibm.png',
  },
  {
    name: 'Oracle',
    logo: '/companies/oracle.png',
  },
  {
    name: 'Deloitte',
    logo: '/companies/deloitte.png',
  },
  {
    name: 'Accenture',
    logo: '/companies/accenture.png',
  },
  {
    name: 'Salesforce',
    logo: '/companies/salesforce.png',
  },
]

const companiesRow2 = [
  {
    name: 'TCS',
    logo: '/companies/tcs.png',
  },
  {
    name: 'Infosys',
    logo: '/companies/infosys.png',
  },
  {
    name: 'Capgemini',
    logo: '/companies/capgemini.png',
  },
  {
    name: 'Cognizant',
    logo: '/companies/cognizant.png',
  },
  {
    name: 'Wipro',
    logo: '/companies/wipro.png',
  },
  {
    name: 'HCLTech',
    logo: '/companies/hcltech.png',
  },
  {
    name: 'Tech Mahindra',
    logo: '/companies/techmahindra.png',
  },
]

function CompanyCard({ company }) {
  return (
    <div className="group flex h-[72px] w-[175px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-[0_4px_18px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:h-[78px] sm:w-[195px]">
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        loading="lazy"
       className="max-h-9 max-w-[125px] object-contain opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:max-h-10 sm:max-w-[140px]"
      />
    </div>
  )
}

function MarqueeRow({
  companies,
  direction = 'left',
}) {
  /*
    Duplicate the complete set.

    This allows the track to move continuously without
    an obvious jump when the animation restarts.
  */

  const items = [...companies, ...companies, ...companies]

  return (
    <div className="relative overflow-hidden">
      {/* left fade */}

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
      />

      {/* right fade */}

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
      />

      <div
        className={`company-marquee-track flex w-max items-center gap-3 sm:gap-4 ${
          direction === 'right'
            ? 'company-marquee-right'
            : 'company-marquee-left'
        }`}
      >
        {items.map((company, index) => (
          <CompanyCard
            key={`${company.name}-${index}`}
            company={company}
          />
        ))}
      </div>
    </div>
  )
}

export default function TopCompanies() {
  return (
    <section
      id="top-companies"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-violet-500/[0.035] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #EEF1F6 1px, transparent 1px), linear-gradient(to bottom, #EEF1F6 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse 70% 50% at 50% 20%, black 20%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-slate-900" />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Career Destinations
              </span>

              <span className="h-px w-8 bg-slate-900" />
            </div>

            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[3.15rem]">
              Top companies.
              <span className="block text-slate-400">
                Bigger career possibilities.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
              Our career-focused approach prepares learners with practical
              skills, projects and career readiness for opportunities across
              leading organizations.
            </p>
          </div>
        </div>

        {/* =====================================================
            LOGO MARQUEE
        ====================================================== */}

        <div className="mt-12 space-y-3 sm:mt-14 sm:space-y-4">
          {/* Row 1
              LEFT → RIGHT
          */}

          <MarqueeRow
            companies={companiesRow1}
            direction="right"
          />

          {/* Row 2
              RIGHT → LEFT
          */}

          <MarqueeRow
            companies={companiesRow2}
            direction="left"
          />
        </div>

        {/* =====================================================
            TRUST / BOTTOM STRIP
        ====================================================== */}

        <div className="shell">
          <div className="mx-auto mt-8 max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5 sm:flex-row sm:px-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500"
                  />
                </span>

                <div>
                  <p className="text-[11px] font-semibold text-slate-800">
                    Career-focused preparation
                  </p>

                  <p className="mt-0.5 text-[9.5px] text-slate-400">
                    Skills • Projects • Interview Preparation • Career Support
                  </p>
                </div>
              </div>

              <a
                href="#programs"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold text-slate-700 transition-colors hover:text-slate-950"
              >
                Explore Programs

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-center">
              <Sparkles
                size={11}
                className="shrink-0 text-violet-400"
              />

              <p className="text-[8.5px] leading-5 text-slate-400">
                Company names and placement claims should be updated with
                verified Zenvix learner outcomes before publishing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MARQUEE ANIMATION
      ====================================================== */}

      <style>{`
        .company-marquee-track {
          will-change: transform;
        }

        .company-marquee-left {
          animation: companyMarqueeLeft 32s linear infinite;
        }

        .company-marquee-right {
          animation: companyMarqueeRight 32s linear infinite;
        }

        .company-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes companyMarqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        @keyframes companyMarqueeRight {
          from {
            transform: translateX(-33.333333%);
          }

          to {
            transform: translateX(0);
          }
        }

        @media (max-width: 640px) {
          .company-marquee-left {
            animation-duration: 26s;
          }

          .company-marquee-right {
            animation-duration: 26s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .company-marquee-left,
          .company-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}