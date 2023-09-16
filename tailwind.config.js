/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'orange': '#FF8C38',
      'bg-orange': '#FFF7ED',
      'ac-orange': '#FFCC8D',
      'txt-orange': '#FFEAD0',
      'rugged': '#115E59',
      'simple': '#E17654',
      'luxury': '#161616',
      'black': '#161616',
      'ft-black': '#252525',
      'ft-grey': '#AAAAAA',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        "104": "30rem",
      },
      borderRadius: {
        "sl": "0.3125rem"
      },
    },
    // FF8C38
  },
  plugins: [],
}

