import React from 'react';
import Label from './Label';

export default {
  component: Label,
  title: 'Components/Label',
};

const Template = args => <Label {...args} />;

export const Small = Template.bind({});
Small.args = {
    label: 'ACTIVE',
    color: 'success',
};