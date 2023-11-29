module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f6f6',
          100: '#c7c9c9',
          200: '#ededed ',
          300: '#333537',
          400:"#8d8e8f "
        },
      },
    },
  },
  plugins: [],
};
