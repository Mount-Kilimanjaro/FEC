module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50': '50px',
        '60' : '60px',
        '75': '75px',
        '150' : '150px',
        '300': '300px',
        
      },
      minHeight: {
        '650': '650px',
      },
      width: {
        '25' : '25px',
        '40' : '40px',
        '50' : '50px',
        '75': '75px',
        '150' : '150px',
        '300': '300px',

      },
      colors: {
        'primary' : '#999fa5',
        'secondary' : '#bbbfc3'
      },
    },
  },
  plugins: [],
}


      //   'primary' : '#999fa5',
      //   'secondary' : '#bbbfc3'