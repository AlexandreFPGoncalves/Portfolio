import { Footer, SectionController } from '@components';
import { Shards } from './shards';

export const Home = () => {
	const { FirstSection, SecondSection, ThirdSection } = Shards;

	return (
		<div className="bg-va-500 flex-grow overflow-y-auto rounded-xl text-white">
			{/* <Navbar /> */}
			<SectionController />

			<div className="h-screen snap-y snap-mandatory overflow-y-scroll">
				<FirstSection />
				<SecondSection />
				<ThirdSection />
			</div>

			<Footer />
		</div>
	);
};
