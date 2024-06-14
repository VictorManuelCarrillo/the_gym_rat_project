import Link from 'next/link'
import React from 'react'
import { IconButton as Button } from '@mui/material'
import { SxProps, Theme } from '@mui/system'

interface ButtonProps {
	label?: string
	icon: React.ReactNode
	size?: 'small' | 'medium' | 'large'
	color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success'
	styles?: SxProps<Theme>
	href?: string
	newTab?: boolean
	disabled?: boolean
	onClick?: () => void
}

export const DefaultButton: React.FC<ButtonProps> = (props) => {
	const {
		label,
		icon,
		size = 'medium',
		color = 'primary',
		styles,
		disabled,
		onClick,
	} = props

	return (
		<Button
			aria-label={label}
			size={size}
			color={color}
			disabled={disabled ? true : false}
			onClick={onClick}
			sx={styles} // Pasar styles como sx
		>
			{icon}
		</Button>
	)
}

export const IconButton: React.FC<ButtonProps> = (props) => {
	const { href, newTab } = props
	return href ? (
		<Link
			href={href}
			target={newTab ? '_blank' : ''}
			rel={newTab ? 'noopener noreferrer' : ''}
		>
			<DefaultButton {...props} />
		</Link>
	) : (
		<DefaultButton {...props} />
	)
}
