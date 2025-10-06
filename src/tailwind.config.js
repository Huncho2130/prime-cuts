/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'premium-gold': '#D4AF37',
        'premium-burgundy': '#800020', 
        'premium-charcoal': '#36454F',
        'premium-cream': '#F5F5F5'
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}