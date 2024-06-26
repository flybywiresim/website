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
        extend: {
            colors: {
                'quasi-white': '#FAFAFA',
                'grey': { medium: '#EDEDED' },
                'cyan': {
                    DEFAULT: '#00E0FE',
                    medium: '#00C4F5',
                    dark: 'var(--color-brand-cyan-dark)',
                },
                'dodger': { light: '#00BBFF' },
                'navy': {
                    DEFAULT: '#171E2C',
                    light: '#1F2A3C',
                    lightest: '#273347',
                    lighter: '#222c3d',
                    dark: '#0E131B',
                },
                'red': {
                    DEFAULT: '#FC3A3A',
                    dark: '#F70404',
                    darker: '#E40303',
                    darkest: '#D10303',
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
        fontFamily: {
          display: ['Manrope', ...defaultTheme.fontFamily.sans],
          body: ['Inter', ...defaultTheme.fontFamily.sans],
          mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        },
    },
    plugins: [
        require('@flybywiresim/tailwind-config'),
        require('@tailwindcss/typography'),
    ],
};
