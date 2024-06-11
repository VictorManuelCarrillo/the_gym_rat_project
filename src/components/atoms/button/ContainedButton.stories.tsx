import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ContainedButton } from './ContainedButton';

const meta = {
  component: ContainedButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ContainedButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    label: 'outlined button'
  }
};