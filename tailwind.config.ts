import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./samebook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      colors: {
        background: {
          primary: "#1C1C1D",
          secondary: "#252728",
          selected: "#243A52",
          selected_hover: "#3A4E64",
        },
        button: {
          primary: "#3B3D3E",
          hover: "#4F5152",
          active: "#5e5e5f",
        },
        link: {
          primary: "#579EF0",
        },
        input: {
          background: "#333334",
          hover: "#484849",
          active: "#5e5e5f",
        },
        text: {
          primary: "#AFB2B7",
          selected: "#59A4FA",
        },
        divider: "#65686C",
        divider_secondary: "#303233",
      },
    },
  },
  plugins: [],
} satisfies Config;
