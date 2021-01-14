module.exports = {
  addons: ['@storybook/addon-actions/register'],
    stories: [
        '../src/components/**/*stories.js',
        '../src/components/**/stories/index.js',
    ]
}
