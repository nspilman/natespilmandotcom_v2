import Link from "next/link";
import React from "react";
import formattedDateString from "../../utils/formattedDateString";
import { Content } from "../types/content";

const Post = ({ post }: { post: Content }) => {
  const { frontmatter, id } = post;
  const { title, date, description, tags } = frontmatter;
  return (
    <div className="card-blog">
      <Link href={`/blog/${id}`} style={{ textDecoration: "none" }}>
        <h3>{title}</h3>
      </Link>

      <p style={{ color: "white" }}>{formattedDateString(date)}</p>
      <p style={{ color: "white" }}>{description}</p>
      <p className="tags">
        {tags?.map((tag) => (
          <span className="tag" key={tag}>
            #{tag}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Post;
