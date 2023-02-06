import Button from "../components/Button";

export default {
    title:"Button",
    component:Button,
    argTypes: {handleClick:{action: "dwewdfef"}},
}
const Template = args => <Button {...args}/>;
export const Red = Template.bind({})
Red.args = {
backgroundColor:"red",
label:"Press me now",
size:"md"
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}


