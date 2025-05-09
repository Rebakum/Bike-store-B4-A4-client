import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import blogs from "./data";

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from blog data
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className=" bg-gray-50">
      <div className="container px-10 mx-auto">
        <h2 className="my-10 text-4xl font-bold text-gray-900 text-start">
          Latest Blog Posts
        </h2>

        {/* Search and Filter */}
        <div className="flex flex-col gap-4 mb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Search Blog
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title"
                className="px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              />
            </label>

            <label className="flex flex-col text-sm font-medium text-gray-700">
              Category
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:border-primary"
              >
                {categories.map((category, idx) => (
                  <option key={idx} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        {filteredBlogs.length ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-3"
            >
              {/* Left: Blog Content */}
              <div className="transition duration-300 bg-white shadow-lg md:col-span-2 rounded-xl hover:shadow-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-full h-64 rounded-t-xl"
                />
                <div className="flex flex-col justify-between p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-800">
                    {blog.title}
                  </h3>

                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white rounded-full bg-primary">
                    {blog.category}
                  </span>

                  <p className="mb-4 text-sm text-gray-600">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.author.image}
                        alt={blog.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        {blog.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaRegComment className="text-primary" />
                      <span>{blog.comments.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Tags + Gallery */}
              <div className="flex flex-col justify-start">
                {/* Tags */}
                <div className="mb-6">
                  <h1 className="mb-2 text-lg font-semibold">Tags</h1>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-700 bg-gray-200 rounded-full px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h1 className="mb-2 text-lg font-bold">Bike Gallery</h1>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {blog.gallery.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        alt={`Bike ${index + 1}`}
                        className="object-cover w-full h-24 rounded-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </section>
  );
};

export default BlogList;
