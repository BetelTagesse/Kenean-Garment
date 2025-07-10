import Link from "next/link";
import { blogData } from "@/components/blog/blogData.js";
import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#0A1A3A]">
        Our Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="text-xs text-gray-400 mb-1">
                📅 {blog.date} / 💬 {blog.comments} / 📁 {blog.category}
              </div>
              <h2 className="text-lg font-semibold text-[#0A1A3A] mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-green-600 text-sm font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
