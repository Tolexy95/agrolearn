/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('https://d502jbuhuh9wk.cloudfront.net/orgData/60f9b0470cf27e44401b85db/pages/assets/images/R0EBNshutterstock1766175371.jpg')",
      
        'ripped-paper-header': "url('https://www.agrohive.co/assets/images/shapes/ripped-paper-header-1.png')",
      },

    }
  },
  plugins: [require("daisyui")],
}

