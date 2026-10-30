/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6faf8',
        surface: '#ffffff',
        tint: '#e7f3ef',
        ink: {
          DEFAULT: '#102a2c',
          muted: '#4a6164',
          soft: '#a9c0bc', // muted text on the dark ink panels
        },
        line: {
          DEFAULT: '#d4e2de', // dividers and card outlines
          strong: '#6f8986', // form control borders (3:1 on white)
        },
        action: {
          DEFAULT: '#0e7066',
          strong: '#0a5750',
          soft: '#d5ece6',
        },
        coral: {
          DEFAULT: '#e0603f', // decoration only, never body text
          ink: '#a33a1f',
          soft: '#fdebe5',
        },
        danger: '#b42318',
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
