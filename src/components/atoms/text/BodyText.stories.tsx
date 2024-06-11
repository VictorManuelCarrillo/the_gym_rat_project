import type { Meta, StoryObj } from '@storybook/react';

import { BodyText } from './BodyText';

const meta = {
  component: BodyText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BodyText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'this is a body text',
    type: 'body1'
  }
};