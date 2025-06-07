"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { Calendar, List, BarChart2 } from "lucide-react";

export default function Header() {
  const path = usePathname();
  const isActive = (href: string) => path === href;

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* ─── Top Row: Gradient Title / Subtitle / Theme Toggle ─── */}
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          {/* <h1>: Gradient from purple→pink→orange */}
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            Mood Tracker
          </h1>
          {/* <h2>: Gray-500 in light, Gray-400 in dark */}
          <h2 className="text-gray-500 dark:text-gray-400">
            Track your daily emotions
          </h2>
        </div>

        {/* Single toggle (moon icon in light, sun icon in dark) */}
        <ThemeToggle />
      </div>

      {/* ─── Tabs Row: Tracker / History / Stats ─── */}
      <nav className="bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <ul className="flex space-x-4">
            {/* Tracker Tab */}
            <li>
              <Link
                href="/tracker"
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                  ${
                    isActive("/tracker")
                      ? // Active in light: black pill / white text
                        "bg-black text-white"
                      : // Inactive in light: black text; hover: bg-gray-100
                        "text-gray-900 hover:bg-gray-100"
                  }
                  ${
                    isActive("/tracker")
                      ? // Active in dark: gray-800 pill / white text
                        "dark:bg-gray-800 dark:text-white"
                      : // Inactive in dark: gray-300 text; hover: bg-gray-700
                        "dark:text-gray-300 dark:hover:bg-gray-700"
                  }
                `}
              >
                <Calendar className="w-4 h-4" />
                <span>Tracker</span>
              </Link>
            </li>

            {/* History Tab */}
            <li>
              <Link
                href="/history"
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                  ${
                    isActive("/history")
                      ? "bg-black text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  }
                  ${
                    isActive("/history")
                      ? "dark:bg-gray-800 dark:text-white"
                      : "dark:text-gray-300 dark:hover:bg-gray-700"
                  }
                `}
              >
                <List className="w-4 h-4" />
                <span>History</span>
              </Link>
            </li>

            {/* Stats Tab */}
            <li>
              <Link
                href="/stats"
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                  ${
                    isActive("/stats")
                      ? "bg-black text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  }
                  ${
                    isActive("/stats")
                      ? "dark:bg-gray-800 dark:text-white"
                      : "dark:text-gray-300 dark:hover:bg-gray-700"
                  }
                `}
              >
                <BarChart2 className="w-4 h-4" />
                <span>Stats</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
</header>
);
} 

