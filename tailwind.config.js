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
        },
        extend: {
            colors: {
                'primary': '#00E0FE',
                'primary-accent': '#00CBFE',
                'secondary': '#171E2C',
                'secondary-accent': '#1F2A3D',
                'light': '#FAFAFA',
                'dark': '#0E131B',
            },
        },
    },
    plugins: [
        require('@flybywiresim/tailwind-config'),
        require('@tailwindcss/typography'),
    ],
};
