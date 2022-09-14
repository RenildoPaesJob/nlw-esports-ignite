/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(95.90deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 90.57%)'

      }
    },
  },
  plugins: [],
}
