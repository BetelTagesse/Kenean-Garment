"use client";

import Image from "next/image";
import First from "@/images/sewing.jpg";
import Second from "@/images/designer.jpg";
import Third from "@/images/sewing.jpg";
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

// Blog post data
const blogPostData = {
  id: "1",
  title: "There are many variations of passages of Lorem Ipsum available",
  mainImage: First,
  date: "25 MAY",
  category: "Textile Industry",
  author: "Francis Lazoe",
  commentsCount: 10,
  tags: ["Fabric", "Cotton", "Industry"],
  content: `
    <p>There are many variations of passages of Lorem Ipsum available, but the majority...</p>
    <blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-600 bg-green-50 p-4 rounded-lg my-6">
      “It is a long established fact that a reader will be distracted by the layout.”
      <p class="font-semibold mt-2">- Peter W Willis</p>
    </blockquote>
    <h3 class="text-2xl font-bold text-gray-800 mb-4">Sed ut perspiciatis unde omnis iste natus erro</h3>
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure...</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <img src="/images/sewing.jpg" alt="Content Image 1" class="w-full h-auto rounded-lg shadow-md" />
      <img src="/images/designer.jpg" alt="Content Image 2" class="w-full h-auto rounded-lg shadow-md" />
    </div>
    <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
      <li>There are many variations of passages</li>
      <li>That are many variations of layout</li>
      <li>Majority are many variations of readable</li>
      <li>Fact are many variations of content</li>
      <li>Point are many variations of distracted</li>
    </ul>
    <p>At vero eos et accusamus et iusto odio dignissimos...</p>
  `,
};

// Sidebar Data
const categoriesData = [
  { name: "Textile Industry", count: 10 },
  { name: "Digital Printing", count: 20 },
  { name: "Quality Engineering", count: 15 },
  { name: "Modern Technology", count: 5 },
  { name: "Fabric Type", count: 3 },
];

const recentPostsData = [
  { image: First, title: "Chiffon Textiles Rising", date: "Feb 25, 2023" },
  { image: Second, title: "Digital Fabric Innovations", date: "Mar 10, 2023" },
  { image: Third, title: "Sustainable Yarn Trends", date: "Apr 5, 2023" },
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
    avatar: First,
    text: "This is a placeholder comment showcasing a typical client reply.",
  },
  {
    id: "c2",
    author: "Jane Doe",
    avatar: Second,
    text: "Insightful read! I appreciated the attention to fabric quality.",
  },
];

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

const SidebarSearch = () => (
  <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Search</h3>
    <div className="flex items-center border rounded overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3 py-2 focus:outline-none"
      />
      <button className="bg-green px-4 py-2 text-white">
        <Search size={20} />
      </button>
    </div>
  </div>
);

const SidebarCategories = ({ categories }) => (
  <div className="bg-white p-6 rounded-lg shadow mb-6">
    <h3 className="text-xl font-semibold mb-4 border-b pb-2">Categories</h3>
    <ul className="space-y-3">
      {categories.map((cat, idx) => (
        <li
          key={idx}
          className="flex justify-between text-sm text-gray-700 hover:text-green transition"
        >
          <span>
            <ChevronRight size={14} className="inline mr-1 text-green" />
            {cat.name}
          </span>
          <span>({cat.count})</span>
        </li>
      ))}
    </ul>
  </div>
);

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

const CommentForm = () => (
  <div className="bg-white p-6 mt-12 rounded-lg shadow">
    <h3 className="text-2xl font-bold mb-4">Leave a Reply</h3>
    <p className="text-gray-500 mb-4 text-sm">
      Your email address will not be published.
    </p>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Website"
          className="border p-2 rounded w-full"
        />
      </div>
      <textarea
        placeholder="Comment"
        rows="5"
        className="w-full border p-3 rounded"
      ></textarea>
      <button
        type="submit"
        className="bg-green text-white px-6 py-2 rounded hover:bg-green-700"
      >
        POST COMMENT
      </button>
    </form>
  </div>
);

export default function BlogSinglePage() {
  return (
    <div className="bg-gray-50">
      <div className="bg-[#0A1A3A] text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Blog Details</h1>
        <p className="text-green mt-2">Home / Blog / Details</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 px-4">
        {/* Left/Main Section */}
        <div className="lg:col-span-2">
          <BlogHeader {...blogPostData} />

          <div className="bg-white p-6 rounded-lg shadow text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: blogPostData.content }} />

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

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>
            {commentsData.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>

          <CommentForm />
        </div>

        {/* Right/Sidebar */}
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
