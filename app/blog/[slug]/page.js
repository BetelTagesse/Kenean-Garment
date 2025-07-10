// app/blog/[slug]/page.jsx
import { blogData } from "@/components/blog/blogData.js";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return <div>Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {blog.date} / {blog.category}
      </p>
      <Image src={blog.image} alt={blog.alt} className="rounded mb-6 " />
      <p>{blog.excerpt}</p>
      {/* Add full content here later */}
    </div>
  );
}
