import Image from 'next/image';

export default function Download() {
  return (
    <div className="px-6 sm:px-8 lg:px-10">
      <div className="mt-12 rounded-lg bg-primary-100 px-6 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="mb-2 font-spaceGrotesk text-3xl font-bold text-gray-900">
              Download Pilla App.
            </h2>
            <p className="mb-6 w-[90%] font-inter text-lg text-gray-700">
              Grow your wealth, save, invest, secure finance for rent or construction with ease.
            </p>
            {/* <div className="flex space-x-4">
            <a href="/" className="inline-block">
              <img
                src="/path-to-app-store-badge.png"
                alt="Download on App Store"
                className="h-10"
              />
            </a>
            <a href="/" className="inline-block">
              <img
                src="/path-to-google-play-badge.png"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div> */}
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image src="/assets/images/half-phone.png" alt="half-phone" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
