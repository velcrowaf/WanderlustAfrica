/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{js,ts,jsx,tsx}',
    './sanity.config.{js,ts}',
    './node_modules/@sanity/ui/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}