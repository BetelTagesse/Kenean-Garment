"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  MessageSquare,
  Tag,
  User,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

// --- Placeholder Data (Replace with actual data fetching from API/CMS) ---
const blogPostData = {
  id: "1",
  title: "There are many variations of passages of Lorem Ipsum available",
  mainImage: "https://placehold.co/1000x600/D1D5DB/1F2937?text=Blog+Post+Image",
  date: "25 MAY",
  category: "Textile Industry",
  author: "Francis Lazoe",
  commentsCount: 10,
  content: `
    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.</p>
    <p>That is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it is that a more-or-less normal distribution of letter.</p>
    <blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-600 bg-green-50 p-4 rounded-lg my-6">
      “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it is that a more-or-less normal distribution.”
      <p class="font-semibold mt-2">- Peter W Willis</p>
    </blockquote>
    <h3 class="text-2xl font-bold text-gray-800 mb-4">Sed ut perspiciatis unde omnis iste natus erro</h3>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <img src="https://placehold.co/600x400/C0D8B4/1F2937?text=Content+Image+1" alt="Content Image 1" class="w-full h-auto rounded-lg shadow-md" />
      <img src="https://placehold.co/600x400/A3B894/1F2937?text=Content+Image+2" alt="Content Image 2" class="w-full h-auto rounded-lg shadow-md" />
    </div>
    <ul class="list-none space-y-2 mb-6">
      <li class="flex items-center text-gray-700"><ChevronRight size={18} className="text-green-500 mr-2" /> There are many variations of passages</li>
      <li class="flex items-center text-gray-700"><ChevronRight size={18} className="text-green-500 mr-2" /> That are many variations of layout</li>
      <li class="flex items-center text-gray-700"><ChevronRight size={18} className="text-green-500 mr-2" /> Majority are many variations of readable</li>
      <li class="flex items-center text-gray-700"><ChevronRight size={18} className="text-green-500 mr-2" /> Fact are many variations of content</li>
      <li class="flex items-center text-gray-700"><ChevronRight size={18} className="text-green-500 mr-2" /> Point are many variations of distracted</li>
    </ul>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga</p>
  `,
  tags: ["Fabric", "Cotton", "Industry"],
};

const categoriesData = [
  { name: "Textile Industry", count: 10 },
  { name: "Digital Printing", count: 20 },
  { name: "Quality Engineering", count: 15 },
  { name: "Modern Technology", count: 5 },
  { name: "Fabric Type", count: 3 },
];

const recentPostsData = [
  {
    image: "https://placehold.co/50x50/cccccc/000000?text=P1",
    title: "There are many variations available",
    date: "Feb 25, 2023",
  },
  {
    image: "https://placehold.co/50x50/cccccc/000000?text=P2",
    title: "There are many variations available",
    date: "Feb 25, 2023",
  },
  {
    image: "https://placehold.co/50x50/cccccc/000000?text=P3",
    title: "There are many variations available",
    date: "Feb 25, 2023",
  },
];

const popularTagsData = [
  "Textile",
  "Industry",
  "Quality",
  "Printing",
  "Fabric",
];

const commentsData = [
  {
    id: "c1",
    author: "Seth L Turner",
    avatar: "https://placehold.co/50x50/D1D5DB/1F2937?text=SLT",
    text: "This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.",
  },
  {
    id: "c2",
    author: "Seth L Turner",
    avatar: "https://placehold.co/50x50/D1D5DB/1F2937?text=SLT",
    text: "This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.",
  },
  {
    id: "c3",
    author: "Seth L Turner",
    avatar: "https://placehold.co/50x50/D1D5DB/1F2937?text=SLT",
    text: "This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.",
  },
];

// --- Sub-components ---

const BlogHeader = ({
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
      <div className="absolute bottom-4 right-4 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md">
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

const SidebarSearch = () => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3">
      Search
    </h3>
    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-l-lg"
      />
      <button className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors duration-200 rounded-r-lg">
        <Search size={20} />
      </button>
    </div>
  </div>
);

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

const SidebarRecentPosts = ({ posts }) => (
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

const Comment = ({ author, avatar, text }) => (
  <div className="flex items-start space-x-4 mb-6">
    <img
      src={avatar}
      alt={author}
      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-grow bg-gray-50 p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold text-gray-800">{author}</h4>
      <p className="text-gray-600 text-sm mt-1">{text}</p>
      <button className="text-green-600 text-sm mt-2 flex items-center hover:underline">
        <MessageSquare size={14} className="mr-1" /> Reply
      </button>
    </div>
  </div>
);

const CommentForm = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Leave a Reply</h3>
    <p className="text-gray-600 mb-6">
      Your email address will not be published.
    </p>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Website"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <textarea
        placeholder="Comment"
        rows="6"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      ></textarea>
      <button
        type="submit"
        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
      >
        POST COMMENT
      </button>
    </form>
  </div>
);

const BlogSinglePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header (Optional, based on your site's structure) */}
      <div className="bg-[#0A1A3A] text-white py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Blog Details</h1>
        <p className="text-green-500 text-lg sm:text-xl font-medium">
          Home / Blog / Details
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <BlogHeader
            title={blogPostData.title}
            mainImage={blogPostData.mainImage}
            date={blogPostData.date}
            category={blogPostData.category}
            author={blogPostData.author}
            commentsCount={blogPostData.commentsCount}
          />

          {/* Blog Post Content */}
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: blogPostData.content }} />
            {/* Tags and Share */}
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
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Comments ({commentsData.length})
            </h2>
            {commentsData.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>

          {/* Leave a Reply Form */}
          <CommentForm />
        </div>

        {/* Sidebar Area */}
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
