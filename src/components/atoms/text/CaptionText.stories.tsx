import type { Meta, StoryObj } from '@storybook/react';

import { CaptionText } from './CaptionText';

const meta = {
  component: CaptionText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CaptionText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'this is a subtitle',
  }
};