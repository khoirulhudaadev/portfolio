module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards'
      },
      // Custom delay utility
      spacing: {
        '1000ms': '1s'
      }
    },
  },
  plugins: [],
}