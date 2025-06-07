// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) return null;

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle light/dark"
    >
      {theme === "light" ? (
        // Moon icon in dark gray so it shows on white
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        // Sun icon in near-white so it shows on dark
        <Sun className="w-5 h-5 text-yellow-300" />
      )}
    </button>
  );
}
