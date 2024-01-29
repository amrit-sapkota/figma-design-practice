/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        neutralGray: "#4D4D4D",
        textGray: "#717171",
        brandPrimary: "#4CAF4F",
        neutralWhite: "#FFFFFF",
        neutralSilver: "#F5F7FA",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
