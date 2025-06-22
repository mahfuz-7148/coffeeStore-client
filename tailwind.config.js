/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {

            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                bounceIn: 'bounceIn 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                bounceIn: {
                    '0%': { transform: 'scale(0.8)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
            },

            colors: {
                primary: '#2563eb',
                secondary: '#4b5563',
                background: '#f3f4f6',
            },

            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
        },
    },
    plugins: [],
};