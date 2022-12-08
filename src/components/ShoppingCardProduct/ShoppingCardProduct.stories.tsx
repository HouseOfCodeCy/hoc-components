import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {PRODUCTS} from '../../resources/constants';

import {ShoppingCardProduct} from './ShoppingCardProduct';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/ShoppingCardProduct',
	component: ShoppingCardProduct,
	decorators: [withDesign],
} as ComponentMeta<typeof ShoppingCardProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShoppingCardProduct> = (args) => <ShoppingCardProduct {...args} />;

export const Primary = Template.bind({
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	product: PRODUCTS[0]
};