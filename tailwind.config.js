/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      screens: {
        lg: "850px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "2500px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
