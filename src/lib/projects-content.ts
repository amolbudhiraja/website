import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const PROJECTS_DIR = path.join(process.cwd(), "content/projects");

export interface ProjectContent {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  year: number;
  content: string;
  readingTime: string;
}

export function getProjectBySlug(slug: string): ProjectContent | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    tags: data.tags ?? [],
    github: data.github,
    demo: data.demo,
    year: data.year,
    content,
    readingTime: stats.text,
  };
}
