import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  label: "Basic",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  label: "AllCaps",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  label: "Secondary",
  color: "secondary",
};
