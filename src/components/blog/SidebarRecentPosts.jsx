"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";

const SidebarRecentPosts = ({ posts }) => (
  <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Recent Posts</h3>
    <div className="space-y-4">
      {posts.map((post, i) => (
        <div key={i} className="flex items-start gap-3">
          <Image
            src={post.image}
            alt={post.title}
            className="w-14 h-14 rounded object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{post.title}</p>
            <p className="text-xs text-gray-500 flex items-center mt-1">
              <Calendar size={14} className="mr-1" /> {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SidebarRecentPosts;
