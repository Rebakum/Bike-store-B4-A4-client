// ✅ File: PopularProducts.tsx

import { useState } from "react";

const PopularProducts = ({ products }) => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.brand
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Filter Input Fields */}
      <div className="flex flex-col gap-4 mb-6 md:flex-row">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search by brand"
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
      </div>

      {/* Filtered Products */}
      <div className="grid gap-4 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product._id} className="p-4 border rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-40 rounded"
            />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-[#8E1616] font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
