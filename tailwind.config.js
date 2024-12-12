module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 1.5s infinite',
        pulse: 'pulse 2s infinite',
        rotate: 'rotate 6s linear infinite',
        'corner-glow': 'cornerGlow 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 0.9 },
          '50%': { opacity: 0.6 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        cornerGlow: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
};
