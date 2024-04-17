import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import daisyUI from "daisyui";

export default {
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.storybook/**/*.{html,js,ts}", // Storybook 설정 파일 포함
  ],
  theme: {
    extend: {},
  },
  // darkMode: "media", // https://tailwindcss.com/docs/dark-mode
  darkMode: ["class", '[data-mode="dark"]'], // https://storybook.js.org/recipes/tailwindcss
  // https://tailwindcss.com/docs/plugins#official-plugins
  // https://daisyui.com/docs/layout-and-typography/#-1 (typography 다음 반드시 daisyUI를 추가)
  plugins: [typography, daisyUI, aspectRatio, containerQueries],

  daisyui: {
    // https://daisyui.com/docs/config/
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
