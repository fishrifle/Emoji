// components/Statistics.tsx
"use client";

import React from "react";
import { useMoodContext } from "./MoodContext";
import StatisticsBar from "./StatisticsBar";

export default function Statistics() {
  const { entries } = useMoodContext();
  const total = entries.length; // ← correct total of all entries

  // Count each of the five moods
  const counts: Record<string, number> = {
    Excellent: 0,
    Good: 0,
    Neutral: 0,
    Sad: 0,
    "Very Sad": 0,
  };
  entries.forEach((e) => {
    counts[e.mood] = (counts[e.mood] || 0) + 1;
  });

  // Display order
  const ORDER: (keyof typeof counts)[] = [
    "Excellent",
    "Good",
    "Neutral",
    "Sad",
    "Very Sad",
  ];

  // Map the “key” to our StatusType (so we can pick the right gradient)
  const mapMoodToStatus = (m: keyof typeof counts) => {
    switch (m) {
      case "Excellent":
        return "excellent";
      case "Good":
        return "good";
      case "Neutral":
        return "neutral";
      case "Sad":
        return "sad";
      case "Very Sad":
        return "verySad";
    }
  };

  // Emoji for each mood
  const emojiMap: Record<string, string> = {
    Excellent: "😄",
    Good: "😊",
    Neutral: "😐",
    Sad: "😔",
    "Very Sad": "😢",
  };

  // Exact gradients for each StatusType
  const gradientMap: Record<string, string> = {
    excellent: "from-green-400 to-green-600",
    good: "from-blue-400 to-cyan-500",
    neutral: "from-yellow-400 to-orange-500",
    sad: "from-orange-400 to-red-500",
    verySad: "from-pink-400 to-pink-600",
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
        Mood Statistics
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Overview of your mood patterns
      </p>

      <div className="space-y-6">
        {ORDER.map((moodKey) => {
          const count = counts[moodKey] || 0;
          // ← Correct percentage formula:
          const pct = total > 0 ? (count / total) * 100 : 0;
          const status = mapMoodToStatus(moodKey) ?? "neutral";
          const gradient = gradientMap[status];

          return (
            <div key={moodKey} className="space-y-1">
              {/* Label + count on one line */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{emojiMap[moodKey]}</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {moodKey}
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {count} {count === 1 ? "time" : "times"}
                </div>
              </div>

              {/* The bar */}
              <StatisticsBar
                status={status}
                percentage={pct} // ← pass the correct computed percentage
                gradient={gradient} // ← pass the correct gradient classes
                animated={false}
                ariaLabel={`${moodKey} percentage`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
