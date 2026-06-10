/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary: Deep slate-navy (based on rgb(30, 41, 59) = #1E293B)
        navy: {
          50: '#f1f3f6',
          100: '#dce1e9',
          200: '#b9c3d3',
          300: '#8d9bb3',
          400: '#647590',
          500: '#475569',
          600: '#364152',
          700: '#2b3544',
          800: '#1E293B',
          900: '#151d2b',
          950: '#0c1219',
        },
        // Accent: Warm gold  
        gold: {
          50: '#fdf8ef',
          100: '#faefd6',
          200: '#f5dfad',
          300: '#edc978',
          400: '#D4A843',
          500: '#C49A3C',
          600: '#A67C2E',
          700: '#8a6424',
          800: '#6e4f1d',
          900: '#5a4119',
        },
        // Warm white/cream backgrounds
        cream: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F0EA',
        },
        slate: {
          900: '#151d2b',
        },
        blue: {
          500: '#647590',
          600: '#364152',
          700: '#2b3544',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'playfair-display': ['var(--font-playfair-display)', 'serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['2rem', { lineHeight: '1.3125', letterSpacing: '-0.01em' }],
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '5xl': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '6xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(30, 41, 59, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(30, 41, 59, 0.15)',
        'gold': '0 4px 24px -4px rgba(196, 154, 60, 0.25)',
        'nav': '0 2px 16px -2px rgba(30, 41, 59, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #151d2b 0%, #1E293B 50%, #2b3544 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #C49A3C 0%, #D4A843 50%, #edc978 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
