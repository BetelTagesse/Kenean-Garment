import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.jpg";
import image3 from "@/images/image3.jpg";
import image4 from "@/images/image4.jpg";
import image5 from "@/images/image5.jpg";

export const blogData = [
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

export const categoriesData = [
  { name: "Textile Innovation", count: 12 },
  { name: "Digital Printing", count: 18 },
  { name: "Sustainability", count: 9 },
  { name: "Fabric Types", count: 7 },
  { name: "Smart Textiles", count: 6 },
];

export const recentPostsData = [
  { image: image1, title: "Eco Dyeing Techniques", date: "Feb 25, 2023" },
  {
    image: image2,
    title: "Trends in Digital Fabric Printing",
    date: "Mar 10, 2023",
  },
  {
    image: image3,
    title: "Choosing Between Cotton and Bamboo",
    date: "Apr 5, 2023",
  },
];

export const popularTagsData = [
  "Textile",
  "Fabric",
  "Sustainability",
  "Digital Print",
  "Smart Materials",
];

export const commentsData = [
  {
    id: "c1",
    author: "Seth L Turner",
    avatar: image1,
    text: "Great breakdown of dyeing techniques! This was really informative.",
  },
  {
    id: "c2",
    author: "Jane Doe",
    avatar: image2,
    text: "Smart textiles are fascinating—excited to see where this goes!",
  },
];
