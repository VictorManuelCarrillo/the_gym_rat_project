import React from "react"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { primaryLightTheme } from "@/themes/primaryLight.theme"

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <ThemeProvider theme={primaryLightTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}