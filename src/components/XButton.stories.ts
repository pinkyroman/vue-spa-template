import type { Meta, StoryObj } from "@storybook/vue3";
import XButton from "./XButton.vue";

const meta = {
  component: XButton,
  argTypes: {
    color: {
      options: [
        "neutral",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof XButton>;

export default meta;

type Story = StoryObj<typeof XButton>;

export const XButtonWithBrandColors: Story = {
  name: "브랜드 컬러",
  args: { color: "primary", label: "버튼" },
  render: (args) => ({
    components: { XButton },
    setup() {
      return { args };
    },
    template: '<XButton v-bind="args"></XButton>',
  }),
};
