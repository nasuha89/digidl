import React from 'react';
import StatusMessage from './StatusMessage';

export default {
  component: StatusMessage,
  title: 'Components/Status Message',
};

const Template = args => <StatusMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'This is a sample of a contained status message',
    state: 'success',
};