/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

