/** @type {import('tailwindcss').Config} */
import { fontFamily } from "./tailwindExtend";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily,
    },
  },
  plugins: [],
};
