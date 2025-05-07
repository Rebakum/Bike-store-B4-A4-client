import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img8 from "../assets/Banner-image/image/bike- banner.8.jpg";
import aboutImage2 from "../assets/image/bike-1.jpg";
import aboutImage from "../assets/image/bike-23.jpg";
import OurSpecialService from "./OurSpecialService";

export default function About() {
  return (
    <div className="py-12">
      <div className="">
        <Helmet>
          <title>About - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <div className="container px-4 mx-auto mt-20">
        <div className="relative w-full h-full rounded-lg lg:h-60">
          <img
            src={img8}
            alt="bike- banner.8"
            className="top-0 left-0 z-0 object-cover w-full h-full rounded-lg absolate lg:h-60"
          />
          <div className="absolute top-0 left-0 z-10 flex flex-col items-start justify-start p-10 rounded-lg">
            <nav className="flex items-center space-x-2 text-sm text-gray-100">
              <div className="relative group">
                <Link
                  to="/"
                  className="hover:text-[#8E1616] transition-colors duration-300"
                >
                  Homepage
                </Link>
                <span className="absolute  uppercase left-0 -bottom-0.5 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </div>
              <span>›</span>
              <span>about</span>
            </nav>

            <h1 className="mb-3 text-4xl font-bold uppercase text-start text-gray-50">
              Abouts us
            </h1>
          </div>
        </div>

        {/* Section with Image Background */}
        <div
          className="grid items-stretch grid-cols-1 gap-4 px-6 py-12 my-20 bg-fixed bg-center bg-cover rounded-lg shadow-lg lg:grid-cols-2"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          {/* Text Content */}
          <div className="p-6 h-[400px] flex flex-col justify-center shadow-lg  items-center  bg-gray-50 bg-opacity-30 rounded-t-full rounded-r-full overflow-hidden">
            <div className="p-6 h-[400px] flex flex-col justify-center shadow-lg  items-center  bg-gray-50 bg-opacity-20 rounded-t-full rounded-r-full overflow-hidden">
              <h2 className="text-2xl font-semibold text-secondary">
                Welcome to Bike Shop
              </h2>
              <p className="px-3 overflow-hidden leading-relaxed text-justify rounded-lg text-gray-950">
                Bike Shop is your one-stop destination for premium bicycles,
                accessories, and expert repair services. Based in Gazipur,
                Dhaka, Bangladesh, our mission is to promote cycling as a
                lifestyle choice by offering high-quality products and
                outstanding customer service.
              </p>
              <p className="px-3 leading-relaxed text-justify text-gray-950">
                Whether you're a professional cyclist, a weekend rider, or just
                looking for an eco-friendly way to commute, we've got something
                for everyone.
              </p>
              <p className="pl-3 leading-relaxed text-justify text-gray-950">
                Our knowledgeable staff is always ready to assist you in
                selecting the perfect bike or accessories. Your satisfaction is
                our priority!
              </p>
            </div>
          </div>

          {/* Image */}

          <img
            src={aboutImage2}
            alt="About Us"
            className="object-cover w-full h-full rounded-t-full rounded-l-full shadow-lg "
          />
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <h2 className="mb-3 text-2xl font-semibold text-black uppercase text-start">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 gap-8 my-10 lg:grid-cols-3">
            <div className="p-5 text-center border rounded-sm hover:shadow-lg ">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-orange-500 rounded-full ">
                🚴
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Wide Range of Products
              </h3>
              <p className="text-gray-600">
                From mountain bikes to accessories, we have everything you need
                for an amazing cycling experience.
              </p>
            </div>

            <div className="p-5 text-center border rounded-sm hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-orange-500 rounded-full y">
                🛠
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Expert Repair Services
              </h3>
              <p className="text-gray-600">
                Our skilled technicians handle all kinds of repairs and
                maintenance to keep your bike in top shape.
              </p>
            </div>

            <div className="p-5 text-center border rounded-sm hover:shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-orange-500 rounded-full ">
                ⭐
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness matters to us! We strive to provide the best
                service and support to all our customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <OurSpecialService />
    </div>
  );
}
