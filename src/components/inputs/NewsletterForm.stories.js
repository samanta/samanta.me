import React, { useState } from "react";
import NewsletterForm from "./NewsletterForm";

export default {
  title: "Samanta/Components/Input/NewsletterForm",
  component: NewsletterForm,
};

const Template = (args) => {
  const setValue = useState(args.value)[1];
  const onChange = (e) => setValue(e.target.value);
  return <NewsletterForm {...args} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {};
