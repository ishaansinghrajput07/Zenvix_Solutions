
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

/* =========================================================
   COMPANY CARD
========================================================= */

function CompanyCard({ company }) {
  return (
    <div
      className="
        group
        flex
        h-[72px]
        w-[175px]
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        bg-white
        px-6
        shadow-[0_4px_18px_rgba(15,23,42,0.025)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
        sm:h-[78px]
        sm:w-[195px]
      "
    >
      <img
        src={company.logo}
        alt={`${company.name} logo`}
        loading="lazy"
        className="
          max-h-9
          max-w-[125px]
          object-contain
          opacity-90
          transition-all
          duration-500
          group-hover:scale-105
          group-hover:opacity-100
          sm:max-h-10
          sm:max-w-[140px]
        "
      />
    </div>
  )
}

/* =========================================================
   MARQUEE ROW
========================================================= */

function MarqueeRow({
  companies,
  direction = 'left',
}) {
  /*
    Duplicate the complete set.

    This allows the track to move continuously without
    an obvious jump when the animation restarts.
  */

  const items = [
    ...companies,
    ...companies,
    ...companies,
  ]

  return (
    <div className="relative overflow-hidden">
      {/* LEFT FADE */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-16
          bg-gradient-to-r
          from-white
          to-transparent
          sm:w-24
        "
      />

      {/* RIGHT FADE */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-16
          bg-gradient-to-l
          from-white
          to-transparent
          sm:w-24
        "
      />

      <div
        className={`
          company-marquee-track
          flex
          w-max
          items-center
          gap-3
          sm:gap-4
          ${
            direction === 'right'
              ? 'company-marquee-right'
              : 'company-marquee-left'
          }
        `}
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

/* =========================================================
   TOP COMPANIES
========================================================= */

export default function TopCompanies() {
  return (
    <section
      id="top-companies"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-160px]
            h-[420px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.25]
          "
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

        <div
          className="
            mx-auto
            w-full
            max-w-full
            px-[30px]
            sm:px-[30px]
          "
        >
          <div className="mx-auto max-w-3xl text-center">

            {/* SECTION LABEL */}

            <div
              className="
                mb-5
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-8 bg-slate-900" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-teal-700
                "
              >
                Career Destinations
              </span>

              <span className="h-px w-8 bg-slate-900" />
            </div>

            {/* =================================================
                MAIN HEADING
                Same bold visual language as Hero
            ================================================= */}

            <h2
              className="
                text-[38px]
                font-[900]
                leading-[1.1]
                tracking-[-0.025em]
                text-slate-950
                sm:text-[46px]
                lg:text-[52px]
              "
            >
              Top companies.

              <span
                className="
                  block
                  font-[900]
                  text-teal-700
                "
              >
                Bigger career possibilities.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-[15px]
                font-semibold
                leading-7
                text-slate-500
                sm:text-[16px]
              "
            >
              Our career-focused approach prepares learners with practical
              skills, projects and career readiness for opportunities across
              leading organizations.
            </p>
          </div>
        </div>

        {/* =====================================================
            LOGO MARQUEE
        ====================================================== */}

        <div
          className="
            mt-12
            space-y-3
            sm:mt-14
            sm:space-y-4
          "
        >
          {/* ROW 1 — LEFT → RIGHT */}

          <MarqueeRow
            companies={companiesRow1}
            direction="right"
          />

          {/* ROW 2 — RIGHT → LEFT */}

          <MarqueeRow
            companies={companiesRow2}
            direction="left"
          />
        </div>

        {/* =====================================================
            TRUST / BOTTOM STRIP
        ====================================================== */}

   
<div
  className="
    mx-auto
    w-full
    max-w-full
    px-[30px]
    sm:px-[30px]
  "
>
  <div className="mx-auto mt-[45px] max-w-6xl">

    <div
      className="
        flex
        flex-col
        items-center
        justify-between
        gap-5
        rounded-2xl
        border
        border-slate-200
        bg-slate-50/80
        px-5
        py-5
        sm:flex-row
        sm:px-7
      "
    >

      {/* LEFT */}

      <div className="flex items-center gap-3">

        <span
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-emerald-500/10
          "
        >
          <CheckCircle2
            size={17}
            strokeWidth={2.5}
            className="text-emerald-500"
          />
        </span>

        <div>
          <p
            className="
              text-[12px]
              font-[900]
              leading-tight
              text-slate-900
            "
          >
            Career-focused preparation
          </p>

          <p
            className="
              mt-1
              text-[10.5px]
              font-[700]
              leading-5
              text-slate-600
            "
          >
            Skills • Projects • Interview Preparation • Career Support
          </p>
        </div>
      </div>

      {/* RIGHT CTA */}

     
<a
  href="#programs"
  className="
    group
    inline-flex
    items-center
    gap-2.5
    rounded-xl
    bg-yellow-400
    px-5
    py-3
    text-[12px]
    font-[900]
    text-black
    shadow-[0_8px_20px_rgba(250,204,21,0.25)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-yellow-300
    hover:shadow-[0_12px_25px_rgba(250,204,21,0.35)]
    active:translate-y-0
  "
>
  Explore Programs

  <ArrowRight
    size={15}
    strokeWidth={2.8}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  />
</a>


    </div>

    {/* DISCLAIMER */}

    <div
      className="
        mt-5
        flex
        items-center
        justify-center
        gap-2
        text-center
      "
    >
      <Sparkles
        size={11}
        strokeWidth={2.5}
        className="
          shrink-0
          text-violet-500
        "
      />

     <p
  className="
    text-[12px]
    font-[700]
    leading-6
    text-slate-500
  "
>
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

