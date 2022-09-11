import { Content } from "../../types/content";
import ContentPageWrapper from "../contentPageWrapper";
import Post from "../postCard";

export type BlogProps = {
  posts: Content[];
};

export const BlogPage = ({ posts }: BlogProps) => {
  return (
    <ContentPageWrapper>
      <div id="blog-page">
        <h1>{"Nate's Blog"}</h1>
        <hr />
        <div id="blog-post-wrapper">
          <article id="blog" className="panel special">
            <div className="content">
              <div className="card-blog-container">
                {posts.map((post) => (
                  <Post post={post} key={post.id} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </ContentPageWrapper>
  );
};
