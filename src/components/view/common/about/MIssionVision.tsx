import Image from 'next/image';

export default function MissionVision() {
  return (
    <section className="md:mt-8">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div className="space-y-6 md:space-y-8">
            <div className="mx-auto w-full">
              <Image
                src="/assets/png/our-mission.png"
                alt="our-mission"
                width={800}
                height={600}
                layout="responsive"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h1 className="mb-2 mt-1 font-spaceGrotesk text-2xl font-bold md:mb-4 md:text-3xl">
                Our Mission
              </h1>
              <p className="font-inter text-lg text-gray-800 lg:text-xl">
                We will be a Pilla of support for our clients and provide convenient financial
                solutions.
              </p>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="mx-auto w-full">
              <Image
                src="/assets/png/our-vision.png"
                alt="our-vision"
                width={800}
                height={600}
                layout="responsive"
                className="rounded-2xl"
              />
            </div>
            <div>
              <h1 className="mb-2 mt-1 font-spaceGrotesk text-2xl font-bold md:mb-4 md:text-3xl">
                Our Vision
              </h1>
              <p className="font-inter text-lg text-gray-800 lg:text-xl">
                Build the preferred real estate finance corporation, first in Nigeria, then West
                Africa, and then Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
