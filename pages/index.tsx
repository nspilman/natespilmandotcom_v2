import React from "react";

import { GetStaticProps } from "next/types";
import { IndexPage, IndexPageProps } from "../src/components/Homepage";
import { getContentFromMarkdown } from "../utils/getContentFromMarkdown";
import { ContentType } from "../data/content";

const Home = ({ posts, song }: IndexPageProps) => {
  return <IndexPage posts={posts} song={song} />;
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const { getAll: getAllPosts } = getContentFromMarkdown(ContentType.Blog);
  const { getAll: getAllMusics } = getContentFromMarkdown(ContentType.Music);
  const allPosts = getAllPosts();
  const song = getAllMusics()[0];

  return {
    props: { posts: allPosts, song },
  };
};

export default Home;
