export default function Solutions() {
  return (
    <div className="container mx-auto mt-12 px-6 py-8 sm:px-8 md:mt-20 lg:px-10">
      <div className="ml-2">
        <h1 className="mb-2 font-spaceGrotesk text-3xl font-bold">Explore Our Solutions</h1>
        <p className="mb-8 w-[70%] font-inter text-lg text-gray-600">
          Open a personal or business account - to pay your rents, save & invest towards your dream
          that matter projects, collect payments, and smarten your real estate income with Pilla
          finance.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="h-48 bg-purple-200"></div>
          <div className="p-6">
            <h2 className="mb-2 font-spaceGrotesk text-xl font-semibold">Pilla Savings</h2>
            <p className="font-inter text-gray-600">
              Earn up to 16.5% returns per annum on your savings.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="h-48 bg-green-200"></div>
          <div className="p-6">
            <h2 className="mb-2 font-spaceGrotesk text-xl font-semibold">Pilla Rent Finance</h2>
            <p className="font-inter text-gray-600">
              Our rent finance solution ensures you don&apos;t default on your next rent payment. We
              are Pilla, you can rely on us.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="h-48 bg-yellow-200"></div>
          <div className="p-6">
            <h2 className="mb-2 font-spaceGrotesk text-xl font-semibold">Pilla Invest</h2>
            <p className="font-inter text-gray-600">
              Earn up to 35% returns per annum on your investments.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="h-48 bg-red-200"></div>
          <div className="p-6">
            <h2 className="mb-2 font-spaceGrotesk text-xl font-semibold">
              Pilla Construction Finance
            </h2>
            <p className="font-inter text-gray-600">
              Bid farewell to building project delays by embracing our tailored construction
              finance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
