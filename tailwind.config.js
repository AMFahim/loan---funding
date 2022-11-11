/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ["Poppins, sans-serif"]
      }
    },
    colors:({colors}) => ({
      ...colors,
      "primary": "#E73C3E",
      "advantage-1": "#F5F4EF"
    })
  },
  plugins: [],
}
