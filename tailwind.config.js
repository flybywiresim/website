module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#6399AE',
          light: '#00C2CB',
          dark: '#141E30'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
