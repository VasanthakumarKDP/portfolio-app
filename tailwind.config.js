/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "#e50913",
        tertiary: "#555",
        light: "#333",
      },
    },
  },
  plugins: [],
};
