import { Search } from "lucide-react";

const SidebarSearch = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">
      Search
    </h3>
    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-l-lg"
      />
      <button className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors duration-200 rounded-r-lg">
        <Search size={20} />
      </button>
    </div>
  </div>
);

export default SidebarSearch;
