// app/layout.tsx
"use client";

import "./globals.css";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import { MoodProvider } from "@/components/MoodContext";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <MoodProvider>
            <main className="min-h-screen max-w-4xl mx-auto px-6 py-8">
              {children}
            </main>
          </MoodProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
