"use client";

const SidebarPopularTags = ({ tags }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Popular Tags</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="text-sm px-3 py-1 bg-gray-200 rounded-full hover:bg-green hover:text-white transition"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default SidebarPopularTags;
