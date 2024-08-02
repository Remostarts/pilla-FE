import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
  return (
    <div className="-mt-10 flex flex-col-reverse items-center gap-10 px-6 pt-16 sm:px-8 lg:mt-16 lg:flex-row lg:justify-center lg:px-10">
      <div className="md:w-3/5 lg:w-1/2">
        <Image src="/assets/images/smiling-woman.png" alt="smilingWoman" width={400} height={400} />
      </div>
      <div className="p-8 md:w-[70%] lg:w-1/2">
        <p className="mb-12 font-inter text-lg text-gray-800 sm:text-xl lg:leading-8">
          Welcome to Pilla, Where we tackle the significant hurdles prevalent throughout the real
          estate value chain; from navigating financing obstacles to ensuring investment safety and
          optimizing payment services, we&apos;re dedicated to providing tailored solutions to these
          challenges.
        </p>
        <Link
          className="-ml-1 rounded-full bg-primary-500 px-10 py-4 font-inter text-sm text-white transition duration-300 hover:bg-primary-600 sm:text-base"
          href="/"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
