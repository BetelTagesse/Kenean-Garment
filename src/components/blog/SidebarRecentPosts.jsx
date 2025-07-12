import { Calendar } from "lucide-react";

export const SidebarRecentPosts = ({ posts }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">
      Recent Posts
    </h3>
    <div className="space-y-6">
      {posts.map((post, index) => (
        <div key={index} className="flex items-start space-x-3">
          <img
            src={post.image}
            alt={post.title}
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
          <div>
            <h4 className="text-gray-800 font-medium hover:text-green-600 transition-colors duration-200">
              {post.title}
            </h4>
            <p className="text-gray-500 text-sm flex items-center mt-1">
              <Calendar size={14} className="mr-1" /> {post.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
