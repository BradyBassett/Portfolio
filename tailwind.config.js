module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat-Medium',
        ],
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'typography': 'font-size',
        'height': 'height',
        'shadow': 'box-shadow',
        'color': 'color',
        'filter': 'filter',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
      padding: {
        '1/16': '6.25%',
        '1/10': '10%',
        '1/8': '12.5%',
        '3/16': '18.75%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '5/16': '31.25%',
        '3/8': '37.5%',
        '2/5': '40%',
        '7/16': '43.75%',
        '1/2': '50%',
        '9/16': '56.25%',
        '3/5': '60%',
        '5/8': '62.5%',
        '11/16': '68.75',
        '7/10': '70%',
        '3/4': '75%',
        '4/5': '80%',
        '13/16': '81.25%',
        '7/8': '87.5',
        '9/10': '90%',
        '15/16': '93.75',
        'full': '100%'
      },
      margin: {
        '1/16': '6.25%',
        '1/10': '10%',
        '1/8': '12.5%',
        '3/16': '18.75%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '5/16': '31.25%',
        '3/8': '37.5%',
        '2/5': '40%',
        '7/16': '43.75%',
        '1/2': '50%',
        '9/16': '56.25%',
        '3/5': '60%',
        '5/8': '62.5%',
        '11/16': '68.75',
        '7/10': '70%',
        '3/4': '75%',
        '4/5': '80%',
        '13/16': '81.25%',
        '7/8': '87.5',
        '9/10': '90%',
        '15/16': '93.75',
        'full': '100%'
      },
      inset: {
        '1/16': '6.25%',
        '1/10': '10%',
        '1/8': '12.5%',
        '3/16': '18.75%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '5/16': '31.25%',
        '3/8': '37.5%',
        '2/5': '40%',
        '7/16': '43.75%',
        '1/2': '50%',
        '9/16': '56.25%',
        '3/5': '60%',
        '5/8': '62.5%',
        '11/16': '68.75',
        '7/10': '70%',
        '3/4': '75%',
        '4/5': '80%',
        '13/16': '81.25%',
        '7/8': '87.5',
        '9/10': '90%',
        '15/16': '93.75',
        'full': '100%'
      },
      keyframes: {
        'shine': {
          '0%, 100%': {
            color: '#34D399',
            filter: 'drop-shadow(0 0 0.15rem rgba(227, 251, 223, 0.75))',
          },
          '50%': {
            color: '#6EE7B7',
            filter: 'drop-shadow(0 0 0.25rem rgba(227, 251, 223, 0.75))',
          }
        }
      },
      animation: {
        'shine': 'shine 10s ease-in-out infinite'
      },
      backgroundImage: theme => ({
        'wave-1': 'url("./utils/images/wave-1.svg")',
        'wave-2': 'url("./utils/images/wave-2.svg")',
        'wave-3': 'url("./utils/images/wave-3.svg")',
        'layered-waves-1': 'url("./utils/images/layered-waves-1.svg")',
        'layered-waves-2': 'url("./utils/images/layered-waves-2.svg")',
        'layered-waves-3': 'url("./utils/images/layered-waves-3.svg")',
      }),
      zIndex: {
      '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      margin: ['hover'],
      inset: ['hover'],
      fontSize: ['hover'],
      height: ['hover'],
      animation: ['hover'],
      transform: ['hover'],
      grayscale: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
