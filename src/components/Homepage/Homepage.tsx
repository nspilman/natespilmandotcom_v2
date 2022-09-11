import Link from "next/link";
import { Content } from "../../types/content";
import Icons from "../icons";
import Layout from "../layout";
import Post from "../postCard";

export type IndexPageProps = {
  posts: Content[];
  song: Content;
};

export const IndexPage = ({
  posts,
  song,
}: IndexPageProps): React.ReactElement => {
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
            {posts.slice(0, 6).map((post) => {
              return <Post post={post} key={post.id} />;
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
            <h3>{song.frontmatter.title}</h3>
            <p>{song.frontmatter.description}</p>
            <div>
              <div dangerouslySetInnerHTML={{ __html: song.html }} />
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
