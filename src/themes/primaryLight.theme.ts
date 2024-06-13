import { createTheme } from '@mui/material/styles'

export const primaryLightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#EEC718',
		},
		warning: {
			main: '#FF6600',
		},
		info: {
			main: '#9635AC',
		},
		success: {
			main: '#63CF48',
		},
		background: {
			default: '#ADB6BC',
			paper: '#C8D4D7',
		},
		highlight: {
			yellow: 'yellow',
		},
	},
	shape: {
		borderRadius: 8
	}
})
