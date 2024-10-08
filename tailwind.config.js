module.exports = {
  content: ['./index.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'arial', 'sans'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
