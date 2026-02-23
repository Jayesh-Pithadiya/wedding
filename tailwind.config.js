/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wedding-gold': '#D4AF37',
        'wedding-maroon': '#800000',
        'wedding-cream': '#FFFDD0',
        'wedding-pink': '#FFC0CB',
      },
      fontFamily: {
        'traditional': ['"Playfair Display"', 'serif'],
        'sanskrit': ['"Cinzel"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
