import React from 'react'
import { Typography } from '@mui/material'
import'@fontsource/dm-mono'
import { SxProps, Theme } from '@mui/system'

interface SubtitleProps {
	text: string
	type?: 'subtitle1' | 'subtitle2'
	color?: 'white' | 'black'
	highlighted?: boolean
	highlightColor?: string
	sx?: SxProps<Theme>
}

const DefaultSubtitle: React.FC<SubtitleProps> = (props) => {
	const { text, type = 'subtitle1', color = 'white', sx } = props
	return (
		<Typography
			variant={type}
			color={color}
			sx={{
				fontFamily: 'Dm mono, monospace',
				textTransform: 'uppercase',
				fontWeight: 'bold',
				...sx,
			}}
		>
			{text}
		</Typography>
	)
}

export const Subtitle: React.FC<SubtitleProps> = (props) => {
	const { highlighted, highlightColor, sx } = props
	const additionalStyles =
		highlighted && highlightColor ? { bgcolor: highlightColor, px: 4 } : {}
	return (
		<DefaultSubtitle
			{...props}
			sx={{ ...additionalStyles, ...sx }}
		/>
	)
}
