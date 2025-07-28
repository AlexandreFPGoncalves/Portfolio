import clsx from 'clsx';

interface ButtonProps {
	label: string;
	onClick: () => void;
	disabled?: boolean;
	animated?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, animated = false }) => {
	return (
		<div
			className={clsx(
				`bg-grey rounded-full p-[2px] transition-all hover:bg-gradient-to-r`,
				disabled
					? 'hover:from-grey hover:to-blue cursor-not-allowed opacity-60'
					: 'hover:from-blue hover:to-purple hover:shadow-purple',
				animated && 'animate-breath'
			)}
		>
			<button
				onClick={onClick}
				disabled={disabled}
				type="button"
				className={clsx('bg-bg rounded-full px-6 py-2', disabled ? 'text-grey cursor-not-allowed' : 'text-white')}
			>
				{label}
			</button>
		</div>
	);
};
