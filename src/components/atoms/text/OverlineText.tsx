import React from 'react'
import { Typography } from '@mui/material'
import'@fontsource/dm-mono'
import { SxProps, Theme } from '@mui/system'

interface OverlineTextProps {
	text: string
	highlighted?: boolean
	highlightColor?: string
	sx?: SxProps<Theme>
}

const DefaultOverlineText: React.FC<OverlineTextProps> = (props) => {
	const { text, sx } = props
	return (
		<Typography
			variant={'overline'}
			sx={{
				fontFamily: 'Dm mono, monospace',
				...sx,
			}}
		>
			{text}
		</Typography>
	)
}

export const OverlineText: React.FC<OverlineTextProps> = (props) => {
	const { highlighted, highlightColor, sx } = props
	const additionalStyles =
		highlighted && highlightColor ? { bgcolor: highlightColor, px: 1 } : {}
	return (
		<DefaultOverlineText
			{...props}
			sx={{ ...additionalStyles, ...sx }}
		/>
	)
}
