'use client';
import { clsx } from 'clsx';
import { A } from '@solidjs/router';
import { type Component } from 'solid-js';
import useOnScroll from '../../hooks/useOnScroll';
import { VerticalDivider } from '../dividers';
import { useLocation } from '@solidjs/router';
interface NavbarResources {
	title: string;
}

export const Navbar: Component = () => {
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
			class={clsx(
				'fixed left-0 top-0 z-20 mx-auto flex w-screen flex-col items-center justify-center gap-4 px-4 py-2 shadow-navbar backdrop-blur-sm md:flex-row',
				isScrolled() && 'bg-red-500'
			)}
		>
			{/* // *Start */}
			<div class="flex w-full items-center justify-between md:w-auto md:flex-1 md:justify-center">
				<A href="/" class="flex w-full items-center gap-6 p-2 md:w-auto">
					<span class="text-2xl font-bold text-white">{resources.title}</span>
				</A>
			</div>

			{/* // *Middle */}
			<div
				class="hidden w-full flex-col items-center gap-4 md:order-1 md:flex md:w-auto md:flex-1 md:flex-row md:justify-center until-md:data-[ismobileopen=true]:flex"
				id="nav"
			></div>

			{/* // *End */}
			<div class="hidden w-full items-center justify-center gap-2 md:order-2 md:flex md:w-auto md:flex-1 md:justify-center until-md:relative until-md:data-[ismobileopen=true]:flex">
				<div
					class="hidden w-full flex-col items-center gap-4 md:order-1 md:flex md:w-auto md:flex-1 md:flex-row md:justify-center until-md:data-[ismobileopen=true]:flex"
					id="nav"
				>
					{navbarPaths.map((path, i) => (
						<A
							href={path.href}
							onClick={undefined}
							class={clsx(
								'font-semibold transition-colors md:bg-transparent',
								pathname === path.href ? 'text-violet-500 hover:text-violet-400' : 'text-grey hover:text-violet-800'
							)}
							aria-current="page"
						>
							{path.name.toUpperCase()}
						</A>
					))}
					<VerticalDivider />
				</div>
			</div>
		</nav>
	);
};
