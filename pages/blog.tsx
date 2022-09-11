import { GetStaticProps } from "next";
import { ContentType } from "../data/content";
import { BlogPage, BlogProps } from "../src/components/Blog";
import { getContentFromMarkdown } from "../utils/getContentFromMarkdown";

const Blog = ({ posts }: BlogProps) => {
  return <BlogPage posts={posts} />;
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const { getAll } = getContentFromMarkdown(ContentType.Blog);
  const allPosts = getAll();

  return {
    props: { posts: allPosts },
  };
};

export default Blog;
