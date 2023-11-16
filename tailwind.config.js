/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/pages/**/*.tsx",
    "./src/component/**/*.tsx",
    "./src/context/**/*.tsx",
    "./src/App.tsx",
    "./src/index.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fca5a5",
      },
    },
  },
  plugins: [],
};
