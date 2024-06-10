'use client'
import Link from 'next/link'
import React from 'react'
import { Button, useTheme } from '@mui/material'

interface ButtonProps {
	text: string
	href?: string
	newTab?: boolean | undefined
	color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success'
	onClick?: () => void
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	disabled?: boolean
}

export const DefaultButton: React.FC<ButtonProps> = (props) => {
	const {
		text,
		color = 'primary',
		onClick,
		startIcon,
		endIcon,
		disabled,
	} = props

	const theme = useTheme()

	const colorMapping: Record<
		'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success',
		string
	> = {
		inherit: theme.palette.grey[500],
		primary: theme.palette.primary.main,
		secondary: theme.palette.secondary.main,
		warning: theme.palette.warning.main,
		info: theme.palette.info.main,
		success: theme.palette.success.main,
	}

	const mainColor = colorMapping[color]

	return (
		<Button
			variant='outlined'
			color={color}
			onClick={onClick}
			startIcon={startIcon}
			endIcon={endIcon}
			disabled={disabled ? true : false}
			size='small'
			sx={{
				px: '1.5em',
				fontWeight: 'bold',
				borderRadius: '2.5em',
				border: 'solid 0.2em',
				'&:hover': {
					fontWeight: 'bold',
					border: 'solid 0.2em',
					borderColor: mainColor,
					bgcolor: mainColor,
					color: '#000000',
				},
			}}
		>
			{text}
		</Button>
	)
}

export const OutlinedButton: React.FC<ButtonProps> = (props) => {
	const { href, newTab } = props
	return href ? (
		<Link
			href={href}
			target={newTab ? '_blank' : undefined}
			rel={newTab ? 'noopener noreferrer' : undefined}
		>
			<DefaultButton {...props} />
		</Link>
	) : (
		<DefaultButton {...props} />
	)
}
