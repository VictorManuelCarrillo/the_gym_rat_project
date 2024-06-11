import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextButton } from './TextButton';

const meta = {
  component: TextButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    label: 'text button'
  }
};