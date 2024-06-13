import type { Meta, StoryObj } from '@storybook/react';

import { ImageCard } from './ImageCard';

const meta = {
  component: ImageCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://imgs.search.brave.com/88hwPHtX05S80A1gJ3AWNvIk88gUDH5BgXm7bgjVKWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MDQvMTMzNy84NzU2/L2ZpbGVzL1ByZVdv/cmtvdXQtbGF0ZXJh/bC5wbmc_dj0xNjM3/ODU3NTY0',
    title: 'pre-entro insano',
    description: 'Revisa nuestro catalogo de pre-entreno y la lista de los mejores 10 de insane labs, además conoce como comenzar a entrenar con estos'
  }
};