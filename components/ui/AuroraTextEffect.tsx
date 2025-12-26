"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraTextEffectProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: string;
  colors?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  blurAmount?: string;
  animationSpeed?: {
    border: number;
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
}

export const AuroraTextEffect: React.FC<AuroraTextEffectProps> = ({
  text,
  className,
  textClassName,
  fontSize = "clamp(3rem, 8vw, 7rem)",
  colors = {
    first: "bg-cyan-400",
    second: "bg-yellow-400",
    third: "bg-green-400",
    fourth: "bg-purple-500",
  },
  blurAmount = "blur-lg",
  animationSpeed = {
    border: 6,
    first: 5,
    second: 5,
    third: 3,
    fourth: 13,
  },
}) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative">
        {/* Aurora layers */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full opacity-50",
            colors.first,
            blurAmount
          )}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: animationSpeed.first,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full opacity-50",
            colors.second,
            blurAmount
          )}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: animationSpeed.second,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full opacity-50",
            colors.third,
            blurAmount
          )}
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: animationSpeed.third,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full opacity-50",
            colors.fourth,
            blurAmount
          )}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: animationSpeed.fourth,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Text */}
        <span
          className={cn(
            "relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-purple-500",
            textClassName
          )}
          style={{ fontSize }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};
