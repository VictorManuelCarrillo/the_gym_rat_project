import { Grid } from '@mui/material'
import { ImageCard } from '@/components/molecules/card/ImageCard'

interface cardsProps {
	title: string
	description: string
	imageUrl: string
}

const cards: cardsProps[] = [
	{
		title: 'Hola 1',
		description: 'Descripción 1',
		imageUrl:
			'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
	},
	{
		title: 'Hola 2',
		description: 'Descripción 2',
		imageUrl:
			'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
	},
	{
		title: 'Hola 3',
		description: 'Descripción 3',
		imageUrl:
			'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
	},
	{
		title: 'Hola 4',
		description: 'Descripción 4',
		imageUrl:
			'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
	},
]

export const CardSection = ({ cards }: { cards: cardsProps[] }) => {
	return (
		<Grid
			container
			spacing={1}
      rowSpacing={5}
      sx={{display: 'flex',justifyContent: 'center' }}
		>
			{cards.map((card, idx) => (
				<Grid item md={6} lg={4} xl={3} key={idx}>
					<ImageCard
						title={card.title}
						description={card.description}
						imageUrl={card.imageUrl}
					/>
				</Grid>
			))}
		</Grid>
	)
}
