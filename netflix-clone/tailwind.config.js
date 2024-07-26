/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode:"class",
  theme: {
    screens: {lg: {max:"1440px"}, md: {max: "1050px"},sm: {max:"550px"}, xs:{max:"360px"}},
    value:{lg:1440,md:760}
  
  },
  plugins: [],
}

