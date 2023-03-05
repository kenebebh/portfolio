/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        gradientText:
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
        gradientBar:
          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
        colorBg: "#040C18",
        colorFooter: "#031B34",
        colorBlog: "#042c54",
        colorText: "#81AFDD",
        colorSubtext: "#FF8A71",
        gradientLight: "rgba(0, 40, 83, 1)",
        gradientDark: "rgba(4, 12, 24, 1)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at 15% 80%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        courgette: ["Courgette", "sans-serif"],
      },
    },
  },
  plugins: [],
}
