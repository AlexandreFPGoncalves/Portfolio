import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

//Interfaces
export interface TextInputRootProps {
	children: ReactNode;
}
export interface TextInputIconProps {
	children: ReactNode;
}
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

//Root
function TextInputRoot({ children }: TextInputRootProps) {
	return (
		<div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
			{children}
		</div>
	);
}
//Icon
function TextInputIcon({ children }: TextInputIconProps) {
	return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}
//Input
function TextInputInput(props: TextInputInputProps) {
	return (
		<input
			className={'bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'}
			{...props}
		/>
	);
}

//Display Names
TextInputRoot.displayName = 'TextInput.Root';
TextInputInput.displayName = 'TextInput.Input';
TextInputIcon.displayName = 'TextInput.Icon';

//Final Object Export
export const TextInput = {
	Root: TextInputRoot,
	Input: TextInputInput,
	Icon: TextInputIcon,
};
