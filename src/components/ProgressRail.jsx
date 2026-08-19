import { motion } from "framer-motion";
import {
  BookOpen,
  Hammer,
  Target,
  Trophy,
  Check,
} from "lucide-react";

const stages = [
  {
    n: "01",
    label: "Learn",
    icon: BookOpen,
    color: "#8B5CF6",
  },
  {
    n: "02",
    label: "Build",
    icon: Hammer,
    color: "#4C74F0",
  },
  {
    n: "03",
    label: "Prepare",
    icon: Target,
    color: "#14B8C9",
  },
  {
    n: "04",
    label: "Get Hired",
    icon: Trophy,
    color: "#12A76B",
  },
];

export default function ProgressRail({
  activeIndex = 1,
  orientation = "horizontal",
  className = "",
}) {
  const isVertical = orientation === "vertical";

  const safeIndex = Math.min(
    Math.max(activeIndex, 0),
    stages.length - 1
  );

  const progress =
    (safeIndex / (stages.length - 1)) * 100;

  return (
    <div
      className={`relative ${
        isVertical
          ? "flex flex-col gap-8"
          : "grid grid-cols-4 items-start"
      } ${className}`}
    >
      {/* =====================================================
          BACKGROUND CONNECTING LINE
      ====================================================== */}

      <div
        className={
          isVertical
            ? "absolute bottom-5 left-[20px] top-5 w-px bg-slate-200"
            : "absolute left-[12.5%] right-[12.5%] top-[20px] h-px bg-slate-200"
        }
      />

      {/* =====================================================
          ACTIVE PROGRESS LINE
      ====================================================== */}

      <motion.div
        initial={false}
        animate={
          isVertical
            ? {
                height: `${progress}%`,
              }
            : {
                width: `${progress}%`,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={
          isVertical
            ? "absolute left-[20px] top-5 w-px origin-top"
            : "absolute left-[12.5%] top-[20px] h-px origin-left"
        }
        style={{
          background:
            "linear-gradient(180deg, #8B5CF6 0%, #4C74F0 38%, #14B8C9 70%, #12A76B 100%)",
        }}
      />

      {/* =====================================================
          STAGES
      ====================================================== */}

      {stages.map((stage, i) => {
        const Icon = stage.icon;

        const isActive = i <= safeIndex;
        const isCurrent = i === safeIndex;
        const isCompleted = i < safeIndex;

        return (
          <div
            key={stage.n}
            className={`relative z-10 flex ${
              isVertical
                ? "items-center gap-3"
                : "flex-col items-center gap-2.5"
            }`}
          >
            {/* =================================================
                ICON
            ================================================== */}

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Glow */}

              {isActive && (
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    backgroundColor: stage.color,
                  }}
                />
              )}

              <motion.span
                whileHover={{
                  scale: 1.08,
                }}
                className="relative flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-[0_6px_20px_rgba(15,23,42,0.07)] transition-all duration-300"
                style={{
                  borderColor: isActive
                    ? stage.color
                    : "#E4E8F0",
                }}
              >
                {isCompleted ? (
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    style={{
                      color: stage.color,
                    }}
                  />
                ) : (
                  <Icon
                    size={16}
                    strokeWidth={2.25}
                    style={{
                      color: isActive
                        ? stage.color
                        : "#94A3B8",
                    }}
                  />
                )}

                {/* Current indicator */}

                {isCurrent && (
                  <motion.span
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white"
                    style={{
                      backgroundColor: stage.color,
                    }}
                  />
                )}
              </motion.span>
            </motion.div>

            {/* =================================================
                LABEL
            ================================================== */}

            <span
              className={
                isVertical
                  ? "min-w-0"
                  : "text-center"
              }
            >
              <span className="block font-mono text-[9px] font-medium tracking-[0.16em] text-slate-400">
                {stage.n}
              </span>

              <motion.span
                animate={{
                  color: isActive
                    ? stage.color
                    : "#94A3B8",
                }}
                transition={{
                  duration: 0.3,
                }}
                className="mt-0.5 block text-[12px] font-semibold"
              >
                {stage.label}
              </motion.span>
            </span>
          </div>
        );
      })}
    </div>
  );
}