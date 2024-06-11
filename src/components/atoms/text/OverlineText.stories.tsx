import type { Meta, StoryObj } from '@storybook/react';

import { OverlineText } from './OverlineText';

const meta = {
  component: OverlineText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OverlineText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'this is an over lined text',
  }
};