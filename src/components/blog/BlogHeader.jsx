import { Tag, User, MessageSquare } from "lucide-react";

export const BlogHeader = ({
  title,
  date,
  category,
  author,
  commentsCount,
  mainImage,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
    <div className="relative">
      <img src={mainImage} alt={title} className="w-full h-auto object-cover" />
      <div className="absolute bottom-4 right-4 bg-green text-white text-sm font-semibold px-4 py-2 rounded-md">
        {date}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
        <span className="flex items-center">
          <Tag size={16} className="mr-1" /> {category}
        </span>
        <span className="flex items-center">
          <User size={16} className="mr-1" /> {author}
        </span>
        <span className="flex items-center">
          <MessageSquare size={16} className="mr-1" /> {commentsCount} Comments
        </span>
      </div>
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    </div>
  </div>
);
