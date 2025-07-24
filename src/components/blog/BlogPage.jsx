"use client";

import Image from "next/image";
import First from "@/images/image1.jpg";
import Second from "@/images/image2.jpg";
import Third from "@/images/image3.jpg";
import image4 from "@/images/image4.jpg";
import image5 from "@/images/image5.jpg";

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

const blogPostData = [
  {
    slug: "fabric-dyeing-process",
    title: "Exploring the Modern Fabric Dyeing Process",
    titleOne: "How Fabric Dyeing Works",
    excerpt:
      "Discover how colors are infused into textiles using sustainable dyeing methods.",
    mainImage: image1,
    date: "25 MAY",
    category: "Textile Innov.",
    author: "Francis Lazoe",
    commentsCount: 10,
    tags: ["Sustainability", "Color", "Fabric"],
    content: `
      <p>Fabric dyeing has evolved far beyond traditional vats of chemical color. Today, manufacturers utilize eco-friendly processes like reactive dyeing and digital color infusion that significantly reduce water and energy consumption.</p>
      <p>From fiber preparation to final rinse, every step is fine-tuned for efficiency and sustainability. Color consistency, colorfastness, and fiber integrity are essential markers of a well-executed dyeing process.</p>
    `,
  },
  {
    slug: "digital-printing-tips",
    title: "Digital Printing: Boosting Precision in Fabric Design",
    titleOne: "5 Tips for Digital Printing on Fabric",
    excerpt:
      "Enhance your textile printing results with modern digital techniques and best practices.",
    mainImage: image2,
    date: "30 MAY",
    category: "Digital Printing",
    author: "Jane Doe",
    commentsCount: 5,
    tags: ["Technology", "Textile Design"],
    content: `
      <p>Digital printing has revolutionized how designs are applied to fabric. It's fast, accurate, and allows for unlimited creativity. However, achieving high-quality prints requires a deep understanding of fabric types, ink compatibility, and pretreatment methods.</p>
      <p>This guide shares five essential tips—from resolution settings to curing methods—that help ensure sharp, vibrant prints on every roll.</p>
    `,
  },
  {
    slug: "choosing-fabric-types",
    title: "How to Choose the Right Fabric for Your Product",
    titleOne: "Choosing the Right Fabric",
    excerpt:
      "Understand fiber characteristics to match fabric to function effectively.",
    mainImage: image3,
    date: "30 MAY",
    category: "Fabric",
    author: "Jane Doe",
    commentsCount: 5,
    tags: ["Materials", "Performance"],
    content: `
      <p>Not all fabrics are created equal. Choosing between cotton, polyester, silk, or blends depends on the final application. Breathability, durability, drape, and texture must all be considered.</p>
      <p>In this article, we explore how designers and manufacturers select fabric with purpose—whether for fashion, upholstery, or industrial use.</p>
    `,
  },
  {
    slug: "sustainable-textile-practices",
    title: "Moving Toward Greener Textile Manufacturing",
    titleOne: "Sustainability in Textile Production",
    excerpt:
      "Explore how textile companies are adopting greener practices from fiber to finish.",
    mainImage: image4,
    date: "5 JUN",
    category: "Sustainability",
    author: "Elena Mahari",
    commentsCount: 3,
    tags: ["Eco-Friendly", "Sustainability"],
    content: `
      <p>The textile industry is making bold moves toward carbon-neutral production. Techniques like closed-loop water systems, plant-based dyes, and biodegradable packaging are becoming the new standard.</p>
      <p>This post highlights inspiring examples from companies leading the way in sustainable textile development.</p>
    `,
  },
  {
    slug: "future-of-textile-tech",
    title: "Smart Textiles and the Future of Fabric",
    titleOne: "Smart Fabrics: What’s Next?",
    excerpt:
      "From temperature-regulating materials to health-monitoring garments, textiles are getting smarter.",
    mainImage: image5,
    date: "12 JUN",
    category: "Tech in Textiles",
    author: "Daniel Kiros",
    commentsCount: 8,
    tags: ["Innovation", "Smart Fabric"],
    content: `
      <p>Textiles are no longer passive materials. With embedded sensors, conductive threads, and adaptive fibers, the industry is creating garments that interact with their environment and user.</p>
      <p>Discover how wearable tech and smart fabrics are transforming industries from healthcare to fashion.</p>
    `,
  },
];
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

export default function BlogPage({ slug }) {
  const blog = blogPostData.find((b) => b.slug === slug);
  if (!blog) return <div className="text-center py-20">Post not found</div>;
  return (
    <div className="bg-gray-50">
      <div
        className="relative bg-cover bg-center text-white py-24 text-center"
        style={{
          backgroundImage: `url(${First.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>{" "}
        <h3 className="text-4xl font-bold relative z-10">Blogs.{blog.slug} </h3>
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
