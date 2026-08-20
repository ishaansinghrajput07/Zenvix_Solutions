import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "Liam",
    role: "Zenvix Learner",
    program: "Software Engineering",
    rating: 5,
    feedback:
      "The practical learning approach helped me understand technical concepts better and gave me more confidence in building real projects.",
    initials: "Li",
  },
  {
    id: 2,
    name: "Noah",
    role: "Zenvix Learner",
    program: "Data Analytics",
    rating: 5,
    feedback:
      "The structured learning experience made it easier to understand data concepts and focus on the skills that matter for my career.",
    initials: "No",
  },
  {
    id: 3,
    name: "Ethan",
    role: "Zenvix Learner",
    program: "AI & Machine Learning",
    rating: 5,
    feedback:
      "I really liked the practical approach. Working through projects helped me connect theoretical concepts with real-world applications.",
    initials: "Et",
  },
  {
    id: 4,
    name: "Lucas",
    role: "Zenvix Learner",
    program: "Cybersecurity",
    rating: 5,
    feedback:
      "The learning journey gave me better clarity about cybersecurity fundamentals and the skills I should continue developing.",
    initials: "Lu",
  },
  {
    id: 5,
    name: "Olivia",
    role: "Zenvix Learner",
    program: "Cloud Computing",
    rating: 5,
    feedback:
      "The sessions and practical exercises helped me understand cloud concepts in a much more structured and approachable way.",
    initials: "Ol",
  },
  {
    id: 6,
    name: "Emma",
    role: "Zenvix Learner",
    program: "UI/UX Design",
    rating: 5,
    feedback:
      "The focus on practical work helped me improve my design thinking and gave me a clearer direction for building my portfolio.",
    initials: "Em",
  },
  {
    id: 7,
    name: "Rahul",
    role: "Zenvix Learner",
    program: "Digital Marketing",
    rating: 5,
    feedback:
      "The career-focused approach helped me understand digital marketing concepts through practical examples and useful projects.",
    initials: "Ra",
  },
  {
    id: 8,
    name: "Shohan",
    role: "Zenvix Learner",
    program: "Business Analytics",
    rating: 5,
    feedback:
      "The overall experience helped me build more confidence in analytical thinking and understand how these skills apply professionally.",
    initials: "Sh",
  },
];

const CARD_WIDTH = {
  mobile: "w-full",
  tablet: "w-[calc(50%-8px)]",
  desktop: "w-[calc(25%-12px)]",
};

function FeedbackCard({ feedback }) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      className="group relative flex h-full min-h-[315px] w-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition-all duration-500 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.085)]"
    >
      {/* Glow */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top */}

      <div className="relative flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <Quote
            className="h-[17px] w-[17px]"
            strokeWidth={2.2}
          />
        </div>

        <div className="flex items-center gap-0.5">
          {Array.from({
            length: feedback.rating,
          }).map((_, index) => (
            <Star
              key={index}
              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>

      {/* Feedback */}

      <div className="relative mt-5">
        <p className="line-clamp-5 text-[13px] leading-6 text-slate-600">
          “{feedback.feedback}”
        </p>
      </div>

      {/* Bottom */}

      <div className="relative mt-auto pt-5">
        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[9px] font-bold tracking-wide text-white">
              {feedback.initials}
            </div>

            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-slate-900">
                {feedback.name}
              </p>

              <p className="mt-0.5 text-[9px] text-slate-400">
                {feedback.role}
              </p>
            </div>
          </div>

          <div className="mt-3 inline-flex rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            {feedback.program}
          </div>
        </div>
      </div>

      {/* Bottom Accent */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-violet-400 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * Responsive cards:
   * Mobile  = 1
   * Tablet  = 2
   * Desktop = 4
   */

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();

    window.addEventListener(
      "resize",
      updateVisibleCards
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateVisibleCards
      );
  }, []);

  /*
   * Auto slide
   */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((previous) => {
        const maxIndex =
          feedbacks.length - visibleCards;

        if (previous >= maxIndex) {
          return 0;
        }

        return previous + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCards, isPaused]);

  const maxIndex =
    feedbacks.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((previous) =>
      previous >= maxIndex ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((previous) =>
      previous <= 0 ? maxIndex : previous - 1
    );
  };

  /*
   * Calculate movement percentage.
   */

  const slidePercentage =
    (currentIndex * 100) / visibleCards;

  return (
    <section
      id="feedback"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
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
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-10 h-[28rem] w-[28rem] rounded-full bg-violet-100/40 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[30rem] w-[30rem] rounded-full bg-sky-100/40 blur-3xl"
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

      <div className="shell relative">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-slate-900" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Learner Feedback
            </p>

            <span className="h-px w-9 bg-slate-900" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Real learning.
            <span className="block text-slate-400">
              Real experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Hear what learners have to say about their experience with
            Zenvix, from practical learning to building confidence for
            their career journey.
          </p>
        </motion.div>

        {/* =====================================================
            SLIDER
        ====================================================== */}

        <div
          className="relative mx-auto mt-14 max-w-7xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Button */}

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous feedback"
            className="absolute -left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white lg:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Right Button */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next feedback"
            className="absolute -right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-slate-950 hover:bg-slate-950 hover:text-white lg:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Viewport */}

          <div className="overflow-hidden px-1 py-2">
            <motion.div
              className="flex"
              animate={{
                x: `-${slidePercentage}%`,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="w-full shrink-0 px-1.5 sm:w-1/2 lg:w-1/4"
                >
                  <FeedbackCard feedback={feedback} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}

          <div className="mt-7 flex items-center justify-center gap-1.5">
            {feedbacks.map((feedback, index) => (
              <button
                key={feedback.id}
                type="button"
                aria-label={`Go to feedback ${index + 1}`}
                onClick={() => {
                  const safeIndex = Math.min(
                    index,
                    maxIndex
                  );

                  setCurrentIndex(safeIndex);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-slate-950"
                    : "w-1.5 bg-slate-200 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STRIP
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
            delay: 0.15,
          }}
          className="mx-auto mt-10 max-w-6xl"
        >
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-5 sm:flex-row sm:px-7">
            <div>
              <p className="text-[11px] font-semibold text-slate-800">
                Built around learner experience
              </p>

              <p className="mt-1 text-[9.5px] text-slate-400">
                Practical Learning • Projects • Career Readiness • Support
              </p>
            </div>

            <a
              href="#programs"
              className="group inline-flex items-center gap-2 text-[10px] font-semibold text-slate-700 transition-colors hover:text-slate-950"
            >
              Explore Programs

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>
        </motion.div>

        {/* Verification Note */}

        <p className="mx-auto mt-5 max-w-2xl text-center text-[9px] leading-5 tracking-wide text-slate-400">
          Learner feedback should be published only with permission and
          replaced with verified learner information before going live.
        </p>
      </div>
    </section>
  );
}