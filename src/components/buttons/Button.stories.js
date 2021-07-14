import Button, { ButtonVariant } from "./Button";

export default {
  title: "Samanta/Components/Buttons/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>Click me</Button>;

const onClick = () => alert("Clicked!");

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.primary,
  onClick,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariant.secondary,
  onClick,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: ButtonVariant.tertiary,
  onClick,
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  variant: ButtonVariant.quaternary,
  onClick,
};
