import React from "react";

import Layout from "../src/components/layout";
import Icons from "../src/components/icons";
import Post from "../src/components/postCard";

import Blog from "../src/types/blog";
import Music from "../src/types/music";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import { getAllPosts } from "../utils/getBlogPostsFromMarkdown";

type IndexPageProps = {
  posts: Blog[];
  // music: Music;
};

const IndexPage = ({ posts }: IndexPageProps): React.ReactElement => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-container">
          <h1>{"Hi, I'm Nate Spilman"}</h1>
          <p>I’m a software developer, musician and creative organizer.</p>
          <div className="nate"></div>
          <Icons />
        </div>
      </section>

      <main className="main">
        <div className="content-container">
          <div className="card-header">
            <h2>{"Nate's Blog"}</h2>
            <hr />
          </div>
          <div className="card-blog-container">
            {posts.map((post) => {
              return <Post post={post} key={post.fields.slug} />;
            })}
          </div>
          <div className="button-container">
            <Link href="/blog">
              <button>Read</button>
            </Link>
          </div>
          <div className="card-header">
            <h2>{"Nate's Music"}</h2>
            <hr />
          </div>
          <div className="card-music">
            {/* <h3>{song.frontmatter.title}</h3> */}
            {/* <p>{song.frontmatter.description}</p> */}
            <div>
              {/* <div dangerouslySetInnerHTML={{ __html: song.html }} /> */}
            </div>
          </div>
          <div className="button-container">
            <Link href="/music">
              <button>Listen</button>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
};

export default IndexPage;
