import type { ComponentProps } from 'solid-js';

export const CloseIcon = (props: ComponentProps<'svg'>) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
};
