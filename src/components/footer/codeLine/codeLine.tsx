import clsx from 'clsx';

type CodeLineI = {
	/** Line number (usually as a string like "01", "02", etc.) */
	lineNumber: string;
	/** The label content displayed*/
	label: string;
	/** Whether to show a suffix (animated comma) — optional */
	suffix?: boolean;
	/** Text size for the code line (md default) — optional */
	size?: 'sm' | 'md' | 'lg';
	/** Style theme applied to the line (white default) — optional */
	style?: 'white' | 'purple' | 'aqua';
};

export const CodeLine: React.FC<CodeLineI> = ({ lineNumber, label, size = 'md', suffix, style = 'white' }) => {
	return (
		<div
			className={clsx(
				'font-bold relative z-10 flex items-baseline gap-2',
				size === 'sm' ? 'text-2xl' : size === 'md' ? 'text-4xl' : 'text-5xl',
				style === 'white' ? 'text-white' : style === 'purple' ? 'text-purple' : 'text-aqua'
			)}
		>
			<span className="text-purple/40 text-sm h-full">{lineNumber} |</span>
			<div className="flex flex-row items-baseline gap-2">
				{label}
				{suffix && (
					<div className=" h-2 w-2 rounded-full opacity-75 bg-aqua">
						<div className="h-2 w-2 animate-ping rounded-full bg-aqua" />
					</div>
				)}
			</div>
		</div>
	);
};
