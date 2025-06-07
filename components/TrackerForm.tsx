"use client";

import React, { useState, useEffect } from "react";
import { useMoodContext, MoodType } from "@/components/MoodContext";

export default function TrackerForm() {
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

  const MOOD_LIST: { label: MoodType; emoji: string }[] = [
    { label: "Excellent", emoji: "😄" },
    { label: "Good", emoji: "😊" },
    { label: "Neutral", emoji: "😐" },
    { label: "Sad", emoji: "😔" },
    { label: "Very Sad", emoji: "😢" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
        <div>
          <h2 className="text-[24px] font-semibold text-blue-400">
            How are you feeling today?
          </h2>
          <p className="text-gray-400 text-[18px]">Select your current mood</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {MOOD_LIST.map(({ label, emoji }) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedMood(label)}
              className={`
                flex flex-col items-center justify-center p-4 rounded-md cursor-pointer
                ${
                  selectedMood === label
                    ? "bg-gray-400 dark:bg-gray-700"
                    : "bg-gray-600 dark:bg-gray-900 hover:bg-gray-900"
                }
                transition-colors
              `}
            >
              <span className="text-3xl">{emoji}</span>
              <span className="mt-1 text-sm text-gray-200">{label}</span>
            </button>
          ))}
        </div>

        <div>
          <label htmlFor="note" className="block text-gray-200 mb-1">
            Add a note (optional)
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-gray-700 dark:bg-gray-600 text-gray-100 p-3 rounded-md border border-gray-600 focus:border-purple-500"
            rows={3}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md hover:opacity-90 transition"
      >
        Save Mood Entry
      </button>
    </form>
  );
}
