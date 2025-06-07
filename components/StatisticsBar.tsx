// components/StatisticsBar.tsx
"use client";

import React, { useEffect, useState } from "react";

export type StatusType = "excellent" | "good" | "neutral" | "sad" | "verySad";

export interface StatisticsBarProps {
  /** Which status this is (used only for ARIA) */
  status: StatusType;
  /** A number from 0 to 100 (fill percentage) */
  percentage: number;
  /** Tailwind “from-X to-Y” gradient classes for the fill */
  gradient: string;
  /** Animate from 0 → percentage on mount? */
  animated?: boolean;
  /** How many ms the width transition takes */
  animationDuration?: number;
  /** Optional ARIA label override */
  ariaLabel?: string;
}

const StatisticsBar: React.FC<StatisticsBarProps> = ({
  status,
  percentage,
  gradient,
  animated = true,
  animationDuration = 800,
  ariaLabel,
}) => {
  // Animate from 0 → percentage if requested
  const [fill, setFill] = useState<number>(animated ? 0 : percentage);

  useEffect(() => {
    if (!animated) {
      setFill(percentage);
      return;
    }
    const id = window.setTimeout(() => {
      setFill(percentage);
    }, 50);
    return () => window.clearTimeout(id);
  }, [percentage, animated]);

  return (
    <div className="w-full space-y-1">
      {/* The “rail” (gray or dark‐gray) */}
      <div
        role="progressbar"
        aria-label={ariaLabel ?? `${status} percentage`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(fill)}
        className="relative w-full h-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
      >
        {/* Only render the filled portion if percentage > 0 */}
        {percentage > 0 && (
          <div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradient}`}
            style={{
              width: `${fill}%`,
              transition: animated
                ? `width ${animationDuration}ms ease-in-out`
                : undefined,
            }}
          />
        )}
      </div>
      {/* Percent text below */}
      <div className="text-right text-xs font-semibold text-gray-600 dark:text-gray-400">
        {Math.round(fill)}%
      </div>
    </div>
  );
};

export default StatisticsBar;
