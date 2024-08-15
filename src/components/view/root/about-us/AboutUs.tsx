import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            {/* Heading */}
            <span className="mb-6 inline-block rounded-full bg-orange-100 px-4 py-2 font-spaceGrotesk text-sm font-semibold text-primary-500">
              About Us
            </span>
            <h2 className="mb-6 font-spaceGrotesk text-3xl font-bold md:text-4xl">
              Join us as we pave the way for innovation and progress in real estate finance.
            </h2>

            {/* Avatars image */}
            <div className="-ml-1">
              <Image src="/assets/root/shared/avatars.png" width={170} height={170} alt="avatars" />
            </div>
          </div>
          <div>
            <h1 className="mb-6 mt-1 font-spaceGrotesk text-3xl font-bold">Welcome to Pilla</h1>
            <p className="mb-6 w-full font-inter text-lg text-gray-800 lg:text-xl lg:leading-8">
              Here we tackle the significant hurdles prevalent throughout the real estate value
              chain, from navigating financing obstacles to ensuring investment safety and
              optimizing payment services, we&apos;re dedicated to providing tailored solutions to
              these challenges.
            </p>
            <p className="w-full font-inter text-lg text-gray-800 lg:text-xl lg:leading-8">
              We&apos;re driven to empower individuals and businesses in the real estate industry
              with our comprehensive suite of financial solutions from savings and investments to
              rent finance, payment gateways, and construction finance which guarantees the very
              best returns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
