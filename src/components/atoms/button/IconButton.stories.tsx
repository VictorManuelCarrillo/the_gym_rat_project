import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import { IconButton } from './IconButton';

const meta = {
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    icon: <BuildCircleIcon fontSize='large'/>
  }
};