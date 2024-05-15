/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'fhd': '1080px'
      },
      width: {
        'fhd': '1920px'
      },
      maxHeight: ({ theme }) => ({
        ...theme('height')
      }),
      minHeight: ({ theme }) => ({
        ...theme('height')
      }),
      maxWidth: ({ theme }) => ({
        ...theme('width')
      }),
      minWidth: ({ theme }) => ({
        ...theme('width')
      }),
    },
  },
  plugins: [],
}

