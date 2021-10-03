module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1000px" },
            // => @media (max-width: 1000px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "500px" },
            // => @media (max-width: 500px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
