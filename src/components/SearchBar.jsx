import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchKey("Enter");
      // Supposed to get whatever Search is
    }
  };

  return (
    <div className="flex items-center justify-center mb-24">
      <div className="flex rounded">
        <input
          type="text"
          className="md:min-w-[28rem] px-4 py-2 text-black bg-white rounded-s-lg w-full"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="px-4 text-white bg-black rounded-e-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
