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
        heroImage: "url('https://d502jbuhuh9wk.cloudfront.net/orgData/60f9b0470cf27e44401b85db/pages/assets/images/R0EBNshutterstock1766175371.jpg')",
        paperImage:"url('https://www.agrohive.co/assets/images/shapes/ripped-paper-base-2.png')",
        farm:"url('./src/assets/farm.jpg')",
        featureBg:"url('https://www.agrohive.co/assets/images/icons/about-2-bg-1.png')"
      },
    }
  },
  plugins: [require("daisyui")],
}

