/** @type {import('tailwindcss').Config} */

import starlightPlugin from "@astrojs/starlight-tailwind";

const accent = {
    200: "#b8cbe0",
    600: "#396ea9",
    900: "#1d344d",
    950: "#172535",
};
const gray = {
    100: "#f5f6f8",
    200: "#eceef2",
    300: "#c0c2c7",
    400: "#888b96",
    500: "#545861",
    700: "#353841",
    800: "#24272f",
    900: "#17181c",
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: { accent, gray },
        },
    },
    plugins: [starlightPlugin()],
};
