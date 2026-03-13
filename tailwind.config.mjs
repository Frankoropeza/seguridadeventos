/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a2540',
        secondary: '#dc2626',
        accent: '#6b7280',
        dark: '#0a0f1a',
        light: '#f9fafb',
        gold: '#f59e0b',
        'primary-light': '#243154',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
