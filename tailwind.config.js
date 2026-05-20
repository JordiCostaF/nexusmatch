export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#d946a6",
          400: "#ec4899",
        },
        accent: {
          300: "#00d9ff",
        },
        highlight: {
          300: "#ff6b35",
        },
      },
    },
  },
}
