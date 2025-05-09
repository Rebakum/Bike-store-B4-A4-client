import Loading from "@/components/Loading";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import AddProduct from "./AddProduct";
import EditProductDetails from "./EditProductDetails";
export function ProductTable() {
  const { isLoading, data } = useAllProductsQuery(undefined);

  const [search, setSearch] = useState("");

  const filteredData = data?.data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const dataLength = filteredData?.length;
  if (isLoading) return <Loading />;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <div className="flex items-center justify-between gap-5 pr-1">
        <input
          className="p-2 my-3 text-black border-2 border-black rounded-md"
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddProduct />
      </div>
      <table className="w-full text-sm text-center text-gray-500 rtl:text-right ">
        <thead className="text-xs text-center uppercase bg-black text-gray-50 ">
          <tr>
            <th scope="col" className="px-3 py-3">
              Image
            </th>
            <th scope="col" className="px-3 py-3">
              Name
            </th>
            <th scope="col" className="px-3 py-3">
              Brand
            </th>
            <th scope="col" className="px-3 py-3">
              Category
            </th>
            <th scope="col" className="px-3 py-3">
              Price
            </th>
            <th scope="col" className="px-3 py-3">
              Quantity
            </th>
            <th scope="col" className="px-3 py-3">
              In Stock
            </th>
            <th scope="col" className="px-3 py-3">
              Action
            </th>
          </tr>
        </thead>
        {(dataLength as number) > 0 && (
          <tbody>
            {filteredData?.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 odd:bg-white even:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <img
                    src={item.image}
                    className="w-8 h-8 rounded-full"
                    alt="product Image"
                  />
                </th>
                <td className="px-3 py-4">{item?.name}</td>
                <td className="px-3 py-4">{item?.brand}</td>
                <td className="px-3 py-4"> {item?.category}</td>
                <td className="px-3 py-4">{item?.price}</td>
                <td className="px-3 py-4">{item?.quantity}</td>
                <td className="px-3 py-4">
                  {item?.quantity === 0 ? (
                    <FaTimes className="w-4 text-red-500" />
                  ) : (
                    <FaCheck className="w-4 text-green-500" />
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
        <div className="w-full h-[150px] grid place-items-center text-2xl ">
          <p>Not Found any Product</p>
        </div>
      )}
    </div>
  );
}
