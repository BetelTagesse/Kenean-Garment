const SidebarPopularTags = ({ tags }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">
      Popular Tags
    </h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <a
          key={index}
          href="#"
          className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-200"
        >
          {tag}
        </a>
      ))}
    </div>
  </div>
);

export default SidebarPopularTags;
