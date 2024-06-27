import React from 'react'
import { Box } from '@mui/material'
import { Title } from '@/components/atoms/text/Title'

interface BannerProps {
	title: string
	subtitle: string
	imageUrl: string
}

export const Banner: React.FC<BannerProps> = (props) => {
	const { title, subtitle, imageUrl } = props

	return (
		<Box component={'div'}
			sx={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				minHeight: {xs: '70vh', lg: '50vh'},
				display: 'flex',
        flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'white',
				textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
			}}
		>
			<Title text={title} type='h2' sx={{paddingBottom: '1em'}}/>
			<Title text={subtitle} type='h4' />
		</Box>
	)
}
