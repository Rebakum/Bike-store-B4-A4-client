import brand from "@/assets/images/logo/Bike_Shop_Logo.png";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-4 py-10 font-medium text-white bg-stone-900 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <img src={brand} alt="Bike Shop Logo" className="w-40 rounded-md" />
            <p className="text-sm leading-relaxed text-gray-400">
              We are passionate about providing top-quality bikes and
              accessories to our customers. Visit us for the best riding
              experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61554784244564"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/+8801914163150"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mst-rebeka-sultana-reba05/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF0000] transition"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/bikes" className="hover:text-white">
                  Mountain Bikes
                </Link>
              </li>
              <li>
                <Link to="/bikes" className="hover:text-white">
                  Road Bikes
                </Link>
              </li>
              <li>
                <Link to="/bikes" className="hover:text-white">
                  Electric Bikes
                </Link>
              </li>
              <li>
                <Link to="/bikes" className="hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Dhaka, Bangladesh</li>
              <li>Phone: (+880) 01994361085</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:bikeShop25@gmail.com"
                  className="hover:text-white"
                >
                  bikeShop25@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 mt-10 text-sm text-center text-gray-400 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Bike Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
