import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {ShoppingCardTotal} from './ShoppingCardTotal';
import {PRODUCTS} from '../../../resources/constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/ShoppingCardTotal',
	component: ShoppingCardTotal,
	decorators: [withDesign],
} as ComponentMeta<typeof ShoppingCardTotal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShoppingCardTotal> = (args) => <ShoppingCardTotal {...args} />;

export const Primary = Template.bind({
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	products: PRODUCTS
};