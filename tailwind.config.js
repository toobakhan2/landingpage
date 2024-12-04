/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}", // All files in components folder
    "./src/App.{js,jsx,ts,tsx}",// Include components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        
      },
      colors: {
        'light-green': '#a4da22', // Your first color
        'dark-green': '#056525',   // Your second color
      },
    },
  },
  plugins: [],
}

