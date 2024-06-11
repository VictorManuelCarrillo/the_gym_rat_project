import Link from 'next/link'
import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
	label: string
	size?: 'small' | 'medium' | 'large'
	color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success'
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	href?: string
	newTab?: boolean
	disabled?: boolean
	onClick?: () => void
}

export const DefaultButton: React.FC<ButtonProps> = (props) => {
	const {
		label,
		size = 'medium',
		color = 'primary',
		startIcon,
		endIcon,
		disabled,
		onClick,
	} = props

	return (
		<Button
			variant='contained'
			size={size}
			color={color}
			startIcon={startIcon && startIcon}
			endIcon={endIcon && endIcon}
			disabled={disabled && disabled ? true : false}
			onClick={onClick}
			sx={{ px: '1.5em', m: '0.5em', borderRadius: '2.5em', fontWeight: 'bolder' }}
		>
			{label}
		</Button>
	)
}

export const ContainedButton: React.FC<ButtonProps> = (props) => {
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
