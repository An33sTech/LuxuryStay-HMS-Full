/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        "custom-1": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        "custom-2": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    },
  },
  plugins: [],
}

