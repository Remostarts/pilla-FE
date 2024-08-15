import Image from 'next/image';

const values = [
  'Treat people with respect',
  'Build a trusted brand',
  'Lead with innovation',
  'Pay attention to detail',
  'Think big. Act swiftly.',
];

export default function OurValues() {
  return (
    <section className="mt-12 md:mt-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="md:w-1/2">
            {/* Heading */}
            <h2 className="mb-4 font-spaceGrotesk text-2xl font-bold lg:text-3xl">Our Values</h2>
            <p className="mb-6 font-inter text-lg text-gray-800 lg:text-xl xl:mb-8">
              We&apos;re a deeply mission-driven company, and these are the core ideas we return to
              when we make decisions.
            </p>

            {/* Values list */}
            <ul className="space-y-2 lg:space-y-3 xl:space-y-5">
              {values.map((value, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 font-spaceGrotesk font-medium text-gray-600 lg:text-xl"
                >
                  <Image
                    src="/assets/root/about-us/round-tick.svg"
                    alt="round-tick"
                    width={20}
                    height={20}
                  />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Values Image */}
          <div className="md:w-1/2">
            <Image
              src="/assets/root/about-us/our-values.png"
              alt="our-values"
              width={800}
              height={600}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
