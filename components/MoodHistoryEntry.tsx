"use client";

import React, { FC, memo } from "react";
import { MoodEntry } from "@/components/MoodContext";

const moodDetails: Record<
  MoodEntry["mood"],
  { emoji: string; gradient: string }
> = {
  Excellent: { emoji: "😄", gradient: "from-green-400 to-emerald-500" },
  Good: { emoji: "😊", gradient: "from-blue-400 to-cyan-500" },
  Neutral: { emoji: "😐", gradient: "from-yellow-400 to-orange-500" },
  Sad: { emoji: "😔", gradient: "from-orange-400 to-red-500" },
  "Very Sad": { emoji: "😢", gradient: "from-red-400 to-pink-500" },
};

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toISOString().split("T")[0];
};

const MoodHistoryEntry: FC<{ entry: MoodEntry }> = memo(({ entry }) => {
  const { emoji, gradient } = moodDetails[entry.mood];

  return (
    <div className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-md w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
            aria-label={`Mood: ${entry.mood}`}
          >
            <span className="text-3xl">{emoji}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-100">
              {entry.mood}
            </span>
            <span className="text-sm text-gray-400">
              {formatDate(entry.date)}
            </span>
          </div>
        </div>
        {entry.note && (
          <span className="text-gray-300 text-sm">{entry.note}</span>
        )}
      </div>
    </div>
  );
});

export default MoodHistoryEntry;
