import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/usgogirTtW8ifkqhxGiePa/Digi-Design-Language?node-id=1146%3A3',
  },
}