export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffdf3",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontSize: {
        heading1: ["48px", { lineHeight: "56px" }],
        heading2: ["40px", { lineHeight: "48px" }],
        heading3: ["32px", { lineHeight: "40px" }],
        heading4: ["24px", { lineHeight: "32px" }],
        heading5: ["20px", { lineHeight: "28px" }],
        heading6: ["18px", { lineHeight: "24px" }],
        bodyLarge: ["18px", { lineHeight: "28px" }],
        bodyMedium: ["16px", { lineHeight: "24px" }],
        bodySmall: ["14px", { lineHeight: "20px" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
