import Link from "next/link";
import { blogData } from "@/components/blog/blogData.js";
import Image from "next/image";
import BlogSinglePage from "@/components/blog/BlogCard";

export default function BlogPage() {
  return (
    <>
      <BlogSinglePage />
    </>
  );
}
