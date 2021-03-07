module.exports = {
    purge: {
        enabled: false,
        content: [
            './src/**/*.{js,jsx,ts,tsx}',
            './public/index.html'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    'dark-contrast': '#1d2838'
                },
                discord: {
                    'DEFAULT': '#7289DA'
                }
            },
            spacing: {
                '110': '26rem',
                '120': '30rem',
                '128': '32rem',
                '144': '36rem'
            }
        }
    },
    plugins: [require('@flybywiresim/tailwind-config')],
};
