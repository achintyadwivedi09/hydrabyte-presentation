/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#2563eb',
            800: '#1e40af',
            900: '#0c4a6e',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            500: '#22c55e',
            600: '#16a34a',
            800: '#166534',
            900: '#14532d',
          },
          earth: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            500: '#8c6b5d',
            900: '#4a3b32',
          },
          alert: {
            50: '#fef2f2',
            200: '#fecaca',
            500: '#ef4444',
            600: '#dc2626',
            900: '#7f1d1d',
          }
        }
      }
    },
  },
  plugins: [],
}
