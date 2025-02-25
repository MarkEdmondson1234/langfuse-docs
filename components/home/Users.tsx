import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

import Image, { type StaticImageData } from "next/image";
import pigmentLight from "./img/pigment_light.svg";
import pigmentDark from "./img/pigment_dark.svg";
import alphawatchLight from "./img/alphawatch_light.png";
import alphawatchDark from "./img/alphawatch_dark.png";
import mavaLight from "./img/mava_light.png";
import mavaDark from "./img/mava_dark.png";
import frontifyLight from "./img/frontify_light.svg";
import frontifyDark from "./img/frontify_dark.svg";
import posthogLight from "./img/posthog_light.svg";
import posthogDark from "./img/posthog_dark.svg";
import { HomeSection } from "./components/HomeSection";

type User = {
  name: string;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
  href: string;
  className?: string;
};

const users: User[] = [
  {
    name: "PostHog",
    lightImage: posthogLight,
    darkImage: posthogDark,
    href: "https://posthog.com",
  },
  {
    name: "frontify",
    lightImage: frontifyLight,
    darkImage: frontifyDark,
    href: "https://www.frontify.com",
  },
  {
    name: "Alphawatch",
    lightImage: alphawatchLight,
    darkImage: alphawatchDark,
    href: "https://alphawatch.ai",
    className: "w-16 sm:w-24",
  },
  {
    name: "Pigment",
    lightImage: pigmentLight,
    darkImage: pigmentDark,
    href: "https://pigment.com",
  },
  {
    name: "Mava",
    lightImage: mavaLight,
    darkImage: mavaDark,
    href: "https://mava.app",
  },
];

const UserLogo = ({ user }: { user: User }) => {
  return (
    <a
      href={user.href}
      className={cn(
        "relative h-12 sm:h-16 w-20 sm:w-40 cursor-pointer",
        user.className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={user.lightImage}
        alt={user.name}
        className="object-contain hidden dark:block grayscale hover:grayscale-0 transition dark:opacity-90 opacity-80 hover:opacity-100"
        sizes="(min-width: 768px) 20vw, 40vw"
        fill={true}
      />
      <Image
        src={user.darkImage}
        alt={user.name}
        className="object-contain dark:hidden grayscale hover:grayscale-0 transition dark:opacity-90 opacity-80 hover:opacity-100"
        sizes="(min-width: 768px) 20vw, 40vw"
        fill={true}
      />
    </a>
  );
};

export const Users = () => {
  return (
    <HomeSection className="pt-6 md:pt-6">
      <h2 className="text-center text-lg font-semibold leading-8 mb-6">
        Teams building complex LLM apps rely on Langfuse
      </h2>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden">
        <Marquee className="[--gap:2rem] lg:[--gap:5rem]">
          {users.map((user) => (
            <UserLogo key={user.name} user={user} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </HomeSection>
  );
};
