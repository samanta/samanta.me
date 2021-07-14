import Home from "./Home";

export default {
  title: "Samanta/Pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
