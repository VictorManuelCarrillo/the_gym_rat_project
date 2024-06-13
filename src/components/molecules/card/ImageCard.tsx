import React from 'react'
import { Card, CardContent, CardMedia, Box } from '@mui/material'
import { Title } from '@/components/atoms/text/Title'
import { BodyText } from '@/components/atoms/text/BodyText'

interface ImageCardProps {
	imageUrl: string
	title: string
	description: string
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
	const { imageUrl, title, description } = props

	return (
		<Box sx={{ position: 'relative', width: { md: '30vw', margin: '0 auto' } }}>
			<Card
				sx={{ marginTop: '4em' }}
				elevation={4}
			>
				<CardMedia
					component={'img'}
					alt={title}
					image={imageUrl}
					sx={{
						position: 'absolute',
						width: '15em',
						height: '15em',
						left: '50%',
						top: '-6em',
						transform: 'translateX(-50%)',
						filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.8))',
					}}
				/>
				<Box sx={{ height: '9em', bgcolor: 'secondary.main' }} />
				<CardContent>
					<Title
						text={title}
						type={'h4'}
						align='center'
						color='black'
					/>
					<BodyText
						text={description}
						align='justify'
						color='black'
						sx={{
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							marginTop: '1em',
						}}
					/>
				</CardContent>
			</Card>
		</Box>
	)
}
