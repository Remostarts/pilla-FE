import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="mx-auto mt-12 flex max-w-8xl flex-col-reverse items-center gap-8 px-0 sm:px-10 md:flex-row md:justify-between lg:mt-16 lg:px-12">
      <div className="w-fit px-6 sm:px-0">
        <Image
          src="/assets/root/home/welcome-woman.png"
          alt="smilingWoman"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col gap-2 p-8 sm:text-center md:w-1/2 md:text-left">
        <h1 className="font-spaceGrotesk text-3xl font-bold">Welcome to Pilla</h1>
        <div>
          <p className="mb-12 w-full font-inter text-lg text-gray-800 lg:text-xl lg:leading-8">
            Here we tackle the significant hurdles prevalent throughout the real estate value chain,
            from navigating financing obstacles to ensuring investment safety and optimizing payment
            services, we&apos;re dedicated to providing tailored solutions to these challenges.
          </p>
          <Link
            className="rounded-full bg-primary-500 px-10 py-4 font-inter text-sm text-white transition duration-300 hover:bg-primary-600 sm:text-base"
            href="/"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
