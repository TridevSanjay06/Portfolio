/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sofia)', 'var(--font-inter)', 'Arial', 'sans-serif'],
        sofia: ['var(--font-sofia)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        // Light mode palette (Mastercard-inspired, warm cream)
        canvas: '#F3F0EE',
        lifted: '#FCFBFA',
        ink: '#141413',
        charcoal: '#262627',
        slate: '#696969',
        dust: '#D1CDC7',
        // Accent — deep violet (tech/AI vibe)
        accent: {
          DEFAULT: '#CF4500',
          light: '#F37338',
          dark: '#9A3A0A',
        },
        // Dark mode surfaces
        dark: {
          canvas: '#171513',
          lifted: '#1F1D1A',
          card: '#24211E',
          border: '#3A342F',
        },
      },
      letterSpacing: {
        tightest: '-0.02em',
        eyebrow: '0.04em',
      },
      borderRadius: {
        pill: '999px',
        stadium: '40px',
        satellite: '50%',
      },
      boxShadow: {
        nav: '0px 4px 24px 0px rgba(0,0,0,0.06)',
        card: '0px 24px 48px 0px rgba(0,0,0,0.08)',
        glow: '0px 24px 48px 0px rgba(0,0,0,0.08)',
        'glow-lg': '0px 40px 72px 0px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
