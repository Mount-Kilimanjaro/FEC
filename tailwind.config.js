module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '35': '35px',
        '50': '50px',
        '60' : '60px',
        '75': '75px',
        '150' : '150px',
        '300': '300px',
        '900': '900px',
        
      },
      minHeight: {
        '650': '650px',
      },
      maxHeight: {
        '1000': '1000px',
      },
      width: {
        '25' : '25px',
        '40' : '40px',
        '50' : '50px',
        '75': '75px',
        '150' : '150px',
        '300': '300px',
        '1200': '1200px',

      },
      colors: {
        'primary' : '#999fa5',
        'secondary' : '#bbbfc3'
      },
      zIndex: {
        '50': '50',
        '100': '100',
      },
      minWidth: {
        '600': '600px',
        '1280': '1280px',
      },
      maxWidth: {
        '700': '1000px',
        '70': '900px',
        '1280': '1280px',
      }
    },
  },
  plugins: [],
}


      //   'primary' : '#999fa5',
      //   'secondary' : '#bbbfc3'