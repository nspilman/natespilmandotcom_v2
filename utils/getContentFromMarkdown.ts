// src/lib/blog.js

// Install gray-matter and date-fns
import matter from "gray-matter";
import { format } from "date-fns";
import fs from "fs";
import { join } from "path";
import Music from "../src/types/music";
import { ContentType } from "../data/content";
import { Content } from "../src/types/content";

export const getContentFromMarkdown = (contentType: ContentType) => {
  const directoryName = contentType;
  const directory = join(process.cwd(), "content", directoryName);
  function getAllFilenames() {
    return fs.readdirSync(directory);
  }

  function getBySlug(slug: string): Content {
    const id = slug.replace(/\.md$/, "");
    const fullPath = join(directory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents) as unknown as {
      data: Content["frontmatter"];
      content: string;
    };
    const date = new Date(data.date);
    const formattedDate = format(date, "MMMM dd, yyyy");

    return {
      id,
      html: content,
      frontmatter: {
        ...data,
        date: formattedDate,
      },
    };
  }
  const sort = (
    { frontmatter: { date: dateA } }: Music,
    { frontmatter: { date: dateB } }: Music
  ) => (new Date(dateA) < new Date(dateB) ? 1 : -1);

  const getNeighbors = (slug: string) => {
    const allContent = getAll();
    const index = allContent.findIndex((content) => content.id === slug);

    if (!index) {
      return {
        previous: null,
        next: null,
      };
    }
    return {
      previous: allContent[index - 1] || null,
      next: allContent[index + 1] || null,
    };
  };

  function getAll() {
    const slugs = getAllFilenames().filter((slug) => slug !== ".DS_Store");
    const content = slugs.map((slug) => getBySlug(slug));
    content.sort(sort);

    return content;
  }

  return { getBySlug, getAll, getNeighbors, getAllFilenames };
};

// Add markdown files in `src/content/blog`
