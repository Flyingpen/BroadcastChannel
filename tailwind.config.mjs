import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const keyframes = {
  aurora: {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
}

keyframes['float-card'] = {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-4px)' },
}

const animation = {
  aurora: 'aurora 16s ease infinite',
}

animation['float-card'] = 'float-card 6s ease-in-out infinite'

const tailwindConfig = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffe7d6',
          200: '#ffc8a8',
          300: '#ffa473',
          400: '#ff7d3f',
          500: '#ff5f1f',
          600: '#f94a11',
          700: '#c7340d',
          800: '#9b2d14',
          900: '#7d2817',
        },
        surface: {
          50: '#f6f7fb',
          100: '#ebeef9',
          200: '#d6dcf4',
          300: '#b3bde8',
          800: '#15172b',
          900: '#111224',
          950: '#090a13',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 95, 31, 0.25)',
        soft: '0 18px 60px -30px rgba(17, 18, 36, 0.8)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes,
      animation,
    },
  },
  plugins: [forms, typography],
}

export default tailwindConfig
