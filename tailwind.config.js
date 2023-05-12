/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        'drop-shadow-md': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        blue: {
          400: '#1C7ED6'
        },
        grey: {
          400: '#25262B',
          300: '#373A40'
        }
      },
    }
  },
  plugins: [],
}
