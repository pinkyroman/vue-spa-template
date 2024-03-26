import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "media", // https://tailwindcss.com/docs/dark-mode
  plugins: [],
} satisfies Config;
