import Image from 'next/image';

export default function Download() {
  return (
    <div className="mx-auto max-w-8xl px-6 sm:px-10 lg:px-12">
      <div className="mt-12 rounded-lg bg-primary-100 px-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between md:flex-row">
          <div className="mx-2 mt-10 w-full md:my-0 md:w-1/2">
            {/* Download heading */}
            <h2 className="mb-2 font-spaceGrotesk text-2xl font-bold sm:text-3xl">
              Download Pilla App.
            </h2>
            <p className="mb-6 w-full font-inter text-base text-gray-800 lg:text-lg">
              Grow your wealth, save, invest, secure finance for rent or construction with ease.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              {/* Apple store link */}
              <a href="/" className="inline-block w-full sm:w-auto">
                <div className="flex items-center justify-center rounded-md bg-black px-3 py-2 text-white sm:justify-start">
                  <Image
                    src="/assets/root/home/download-apple-store.svg"
                    alt="Apple logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-inter text-[10px] sm:text-xs">Download on the</span>
                    <span className="-mt-1 font-spaceGrotesk text-sm font-semibold sm:text-base">
                      App Store
                    </span>
                  </div>
                </div>
              </a>

              {/* Play store link */}
              <a href="/" className="inline-block w-full sm:w-auto">
                <div className="flex items-center justify-center rounded-md bg-black px-3 py-2 text-white sm:justify-start">
                  <Image
                    src="/assets/root/home/download-play-store.svg"
                    alt="Google Play logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <div className="flex flex-col sm:items-end">
                    <span className="font-inter text-[10px] sm:text-xs">Get it on</span>
                    <span className="-mt-1 font-spaceGrotesk text-sm font-semibold sm:text-base">
                      Play Store
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Half phone image */}
          <div className="pt-12 sm:w-[3/4] md:mt-0 md:w-1/2 lg:w-1/3">
            <Image
              src="/assets/root/home/download-half-phone.png"
              alt="half-phone"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
