import BlogPage from "@/components/blog/BlogPage";
import { blogData } from "@/components/blog/blogPostData";

export default function page({ params }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return <div className="text-center py-20">Post not found</div>;

  return <BlogPage slug={params.slug} />;
}
