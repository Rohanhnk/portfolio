import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content?: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), "content/blogs");

  // Check if directory exists
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir);
  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), "content/blogs", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      content,
    };
  } catch {
    return null;
  }
}
