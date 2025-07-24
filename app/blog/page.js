import BlogPage from "@/components/blog/BlogPage";
import { blogData } from "@/components/blog/blogPostData";
import BlogSinglePage from "@/components/blog/BlogSection";

export default function page({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return <div className="text-center py-20">Post not found</div>;

  return <BlogSinglePage />;
}
