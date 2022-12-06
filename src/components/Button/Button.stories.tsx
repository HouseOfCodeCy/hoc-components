import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {Button} from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	decorators: [withDesign],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Primary',
};

export const Secondary = Template.bind({
});
Secondary.args = {
	primary: false,
	label: 'Secondary',
};

export const Large = Template.bind({
});
Large.args = {
	size: 'large',
	label: 'Large',
};

export const Small = Template.bind({
});
Small.args = {
	size: 'small',
	label: 'Small',
	className: 'buttonTest'
};
