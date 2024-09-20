/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        EditorialNewRegular: ['EditorialNewRegular'],
        EditorialNewLight: ['EditorialNewLight'],
        EditorialNewUltrabold: ['EditorialNewUltrabold'],
        EditorialNewUltralight: ['EditorialNewUltralight'],
        EditorialNewUltrabolditalic: ['EditorialNewUltraboldItalic'],
        EditorialNewUltralightitalic: ['EditorialNewUltralightItalic'],
      },
    },
  },
  plugins: [],
};