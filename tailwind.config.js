/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Custom colors for better dark mode support
      colors: {
        // Light theme colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        // Dark theme specific colors
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          card: '#334155',
          text: '#f8fafc',
          'text-secondary': '#cbd5e1',
          border: '#475569',
        }
      },
      // Custom animations for theme transitions
      animation: {
        'theme-transition': 'theme-fade 0.3s ease-in-out',
      },
      keyframes: {
        'theme-fade': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
