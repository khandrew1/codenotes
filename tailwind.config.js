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
          white: "#ffffff",
          "green-100": "#297373",
          darkgrey: "#252525",
          offwhite: "#f3f5f6",
        },
      },
    },
  },
  plugins: [],
};
