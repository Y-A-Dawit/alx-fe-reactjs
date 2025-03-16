/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Not used in Tailwind v3+
  darkMode: "class", // Options: 'media' | 'class' | false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
