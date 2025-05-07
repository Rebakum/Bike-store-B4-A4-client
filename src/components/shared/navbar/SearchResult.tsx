import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useLocation } from "react-router-dom";
// import { IBikeRespoimport { Badge } from "@/components/ui/badge";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { BiCart } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query") || "";

  const { data, isLoading } = useAllProductsQuery({ searchTerm });

  if (isLoading) return <Loading />;

  return (
    <div className="h-screen p-6 my-10">
      <h1 className="my-4 text-2xl font-bold">Results for "{searchTerm}"</h1>
      {/* search product */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.map((product) => (
          <div
            key={product?._id}
            className="overflow-hidden text-center transition-all bg-white cursor-pointer card hover:shadow-lg hover:rounded-md"
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
        <div className="mt-6 text-center text-gray-500">
          No products found in this serach "{searchTerm}" .
        </div>
      )}
    </div>
  );
};

export default SearchResults;
