"use client";

import {
  blogPostData,
  categoriesData,
  recentPostsData,
  popularTagsData,
  commentsData,
} from "./blogData";
import BlogHeader from "./BlogHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarCategories from "./SidebarCategories";
import SidebarRecentPosts from "./SidebarRecentPosts";
import SidebarPopularTags from "./SidebarPopularTags";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  Twitter,
} from "lucide-react";

const BlogSinglePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#0A1A3A] text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Blog Details</h1>
        <p className="text-green-500 text-lg sm:text-xl font-medium">
          Home / Blog / Details
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <BlogHeader {...blogPostData} />

          <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: blogPostData.content }} />

            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2 mb-4 sm:mb-0">
                <span className="font-semibold text-gray-800 mr-2">Tags:</span>
                {blogPostData.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-green-600 text-sm"
                  >
                    {tag}
                    {index < blogPostData.tags.length - 1 ? "," : ""}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-800">Share:</span>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Comments ({commentsData.length})
            </h2>
            {commentsData.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>

          <CommentForm />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <SidebarSearch />
          <SidebarCategories categories={categoriesData} />
          <SidebarRecentPosts posts={recentPostsData} />
          <SidebarPopularTags tags={popularTagsData} />
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
