/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF4444",
          hover: "#E03333",
        },
        navy: {
          DEFAULT: "#1A237E",
          light: "#283593",
        },
        success: "#00C851",
      },
    },
  },
  plugins: [],
}
