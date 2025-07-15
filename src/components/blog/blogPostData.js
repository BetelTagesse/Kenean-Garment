import First from "@/images/sewing.jpg";
import Second from "@/images/designer.jpg";
import Third from "@/images/sewing.jpg";
import Fourth from "@/images/designer.jpg";
import Fifth from "@/images/sewing.jpg";

export const blogData = [
  {
    slug: "post-one",
    title: "There are many variations of passages of Lorem Ipsum available",

    titleOne: "How Fabric Dyeing Works",
    excerpt:
      "A quick overview of how dyeing is done in modern textile industries.",
    mainImage: First,
    date: "25 MAY",
    category: "Textile Industry",
    author: "Francis Lazoe",
    commentsCount: 10,
    tags: ["Fabric", "Cotton", "Industry"],
    content: "<p>This is the blog post content</p>",
  },
  {
    slug: "post-two",
    title: "Another Blog Post Title",
    titleOne: "5 Tips for Digital Printing on Fabric",
    excerpt:
      "Maximize quality and efficiency with these digital fabric printing tips.",
    mainImage: Second,
    date: "30 MAY",
    category: "Fabric",
    author: "Jane Doe",
    commentsCount: 5,
    tags: ["Design", "Quality"],
    content: "<p>This is another blog post content</p>",
  },
  {
    slug: "post-three",
    title: "Another Blog Post Title",
    titleOne: "Choosing the Right Fabric",
    excerpt: "Understand fabric types and their ideal applications in design.",
    mainImage: Third,
    date: "30 MAY",
    category: "Fabric",
    author: "Jane Doe",
    commentsCount: 5,
    tags: ["Design", "Quality"],
    content: "<p>This is another blog post content</p>",
  },
  {
    slug: "post-four",
    title: "Another Blog Post Title",
    titleOne: "Choosing the Right Fabric",
    excerpt: "Understand fabric types and their ideal applications in design.",
    mainImage: Fourth,
    date: "30 MAY",
    category: "Fabric",
    author: "Jane Doe",
    commentsCount: 5,
    tags: ["Design", "Quality"],
    content: "<p>This is another blog post content</p>",
  },
  {
    slug: "post-five",
    title: "Another Blog Post Title",
    titleOne: "Choosing the Right Fabric",
    excerpt: "Understand fabric types and their ideal applications in design.",
    mainImage: Fifth,
    date: "30 MAY",
    category: "Fabric",
    author: "Jane Doe",
    commentsCount: 5,
    tags: ["Design", "Quality"],
    content: "<p>This is another blog post content</p>",
  },
];

export const categoriesData = [
  { name: "Textile Industry", count: 10 },
  { name: "Digital Printing", count: 20 },
  { name: "Quality Engineering", count: 15 },
  { name: "Modern Technology", count: 5 },
  { name: "Fabric Type", count: 3 },
];

export const recentPostsData = [
  { image: First, title: "Chiffon Textiles Rising", date: "Feb 25, 2023" },
  { image: Second, title: "Digital Fabric Innovations", date: "Mar 10, 2023" },
  { image: Third, title: "Sustainable Yarn Trends", date: "Apr 5, 2023" },
];

export const popularTagsData = [
  "Textile",
  "Industry",
  "Quality",
  "Printing",
  "Fabric",
];

export const commentsData = [
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
