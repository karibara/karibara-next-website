import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
  return (
    <div
      className="bg-orangeKari w-full flex flex-col items-center justify-center max-w-[654px] mt-[200px] relative"
      id="contact"
    >
      {/* quadrangle */}
      <Image
        src="/quadrangle.svg"
        alt="blue quadrangle"
        width={500}
        height={98}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
      />
      <p className="absolute top-1 right-4 md:right-[25%] rotate-[-2deg] text-white font-bold ">
        Let’s build something great together!
      </p>
      {/* profile photo */}
      <Image
        src="/meRightProfile.png"
        alt="me right profile"
        width={308}
        height={344}
        className="absolute bottom-0 -left-[30%] md:-left-[20%]"
      />

      {/* arrow right */}
      <Image
        src="/arrow2.svg"
        alt="right arrow"
        width={86}
        height={73}
        className="absolute top-4 md:top-0 right-20 hover:rotate-6 ease-in-out duration-300"
      />
      <Link href="mailto:code.by.malbo@gmail.com">
        <p className="py-[120px] text-greyKari-light font-oswald md:text-blackKari md:hover:text-white ease-in-out duration-700 hover:scale-105">
          code.by.malbo@gmail.com
        </p>

        {/* arrow up */}
        <Image
          src="/arrow1.svg"
          alt="up arrow"
          width={120}
          height={84}
          className="absolute bottom-4 left-1/4 hover:scale-105 ease-in-out duration-300"
        />
      </Link>

      <Image
        src="/contactHand.png"
        alt="hand with mobile phone"
        width={202}
        height={211}
        className="absolute top-10 right-0"
      />
    </div>
  );
};
