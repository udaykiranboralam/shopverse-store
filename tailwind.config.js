/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#f0f7f0", 100: "#dcefdd", 200: "#b0dcb3", 300: "#7cc381", 400: "#4aa850", 500: "#2f8f37", 600: "#2f7d32", 700: "#256726", 800: "#1d521e", 900: "#163d17" },
        gold: "#d4a017",
        dark: { 50: "#f8f9fa", 100: "#f1f3f5", 200: "#e9ecef", 300: "#dee2e6", 400: "#ced4da", 500: "#adb5bd", 600: "#868e96", 700: "#495057", 800: "#343a40", 900: "#212529" },
      },
    },
  },
  plugins: [],
};
