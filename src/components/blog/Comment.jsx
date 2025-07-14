"use client";

import Image from "next/image";
import { MessageSquare } from "lucide-react";

const Comment = ({ author, avatar, text }) => (
  <div className="flex gap-4 mb-6">
    <Image
      src={avatar}
      alt={author}
      className="w-14 h-14 rounded-full object-cover"
    />
    <div className="bg-gray-100 p-4 rounded-lg flex-1">
      <p className="font-semibold text-sm text-gray-800">{author}</p>
      <p className="text-sm text-gray-600 mt-1">{text}</p>
      <button className="text-green-600 text-xs mt-2 flex items-center hover:underline">
        <MessageSquare size={12} className="mr-1" /> Reply
      </button>
    </div>
  </div>
);

export default Comment;
