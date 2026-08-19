/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Neutrals
        paper: '#FFFFFF',
        surface: '#F7F8FB',
        surface2: '#EFF2F7',
        border: '#E4E8F0',
        // Deep navy — primary text / dark anchor
        navy: {
          DEFAULT: '#0B1730',
          50: '#EEF1F6',
          100: '#D6DCE8',
          400: '#3B4A6B',
          600: '#1B2B4D',
          700: '#121F3B',
          900: '#0B1730',
        },
        slate: {
          DEFAULT: '#5B6478',
          400: '#7C8598',
          500: '#5B6478',
          600: '#454D5F',
        },
        // Accent system
        violet: {
          DEFAULT: '#6D28D9',
          400: '#8B5CF6',
          500: '#6D28D9',
          600: '#5B21B6',
        },
        electric: {
          DEFAULT: '#2F5FED',
          400: '#4C74F0',
          500: '#2F5FED',
          600: '#2447C4',
        },
        cyan: {
          DEFAULT: '#14B8C9',
          400: '#3FCBD8',
          500: '#14B8C9',
        },
        emerald: {
          DEFAULT: '#12A76B',
          400: '#2FC384',
          500: '#12A76B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        shell: '1400px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,23,48,0.04), 0 8px 24px -8px rgba(11,23,48,0.08)',
        lift: '0 12px 40px -12px rgba(11,23,48,0.18)',
        glass: '0 1px 0 rgba(255,255,255,0.6) inset, 0 8px 30px -10px rgba(11,23,48,0.15)',
      },
      backgroundImage: {
        'journey-gradient': 'linear-gradient(90deg, #6D28D9 0%, #2F5FED 38%, #14B8C9 70%, #12A76B 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
