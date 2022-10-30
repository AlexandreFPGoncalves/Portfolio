import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
	title: 'Components/Heading',
	component: Heading,
	args: {
		children: 'Lorem Ipsum',
		bold: true,
	},
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio',
			},
		},
		bold: {
			options: [true, false],
			control: {
				type: 'boolean',
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: 'sm',
	},
};
export const Medium: StoryObj<HeadingProps> = {
	args: {
		size: 'md',
	},
};
export const Large: StoryObj<HeadingProps> = {
	args: {
		size: 'lg',
	},
};
export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: <h1>Lorem Ipsum with p tag with H1 tag</h1>,
	},
	argTypes: {
		children: { table: { disable: true } },
	},
};
