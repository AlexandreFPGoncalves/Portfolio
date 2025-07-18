import { createEffect, createSignal } from 'solid-js';

export default function useScroll(threshold = 0) {
	const [isScrolled, setScrolled] = createSignal<boolean>();

	createEffect(() => {
		const onScroll = () => {
			console.log('Scroll event fired');
			setScrolled(window.scrollY > threshold);
		};
		onScroll();

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [threshold]);

	return isScrolled;
}
