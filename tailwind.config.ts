import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        poppinsBlack: ['"Poppins Black"', "sans-serif"],
        poppinsBold: ['"Poppins Bold"', "sans-serif"],
        poppinsLight: ['"Poppins Light"', "sans-serif"],
        poppinsMedium: ['"Poppins Medium"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
