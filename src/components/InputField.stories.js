import React from 'react';
import InputField from './InputField';

export default {
    component: InputField,
    title: 'Components/Input Field',
  };

  const Template = args => <InputField {...args} />;

  export const Basic = Template.bind({});
    Basic.args = {
    title: "Full Name",
    placeholder: "",
    type: "text",
};