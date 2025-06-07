// components/MoodContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type MoodType = "Excellent" | "Good" | "Neutral" | "Sad" | "Very Sad";

export interface MoodEntry {
  id: string;
  mood: MoodType;
  date: string;
  note?: string;
}

// ⇨ PRE‐POPULATE WITH EXAMPLE DATA ⇦
const initialEntries: MoodEntry[] = [
  { id: uuidv4(), mood: "Excellent", date: "2025-06-01", note: "" },
  { id: uuidv4(), mood: "Very Sad", date: "2025-06-02", note: "" },
  { id: uuidv4(), mood: "Good", date: "2025-06-03", note: "" },
  { id: uuidv4(), mood: "Very Sad", date: "2025-06-04", note: "" },
  { id: uuidv4(), mood: "Neutral", date: "2025-06-05", note: "" },
  { id: uuidv4(), mood: "Sad", date: "2025-06-06", note: "" },
  { id: uuidv4(), mood: "Excellent", date: "2025-06-07", note: "" },
];

interface MoodContextType {
  entries: MoodEntry[];
  addEntry(e: Omit<MoodEntry, "id">): void;
  deleteEntry(id: string): void;
  updateEntry(id: string, updated: Partial<MoodEntry>): void;
}

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useState<MoodEntry[]>(() => {
    // Try to load from localStorage first
    if (typeof window !== "undefined") {
      const fromStorage = window.localStorage.getItem("moodEntries");
      if (fromStorage) {
        try {
          return JSON.parse(fromStorage) as MoodEntry[];
        } catch {
          // ignore
        }
      }
    }
    // If nothing in storage, fall back to our test data
    return initialEntries;
  });

  // Persist to localStorage any time entries change
  useEffect(() => {
    window.localStorage.setItem("moodEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = ({ mood, date, note }: Omit<MoodEntry, "id">) => {
    const newEntry: MoodEntry = { id: uuidv4(), mood, date, note };
    setEntries((prev) => [...prev, newEntry]);
  };

  const deleteEntry = (id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  };

  const updateEntry = (id: string, updated: Partial<MoodEntry>) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updated } : e))
    );
  };

  return (
    <MoodContext.Provider
      value={{ entries, addEntry, deleteEntry, updateEntry }}
    >
      {children}
    </MoodContext.Provider>
  );
}

export function useMoodContext() {
  const ctx = useContext(MoodContext);
  if (!ctx) throw new Error("useMoodContext must be inside MoodProvider");
  return ctx;
}
