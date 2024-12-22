export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#e2b57a',
      },
      animation: {
        spin: "spin 2s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
}
