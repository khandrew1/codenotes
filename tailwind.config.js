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
          "black-100": "#252525",
          "blue-100": "#B2BFF9",
          "blue-200": "#6380FB",
          "green-100": "#297373",
          offwhite: "#fafafa",
          lightgrey: "#e4e5f1",
          grey: "#d2d3db",
          darkgrey: "#9394A5",
          ooze: "#484B6A",
          lightooze: "#6D7199",
        },
      },
    },
  },
  plugins: [],
};
