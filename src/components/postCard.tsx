import Link from "next/link";
import React from "react";
import Blog from "../types/blog";
import formattedDateString from "../../utils/formattedDateString";

const Post = ({ post }: { post: Blog }) => {
  const {
    fields: { slug },
    frontmatter,
  } = post;
  const { title, date, description, tags } = frontmatter;
  return (
    <div className="card-blog">
      <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
        <h3>{title}</h3>
      </Link>

      <p style={{ color: "white" }}>{formattedDateString(date)}</p>
      <p style={{ color: "white" }}>{description}</p>
      <p className="tags">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            #{tag}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Post;
