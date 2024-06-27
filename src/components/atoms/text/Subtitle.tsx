import React from 'react'
import { Typography } from '@mui/material'
import'@fontsource/dm-mono'
import { SxProps, Theme } from '@mui/system'
import { Property } from 'csstype'


interface SubtitleProps {
	text: string
	type?: 'subtitle1' | 'subtitle2'
	align?: Property.TextAlign
	highlighted?: boolean
	highlightColor?: string
	sx?: SxProps<Theme>
}

const DefaultSubtitle: React.FC<SubtitleProps> = (props) => {
	const { text, type = 'subtitle1', align, sx } = props
	return (
		<Typography
			variant={type}
			sx={{
				fontFamily: 'Dm mono, monospace',
				textTransform: 'uppercase',
				fontWeight: 'bold',
				textAlign: align,
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
