import Image from 'next/image';

export default function BusinessAccount() {
  return (
    <div className="mt-16 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <span className="mb-2 inline-block rounded-full bg-orange-100 px-3.5 py-2 font-spaceGrotesk text-xs font-semibold text-primary-500">
            Business Account
          </span>
          <h2 className="mb-2 font-spaceGrotesk text-3xl font-bold text-gray-900">
            Pilla Pay for Business Account
          </h2>
          <p className="mx-auto max-w-2xl font-inter text-lg text-gray-600">
            Get paid by anyone, anytime and anywhere with a single integration.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <Image src="/assets/images/tablet.png" alt="smilingWoman" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
}
