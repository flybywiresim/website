'use strict';

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const reactComponentsSafeList = require('@flybywiresim/react-components/build/usedCSSClasses.json');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@flybywiresim/react-components/build/usedCSSClasses.json',
    ],
    safelist: [...reactComponentsSafeList],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: { sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans] },
        extend: {
            height: { 200: '50rem', ...defaultTheme.height },
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
                colors,
                'quasi-white': '#FAFAFA',
                'cyan': {
                    DEFAULT: 'var(--color-brand-cyan-main)',
                    dark: 'var(--color-brand-cyan-dark)',
                    light: 'var(--color-brand-cyan-ight)',
                },
                'navy': {
                    DEFAULT: 'var(--color-brand-navy-main)',
                    dark: 'var(--color-brand-navy-dark)',
                    light: 'var(--color-brand-navy-light)',
                },
                'utility': {
                    'red': 'var(--color-utility-red)',
                    'green': 'var(--color-utility-green)',
                    'orange': 'var(--color-utility-orange)',
                    'amber': 'var(--color-utility-amber)',
                    'blue': 'var(--color-utility-blue)',
                    'purple': 'var(--color-utility-purple)',
                    'pink': 'var(--color-utility-pink)',
                    'salmon': 'var(--color-utility-salmon)',
                    'grey': 'var(--color-utility-grey)',
                    'dark-grey': 'var(--color-utility-dark-grey)',
                    'grey-blue': 'var(--color-utility-grey-blue)',
                },
                'blue': { 'dark-contrast': 'hsl(216,32%,17%)' },
                'midnight': { DEFAULT: 'hsl(218, 42%, 10%)' },
                'discord': {
                    DEFAULT: 'hsl(235,86%,65%)',
                    dark: 'hsl(235,60%,54%)',
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            zIndex: { '-10': '-10' },
            typography: {
                '2xl': {
                    css: {
                        'maxWidth': '73ch',
                        'h1, h2, h3, h4, h5, h6': { fontWeight: 'bold', color: 'hsl(0,0%,9%)', marginBottom: '1.2rem' },
                        'h1': { fontSize: '4rem' },
                        'h2': { fontSize: '3rem' },
                        'h3': { fontSize: '2rem' },
                        'p': { color: 'hsl(0,0%,20%)' },
                        'a': { color: 'hsl(192,80%,40%)' },
                        'iframe': { width: '100%', height: '60vh' },
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
