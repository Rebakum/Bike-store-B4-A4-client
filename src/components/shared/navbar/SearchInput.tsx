import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ onClose }: { onClose: () => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const navigate = useNavigate();

  // Focus the input field when the component is mounted
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Debounce search input to limit API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Adjust delay as needed (500ms here)

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (debouncedQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(debouncedQuery.trim())}`);
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-12 bg-[#8E1616] mx-auto container p-12 z-[9999] flex flex-col items-center justify-center px-4">
      {/* Close Button */}
      <button
        className="absolute text-gray-600 top-4 right-4 hover:text-black"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="relative w-full max-w-md">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 pl-10 pr-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E1616]"
        />
        <Search className="absolute top-2.5 left-3 text-gray-500 w-5 h-5" />
      </form>
    </div>
  );
};

export default SearchInput;
