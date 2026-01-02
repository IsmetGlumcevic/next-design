import type { Config } from "tailwindcss";
import preset from "aleta-ui/tailwind-preset";

const config: Config = {
  presets: [preset],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/aleta-ui/dist/**/*.{js,mjs}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
