'use strict';

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            display: ['Manrope', ...defaultTheme.fontFamily.sans],
            body: ['Inter', ...defaultTheme.fontFamily.sans],
            mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                'dark': '#0E131B',
                'discord': '#5865F2',
                'light': '#FAFAFA',

                'primary': '#00E0FE',
                'primary-accent': '#00CBFE',
                'secondary': '#171E2C',
                'secondary-accent-light': '#1F2A3D',
                'secondary-accent-dark': '#0E131B',
            },
            opacity: { 3: '3%' },
        },
    },
    plugins: [
        require('@flybywiresim/tailwind-config'),
        require('@tailwindcss/typography'),
    ],
};
