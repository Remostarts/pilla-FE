import Image from 'next/image';

const reasons = [
  {
    title: 'We are future optimistic',
    description:
      "While stocks ride the rollercoaster of uncertainty, real estate stands tall as a beacon of stability and growth. It's not just an investment; it's a legacy you can touch, feel, and pass down to generations. At Pilla, we're here to guide you through this journey, empowering you to embrace a future filled with optimism and prosperity. Let's turn your dreams into concrete realities together.",
    image: '/assets/future-optimistic.jpg',
  },
  {
    title: 'We have herculean strength',
    description:
      "Understanding a construction project requires resilience. Dealing with contractors takes strength, and having a financially strong partner is vital at every stage. That's why you need us—we stay strong and reliable, supporting you through it all, ensuring we never falter under pressure, just like Hercules!",
    image: '/assets/herculean-strength.jpg',
  },
  {
    title: 'We have pioneering spirit.',
    description:
      "In the world of real estate, pioneers blaze trails, conquering uncertainty and doubt to uncover untapped opportunities. We're proud to be the financial platform dedicated to Nigeria's vibrant real estate sector, guiding its growth and development. At Pilla, we're not just a financial solutions provider; we're the heartbeat of the industry, serving renters, landlords, investors, developers, agents, and government agencies alike.",
    image: '/assets/pioneering-spirit.jpg',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="mb-12 font-spaceGrotesk text-2xl font-bold md:text-3xl">Why Choose Us?</h2>
        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center gap-8 md:flex-row">
              <div className="md:w-1/4">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="mb-4 text-2xl font-semibold">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
