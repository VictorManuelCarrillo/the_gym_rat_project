import React from 'react'
import { Typography } from '@mui/material'
import '@fontsource/anton'
import { SxProps, Theme } from '@mui/system'

interface TitleProps {
	text: string
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	color?: 'white' | 'black'
	highlighted?: boolean
	highlightColor?: string
	sx?: SxProps<Theme>
}

const DefaultTitle: React.FC<TitleProps> = (props) => {
	const { text, type = 'h1', color = 'white', sx } = props
	return (
		<Typography
			variant={type}
			color={color}
			sx={{
				fontFamily: 'anton, sans-serif',
				textTransform: 'uppercase',
				fontWeight: 'bold',
				...sx,
			}}
		>
			{text}
		</Typography>
	)
}

export const Title: React.FC<TitleProps> = (props) => {
	const { highlighted, highlightColor, sx } = props
	const additionalStyles =
		highlighted && highlightColor ? { bgcolor: highlightColor, px: 4 } : {}
	return (
		<DefaultTitle
			{...props}
			sx={{ ...additionalStyles, ...sx }}
		/>
	)
}
