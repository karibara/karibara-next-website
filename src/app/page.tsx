import { AboutMe } from "@/components/sections/AboutMe";
import { SocialMediaLinks } from "@/components/sections/SocialMediaLinks";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { InfiniteHorizontalText } from "@/components/ui/InfiniteHorizontalText";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-comfortaa-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center relative">
        <div>
          {/* HASH PATTERN */}
          <Image
            src="/hash-pattern.svg"
            alt="hash pattern"
            width={360}
            height={360}
            className="absolute top-20 -right-16 -z-10 "
          />

          {/* WAVE PATTERN */}
          <Image
            src="/waves.svg"
            alt="waves pattern"
            width={156}
            height={58}
            className="absolute top-[8rem] lg:top-[11em] scale-75 lg:scale-100 -left-14 -z-10 "
          />

          {/* WELCOME SECTION */}
          <WelcomeSection />

          {/* ABOUT ME */}

          <AboutMe />
        </div>
        <InfiniteHorizontalText text="Skills" className="-mx-8 sm:-mx-20" />

        {/* SOCIAL MEDIA LINKS */}
        <SocialMediaLinks />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
