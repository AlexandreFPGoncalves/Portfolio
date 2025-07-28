import { AuroraBackground, Footer } from '@components';
import { motion } from 'motion/react';

export const Home = () => {
	return (
		<div className="flex-grow overflow-y-auto bg-purple text-white rounded-xl">
			{/* <Navbar /> */}

			<div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-purple">
				<section className="h-screen snap-start w-full">
					<div className="flex h-full flex-col w-full p-2 items-center justify-center">
						<div className="overflow-hidden bg-zinc-900 w-full h-full flex items-center justify-center rounded">
							<AuroraBackground className="w-screen">
								<motion.div
									initial={{ opacity: 0.0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										delay: 0.3,
										duration: 0.8,
										ease: 'easeInOut',
									}}
									className="relative flex flex-col gap-4 items-center justify-center px-4"
								>
									<div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Alexandre Gonçalves</div>
									<div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
										Frontend Developer
									</div>
								</motion.div>
							</AuroraBackground>
						</div>
					</div>
				</section>

				<section className="h-screen snap-start">"triste"</section>

				<section className="h-screen snap-start bg-zinc-900 text-white flex items-center justify-center">
					<h1 className="text-4xl">Section 3</h1>
				</section>
			</div>

			<Footer />
		</div>
	);
};
