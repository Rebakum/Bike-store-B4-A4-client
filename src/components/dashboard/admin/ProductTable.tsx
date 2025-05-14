import Loading from "@/components/Loading";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import AddProduct from "./AddProduct";
import EditProductDetails from "./EditProductDetails";

export function ProductTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 6;

  const { isLoading, data, isError } = useAllProductsQuery({
    limit,
    page,
  });

  const filteredData = data?.data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const dataLength = filteredData?.length || 0;
  const totalProducts = data?.meta?.total || 0;
  const totalPages = Math.ceil(totalProducts / limit);

  if (isLoading) return <Loading />;
  if (isError)
    return <p className="text-center text-red-500">Failed to load products.</p>;

  return (
    <div className="relative px-10 overflow-x-auto shadow-md sm:rounded-lg min-h-[400px]">
      <div className="flex items-center justify-between gap-5">
        <input
          className="p-2 my-3 text-black border-2 border-black rounded-md"
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddProduct />
      </div>

      <table className="w-full text-sm text-center text-gray-500 rtl:text-right">
        <thead className="text-xs uppercase bg-black text-gray-50">
          <tr>
            <th className="px-3 py-3">Image</th>
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Brand</th>
            <th className="px-3 py-3">Category</th>
            <th className="px-3 py-3">Price</th>
            <th className="px-3 py-3">Quantity</th>
            <th className="px-3 py-3">In Stock</th>
            <th className="px-3 py-3">Action</th>
          </tr>
        </thead>

        {dataLength > 0 && (
          <tbody className="divide-y divide-gray-200">
            {filteredData?.map((item, index) => (
              <tr
                key={index}
                className="h-10 border-b border-gray-200 odd:bg-white even:bg-gray-50"
              >
                <th className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
                  <img
                    src={item.image}
                    className="object-cover w-8 h-8 rounded-full"
                    alt="product"
                  />
                </th>
                <td className="px-3 py-2">{item?.name}</td>
                <td className="px-3 py-2">{item?.brand}</td>
                <td className="px-3 py-2">{item?.category}</td>
                <td className="px-3 py-2">{item?.price}</td>
                <td className="px-3 py-2">{item?.quantity}</td>
                <td className="px-3 py-2">
                  {item?.quantity === 0 ? (
                    <FaTimes className="w-4 mx-auto text-red-600" />
                  ) : (
                    <FaCheck className="w-4 mx-auto text-green-600" />
                  )}
                </td>
                <td className="px-3 py-4">
                  <EditProductDetails product={item} />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {dataLength === 0 && (
        <div className="w-full h-[150px] grid place-items-center text-2xl">
          <p>No products found</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${
                page === i + 1 ? "bg-black text-white" : ""
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
