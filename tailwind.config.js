/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'poker-green': {
          DEFAULT: '#0d5c3d',
          dark: '#094a31',
          light: '#0f6d49',
        },
        'poker-gold': {
          DEFAULT: '#c9a227',
          light: '#d4b33d',
        },
        'bg-warm': '#faf9f7',
        'bg-warm-subtle': '#f5f4f2',
        'surface': {
          DEFAULT: '#ffffff',
          elevated: '#ffffff',
          muted: '#fafaf9',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'card-title': ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 24px -4px rgba(13, 92, 61, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px -8px rgba(13, 92, 61, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        'phone': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'phone-hover': '0 35px 60px -15px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'btn': '0 1px 2px 0 rgba(13, 92, 61, 0.05)',
        'btn-hover': '0 4px 12px -2px rgba(13, 92, 61, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
