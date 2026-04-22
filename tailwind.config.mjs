/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta extraída del logo
        teal: {
          50: '#f0f5f4',
          100: '#d9e7e4',
          200: '#b4cfc9',
          300: '#8ab5ad',
          400: '#679991',
          500: '#4a7d75',
          600: '#3d6861', // Verde teal principal del logo
          700: '#2f5049',
          800: '#243b36',
          900: '#1a2a27',
          950: '#0e1614',
        },
        wheat: {
          50: '#fdf9ef',
          100: '#fbf1d5',
          200: '#f6e0a6',
          300: '#f0c96c',
          400: '#e9b141', // Dorado espiga del logo
          500: '#d99828',
          600: '#b87920',
          700: '#935b1d',
          800: '#79481f',
          900: '#653c1d',
        },
        cream: {
          50: '#fbfaf7',
          100: '#f5f2ea',
          200: '#ebe5d4',
        },
        ink: {
          900: '#0f1412',
          800: '#1a211e',
          700: '#2a332f',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
