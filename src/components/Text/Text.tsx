import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg';
	asChild?: boolean;
	className?: string;
}

export const Text: React.FC<TextProps> = ({ children, size = 'md', asChild, className }) => {
	const ComponentType = asChild ? Slot : 'span';

	return (
		<ComponentType
			className={clsx(
				'text-gray-100 font-sans',
				{
					'text-xs': size === 'sm',
					'text-sm': size === 'md',
					'text-md': size === 'lg',
				},
				className
			)}
		>
			{children}
		</ComponentType>
	);
};
