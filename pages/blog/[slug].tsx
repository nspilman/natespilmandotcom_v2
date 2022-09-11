import styled from "styled-components";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next/types";
import ContentPageWrapper from "../../src/components/contentPageWrapper";
import formattedDateString from "../../utils/formattedDateString";
import {
  getAllSlugs,
  getNeighbors,
  getPostBySlug,
} from "../../utils/getBlogPostsFromMarkdown";
import Blog from "../../src/types/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const StyledPost = styled.article`
  padding: 5rem 3rem;
  @media (max-width: 1068px) {
    padding: 5rem 0.5rem;
  }
`;

const StyledPostBody = styled.article`
  max-width: 1200px;
  margin: auto;
  padding: 3rem 2rem;
  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
  }
`;

interface StaticProps {
  post: Blog;
  previous: Blog | null;
  next: Blog | null;
}

const LandingSSG: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
  previous,
  next,
}) => {
  return <Post post={post} previous={previous} next={next} />;
};

export const Post = ({ post, previous, next }: StaticProps) => {
  // const { next, previous } = pageContext
  const {
    frontmatter: { title, description, date },
    html,
  } = post;

  console.log({ previous, next });

  return (
    <ContentPageWrapper>
      <StyledPost id="home" className="panel special">
        <div id="post-main">
          <div id="blog-title">
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/blog"
            >
              <h1>{"Nate's Blog"}</h1>
            </Link>
            <hr />
          </div>
          <StyledPostBody className="post">
            <header>
              <h2 id="post-title">{title}</h2>
              <p>{description}</p>
              <time className="published" dateTime={date}>
                {formattedDateString(date)}
              </time>
            </header>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {html}
            </ReactMarkdown>
          </StyledPostBody>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: "2em",
            }}
          >
            {previous && (
              <li>
                <a href={`/blog/${previous.id}`}>
                  {previous.frontmatter.title}
                </a>
              </li>
            )}
            {next && (
              <li>
                <a href={`/blog/${next.id}`}>{next.frontmatter.title} </a>
              </li>
            )}
          </ul>
        </div>
      </StyledPost>
    </ContentPageWrapper>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async (props) => {
  const params = props.params;

  const post = getPostBySlug((params?.slug || "") as string);
  const { previous, next } = getNeighbors((params?.slug || "") as string);
  return {
    props: {
      post,
      previous,
      next,
    },
  };
};

export async function getStaticPaths() {
  const allSlugs = getAllSlugs();
  const paths = allSlugs.map((slug) => ({
    params: {
      slug: slug.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default LandingSSG;
