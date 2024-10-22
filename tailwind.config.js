/** @type {import('tailwindcss').Config} */
export default {
    content: ['./_src/**/*.{html,njk}'],
    theme: {      
      extend: {
        colors: {
          "untangled" : "rgb(216, 223, 215)",
          "untangled-dark" : "rgb(45, 77, 68)",
        },
      },
    },
    plugins: [],
  }