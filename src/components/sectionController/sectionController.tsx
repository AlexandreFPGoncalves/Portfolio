import { Images } from '@assets';
import { useScroll } from '@hooks';
import clsx from 'clsx';
import { motion } from 'motion/react';

export const SectionController = () => {
	const activeSection = Number(useScroll());

	return (
		<motion.div
			className="fixed left-10 top-1/2 -translate-y-1/2"
			initial={{ opacity: 0.0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.9,
				duration: 0.8,
				ease: 'linear',
			}}
		>
			<div className="flex flex-col items-center gap-2">
				{[0, 1, 2].map(index => (
					<motion.div
						className="relative flex h-[36px] w-[36px] items-center justify-center"
						initial={{ opacity: 0.0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							delay: 1 + index * 0.3,
							duration: 0.8,
							ease: 'linear',
						}}
					>
						{activeSection === index && <motion.img src={Images.stroke} animate={{ rotate: -30 }} />}
						<div
							key={index}
							className={clsx(
								'flex h-4 w-4 items-center justify-center rounded-full',
								activeSection !== index
									? 'bg-va-100/20'
									: 'bg-va-500 absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
							)}
						>
							{activeSection === index && <div key={index} className={'bg-va-500 h-3 w-3 animate-ping rounded-full'} />}
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};
