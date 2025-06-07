// app/tracker/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useMoodContext, MoodType } from "@/components/MoodContext";

const MOOD_LIST: { label: MoodType; emoji: string }[] = [
  { label: "Excellent", emoji: "😄" },
  { label: "Good", emoji: "😊" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "😔" },
  { label: "Very Sad", emoji: "😢" },
];

// Helper to map each mood to its gradient classes
function getGradientClasses(mood: MoodType) {
  switch (mood) {
    case "Excellent":
      return "bg-gradient-to-r from-green-400 to-green-600 text-white";
    case "Good":
      return "bg-gradient-to-r from-blue-400 to-cyan-500 text-white";
    case "Neutral":
      return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white";
    case "Sad":
      return "bg-gradient-to-r from-orange-400 to-red-500 text-white";
    case "Very Sad":
      return "bg-gradient-to-r from-pink-400 to-pink-600 text-white";
    default:
      return "";
  }
}

export default function TrackerPage() {
  const { addEntry } = useMoodContext();
  const [selectedMood, setSelectedMood] = useState<MoodType>("Excellent");
  const [note, setNote] = useState("");
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!today) return;
    addEntry({ mood: selectedMood, date: today, note: note.trim() });
    setSelectedMood("Excellent");
    setNote("");
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg max-w-4xl mx-auto space-y-6">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
            How are you feeling today?
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Select your current mood
          </p>
        </div>

        {/* Mood Buttons */}
        <div className="grid grid-cols-5 gap-6">
          {MOOD_LIST.map(({ label, emoji }) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedMood(label)}
              className={`
                flex flex-col items-center justify-center p-6 rounded-lg transition-colors
                ${
                  selectedMood === label
                    ? getGradientClasses(label)
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                }
              `}
            >
              <span className="text-4xl">{emoji}</span>
              <span className="mt-2 text-sm">{label}</span>
            </button>
          ))}
        </div>

        {/* Note Field */}
        <div>
          <label
            htmlFor="note"
            className="block text-gray-700 dark:text-gray-300 mb-2"
          >
            Add a note (optional)
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's on your mind?"
            className="
              w-full bg-gray-50 text-gray-900 p-4 rounded-md border border-gray-300 focus:border-purple-500
              dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:focus:border-purple-400
            "
            rows={4}
          />
        </div>

        {/* Save Button (UPDATED) */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="
            w-full py-4 
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white rounded-md hover:opacity-90 transition
            dark:from-purple-600 dark:to-pink-500
          "
        >
          Save Mood Entry
        </button>
      </div>
    </div>
  );
}
