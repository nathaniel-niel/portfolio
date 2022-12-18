/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'magenta-red': {
          DEFAULT: '#A64178'
        },
        'pinkish-purple': {
          DEFAULT: '#834EA6'
        },
        'cyan-blue': {
          DEFAULT: '#173F73'
        },
        'bluis-cyan': {
          DEFAULT: '#1B7EA6'
        }, 
        'cyan': {
          DEFAULT: '#1FBFBF'
        }
      },
    },
  },
  plugins: [],
}