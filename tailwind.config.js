/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik"],
      },
      backgroundImage: {
        desktop: "url('src/assets/pattern-bg-desktop.png')",
        mobile: "url('src/assets/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
