import Image from 'next/image';

const solutionData = [
  {
    heading: 'Instant Settlement',
    subHeading: 'Receive your payments instantly in your bank account.',
    imageSrc: '/assets/root/home/business-bell.png',
    alt: 'locker',
    gradient: 'linear-gradient(75deg, rgba(219,253,244,1) 0%, rgba(247,253,253,1) 50%)',
  },
  {
    heading: 'Api Integration',
    subHeading: 'Seamless integration for your business growth. ',
    imageSrc: '/assets/root/home/business-api.png',
    alt: 'home',
    gradient: 'linear-gradient(75deg, rgba(255,239,222,1) 0%, rgba(255,255,249,1) 50%)',
  },
];

export default function BusinessAccount() {
  return (
    <div className="mx-auto mt-8 max-w-8xl px-6 py-16 sm:mt-12 sm:px-10 lg:px-12">
      {/* Tablet Image */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          {/* Heading */}
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 font-spaceGrotesk text-sm font-semibold text-primary-500">
            Business Account
          </span>
          <h2 className="mb-2 font-spaceGrotesk text-3xl font-bold text-gray-900">
            Pilla Pay for Business Account
          </h2>
          <p className="mx-auto max-w-2xl font-inter text-gray-800 md:text-lg">
            Get paid by anyone, anytime and anywhere with a single integration.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/assets/root/home/business-tablet.png"
              alt="smilingWoman"
              width={700}
              height={700}
            />
          </div>
        </div>

        {/* Card */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 md:gap-16">
          {solutionData.map((data) => (
            <div
              className="rounded-lg px-6 pt-8 shadow-md"
              key={data.alt}
              style={{
                background: data.gradient,
              }}
            >
              <h2 className="mb-2 font-spaceGrotesk text-2xl font-bold">{data.heading}</h2>
              <p className="mb-6 font-inter text-gray-800">{data.subHeading}</p>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src={data.imageSrc}
                    alt={data.alt}
                    width={400}
                    height={400}
                    className="relative z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
