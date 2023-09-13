/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik"],
      },
      backgroundImage: {
        desktop: "url('public/pattern-bg-desktop.png')",
        mobile: "url('public/assets/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
