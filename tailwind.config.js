/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "480px",
        md: "480px",
        lg: "640px",
        xl: "640px",
        "2xl": "640x",
      },
    },
    extend: {
      minHeight: {
        120: "35rem",
      },
    },
  },
  plugins: [],
};

