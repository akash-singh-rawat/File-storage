/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};
module.exports = {
  plugins: {
    '@tailwindcss/postcss7-compat': {},
    autoprefixer: {},
  },
};
export default config;
