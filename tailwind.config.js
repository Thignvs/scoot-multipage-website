/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['"Lexend Deca"', 'sans-serif'],
      'headings': ['"Space Mono"', 'monospace'],
    },
    colors:{
      transparent: 'transparent',
      'Yellow': '#FCB72B',
      'DimGrey': '#939CAA',
      'DarkNavy': '#495567',
      'LightGrey': '#E5ECF4',
      'LightYellow': '#FFF4DF',
      'Snow': '#F2F5F9',
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/home-hero-mobile.jpg')",
        'hero-bg-tablet': "url('/src/assets/images/home-hero-tablet.jpg')",
        'hero-bg-desktop': "url('/src/assets/images/home-hero-desktop.jpg')",
        'hero-about-bg': "url('/src/assets/images/about-hero-mobile.jpg')",
        'hero-about-bg-tablet': "url('/src/assets/images/about-hero-tablet.jpg')",
        'hero-about-bg-desktop': "url('/src/assets/images/about-hero-desktop.jpg')",

        'hero-careers-bg': "url('/src/assets/images/careers-location-hero-mobile.jpg')",
        'hero-careers-bg-tablet': "url('/src/assets/images/careers-locations-hero-tablet.jpg')",
        'hero-careers-bg-desktop': "url('/src/assets/images/careers-locations-hero-desktop.jpg')",

        'bg-pattern-semicircle': "url('/src/assets/patterns/semi-circles.svg')",
      }
    },
  },
  plugins: [],
}