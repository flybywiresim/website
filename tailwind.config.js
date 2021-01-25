module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: () => ({
                '120': '30rem',
                '144': '36rem'
            }),
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-1deg)' },
                    '50%': { transform: 'rotate(2.5deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 15s ease-in-out infinite',
            },
            backgroundColor: ['active'],
            textColor: ['active'],
            colors: {
                blue: {
                    'DEFAULT': '#6399AE',
                    'light': '#00C2CB',
                    'light-contrast': '#009da6',
                    'medium': '#006166',
                    'dark': '#1B2434',
                    'darker': '#141E30'
                },
            },
            boxShadow: {
                'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
