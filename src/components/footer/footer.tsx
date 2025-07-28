import { VerticalDivider } from '../dividers';
import { Availability } from '../availability';
import { icons } from '../../assets';

export const Footer = () => {
	const socials = [
		{ url: 'https://github.com/AlexandreFPGoncalves', logo: icons.ghLogo },
		{
			url: 'https://www.linkedin.com/in/alexandrefpgoncalves/',
			logo: icons.linkedinLogo,
		},
		{ url: 'https://twitter.com/VioletAlexDev', logo: icons.twitterLogo },
	];

	return (
		<div className="fixed bottom-7 right-10 flex h-48 flex-col items-center justify-end gap-6">
			<text className="font-semibold">Start Exploring</text>

			<div className="h-[1px] w-[300px] bg-zinc-600" />

			<div className="flex w-full flex-row items-center gap-2">
				<div className="flex gap-5">
					{socials.map(social => (
						<a href={social.url} target="_blank">
							<img
								className="invert transition-all hover:-translate-y-[1px]"
								height={24}
								width={24}
								src={social.logo}
								alt="test"
							/>
						</a>
					))}
				</div>
				<VerticalDivider />
				<Availability status="active" />
			</div>
		</div>
	);
};
