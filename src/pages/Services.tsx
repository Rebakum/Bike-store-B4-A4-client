import serviceImage1 from "@/assets/images/servicesImage/serviceImage-1.jpg";
import serviceImage3 from "@/assets/images/servicesImage/serviceImage-2.jpeg";
import serviceImage4 from "@/assets/images/servicesImage/serviceImage-3.jpg";
import serviceImage2 from "@/assets/images/servicesImage/serviceImage-6.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import img8 from "../assets/Banner-image/image/bike- banner.8.jpg";
import FAQPage from "./FAQPage";

export default function Services() {
  return (
    <div className="container py-20 mx-auto bg-matteWhite text-darkBlue">
      {/* Helmet for Page Title */}
      <Helmet>
        <title>Services - Bike Shop || Online Delivery</title>
      </Helmet>

      {/* Header */}
      <div className="relative h-60">
        <img
          src={img8}
          alt="bike-banner"
          className="absolute top-0 left-0 z-0 object-cover w-full h-60"
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
              <span className="absolute uppercase left-0 -bottom-0.5 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
            </div>
            <span>›</span>
            <span>Services</span>
          </nav>

          <h1 className="mb-3 text-4xl font-bold uppercase text-start text-gray-50">
            Our Services
          </h1>
        </div>
      </div>

      {/* Services Grid (moved outside of header) */}
      <div className="grid grid-cols-1 gap-4 px-10 mt-10 lg:grid-cols-2 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden transition duration-300 transform bg-white shadow-lg group rounded-2xl hover:-translate-y-2"
          >
            {/* Service Image */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-56"
              />
              <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-50"></div>
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h2 className="mb-2 text-xl font-semibold text-black">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <FAQPage />
    </div>
  );
}
const services = [
  {
    title: "Custom Bike Design",
    description:
      "Get a personalized bike that reflects your personality. Choose from unique designs, parts, and colors.",
    image: serviceImage1,
  },
  {
    title: "Repair & Maintenance",
    description:
      "Keep your bike in top condition with expert repair and maintenance services by certified technicians.",
    image: serviceImage2,
  },
  {
    title: "Performance Upgrades",
    description:
      "Enhance your bike's performance with premium parts and accessories for speed and endurance.",
    image: serviceImage3,
  },
  {
    title: "Performance Upgrades",
    description:
      "Enhance your bike's performance with premium parts and accessories for speed and endurance.",
    image: serviceImage4,
  },
];
