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
        '590': '590px',
      },
      width: {
        '300': '300px',
      },
    },
  },
  plugins: [],
}
