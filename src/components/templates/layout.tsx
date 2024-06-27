import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { primaryLightTheme } from '@/themes/primaryLight.theme';
import { primaryDarkTheme } from '@/themes/primaryDark.theme';
import { NavBar } from '@/components/organisms/navbar/NavBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? primaryDarkTheme : primaryLightTheme}>
      <CssBaseline />
      <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {children}
    </ThemeProvider>
  );
};
