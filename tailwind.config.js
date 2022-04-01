module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '300': '300px',
      },
      minHeight: {
        '650': '650px',
      },
      width: {
        '300': '300px',
      },
    },
  },
  plugins: [],
}
