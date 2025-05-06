/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // class bazlı tema kontrolü
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "gilroy": ['Gilroy', 'sans-serif'],
      },
      animation: {
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backgroundColor: {
        "dark-theme": "#1d1d1d",
      }



    },
  },

  plugins: [],
}

