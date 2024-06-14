import type { Meta, StoryObj } from '@storybook/react'

import { CardSection } from './CardSection'

const meta = {
	component: CardSection,
} satisfies Meta<typeof CardSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		sectionTitle: '¡elige tu favorito y a entrenar!',
		cards: [
			{
				title: 'Hola 1',
				description: 'Descripción 1',
				imageUrl: 'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
			},
			{
				title: 'Hola 2',
				description: 'Descripción 2',
				imageUrl: 'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
			},
			{
				title: 'Hola 3',
				description: 'Descripción 3',
				imageUrl: 'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
			},
			{
				title: 'Hola 4',
				description: 'Descripción 4',
				imageUrl: 'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
			},
		],
	},
}
