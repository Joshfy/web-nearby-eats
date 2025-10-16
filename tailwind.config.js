module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-out',
        fadeSlideUp: 'fadeSlideUp 1s ease-out both',
        fadeSlideUpDelayed: 'fadeSlideUp 1s ease-out 0.3s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeSlideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
