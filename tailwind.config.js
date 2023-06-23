/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
},
    extend: {
      colors:{
        'dark':'#0B0B0B',
        'purple':'#734B7D',
        'dark-purple':'#51046B',
        //  #000614
      },
      height:{
        'lgcover':'690px',
        'smcover':'510px',
      }
    },
  },
  plugins: [],
}

