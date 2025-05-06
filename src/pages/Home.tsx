import Banner from "@/components/home/Banner";
import BikeDesign from "@/components/home/BikeDesign";
import BikeService from "@/components/home/BikeService";
import NewProducts from "@/components/home/NewProducts";
import OurFacilityFeatures from "@/components/home/OurFacilityFeatures";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      {/* title */}
      <div className="">
        <Helmet>
          <title>Home - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <div className="">
        <Banner />

        <OurFacilityFeatures />

        <BikeDesign />

        <div className="container mx-auto my-16 ">
          <div className="text-center ">
            <h5 className="text-center uppercase text-[#E8C999]">
              Check it out
            </h5>
            <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
              Featured Bikes
            </h2>
            <div className="flex items-center justify-center p-4">
              <div className="w-12 h-0.5 bg-[#8E1616] mr-2"></div>
              <div className="w-3 h-3 rotate-45 bg-[#8E1616]"></div>
              <div className="w-12 h-0.5 bg-[#8E1616] ml-2"></div>
            </div>
            <p className="max-w-xl mx-auto mt-3 text-lg text-gray-500 bg:">
              Discover our top-rated bikes – handpicked for performance, style,
              and innovation.
            </p>
          </div>

          <NewProducts />
          <div className="flex items-center justify-center ">
            <Link to="/bikes">
              <button className=" flex px-6 py-3 mt-6 text-sm font-semibold text-white transition bg-[#8E1616] rounded-lg shadow-md hover:bg-red-700">
                VIEW ALL
                <ArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <div>
          <BikeService />
        </div>
      </div>
    </div>
  );
};

export default Home;
