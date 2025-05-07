import { X } from "lucide-react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  onClose?: () => void;
}

const SearchInput = ({ onClose }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      if (onClose) onClose(); // close after search
    }
  };

  return (
    <div className="flex items-center border-2 border-[#FF541F] rounded-full px-4 py-2 gap-2 bg-white">
      <form onSubmit={handleSearch} className="flex items-center w-full gap-2">
        <input
          type="text"
          placeholder="Search by name, model, or brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
        />
        <button type="submit" className="text-xl text-orange-500">
          <IoSearchSharp />
        </button>
      </form>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-red-500"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
