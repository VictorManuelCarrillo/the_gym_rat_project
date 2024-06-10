import { createTheme } from '@mui/material/styles'

export const primaryDarkTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#4ef00',
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
		background: {
			default: '#e3e3e3',
		},
	},
})
