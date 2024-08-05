import Image from 'next/image';

const solutionData = [
  {
    heading: 'Pilla Saving',
    subHeading: 'Earn up to 16.5% returns per annum on your savings.',
    imageSrc: '/assets/home/solution-locker.png',
    alt: 'locker',
    gradient: 'linear-gradient(75deg, rgba(223,222,254,1) 0%, rgba(250,250,255,1) 50%)',
  },
  {
    heading: 'Pilla Rent Finance',
    subHeading:
      'Our rent finance solution ensures you don’t default on your next rent payment. We are Pilla, you can rely on us.',
    imageSrc: '/assets/home/solution-home.png',
    alt: 'home',
    gradient: 'linear-gradient(75deg, rgba(215,248,239,1) 0%, rgba(249,255,255, 1) 50%)',
  },
  {
    heading: 'Pilla Invest',
    subHeading: 'Earn up to 35% returns per annum on your investments.',
    imageSrc: '/assets/home/solution-coin.png',
    alt: 'coin',
    gradient: 'linear-gradient(75deg, rgba(255,254,228,1) 0%, rgba(255,255,249,1) 50%)',
  },
  {
    heading: 'Pilla Construction Finance',
    subHeading:
      'Bid farewell to building projects delays by embracing our tailored construction finance.',
    imageSrc: '/assets/home/solution-construction.png',
    alt: 'construction',
    gradient: 'linear-gradient(75deg, rgba(233,233,233,1) 0%, rgba(255,255,255,1) 50%)',
  },
  {
    heading: 'Pilla Pay',
    subHeading:
      'From rent collections to dream homes payments, land use charge and utilities, we simplify it all. Join us for effortless transactions today.',
    imageSrc: '/assets/home/solution-money.png',
    alt: 'money',
    gradient: 'linear-gradient(75deg, rgba(255,239,222,1) 0%, rgba(255,255,249,1) 50%)',
  },
];

export default function Solutions() {
  return (
    <div className="mx-auto mt-12 max-w-8xl px-6 py-8 sm:px-10 md:mt-24 lg:mt-28 lg:px-12">
      <div className="ml-1 flex flex-col items-start sm:items-center md:items-start">
        {/* Solution Heading */}
        <h1 className="mb-2 text-left font-spaceGrotesk text-[1.7rem] font-bold sm:text-center sm:text-3xl md:text-left">
          Explore Our Solutions
        </h1>
        <p className="mb-12 w-[90%] text-left font-inter text-lg text-gray-800 sm:text-center md:w-1/2 md:text-left">
          Open a personal or business account - to pay your rents, save & invest towards your dream
          that matter projects, collect payments, and smarten your real estate income with Pilla
          finance.
        </p>
      </div>

      {/* Solution Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
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
  );
}
