import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Interest {
  slug: string;
  title: string;
  description: string;
  content?: string;
}

export function getAllInterests(): Interest[] {
  const interestsDir = path.join(process.cwd(), "content/interests");

  // Check if directory exists
  if (!fs.existsSync(interestsDir)) {
    return [];
  }

  const files = fs.readdirSync(interestsDir);
  return files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(interestsDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "",
        description: data.description || "",
      };
    });
}

export function getInterestBySlug(slug: string): Interest | null {
  try {
    const filePath = path.join(
      process.cwd(),
      "content/interests",
      `${slug}.md`
    );
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      content,
    };
  } catch {
    return null;
  }
}
