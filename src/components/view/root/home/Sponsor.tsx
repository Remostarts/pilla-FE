import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const partnerImages = [
  '/assets/root/home/pnt-providus-bank.png',
  '/assets/root/home/pnt-alder.png',
  '/assets/root/home/pnt-olaniwun.png',
  '/assets/root/home/pnt-cfg.png',
  '/assets/root/home/pnt-huawei.png',
  '/assets/root/home/pnt-qore.png',
  '/assets/root/home/pnt-proptech-hub.png',
  '/assets/root/home/pnt-adloyalty.png',
];

const supportByImages = [
  '/assets/root/home/spt-fiabci.png',
  '/assets/root/home/spt-proptech-nigeria.png',
  '/assets/root/home/spt-fintech.png',
  '/assets/root/home/spt-ncs.png',
  '/assets/root/home/spt-itan.png',
  '/assets/root/home/spt-nigeria-british.png',
  '/assets/root/home/spt-premia-bn.png',
  '/assets/root/home/spt-bni.png',
];

export default function Sponsor() {
  return (
    <div className="my-10 sm:my-16">
      <div>
        <h2 className="text-center font-spaceGrotesk text-2xl font-bold text-gray-900 sm:text-3xl">
          Trusted by
        </h2>
        <h2 className="mb-12 text-center font-spaceGrotesk text-2xl font-bold text-gray-900 sm:text-3xl">
          Our Partners
        </h2>
      </div>

      {/* Pnt -> Partner logos */}
      <div className="relative h-fit overflow-hidden">
        <div className="absolute inset-y-0 -left-4 z-10 w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 -right-4 z-10 w-24 bg-gradient-to-l from-white to-transparent"></div>
        <Marquee gradientWidth={0} speed={50}>
          {partnerImages.map((src, index) => (
            <div key={index} className="relative mx-20 h-full">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                height={200}
                width={200}
                className="h-10 w-auto sm:h-full"
                objectFit="contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mt-28 sm:mt-32">
        <h2 className="mb-12 text-center font-spaceGrotesk text-2xl font-bold text-gray-900 sm:text-3xl">
          Supported by
        </h2>
      </div>

      {/* Spt -> Support logos */}
      <div className="relative h-fit overflow-hidden">
        <div className="absolute inset-y-0 -left-4 z-10 w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 -right-4 z-10 w-24 bg-gradient-to-l from-white to-transparent"></div>
        <Marquee gradientWidth={0} speed={50} direction="right">
          {supportByImages.map((src, index) => (
            <div key={index} className="relative mx-20 h-full">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                height={200}
                width={200}
                className="h-10 w-auto sm:h-full"
                objectFit="contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
