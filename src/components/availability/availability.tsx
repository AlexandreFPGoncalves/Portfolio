import clsx from 'clsx';
interface AvailabilityProps {
	status: 'active' | 'idle' | 'deactivated';
	customLabel?: string;
}

interface AvailabilityResources {
	label: string;
}

export const Availability: React.FC<AvailabilityProps> = ({ status, customLabel }) => {
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
				className={clsx(
					'h-2 w-2 rounded-full opacity-75',
					status === 'active' ? 'bg-va-500' : status === 'idle' ? 'bg-yellow-600' : 'bg-red-500'
				)}
			>
				<div
					className={clsx(
						'h-2 w-2 animate-ping rounded-full',
						status === 'active' ? 'bg-va-500' : status === 'idle' ? 'bg-yellow-600' : 'bg-red-500'
					)}
				/>
			</div>
			<div className="min-w-[128px] justify-center text-[.9rem] font-semibold text-white">{resources.label}</div>
		</>
	);
};
