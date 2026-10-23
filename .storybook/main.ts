import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    // Storybook is served from /design-sandbox/storybook/ on Pages, not the app's base.
    config.base = './'
    return config
  },
}
export default config
