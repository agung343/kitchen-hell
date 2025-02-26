/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grapefruit: "#EC4545",
        tomato: "#f65138",
        "weird-green": "#0de182",
        "light-greenish-green": "#61f4ab",
        "blue-primary": "#3e44eb",
        "blue-secondary": "#514ae7",
        pumpkin: "#e97613"
      },
      boxShadow: {
        menu: "0 2px 4px rgba(0,0,0,0.5)"
      },
      fontFamily: {
        monomakh: "Monomakh, serif",
        roboto: "Roboto, serif"
      }
    },
  },
  plugins: [],
};
