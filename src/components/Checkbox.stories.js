import React from 'react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
};

const Template = args => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Item numero uno',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'I am disabled',
    disabled: true,
};