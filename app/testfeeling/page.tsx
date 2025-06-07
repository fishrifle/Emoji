'use client';

import React, { useEffect, useState } from 'react';
import FeelingButton from '@/components/FeelingButton';
import Header from '@/components/Header';

const moods = [
  {
    emoji: '😄',
    mood: 'Excellent',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    emoji: '😊',
    mood: 'Good',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    emoji: '😐',
    mood: 'Neutral',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    emoji: '😔',
    mood: 'Sad',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    emoji: '😢',
    mood: 'Very Sad',
    gradient: 'from-red-400 to-pink-500',
  },
];

export default function TestFeeling() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
        <h2 className="text-2xl font-bold text-white">Test Feeling Buttons</h2>
        <div className="flex flex-wrap gap-4">
          {moods.map(({ emoji, mood, gradient }) => (
            <FeelingButton
              key={mood}
              emoji={emoji}
              mood={mood}
              gradient={gradient}
              selected={selectedMood === mood}
              onClick={() => setSelectedMood(mood)}
              size="large"
            />
          ))}
        </div>
        {selectedMood && (
          <p className="mt-4 text-white text-lg">
            You selected: <strong>{selectedMood}</strong>
          </p>
        )}
      </div>
    </>
  );
}
