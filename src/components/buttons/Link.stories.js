import Link from "./Link";

export default {
  title: "Samanta/Components/Buttons/Links",
  component: Link,
};

const Template = ({ text, ...args }) => {
  return (
    <div style={{ padding: "48px 0" }}>
      <Link {...args}>{text}</Link>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "This is a link",
};
