import type { Meta, StoryObj } from "@storybook/vue3";
import XButton from "./XButton.vue";

const meta: Meta<typeof XButton> = {
  component: XButton,
};
export default meta;

type Story = StoryObj<typeof XButton>;

export const Default: Story = {
  name: "Default state of the button",
  render: () => ({
    components: { XButton },
    template: "<XButton/>",
  }),
};
