import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import { Table } from './Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Table',
	component: Table,
	decorators: [withDesign],
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};