'use strict';

const reactComponentsSafeList = require('@flybywiresim/react-components/build/usedCSSClasses.json');

module.exports = {
    mode: 'jit',
    purge: {
        options: { safelist: [...reactComponentsSafeList] },
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}',
            './node_modules/@flybywiresim/react-components/build/usedCSSClasses.json',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: { sans: ['Nunito Sans'] },
        extend: {
            screens: {
                '3xl': '1792px',
                '4xl': '2048px',
            },
            spacing: {
                128: '32rem',
                160: '40rem',
                192: '48rem',
                224: '56rem',
                256: '64rem',
                288: '72rem',
                320: '80rem',
                352: '88rem',
                384: '96rem',
            },
            colors: {
                blue: { 'dark-contrast': 'hsl(216,32%,17%)' },
                discord: { DEFAULT: 'hsl(227,58%,65%)' },
            },
        },
    },
    // eslint-disable-next-line global-require
    plugins: [require('@flybywiresim/tailwind-config')],
};
