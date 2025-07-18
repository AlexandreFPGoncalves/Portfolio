import { Footer, Navbar } from '../../components';

export const Home = () => {
	return (
		<div class="flex h-screen max-h-screen flex-col bg-red-600">
			<div class="flex-grow overflow-y-auto bg-zinc-900 text-white">
				<Navbar />

				<div class="flex h-screen flex-col  items-center justify-center">
					<div class="text-2xl font-bold">Alexandre Gonçalves</div>
					<div>Frontend Consultant</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};
