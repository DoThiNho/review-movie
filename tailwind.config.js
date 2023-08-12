/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signIn-right': "url('/assets/images/bg-right-signin.png')",
        'signIn-left': "url('/assets/images/bg-left-signin.png')",
        'overlay': "url('/assets/images/bg-overlay.png')"
      },
      colors: {
        primary: "#FF8036",
        white: "#fff",
        black: "#000"
      },
      backgroundColor: {
        primary: "#FF8036",
        white: "#fff",
        black: "#000",
        overlay: "#1F293D"
      }
    },
  },
  plugins: [],
}
