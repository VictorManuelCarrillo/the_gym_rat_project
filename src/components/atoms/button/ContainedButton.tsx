'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '@mui/material'

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

	return (
		<Button
			variant='contained'
			color={color}
			onClick={onClick}
			startIcon={startIcon}
			endIcon={endIcon}
			disabled={disabled ? true : false}
			size='small'
			sx={{ px: '1.5em', m: '0.5em', borderRadius: '2.5em' }}
		>
			{text}
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
