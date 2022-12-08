import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {Product} from './Product';
import {PRODUCTS} from '../../resources/constants';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Product',
	component: Product,
	decorators: [withDesign],
} as ComponentMeta<typeof Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const Primary = Template.bind({
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	product: PRODUCTS[0]
};