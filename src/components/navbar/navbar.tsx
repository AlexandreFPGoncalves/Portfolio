'use client';
import { clsx } from 'clsx';
import useOnScroll from '../../hooks/useOnScroll';
import { VerticalDivider } from '../dividers';
import { Link, useLocation } from 'react-router-dom';
interface NavbarResources {
	title: string;
}

export const Navbar: React.FC = () => {
	const pathname = useLocation().pathname;
	const isScrolled = useOnScroll(0);

	const resources: NavbarResources = { title: 'AG' };

	const navbarPaths = [
		{ name: 'Projects', href: '/projects' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Resources', href: '/resources' },
	];

	return (
		<nav
			className={clsx(
				'fixed left-0 top-0 z-20 mx-auto flex w-screen flex-col items-center justify-center gap-4 px-4 py-2 shadow-navbar backdrop-blur-sm md:flex-row',
				isScrolled() && 'bg-red-500'
			)}
		>
			{/* // *Start */}
			<div className="flex w-full items-center justify-between md:w-auto md:flex-1 md:justify-center">
				<Link to="/" className="flex w-full items-center gap-6 p-2 md:w-auto">
					<span className="text-2xl font-bold text-white">{resources.title}</span>
				</Link>
			</div>

			{/* // *Middle */}
			<div
				className="hidden w-full flex-col items-center gap-4 md:order-1 md:flex md:w-auto md:flex-1 md:flex-row md:justify-center until-md:data-[ismobileopen=true]:flex"
				id="nav"
			></div>

			{/* // *End */}
			<div className="hidden w-full items-center justify-center gap-2 md:order-2 md:flex md:w-auto md:flex-1 md:justify-center until-md:relative until-md:data-[ismobileopen=true]:flex">
				<div
					className="hidden w-full flex-col items-center gap-4 md:order-1 md:flex md:w-auto md:flex-1 md:flex-row md:justify-center until-md:data-[ismobileopen=true]:flex"
					id="nav"
				>
					{navbarPaths.map(path => (
						<Link
							to={path.href}
							onClick={undefined}
							className={clsx(
								'font-semibold transition-colors md:bg-transparent',
								pathname === path.href ? 'text-violet-500 hover:text-violet-400' : 'text-grey hover:text-violet-800'
							)}
							aria-current="page"
						>
							{path.name.toUpperCase()}
						</Link>
					))}
					<VerticalDivider />
				</div>
			</div>
		</nav>
	);
};
