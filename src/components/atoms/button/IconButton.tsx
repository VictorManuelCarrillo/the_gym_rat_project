'use client'
import Link from 'next/link';
import React from 'react';
import {IconButton as Button} from '@mui/material';

interface ButtonProps {
  icon: React.ReactNode
  href?: string
  newTab?: boolean | undefined
  color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success'
  disabled?: boolean
  onClick?: () => void
}

export const DefaultButton: React.FC<ButtonProps> = (props) => {
  const {icon, color = 'primary', disabled, onClick} = props

  return (
    <Button
      color={color}
      disabled={disabled ? true : false}
      onClick={onClick}>
      {icon}
    </Button>
  )
}

export const IconButton: React.FC<ButtonProps> = (props) => {
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