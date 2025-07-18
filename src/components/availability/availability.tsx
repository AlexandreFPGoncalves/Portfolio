import clsx from 'clsx';
import type { Component } from 'solid-js';

interface AvailabilityProps {
	status: 'active' | 'idle' | 'deactivated';
	customLabel?: string;
}

interface AvailabilityResources {
	label: string;
}

export const Availability: Component<AvailabilityProps> = ({ status, customLabel }) => {
	const resources: AvailabilityResources = {
		label: customLabel
			? customLabel
			: status === 'active'
				? 'Available for Work'
				: status === 'idle'
					? 'Currently Working'
					: 'Currently unavailable',
	};

	return (
		<>
			<div
				class={clsx(
					'h-2 w-2 rounded-full opacity-75',
					status === 'active' ? 'bg-emerald-500' : status === 'idle' ? 'bg-yellow-600' : 'bg-red-500'
				)}
			>
				<div
					class={clsx(
						'h-2 w-2 animate-ping rounded-full',
						status === 'active' ? 'bg-emerald-500' : status === 'idle' ? 'bg-yellow-600' : 'bg-red-500'
					)}
				/>
			</div>
			<div class="min-w-[128px] justify-center text-[.9rem] font-semibold text-slate-500">{resources.label}</div>
		</>
	);
};
