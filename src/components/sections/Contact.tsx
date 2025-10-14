import Link from "next/link";
import Image from "next/image";

export const Contact = () => {
  return (
    <div
      className="bg-orangeKari w-full flex flex-col items-center justify-center max-w-[654px] mt-[200px] relative"
      id="contact"
    >
      <Image
        src="/quadrangle.svg"
        alt="blue quadrangle"
        width={500}
        height={98}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3"
      />
      <p className="absolute top-1 rotate-[-2deg] text-white font-bold ">
        Let’s build something great together!
      </p>
      <Image
        src="/meRightProfile.png"
        alt="me right profile"
        width={308}
        height={344}
        className="absolute bottom-0 -left-[20%]"
      />
      <Image
        src="/arrow2.svg"
        alt="right arrow"
        width={86}
        height={73}
        className="absolute top-0 right-20 hover:rotate-6 ease-in-out duration-300"
      />
      <Link href="mailto:malgorzata.bozykowska@gmail.com">
        <p className="py-[120px] hover:text-white ease-in-out duration-700 hover:scale-105">
          malgorzata.bozykowska@gmail.com
        </p>
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
