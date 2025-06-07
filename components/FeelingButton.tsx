'use client';

import React from 'react';
import classNames from 'classnames';

interface FeelingButtonProps {
  emoji: string;
  mood: string;
  gradient: string;
  selected: boolean;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
}

const sizeClasses = {
  small: 'text-xl py-1 px-2',
  medium: 'text-2xl py-2 px-4',
  large: 'text-3xl py-3 px-6',
};

const FeelingButton: React.FC<FeelingButtonProps> = ({
  emoji,
  mood,
  gradient,
  selected,
  onClick,
  size = 'medium',
}) => {
  return (
<button
  onClick={onClick}
  aria-pressed={selected}
  aria-label={`Select mood: ${mood}`}
  className={classNames(
    'flex flex-col items-center justify-center px-4 py-6 rounded-lg shadow-md transition-transform',
    'w-[168px] h-[99px]',
    selected
      ? `text-white bg-gradient-to-br ${gradient}`
      : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-105'
  )}
>
  <span className="text-4xl mb-2">{emoji}</span>
  <span className="text-sm font-medium text-black">{mood}</span> {/* ← black text always */}
</button>

  );
};

export default FeelingButton;
