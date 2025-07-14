"use client";

import { Search } from "lucide-react";

const SidebarSearch = () => (
  <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Search</h3>
    <div className="flex items-center border rounded overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3 py-2 focus:outline-none"
      />
      <button className="bg-green px-4 py-2 text-white">
        <Search size={20} />
      </button>
    </div>
  </div>
);

export default SidebarSearch;
