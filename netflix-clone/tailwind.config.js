/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode:"class",
  theme: {
    screens: {lg: {max:"1440px"}, md: {max: "1050px"},sm: {max:"768px"}, xs:{max:"480px"}}, extend: {
      },
  },
  plugins: [],
}

