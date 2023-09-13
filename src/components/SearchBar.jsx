import { useState } from "react";

export default function SearchBar({ getApi }) {
  const [search, setSearch] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Supposed to get whatever Search is
      getApi(search);
    }
  };

  const handleAPI = () => {
    getApi(search);
  };

  return (
    <div className="flex items-center justify-center mb-24">
      <div className="flex rounded">
        <input
          type="text"
          className="md:min-w-[28rem] px-4 py-2 text-black cursor-pointer bg-white rounded-s-lg w-full"
          placeholder="Search for any IP address or domain"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="px-4 text-white bg-black rounded-e-lg md:hover:bg-[#D3D3D3]"
          onClick={handleAPI}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
