import avatar1 from "@/assets/avater-1.jpg";
import avatar2 from "@/assets/avater-2.jpg";
import slider2 from "@/assets/images/hero-image/slider2.jpg";

const OurSpecialService = () => {
  return (
    <section className="w-full py-10 bg-white md:px-8">
      <h1 className="pb-10 text-4xl">Try our special services</h1>
      <div className="grid items-start max-w-screen-xl gap-6 mx-auto md:grid-cols-4">
        {/* Customer Service Box */}
        <div className="p-5 space-y-10 border border-gray-300 rounded-lg hover:shadow-lg">
          <div className="flex flex-col items-center gap-3">
            <img
              src={avatar1}
              alt="Customer Service"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-center text-gray-800 ">
                Customer Service
              </h3>
              <p className="text-sm text-center text-gray-600">
                How to access your order, account, shipping information, and
                returns and exchanges.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-block px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Product Support Box */}
        <div className="p-5 space-y-10 border border-gray-300 rounded-lg hover:shadow-lg">
          <div className="flex flex-col items-center gap-3">
            <img
              src={avatar2}
              alt="Product Support"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-center text-gray-800 ">
                Product Support
              </h3>
              <p className="text-sm text-center text-gray-600">
                Learn what bike is right for you, sizing, valuable how-to
                information, and resources available.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-block px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="relative overflow-hidden rounded-lg shadow-lg md:col-span-2 h-[300px]">
          <a href="/bikes" className="relative block w-full h-full">
            <img
              src={slider2}
              alt="Promo"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 p-6 space-y-3 text-white">
              <div className="text-sm tracking-wide uppercase">
                Take 20% Off
              </div>
              <h2 className="text-2xl font-bold">One Full-Price Item</h2>
              <p className="text-sm">
                Use Code SPRINT20 For Year-End Holiday Shopping
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurSpecialService;
