/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  darkMode: 'class',

  theme: {
    fontFamily: {
      noto: 'Noto Sans JP, sans-serif',
      satisfy: 'Satisfy',
      inter: 'Inter, sans-serif'
    },
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px'
      }
    }
  },
  variants: {
    extend: {
      transform: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
