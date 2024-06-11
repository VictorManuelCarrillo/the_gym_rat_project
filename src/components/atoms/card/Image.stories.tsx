import type { Meta, StoryObj } from '@storybook/react';

import { ResponsiveImage } from './Image';

const meta = {
  component: ResponsiveImage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResponsiveImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://i0.wp.com/blog.smartfit.com.mx/wp-content/uploads/2018/04/cuando-cambiar-rutina-del-gym.jpg?fit=1200%2C675&ssl=1',
    alt: 'ola',
    width: 1200,
    height: 675
  }
};