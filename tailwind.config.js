module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    animation: {
      fade: "fadeIn .5s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    fontFamily: {
      macho: ["macho", "Tahoma", "Verdana", "sans-serif"],
      sans: [
        "source-sans-3",
        "Trebuchet MS",
        "Helvetica",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      mono: [
        "interstate-mono",
        "Consolas",
        "Monaco",
        "ui-monospace",
        "SFMono-Regular",
        "monospace",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
