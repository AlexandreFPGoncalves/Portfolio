import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Checkbox, CheckBoxProps } from './Checkbox';

export default {
	title: 'Components/Checkbox',
	component: Checkbox,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => {
			return (
				<label htmlFor="remember" className="flex items-center gap-2">
					{Story({
						args: {
							id: 'remember',
						},
					})}
					<Text size="sm">Remember me for the next 30 days</Text>
				</label>
			);
		},
	],
} as Meta<CheckBoxProps>;

export const Default: StoryObj<CheckBoxProps> = {};
