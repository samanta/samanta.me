import React, { useState } from "react";
import ButtonInput from "./ButtonInput";

export default {
  title: "Samanta/Components/Input/Button",
  component: ButtonInput,
};

const Template = (args) => {
  const setValue = useState(args.value)[1];
  const onChange = (e) => setValue(e.target.value);
  return <ButtonInput {...args} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  buttonText: "Button",
  style: { maxWidth: 500 },
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  buttonText: "Button",
  placeholder: "Enter text here...",
  style: { maxWidth: 500 },
};
