import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  args: { title: 'Card title', children: 'Supporting text that explains what this card is for.' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
