/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      backgroundImage: (theme) => ({
        screens: "url('/path-to/image.png')",
      }),

      colors: {
        charcoal: {
          50: "#ECEEEC",
          100: "#D7DAD7",
          200: "#B0B5B0",
          300: "#889188",
          400: "#626A62",
          500: "#3E433E",
          600: "#313531",
          700: "#252825",
          800: "#191A19",
          900: "#0C0D0C",
        },
        tomato: {
          50: "#FFEEEB",
          100: "#FFE1DC",
          200: "#FEBFB3",
          300: "#FEA090",
          400: "#FD7E68",
          500: "#FD6043",
          600: "#FC2803",
          700: "#C01E02",
          800: "#7E1401",
          900: "#420A01",
        },
        negroni: {
          50: "#FDFAF7",
          100: "#FBF5EF",
          200: "#F6E8DA",
          300: "#F2DECA",
          400: "#EDD1B5",
          500: "#E9C7A5",
          600: "#D99E63",
          700: "#C1782F",
          800: "#7F4F1F",
          900: "#422910",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
