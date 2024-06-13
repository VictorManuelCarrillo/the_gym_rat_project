import React from 'react'
import { Typography } from '@mui/material'
import'@fontsource/dm-mono'
import { SxProps, Theme } from '@mui/system'

interface CaptionTextProps {
	text: string
	highlighted?: boolean
	highlightColor?: string
	sx?: SxProps<Theme>
}

const DefaultCaptionText: React.FC<CaptionTextProps> = (props) => {
	const { text, sx } = props
	return (
		<Typography
			variant={'caption'}
			sx={{
				fontFamily: 'Dm mono, monospace',
        fontWeight: 'bold',
				...sx,
			}}
		>
			{text}
		</Typography>
	)
}

export const CaptionText: React.FC<CaptionTextProps> = (props) => {
	const { highlighted, highlightColor, sx } = props
	const additionalStyles =
		highlighted && highlightColor ? { bgcolor: highlightColor, px: 1 } : {}
	return (
		<DefaultCaptionText
			{...props}
			sx={{ ...additionalStyles, ...sx }}
		/>
	)
}
