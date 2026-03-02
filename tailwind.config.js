/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html',
        './about/*.html',
        './services/*.html',
        './contact/*.html',
        './news/*.html',
        './news/news-one/*.html',
        './news/news-two/*.html',
        './assets/js/*.js',
    ],
    safelist: [
        // Used dynamically by JavaScript for mobile menu toggle
        'translate-x-0',
        'translate-x-full',
        'max-h-0',
        'max-h-screen',
        'opacity-0',
        'opacity-100',
        'rotate-180',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#0ea5e9',   // Sky blue
                secondary: '#0f172a', // Slate 900
                accent: '#f59e0b',    // Amber
            },
        },
    },
    plugins: [],
}
