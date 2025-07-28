import { AuroraBackground } from '@components';
import { motion } from 'motion/react';

export const FirstSection = () => {
	return (
		<section id="0" className="h-screen w-full snap-start">
			<div className="flex h-full w-full flex-col items-center justify-center px-2 pt-2">
				<div className="flex h-full w-full items-center justify-center overflow-hidden rounded-t bg-zinc-900">
					<AuroraBackground className="w-screen">
						<motion.div
							initial={{ opacity: 0.0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.3,
								duration: 0.8,
								ease: 'easeInOut',
							}}
							className="relative flex flex-col items-center justify-center gap-4 px-4"
						>
							<div className="text-center text-3xl font-bold md:text-7xl dark:text-white">Alexandre Gonçalves</div>
							<div className="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">Frontend Developer</div>
						</motion.div>
					</AuroraBackground>
				</div>
			</div>
		</section>
	);
};
