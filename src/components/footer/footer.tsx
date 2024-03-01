import { images } from "@/assets";
import Image from "next/image";
import React from "react";
import { VerticalDivider, Availability } from "@/components";
import Link from "next/link";

export const Footer = () => {
  const socials = [
    { url: "https://github.com/AlexandreFPGoncalves", logo: images.ghLogo },
    {
      url: "https://www.linkedin.com/in/alexandrefpgoncalves/",
      logo: images.linkedinLogo,
    },
    { url: "https://twitter.com/VioletAlexDev", logo: images.twitterLogo },
  ];

  return (
    <div className="fixed bottom-5 right-10 flex h-48 flex-col items-center justify-end gap-6">
      Start Exploring
      <div className="h-[1px] w-[300px] bg-zinc-600" />
      <div className="flex w-full flex-row items-center gap-2">
        <div className="flex gap-5">
          {socials.map((social, i) => (
            <Link key={i} href={social.url} target="_blank">
              <Image
                className="invert transition-all hover:-translate-y-[1px]"
                height={24}
                width={24}
                src={social.logo}
                alt="test"
              />
            </Link>
          ))}
        </div>
        <VerticalDivider />
        <Availability status="active" />
      </div>
    </div>
  );
};
