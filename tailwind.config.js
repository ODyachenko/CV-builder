/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1a91f0',
        'secondary-blue': '#157aca',
        'priamry-gray': '#828ba2',
        'field-bg': '#eff2f9',
        'dark-gray': '#656e83',
      },
      aspectRatio: {
        A4: '1 / 1.3',
      },
      spacing: {
        'list-width': 'calc(100% - 40px)',
      },
    },
  },
  plugins: [],
};
