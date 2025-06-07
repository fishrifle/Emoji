// app/history/page.tsx
"use client";

import React from "react";
import { useMoodContext, MoodEntry } from "@/components/MoodContext";

// Map each mood to its circle‐background gradient
function getCircleGradient(mood: MoodEntry["mood"]) {
  switch (mood) {
    case "Excellent":
      return "bg-gradient-to-br from-green-400 to-green-600";
    case "Good":
      return "bg-gradient-to-br from-blue-400 to-cyan-500";
    case "Neutral":
      return "bg-gradient-to-br from-yellow-400 to-orange-500";
    case "Sad":
      return "bg-gradient-to-br from-orange-400 to-red-500";
    case "Very Sad":
      return "bg-gradient-to-br from-pink-400 to-pink-600";
    default:
      return "";
  }
}

// Helper to format date
function formatDate(dateStr: string) {
  return new Date(dateStr).toISOString().split("T")[0];
}

// Helper to get the emoji
function getEmoji(mood: MoodEntry["mood"]) {
  switch (mood) {
    case "Excellent":
      return "😄";
    case "Good":
      return "😊";
    case "Neutral":
      return "😐";
    case "Sad":
      return "😔";
    case "Very Sad":
      return "😢";
    default:
      return "";
  }
}

export default function HistoryPage() {
  const { entries, deleteEntry, updateEntry } = useMoodContext();

  // Grab the last 7 entries and reverse so newest appears first
  const lastSeven = entries.slice(-7).reverse();

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
          Recent Mood History
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Your last 7 mood entries
        </p>
      </div>

      {/* Card Container */}
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-4">
        {lastSeven.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No mood entries yet.
          </p>
        ) : (
          lastSeven.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-md p-4"
            >
              <div className="flex items-center space-x-4">
                {/* Circular gradient background */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${getCircleGradient(
                    entry.mood
                  )}`}
                  aria-label={`Mood: ${entry.mood}`}
                >
                  <span className="text-2xl">{getEmoji(entry.mood)}</span>
                </div>

                {/* Mood label + date */}
                <div className="flex flex-col">
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    {entry.mood}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {formatDate(entry.date)}
                  </span>
                </div>
              </div>

              {/* Right‐side actions */}
              <div className="flex items-center space-x-4">
                {entry.note && (
                  <button
                    onClick={() => alert(entry.note)}
                    className="text-sm text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    View Note
                  </button>
                )}
                <button
                  onClick={() => {
                    const newMood = prompt(
                      "Update mood (Excellent / Good / Neutral / Sad / Very Sad):",
                      entry.mood
                    ) as MoodEntry["mood"];
                    if (
                      ![
                        "Excellent",
                        "Good",
                        "Neutral",
                        "Sad",
                        "Very Sad",
                      ].includes(newMood)
                    ) {
                      alert("Invalid mood.");
                      return;
                    }
                    const newDate =
                      prompt("Update date (YYYY-MM-DD):", entry.date) ||
                      entry.date;
                    const newNote = prompt(
                      "Update note (optional):",
                      entry.note || ""
                    )
                      ? prompt("Update note (optional):", entry.note || "") ||
                        ""
                      : "";
                    updateEntry(entry.id, {
                      mood: newMood,
                      date: newDate,
                      note: newNote,
                    });
                  }}
                  className="px-2 py-1 text-yellow-600 dark:text-yellow-400 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm("Delete this entry?")) {
                      deleteEntry(entry.id);
                    }
                  }}
                  className="px-2 py-1 text-red-600 dark:text-red-400 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
