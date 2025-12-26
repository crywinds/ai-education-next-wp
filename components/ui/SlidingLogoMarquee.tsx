"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SlidingLogoMarqueeItem {
  id: string;
  content: ReactNode;
  href?: string;
}

interface SlidingLogoMarqueeProps {
  items: SlidingLogoMarqueeItem[];
  showControls?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  enableBlur?: boolean;
  blurIntensity?: number;
  height?: string;
  width?: string;
  gap?: string;
  scale?: number;
  direction?: "horizontal" | "vertical";
  autoPlay?: boolean;
  backgroundColor?: string;
  showGridBackground?: boolean;
  className?: string;
  onItemClick?: (item: SlidingLogoMarqueeItem) => void;
  enableSpillEffect?: boolean;
  animationSteps?: number;
}

export const SlidingLogoMarquee: React.FC<SlidingLogoMarqueeProps> = ({
  items,
  showControls = false,
  speed = 60,
  pauseOnHover = true,
  enableBlur = true,
  blurIntensity = 1,
  height = "100px",
  width = "100%",
  gap = "0.5rem",
  scale = 1,
  direction = "horizontal",
  autoPlay = true,
  backgroundColor = "hsl(0 0% 2%)",
  showGridBackground = false,
  className,
  onItemClick,
  enableSpillEffect = false,
  animationSteps = 8,
}) => {
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay) {
      setIsPaused(true);
    }
  }, [autoPlay]);

  const duplicatedItems = [...items, ...items, ...items];

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const handleItemClick = (item: SlidingLogoMarqueeItem) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        width,
        height,
        backgroundColor,
        transform: `scale(${scale})`,
        transformOrigin: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showGridBackground && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
      )}

      {enableBlur && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "80px",
              background: `linear-gradient(to right, ${backgroundColor}, transparent)`,
              filter: `blur(${blurIntensity * 10}px)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "80px",
              background: `linear-gradient(to left, ${backgroundColor}, transparent)`,
              filter: `blur(${blurIntensity * 10}px)`,
            }}
          />
        </>
      )}

      <motion.div
        className="flex"
        style={{
          flexDirection: direction === "horizontal" ? "row" : "column",
          gap,
        }}
        animate={{
          x: direction === "horizontal" && !isPaused ? [`0%`, `-${(100 / 3)}%`] : 0,
          y: direction === "vertical" && !isPaused ? [`0%`, `-${(100 / 3)}%`] : 0,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: direction === "horizontal" ? "auto" : "100%",
              height: direction === "vertical" ? "auto" : "100%",
              cursor: onItemClick || item.href ? "pointer" : "default",
            }}
            onClick={() => handleItemClick(item)}
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                {item.content}
              </a>
            ) : (
              item.content
            )}
          </div>
        ))}
      </motion.div>

      {showControls && (
        <div className="absolute bottom-4 right-4 z-20">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-3 py-1 bg-black/50 text-white rounded text-sm hover:bg-black/70"
          >
            {isPaused ? "Play" : "Pause"}
          </button>
        </div>
      )}
    </div>
  );
};
