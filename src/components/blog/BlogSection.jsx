"use client";

import BlogHeader from "@/components/blog/BlogHeader";
import SidebarSearch from "@/components/blog/SidebarSearch";
import SidebarCategories from "@/components/blog/SidebarCategories";
import SidebarRecentPosts from "@/components/blog/SidebarRecentPosts";
import SidebarPopularTags from "@/components/blog/SidebarPopularTags";
import Comment from "@/components/blog/Comment";
import CommentForm from "@/components/blog/CommentForm";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

import {
  blogPostData,
  categoriesData,
  recentPostsData,
  popularTagsData,
  commentsData,
} from "./blogPageData";

export default function BlogSinglePage() {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#0A1A3A] text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Blog Details</h1>
        <p className="text-green mt-2">Home / Blog / Details</p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 px-4">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <BlogHeader {...blogPostData} />

          <div className="bg-white p-6 rounded-lg shadow text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: blogPostData.content }} />

            {/* Tags and Share */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2 text-sm mb-3 sm:mb-0">
                <span className="font-semibold text-gray-800">Tags:</span>
                {blogPostData.tags.map((tag, i) => (
                  <span key={i} className="text-gray-600 hover:text-green">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-800">Share:</span>
                <Facebook
                  size={20}
                  className="text-gray-600 hover:text-blue-600"
                />
                <Twitter
                  size={20}
                  className="text-gray-600 hover:text-blue-400"
                />
                <Linkedin
                  size={20}
                  className="text-gray-600 hover:text-blue-700"
                />
                <Instagram
                  size={20}
                  className="text-gray-600 hover:text-pink-500"
                />
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>
            {commentsData.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>

          {/* Comment Form */}
          <CommentForm />
        </div>

        {/* Right Sidebar */}
        <div>
          <SidebarSearch />
          <SidebarCategories categories={categoriesData} />
          <SidebarRecentPosts posts={recentPostsData} />
          <SidebarPopularTags tags={popularTagsData} />
        </div>
      </div>
    </div>
  );
}
