import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { OutlinedButton } from './OutlinedButton';

const meta = {
  component: OutlinedButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof OutlinedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    label: 'outlined button'
  }
};