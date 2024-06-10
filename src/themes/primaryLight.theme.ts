import { createTheme } from '@mui/material/styles'

export const primaryLightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#d50000',
		},
		secondary: {
			main: '#2196f3',
		},
		warning: {
			main: '#f4511e',
		},
		info: {
			main: '#9c27b0',
		},
		success: {
			main: '#00e676',
		},
	},
})