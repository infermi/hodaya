/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            screens: {
                'xs': '390px'
            },
            fontFamily: {
                'varela': 'Varela Round',
                'sans': 'Open Sans',
                'heebo': 'Heebo'
            },
            colors: {
                'primary': '#7149C6',
                'home': '#f3f0fa',
            },

            variants: {
                animation: ["motion-safe"]
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in forwards "
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: 'translate(0, 30px)' },
                    "100%": { opacity: 1 }
                }
            }
        },

    },
    plugins: [require("tailwindcss-animation-delay")],
}