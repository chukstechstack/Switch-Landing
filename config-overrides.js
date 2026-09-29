/**
 * react-app-rewired override.
 *
 * Why this file exists:
 *
 * react-scripts (CRA 5) hard-codes `config: false` into its postcss-loader
 * options -- see node_modules/react-scripts/config/webpack.config.js. That flag
 * explicitly disables PostCSS config-file discovery, so a project-root
 * `postcss.config.js` is never read. Tailwind's PostCSS plugin therefore never
 * runs and zero utilities are emitted.
 *
 * CRA 5 also predates Tailwind v4: its built-in Tailwind branch only checks for
 * `tailwind.config.js` and injects the v3 `tailwindcss` plugin, which v4 no
 * longer ships as a PostCSS plugin.
 *
 * This override unblocks the normal mechanism instead of hard-coding plugins:
 * it removes the blocking `config` flag and CRA's inline plugin list, so
 * postcss-loader falls back to reading `postcss.config.js` exactly as Tailwind
 * v4 documents.
 */

const POSTCSS_LOADER_NAME = "postcss-loader";

const isPostcssLoaderEntry = (entry) => {
  const loader = typeof entry === "string" ? entry : entry && entry.loader;
  return typeof loader === "string" && loader.includes(POSTCSS_LOADER_NAME);
};

const unlockConfigFileDiscovery = (entry) => {
  entry.options = entry.options || {};

  const postcssOptions = entry.options.postcssOptions || {};

  // Drop the flag that blocks postcss.config.js lookup.
  delete postcssOptions.config;

  // Drop CRA's inline plugins (postcss-flexbugs-fixes, postcss-preset-env,
  // postcss-normalize). They would be appended *after* the config file's
  // plugins and mangle Tailwind v4's modern output (oklch(), @property, @layer).
  // Tailwind v4 does its own vendor prefixing via Lightning CSS.
  delete postcssOptions.plugins;

  entry.options.postcssOptions = postcssOptions;
};

const patchUseArray = (use) => {
  let patchedCount = 0;

  use.forEach((entry) => {
    if (typeof entry === "string") return;
    if (!isPostcssLoaderEntry(entry)) return;
    unlockConfigFileDiscovery(entry);
    patchedCount += 1;
  });

  return patchedCount;
};

const patchRules = (rules) => {
  let patchedCount = 0;

  if (!Array.isArray(rules)) return patchedCount;

  rules.forEach((rule) => {
    if (!rule || typeof rule !== "object") return;

    if (Array.isArray(rule.use)) {
      patchedCount += patchUseArray(rule.use);
    }
    if (Array.isArray(rule.oneOf)) {
      patchedCount += patchRules(rule.oneOf);
    }
    if (Array.isArray(rule.rules)) {
      patchedCount += patchRules(rule.rules);
    }
  });

  return patchedCount;
};

module.exports = {
  webpack: (config) => {
    const patchedCount = config.module ? patchRules(config.module.rules) : 0;

    if (patchedCount === 0) {
      throw new Error(
        "config-overrides.js: no postcss-loader found in the webpack config. " +
          "react-scripts internals have changed and Tailwind would silently compile nothing."
      );
    }

    return config;
  },
};
