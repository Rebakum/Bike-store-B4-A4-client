import img8 from "@/assets/Banner-image/image/bike- banner.8.jpg";
import { Link } from "react-router-dom";
import BlogList from "./BlogsList";

const Blogs = () => {
  return (
    <section className="container px-4 mx-auto mb-10">
      <div className="relative rounded-lg h-60">
        <img
          src={img8}
          alt="bike- banner.8"
          className="top-0 left-0 z-0 object-cover w-full rounded-lg absolate h-60"
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
            <span>Blog</span>
          </nav>

          <h1 className="mb-3 text-4xl font-bold uppercase text-start text-gray-50">
            Our Blogs
          </h1>
        </div>
      </div>
      <BlogList />
    </section>
  );
};

export default Blogs;
