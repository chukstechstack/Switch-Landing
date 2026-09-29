/**
 * PostCSS configuration.
 *
 * CommonJS on purpose: package.json has no `"type": "module"`, so a `.js` file
 * here is parsed as CommonJS. An ESM `export default` in this file throws
 * "SyntaxError: Unexpected token 'export'" as soon as it is actually read.
 *
 * This file IS read, because config-overrides.js removes the hard-coded
 * `config: false` that react-scripts injects into its postcss-loader options.
 *
 * `@tailwindcss/postcss` is Tailwind v4's PostCSS plugin. Vendor prefixing is
 * handled internally by Tailwind v4 (Lightning CSS), so autoprefixer is not
 * listed here.
 */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
