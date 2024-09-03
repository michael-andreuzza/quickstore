/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fonts: {
        sans: ['Open Sans', 'system-ui'],
        serif: ['Merriweather', 'Georgia'],
        monospace: ['Monaco', 'Consolas'],
    },
  },
  plugins: [],
};
