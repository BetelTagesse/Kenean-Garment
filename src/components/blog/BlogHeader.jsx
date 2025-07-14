"use client";

import Image from "next/image";
import { Tag, User, MessageSquare } from "lucide-react";

const BlogHeader = ({
  title,
  mainImage,
  date,
  category,
  author,
  commentsCount,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
    <Image src={mainImage} alt={title} className="w-full h-auto object-cover" />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
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
      <p className="text-sm text-gray-400 mt-2">📅 {date}</p>
    </div>
  </div>
);

export default BlogHeader;
