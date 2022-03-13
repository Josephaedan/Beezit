module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        beez: "url('/src/img/bees.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
