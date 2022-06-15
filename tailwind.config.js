module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    screens: {
      vs: '320px',
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        vs: '2px',
        xs: '2px',
        sm: '10px',
        lg: '3px',
        xl: '3px',
      },
    },
    extend: {
      colors: {
        'primary-color': '#212121',
        'primary-color-hover': '#292929',
        'primary-color-hover2': '#f90',
      },
      fontFamily: {
        Markscript: ['Markscript'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
