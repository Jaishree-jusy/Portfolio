/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14B8A6',
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        accent: {
          DEFAULT: '#14B8A6',
          light: '#2DD4BF',
          dark: '#0D9488',
        },
        surface: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          border: '#E5E7EB',
        },
        ink: {
          DEFAULT: '#111827',
          soft: '#4B5563',
          faint: '#6B7280',
        },
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(17, 24, 39, 0.04), 0 4px 12px -2px rgba(17, 24, 39, 0.06)',
        card: '0 1px 2px rgba(17, 24, 39, 0.03), 0 6px 18px -6px rgba(17, 24, 39, 0.08)',
        lift: '0 10px 26px -8px rgba(20, 184, 166, 0.22)',
        glow: '0 0 0 1px rgba(20, 184, 166, 0.12), 0 6px 20px -4px rgba(20, 184, 166, 0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        content: '1140px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(229,231,235,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,231,235,0.6) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
