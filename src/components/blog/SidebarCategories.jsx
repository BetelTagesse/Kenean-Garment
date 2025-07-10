import { ChevronRight } from "lucide-react";

const SidebarCategories = ({ categories }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">
      Categories
    </h3>
    <ul className="space-y-3">
      {categories.map((cat, index) => (
        <li
          key={index}
          className="flex justify-between items-center text-gray-700 hover:text-green-600 transition-colors duration-200"
        >
          <a href="#" className="flex items-center">
            <ChevronRight size={16} className="mr-2 text-green-500" />{" "}
            {cat.name}
          </a>
          <span className="text-gray-500">({cat.count})</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarCategories;
