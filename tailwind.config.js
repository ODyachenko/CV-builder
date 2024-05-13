/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1a91f0',
        'priamry-gray': '#828ba2',
      },
    },
  },
  plugins: [],
};
