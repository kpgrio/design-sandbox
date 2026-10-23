import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: { children: 'Draft' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Brand: Story = { args: { tone: 'brand', children: 'In review' } }
export const Danger: Story = { args: { tone: 'danger', children: 'Blocked' } }
