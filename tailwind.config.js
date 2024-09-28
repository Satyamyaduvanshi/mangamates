/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        // Add custom backdrop blur values if needed
        md: '10px', // You can customize this value
        lg: '15px', // Add more sizes as needed
      },
      // Optional: Add more custom colors, spacing, etc.
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Include this if you need forms plugin
    // Add more plugins here if needed
  ],
}
