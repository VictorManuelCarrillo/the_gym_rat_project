import Link from 'next/link';
import React from 'react';
import {IconButton as Button} from '@mui/material';

interface ButtonProps {
  label?: string
  icon: React.ReactNode
  size?: 'small'|'medium'|'large'
  color?: 'inherit' | 'primary' | 'secondary' | 'warning' | 'info' | 'success'
  href?: string
  newTab?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const DefaultButton: React.FC<ButtonProps> = (props) => {
  const {label, icon, size = 'medium', color = 'primary', disabled, onClick} = props

  return (
    <Button
    aria-label={label}
      size={size}
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
			target={newTab && newTab ? '_blank' : ''}
			rel={newTab && newTab ? 'noopener noreferrer' : ''}
		>
			<DefaultButton {...props} />
		</Link>
	) : (
		<DefaultButton {...props} />
	)
}