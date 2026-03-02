/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          purple: '#4A148C',
          emerald: '#1B5E20',
          blue: '#1A237E',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFF4CC',
          rose: '#B76E79',
        },
        cream: '#FFF8E7',
      },
    },
  },
  plugins: [],
};
