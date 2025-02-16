/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./responsive.html','./navBar.html'],
  theme: {
    screens: {
      'small':'200px',
      'xs':'300px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '760px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

