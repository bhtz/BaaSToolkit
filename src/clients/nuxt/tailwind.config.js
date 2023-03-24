import colors from "tailwindcss/colors";
import preset from "./tailwind.preset.json";

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets:[preset],
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}