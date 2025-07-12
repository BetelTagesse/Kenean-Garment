// app/blog/[slug]/page.jsx
import BlogSinglePage from "@/components/blog/BlogCard";
import { blogData } from "@/components/blog/blogData.js";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return <div className="text-center py-20">Post not found</div>;

  return <BlogSinglePage />;
}
