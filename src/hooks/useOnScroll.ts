import { useState, useEffect, useRef } from 'react';

export const useScroll = () => {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const sections = document.querySelectorAll('section');

		observer.current = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: 0.5,
			}
		);

		sections.forEach(section => {
			observer.current?.observe(section);
		});

		return () => observer.current?.disconnect();
	}, []);

	return activeSection;
};
