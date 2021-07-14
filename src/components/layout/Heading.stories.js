export default {
  title: "Samanta/Components/Layout/Headings",
};

const Template = ({ text, ...args }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <h1 {...args}>{text}</h1>
      <h2 {...args}>{text}</h2>
      <h3 {...args}>{text}</h3>
      <h4 {...args}>{text}</h4>
      <h5 {...args}>{text}</h5>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Mentoring for product designers",
};
