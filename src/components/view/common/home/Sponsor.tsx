import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const partnerImages = [
  '/assets/png/pnt-providus-bank.png',
  '/assets/png/pnt-alder.png',
  '/assets/png/pnt-olaniwun.png',
  '/assets/png/pnt-cfg.png',
  '/assets/png/pnt-huawei.png',
  '/assets/png/pnt-qore.png',
  '/assets/png/pnt-proptech-hub.png',
  '/assets/png/pnt-adloyalty.png',
];

const supportByImages = [
  '/assets/png/spt-fiabci.png',
  '/assets/png/spt-proptech-nigeria.png',
  '/assets/png/spt-fintech.png',
  '/assets/png/spt-ncs.png',
  '/assets/png/spt-itan.png',
  '/assets/png/spt-nigeria-british.png',
  '/assets/png/spt-premia-bn.png',
  '/assets/png/spt-bni.png',
];

export default function Sponsor() {
  return (
    <div className="mt-8 sm:mt-12">
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

      <div className="mt-20">
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
