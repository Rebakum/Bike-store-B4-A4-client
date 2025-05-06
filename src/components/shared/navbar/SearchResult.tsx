// import { RootState } from "@/redux/store";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const SearchResults = () => {
//   const query = useSelector((state: RootState) => state.search.query);
//   interface Product {
//     _id: string;
//     name: string;
//     brand: string;
//   }

//   const [results, setResults] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (query) {
//       const fetchData = async () => {
//         setLoading(true);
//         setError(null);
//         try {
//           const res = await axios.get<Product[]>(
//             `/api/products?search=${query}`
//           );
//           setResults(res.data);
//         } catch (err) {
//           setError("An error occurred while fetching search results.");
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchData();
//     }
//   }, [query]);

//   return (
//     <div className="p-6">
//       <h2 className="mb-4 text-xl font-semibold">
//         Showing results for: <span className="text-red-600">{query}</span>
//       </h2>
//       {/* Display loading state */}
//       {loading && <p>Loading...</p>}
//       {/* Display error message if API call fails */}
//       {error && <p className="text-red-600">{error}</p>}

//       {/* Render products */}
//       {results.length > 0 && !loading ? (
//         <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {results.map((item) => (
//             <li key={item._id} className="p-4 border rounded-md shadow">
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-sm text-gray-600">Brand: {item.brand}</p>
//             </li>
//           ))}
//         </ul>
//       ) : !loading ? (
//         <p>No results found.</p>
//       ) : null}
//     </div>
//   );
// };

// export default SearchResults;
