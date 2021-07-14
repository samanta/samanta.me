import NavLink from "./NavLink";

export default {
  title: "Samanta/Components/Buttons/NavLink",
  component: NavLink,
};

const Template = (args) => (
  <div style={{ padding: "48px 24px", backgroundColor: "lightgray" }}>
    <NavLink {...args}>Click me</NavLink>
  </div>
);

const onClick = () => alert("Clicked!");

export const Default = Template.bind({});
Default.storyName = "Navigation Link";
Default.args = {
  onClick,
};
