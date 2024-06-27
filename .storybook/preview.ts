import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { themes } from '../src/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    themes: {
      light: themes.primaryLight,
      dark: themes.primaryDark,
    },
    defaultTheme: 'light',
  })],
  globalTypes: {
    theme: {
      name: 'Theme',
      title: 'Theme',
      description: 'Theme for your components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'light', right: '☀️', title: 'Light mode' },
          { value: 'dark', right: '🌙', title: 'Dark mode' },
        ],
      },
    },
  }
};

export default preview;
