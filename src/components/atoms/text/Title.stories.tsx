import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta = {
  component: Title,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'this is a title',
    type: 'h1'
  }
};