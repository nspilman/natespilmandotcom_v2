// src/lib/blog.js

// Install gray-matter and date-fns
import matter from "gray-matter";
import { format } from "date-fns";
import fs from "fs";
import { join } from "path";
import Blog from "../src/types/blog";

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), "blog");

export function getAllSlugs() {
  return fs.readdirSync(postsDirectory);
}

const sort = (
  { frontmatter: { date: dateA } }: Blog,
  { frontmatter: { date: dateB } }: Blog
) => (new Date(dateA) < new Date(dateB) ? 1 : -1);

export function getPostBySlug(slug: string): Blog {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const {
    description,
    favorite = false,
    published,
    title,
    tags,
  } = data as Blog["frontmatter"];
  const date = new Date(data.date);
  const formattedDate = format(date, "MMMM dd, yyyy");

  return {
    id: slug.replace(".md", ""),
    html: content,
    fields: {
      slug: realSlug,
    },
    frontmatter: {
      description,
      favorite,
      published,
      title,
      tags,
      date: formattedDate,
    },
  };
}

export const getNeighbors = (slug: string) => {
  const allPosts = getAllPosts();
  const index = allPosts.findIndex((post) => post.id === slug);
  console.log({ slug, index });

  if (!index) {
    return {
      previous: null,
      next: null,
    };
  }
  return {
    previous: allPosts[index - 1] || null,
    next: allPosts[index + 1] || null,
  };
};

export function getAllPosts(): Blog[] {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  posts.sort(sort);

  return posts;
}
