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
        fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
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
                    DEFAULT: 'rgb(var(--color-brand-cyan-main) / <alpha-value>)',
                    dark: 'rgb(var(--color-brand-cyan-dark) / <alpha-value>)',
                    light: 'rgb(var(--color-brand-cyan-light) / <alpha-value>)',
                },
                'navy': {
                    DEFAULT: 'rgb(var(--color-brand-navy-main) / <alpha-value>)',
                    dark: 'rgb(var(--color-brand-navy-dark) / <alpha-value>)',
                    light: 'rgb(var(--color-brand-navy-light) / <alpha-value>)',
                },
                'utility': {
                    'red': 'rgb(var(--color-utility-red) / <alpha-value>)',
                    'green': 'rgb(var(--color-utility-green) / <alpha-value>)',
                    'light-green': 'rgb(var(--color-utility-light-green) / <alpha-value>)',
                    'orange': 'rgb(var(--color-utility-orange) / <alpha-value>)',
                    'yellow': 'rgb(var(--color-utility-yellow) / <alpha-value>)',
                    'amber': 'rgb(var(--color-utility-amber) / <alpha-value>)',
                    'blue': 'rgb(var(--color-utility-blue) / <alpha-value>)',
                    'purple': 'rgb(var(--color-utility-purple) / <alpha-value>)',
                    'pink': 'rgb(var(--color-utility-pink) / <alpha-value>)',
                    'salmon': 'rgb(var(--color-utility-salmon) / <alpha-value>)',
                    'grey': 'rgb(var(--color-utility-grey) / <alpha-value>)',
                    'dark-grey': 'rgb(var(--color-utility-dark-grey) / <alpha-value>)',
                    'grey-blue': 'rgb(var(--color-utility-grey-blue) / <alpha-value>)',
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
