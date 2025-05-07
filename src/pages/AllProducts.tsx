import LoadingSkelton from "@/components/shared/LoadingSkelton";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FieldValues } from "react-hook-form";
import { BiCart } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import img8 from "../assets/Banner-image/image/bike- banner.8.jpg";
export default function AllProducts() {
  const dispatch = useAppDispatch();

  // Filter State
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    inStock: "",
    minPrice: "",
    maxPrice: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8; // Items per page

  // Handle filter changes
  const handleFilterChange = (e: FieldValues) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Construct API Query Object
  const query = useMemo(() => {
    const params: Record<string, string> = {
      page: currentPage.toString(),
      limit: limit.toString(),
    };
    if (filters.searchTerm) params.searchTerm = filters.searchTerm;
    if (filters.category) params.category = filters.category;
    if (filters.inStock)
      params.inStock = filters.inStock === "In Stock" ? "true" : "false";
    if (filters.minPrice) params.minPrice = filters.minPrice;
    if (filters.maxPrice) params.maxPrice = filters.maxPrice;
    return params;
  }, [filters, currentPage]);

  // Fetch Data with Filters
  const { data, isLoading } = useAllProductsQuery(query);
  const totalPages = data?.meta?.totalPage || 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) {
    return <LoadingSkelton />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="">
        <Helmet>
          <title>All Products - Bike Shop || Online Delivary</title>
        </Helmet>
      </div>
      <div className="container px-4 py-24 mx-auto md:px-0">
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
              <span> All Products</span>
            </nav>

            <h1 className="mb-3 font-bold uppercase lg:text-4xl text-start text-gray-50">
              All Products
            </h1>
            {/* Search and Filters */}
            <div className="grid grid-cols-1 gap-1 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              <input
                type="text"
                name="searchTerm"
                placeholder="Search by brand, name, or category"
                className="flex-1 p-2 border border-gray-300 rounded-md"
                value={filters.searchTerm}
                onChange={handleFilterChange}
              />

              <select
                name="category"
                className="p-2 border border-gray-300 rounded-md"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="">All Categories</option>
                <option value="Mountain">Mountain</option>
                <option value="Road">Road</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>

              <select
                name="inStock"
                className="p-2 border border-gray-300 rounded-md"
                value={filters.inStock}
                onChange={handleFilterChange}
              >
                <option value="">All Availability</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min Price"
                  className="w-24 p-2 border border-gray-300 rounded-md"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <span> - </span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max Price"
                  className="w-24 p-2 border border-gray-300 rounded-md"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-12 px-4 py-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:px-8">
          {data?.data?.map((product) => (
            <div
              key={product?._id}
              className="overflow-hidden text-center transition-all bg-white shadow cursor-pointer card hover:shadow-lg hover:rounded-md"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full transition-all duration-300 cursor-pointer h-44"
                />
                <Badge
                  className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold ${
                    product?.inStock
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>

                <div className="">
                  <Link to={`/details/${product._id}`} className="">
                    <button className="absolute bottom-0 left-0 hidden w-full p-4 font-normal text-white bg-black view-btn bg-opacity-80">
                      <div className="flex justify-center gap-2">
                        <div className="mt-[5px]">
                          <TbListDetails />
                        </div>
                        <div className="capitalize ">view details</div>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-2 p-3">
                <h2 className="text-base font-bold ">{product.name}</h2>
                <p className="text-sm text-gray-600">Model: {product.model}</p>
                <p className="text-lg font-medium text-gray-800">
                  {" "}
                  <span className="font-bold text-[#f43307c2] uppercase">
                    bdt {product.price}
                  </span>
                </p>

                <div className="flex justify-center">
                  <button
                    className={`py-2 px-4 rounded-md ${
                      !product?.inStock
                        ? "bg-gray-400 cursor-not-allowed flex justify-center w-fit gap-2 py-2 px-4 text-sm font-medium text-white"
                        : "flex justify-center w-fit gap-2 py-2 px-4 text-sm font-medium text-black transition-all bg-white border-2 hover:bg-black hover:text-white"
                    } transition-all`}
                    disabled={!product?.inStock}
                    onClick={() =>
                      dispatch(addToCart({ ...product, selectQuantity: 1 }))
                    }
                  >
                    <div className="">
                      <BiCart className="text-lg mt-[2px]" />
                    </div>
                    <div className="uppercase ">add to cart</div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data?.data?.length === 0 && (
          <div className="mt-8 text-center text-gray-500">
            No products match your search or filter criteria.
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 py-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-2 text-white transition-all duration-300 bg-teal-500 rounded-lg hover:bg-teal-600 disabled:bg-gray-600"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-black">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-2 text-white transition-all duration-300 bg-teal-500 rounded-lg hover:bg-teal-600 disabled:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
