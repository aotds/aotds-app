module.exports = {
    staticDirs: [ '../static' ],
  "stories": [
//    "../src/**/*.stories.mdx",
    "../src/**/*.stories.svelte",
    "../src/**/stories.svelte"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "core": {
// seems to be b0rked
//    "builder": "storybook-builder-vite"
  },
  "svelteOptions": {
    "preprocess": import("../svelte.config.js").preprocess
  },
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find( (r) => r.loader && r.loader.includes('svelte-loader'))
    svelteLoader.options.preprocess = require('svelte-preprocess')()
    return config
  },
}
