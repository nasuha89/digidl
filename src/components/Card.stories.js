import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Components/Card',
};

const Template = args => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  FullThumbnail: false,  
  title: 'Header here',
  subtitle: '',
  content: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  width: '15rem',
  elevation: 'shadow',
    
};

export const FullThumbnail = Template.bind({});
FullThumbnail.args = {
  FullThumbnail: true,
  thumbnail: 'https://images.digi.com.my/drupal-s3-production/inline-images/group-22-copy-6.jpg',
  content: 'Buy now', 
  width: '15rem',
  elevation: 'shadow',
};