// https://github.com/michael-ciniawsky/postcss-load-config

export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {}, // https://github.com/postcss/autoprefixer
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}), // https://tailwindcss.com/docs/optimizing-for-production
  },
};
