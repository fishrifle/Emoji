// app/stats/page.tsx
"use client";

import React from "react";
import Statistics from "@/components/Statistics";

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg max-w-4xl mx-auto">
        <Statistics />
      </div>
    </div>
  );
}
