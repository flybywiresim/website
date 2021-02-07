module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'gray-light': '#D4DADC'
            }
        }
    },
    plugins: [require('@flybywiresim/tailwind-config')],
};
