/* eslint-disable global-require */

'use strict';

const reactComponentsSafeList = require('@flybywiresim/react-components/build/usedCSSClasses.json');

module.exports = {
    mode: 'jit',
    purge: {
        options: { safelist: [...reactComponentsSafeList] },
        content: [
            './src/pages/**/*.{js,ts,jsx,tsx}',
            './src/components/**/*.{js,ts,jsx,tsx}',
            './node_modules/@flybywiresim/react-components/build/usedCSSClasses.json',
        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: { sans: ['Nunito Sans'] },
        extend: {
            height: { 200: '50rem' },
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
                midnight: { DEFAULT: 'hsl(218, 42%, 10%)' },
                discord: {
                    DEFAULT: 'hsl(227,58%,65%)',
                    dark: 'hsl(227,32%,49%)',
                },
                orangutanOrange: { DEFAULT: 'hsl(31, 96%, 53%)' },
            },
            zIndex: { '-10': '-10' },
            typography: {
                '2xl': {
                    css: {
                        'maxWidth': '73ch',
                        'h1, h2, h3, h4, h5, h6': { marginBottom: '1.2rem' },
                        'h1': {
                            color: 'hsl(0,0%,9%)',
                            fontWeight: '700',
                            fontSize: '4rem',
                        },
                        'h2': {
                            color: 'hsl(0,0%,17%)',
                            fontSize: '2.5rem',
                        },
                        'h3': {
                            color: 'hsl(0,0%,27%)',
                            paddingTop: '1.5rem',
                            fontSize: '2rem',
                        },
                        'p': { paddingTop: '.8rem' },
                        'a': { color: 'hsl(192,80%,40%)' },
                    },
                },
            },
        },
    },
    plugins: [
        require('@flybywiresim/tailwind-config'),
        require('@tailwindcss/typography'),
    ],
};
