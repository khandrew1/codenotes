/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        codenotes: {
          white: "#FFFFFF",
          "green-100": "#297373",
          darkgrey: "#252525",
          lightgrey: "#CFCFCF",
          offwhite: "#F3F5F6",
        },
      },
    },
  },
  plugins: [],
};
