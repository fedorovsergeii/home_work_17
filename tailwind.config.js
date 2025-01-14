/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.html"],
  theme: {
    extend: {
        colors: {
          primary: '#F0145A',
          'primary-red': '#EF8080',
          'primary-grad': '#EF8080',
          'blue': '#323264',
           'grey': '#B3B3BA',
           'indigo': '#643E72',
          'grey-footer': '#F5F5FA',
          'active': '#24A3FF',
          'bottom-line':'#CACADB',
          'bottom-line2':'#E7E7F2',
          'separator':'#E6E6F0',
          'header-dark': '#F5F5FA33',
          'hillel': '#1C4280',
          'wanna': '#143646',
          'tap': '#F48B30',
          '3d': '#9E4DC3',
          'orangear': '#FD9339',
          'adtel': '#E2E2E4',
          'click': '#C71C36',
          'eco': '#DCF3F9',
          'infra': '#EAEAEA',
          'city': '#282240',
          'art': '#1D4568',

        },
        screens: {
          'fx': '1440px',
          '3xl': '1920px'
        },
      letterSpacing: {
        '13px': '13px',
        '63px': '63px',
      },
    },
  },
  plugins: [],
}

