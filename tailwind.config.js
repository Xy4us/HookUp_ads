module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bg-color)",
        subHeading: "var(--sub-heading)",
        highlighter: "var(--highlighter)",
        cardColor: "var(--gradient-card)",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
