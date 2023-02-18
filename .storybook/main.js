const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
    ],
    config.resolve.alias = {
      ...config.resolve.alias,
      '@Assets': path.resolve(__dirname, '../src/assets'),
      '@Component': path.resolve(__dirname, '../src/component'),
      '@Hooks': path.resolve(__dirname, '../src/hooks'),
      '@Redux': path.resolve(__dirname, '../src/redux'),
      '@Services': path.resolve(__dirname, '../src/services'),
      '@Const': path.resolve(__dirname, '../src/const'),
      '@Utils': path.resolve(__dirname, '../src/utils'),
      '@Pages': path.resolve(__dirname, '../src/pages'),
    };

    return config;
  }
}