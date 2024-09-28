/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // This enables dark mode using a 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        md: '10px', // You can customize this value
        lg: '15px', // Add more sizes as needed
      },
      colors: {
        // Customize sky blue color (optional, adjust to your preference)
        skyblue: {
          50: '#ebf8ff',
          100: '#ceedff',
          200: '#a0e1ff',
          300: '#70d4ff',
          400: '#40c8ff',
          500: '#00baff',
          600: '#0096d9',
          700: '#0071b4',
          800: '#00528f',
          900: '#00336a',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Include forms plugin if you are using forms
    // You can add more plugins here if needed
  ],
}
