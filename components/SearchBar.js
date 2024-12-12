import { useState } from "react";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi"; // Büyüteç simgesi için

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() === "") return; // Boş sorgu için işlem yapma
    router.push(`/search?q=${encodeURIComponent(query)}`); // Arama sayfasına yönlendir
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Enter tuşu ile arama
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search articles..."
        className="flex-grow bg-transparent outline-none text-gray-700 dark:text-white placeholder-gray-500"
      />
      <button
        onClick={handleSearch}
        className="text-gray-500 hover:text-blue-500"
      >
        <FiSearch size={20} />
      </button>
    </div>
  );
}
