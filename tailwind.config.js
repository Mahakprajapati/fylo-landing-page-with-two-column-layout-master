/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        'Ral':["Raleway",'sans-serif'],
        'open':["Open Sans", 'sans-serif'],
      },
      colors:{
       'Dark-blue':'rgb(48, 101, 248)',
       'light-blue':'rgb(102 103 182 / 4%)',
       'cyan':'hsl(170, 45%, 43%)',
       'bright-blue':'hsl(224, 93%, 58%)',
       'light-gray-blue':' hsl(240, 75%, 98%)',
       'destraured-blue':'hsl(238, 22%, 44%)',
       'more-dark-blue':' hsl(243, 87%, 12%)'
      },
      screens:{
        'media357':'357px',
        'media766':'766px',
        'media803':'803px'
      },
      boxShadow:{
        'box':'0 0 0.5em 0.5em #00000012',
      },
      gridRow:{
        'row':'1',
      },
      gridColumn:{
        'column':'2'
      }
    },
  },
  plugins: [],
}

