/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto"],
        loveFont: ["Caveat"],
      },
      colors: {
        textColor: "#FF7315", //主要字體顏色
        backgroundColor: "#232020", //背影顏色
        lightColor: "#F4F4F4", //文字淺色
        secondaryColor: "#3A3535", //次要字體顏色
      },
    },
  },
  plugins: [],
};
