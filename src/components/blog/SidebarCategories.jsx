"use client";

import { ChevronRight } from "lucide-react";

const SidebarCategories = ({ categories }) => (
  <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h3>
    <ul className="space-y-3">
      {categories.map((cat, idx) => (
        <li
          key={idx}
          className="flex justify-between text-sm text-gray-700 hover:text-green transition"
        >
          <span>
            <ChevronRight size={14} className="inline mr-1 text-green" />
            {cat.name}
          </span>
          <span>({cat.count})</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarCategories;
