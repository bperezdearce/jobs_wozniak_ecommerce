import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamondbold: ["AppleGaramond-Bold"],
        garamondregular: ["AppleGaramond"],
        sfpro: ["SFPro"],
        myriadpro: ["MyriadPro"],
        myriadprolight: ["MyriadProLight"]

      },
      colors: {
        "background-color": "#F5F5F7",
        "secondary-background": "#161619",
        "text-color": "#1D1D20",
        "highlight-color": "#1977ED",
      },
    },
  },
  plugins: [],
};
export default config;