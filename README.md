# Mood Tracker

A modern, responsive web application for tracking daily emotions and analyzing mood patterns over time. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Mood Tracking**: Select from 5 emotional states with intuitive emoji interface
- **Optional Notes**: Add context to your mood entries with rich text notes
- **History View**: Browse your mood history with visual timeline
- **Statistics Dashboard**: Analyze mood patterns with animated progress bars
- **Data Persistence**: All data saved locally with automatic backup

### User Experience
- **Dark/Light Theme**: Toggle between themes with smooth transitions (defaults to dark mode)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Intuitive Navigation**: Easy switching between Tracker, History, and Stats sections
- **Real-time Updates**: Statistics and history update instantly when new entries are added
- **Accessibility**: Full keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd mood-tracker

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Building for Production
```bash
# Create optimized production build
npm run build

# Serve production build locally
npm run serve
```

## 📱 Usage Guide

### Tracking Your Mood
1. **Select Emotion**: Choose from 5 mood options:
   - 😄 Excellent (Green gradient)
   - 😊 Good (Blue gradient)
   - 😐 Neutral (Yellow gradient)
   - 😔 Sad (Orange gradient)
   - 😢 Very Sad (Red gradient)

2. **Add Context** (Optional): Write notes about your mood in the textarea (500 character limit)

3. **Save Entry**: Click "Save Mood Entry" to record your mood

### Viewing History
- Browse your recent mood entries (last 7 by default)
- Each entry shows emoji avatar, date/time, mood name, and notes
- Entries are sorted by newest first
- Empty state guidance when no entries exist

### Analyzing Statistics
- View breakdown of mood frequencies
- Animated progress bars show relative percentages
- Real-time updates as you add new entries
- Color-coded by mood type for easy visualization

### Theme Customization
- Toggle between light and dark themes using the sun/moon icon in header
- Theme preference automatically saved and restored
- Smooth 300ms transitions between themes
- All components update consistently

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── Header/              # App title, branding, theme toggle
│   ├── Navigation/          # Section switching (Tracker/History/Stats)
│   ├── MoodTracker/         # Mood selection and note input
│   ├── MoodHistory/         # Historical mood entries display
│   ├── MoodStatistics/      # Analytics and progress bars
│   └── shared/              # Reusable components
│       ├── MoodButton/      # Emoji mood selection buttons
│       ├── ProgressBar/     # Animated statistics bars
│       └── HistoryEntry/    # Individual mood history items
├── contexts/
│   ├── ThemeContext/        # Dark/light mode state management
│   └── MoodContext/         # Mood data and localStorage integration
├── utils/
│   ├── dateHelpers/         # Date formatting utilities
│   ├── moodHelpers/         # Mood data processing
│   └── storageHelpers/      # localStorage wrapper with error handling
└── types/
    └── index.ts             # TypeScript interface definitions
```

### Key Technologies
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS v4**: Utility-first styling with dark mode support
- **Context API**: State management for theme and mood data
- **localStorage**: Client-side data persistence
- **Lucide React**: Consistent icon library

### State Management
- **Theme Context**: Manages dark/light mode preference
- **Mood Context**: Handles mood data, CRUD operations, and localStorage sync
- **Component State**: Local state for forms, UI interactions, and animations

## 🎨 Design System

### Color Palette
- **Excellent**: `from-green-400 to-emerald-500`
- **Good**: `from-blue-400 to-cyan-500`
- **Neutral**: `from-yellow-400 to-orange-500`
- **Sad**: `from-orange-400 to-red-500`
- **Very Sad**: `from-red-400 to-pink-500`

### Typography
- **Headers**: Gradient text (purple to pink)
- **Body**: Theme-aware text colors
- **Consistent**: 14px-16px base sizes with proper hierarchy

### Responsive Breakpoints
- **Mobile**: < 640px (2-column mood grid)
- **Tablet**: 640px-1024px (3-column mood grid)
- **Desktop**: > 1024px (5-column mood grid)

## 🔧 Configuration

### Environment Variables
```bash
# Optional: Custom app configuration
REACT_APP_MAX_HISTORY_ENTRIES=50
REACT_APP_MAX_NOTE_LENGTH=500
REACT_APP_ENABLE_ANALYTICS=false
```

### localStorage Structure
```typescript
interface MoodEntry {
  id: string;
  emoji: string;
  mood: string;
  date: string;
  note?: string;
}

interface AppStorage {
  theme: 'light' | 'dark';
  moodEntries: MoodEntry[];
  version: string;
}
```

## ✅ Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+

## 🧪 Testing

### Manual Testing Scenarios
1. **Happy Path**: Select mood → Add note → Save → View history → Check stats
2. **Theme Switching**: Toggle between light/dark modes during various operations
3. **Navigation**: Switch between all sections with data persistence
4. **Edge Cases**: Empty states, localStorage limits, browser refresh scenarios

### Responsive Testing
- Test on various screen sizes (320px to 1920px width)
- Verify touch interactions on mobile devices
- Ensure no horizontal scrolling on any breakpoint

## 🚀 Performance

### Optimization Features
- **Component Memoization**: Prevents unnecessary re-renders
- **Efficient Animations**: GPU-accelerated transitions
- **Lazy Loading**: Code splitting for optimal bundle size
- **Memory Management**: Proper cleanup of event listeners and timers

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Bundle Size**: < 500KB gzipped
- **Memory Usage**: Stable during extended use

## ♿ Accessibility

### Features Implemented
- **Keyboard Navigation**: Full app usable with keyboard only
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliance in both themes
- **Touch Targets**: Minimum 44px for mobile interactions

### ARIA Labels
- Mood buttons include descriptive labels
- Progress bars have proper value announcements
- Navigation state changes are announced
- Form validation messages are accessible

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Follow existing code style and conventions
4. Test thoroughly on multiple devices
5. Submit pull request with clear description

### Code Style
- **TypeScript**: Strict mode enabled, proper typing required
- **React**: Functional components with hooks
- **Tailwind**: Utility classes over custom CSS
- **Naming**: Descriptive component and variable names

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Design inspiration from modern mood tracking applications
- Color gradients optimized for accessibility and visual appeal

## 📞 Support

For questions, issues, or feature requests:
1. Check existing [GitHub Issues](issues)
2. Create new issue with detailed description
3. Include browser/device information for bugs

---

**Built with ❤️ for better mental health awareness and daily mood tracking**




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
