import { StoryObj, type Meta } from "@storybook/react";
import { PageContainer } from "./pageContainer";

const meta = {
  title: "layout/PageContainer",
  component: PageContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<Meta<typeof PageContainer>>;

export const Primary: Story = {};
