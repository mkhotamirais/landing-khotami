/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        nunitoSans: ["Nunito Sans", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        sourceSans3: ["Source Sans 3", "sans-serif"],
        bitter: ["Bitter", "serif"],
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        PTSans: ["PT Sans", "sans-serif"],
        PTSerif: ["PT Serif", "serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        roboto: ["Roboto", "sans-serif"],
        loto: ["Loto", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
