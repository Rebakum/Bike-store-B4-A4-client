import heroImg from "@/assets/images/new/aboutImg2.avif";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative ">
      <div className="container flex flex-col-reverse items-center justify-between px-4 py-20 mx-auto lg:flex-row">
        {/* Left Content */}
        <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Ride Better, Ride Smarter
          </h1>
          <p className="pb-10 text-lg text-gray-600">
            Discover premium bikes, expert services, and the ultimate riding
            experience tailored for every cyclist.Premium bikes & expert service
            for a smoother, faster, and more confident ride—only at BikeStore.
          </p>
          <Link to="/bikes">
            <button className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white transition bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
              Explore Bikes <ArrowRight className="ml-2" />
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImg}
            alt="Hero Bike"
            className="object-cover w-full shadow-lg rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
