module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        gray: { 50: "#fbfcfc", 100: "#f2f3f6", 900: "#171717" },
        blue_gray: { 800: "#344053", 900: "#1d2838" },
        deep_orange: { 400: "#fd8439" },
        pink: { 100: "#ffafd1" },
        white: { A700_19: "#ffffff19", A700: "#ffffff" },
        pink_A200: "#f7418f",
        indigo_50: "#e4e6eb",
      },
      boxShadow: {},
      fontFamily: { urbanist: "Urbanist", inter: "Inter", vastshadow: "Vast Shadow" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
