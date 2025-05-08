import img8 from "@/assets/Banner-image/image/bike- banner.8.jpg";
import safetyHelment1 from "@/assets/images/home/safety-helment-4.png";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NewsletterTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];
  const [email, setEmail] = useState("");

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    // Example: Send to console or API
    console.log("Subscribed email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <section className="relative top-0 left-0 z-0 w-full my-16 ">
      {/* Newsletter Section */}
      <div className="pb-16 text-center bg-white ">
        <h4 className="mb-2 text-sm tracking-wide text-orange-500 uppercase">
          Newsletter
        </h4>
        <h2 className="text-3xl font-extrabold leading-tight text-center text-gray-900 md:text-5xl">
          Subscribe Today And Get <br /> 10% Off Your Order
        </h2>
        <div className="flex items-center justify-center my-3">
          <div className="w-12 h-0.5 bg-orange-500 mr-2"></div>
          <div className="w-3 h-3 rotate-45 bg-orange-500"></div>
          <div className="w-12 h-0.5 bg-orange-500 ml-2"></div>
        </div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-500">
          Premium bike maintenance, repairs, and customizations handled by
          experienced mechanics — built for riders who expect the best.
        </p>
        {/* Subscribe section */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-wrap items-center justify-center gap-2 mt-10"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="px-4 py-2 border border-gray-300 rounded-md w-72"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white transition bg-orange-500 rounded-md hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Testimonial Section */}
      <div className="relative hidden lg:inline-block container mx-auto bg-black h-[400px] z-10 rounded-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={img8}
          alt="Bike Banner"
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        />

        {/* Testimonial Content */}
        <div className="absolute z-20 px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="z-10 max-w-2xl">
            <FaQuoteLeft className="mx-auto text-4xl text-orange-500" />
            <p className="mt-4 text-lg font-light leading-relaxed transition-opacity duration-500 opacity-100">
              “{currentTestimonial.quote}”
            </p>
            <p className="mt-2 text-sm font-medium text-gray-300">
              - {currentTestimonial.name}
            </p>

            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={handlePrev}
                className="transition hover:text-orange-500"
              >
                <IoIosArrowBack size={24} />
              </button>
              <button
                onClick={handleNext}
                className="transition hover:text-orange-500"
              >
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional helmet image positioned on top */}
      <img
        src={safetyHelment1}
        alt="Cyclist"
        className="absolute left-0 top-0 w-[450px]  z-[100] opacity-90 "
      />
    </section>
  );
};

const testimonials = [
  {
    id: 1,
    name: "Nicholas Portman",
    quote:
      "Good selection of bikes and cycling accessories and great service with professional staff. I always enjoy visiting the store.",
  },
  {
    id: 2,
    name: "Emma Watson",
    quote:
      "Fantastic customer support and a wide range of products. Highly recommended!",
  },
  {
    id: 3,
    name: "Liam Johnson",
    quote:
      "Quick delivery and quality products. Very satisfied with my purchase.",
  },
  {
    id: 4,
    name: "Sophia Davis",
    quote:
      "The staff is knowledgeable and always ready to help. Great experience every time.",
  },
  {
    id: 5,
    name: "James Smith",
    quote: "Loved the in-store experience and the expert advice I received.",
  },
  {
    id: 6,
    name: "Isabella Wilson",
    quote:
      "Affordable prices, reliable service, and great selection. Will shop again.",
  },
];

export default NewsletterTestimonial;
