import React from 'react'
import { Typography } from '@mui/material'
import '@fontsource/dm-mono'
import { SxProps, Theme } from '@mui/system'

interface BodyTextProps {
	text: string
	type?: 'body1' | 'body2'
	color?: 'white' | 'black'
	highlighted?: boolean
	highlightColor?: string
	sx?: SxProps<Theme>
}

const DefaultBodyText: React.FC<BodyTextProps> = (props) => {
	const { text, type = 'body1', color = 'white', sx } = props
	return (
		<Typography
			variant={type}
			color={color}
			sx={{
				fontFamily: 'Dm mono, monospace',
				fontWeight: 'bold',
        display: 'inline-block',
				...sx,
			}}
		>
			{text}
		</Typography>
	)
}

export const BodyText: React.FC<BodyTextProps> = (props) => {
	const { highlighted, highlightColor, sx } = props
	const additionalStyles =
		highlighted && highlightColor ? { bgcolor: highlightColor, px: 1 } : {}
	return (
		<DefaultBodyText
			{...props}
			sx={{ ...additionalStyles, ...sx }}
		/>
	)
}
