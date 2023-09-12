import React from "react";
import parse from "html-react-parser";

export const getStaticPaths = async () => {
  const res = await fetch("http://headless.local/wp-json/wp/v2/posts");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://headless.local/wp-json/wp/v2/posts/${id}`); // Fetch a single post by ID
  const post = await res.json();

  return {
    props: { post },
  };
};

const Details = ({ post }) => {
  return (
    <div>
      <h1>
        <h3>{post.title.rendered}</h3>
        <span>Author: {post.author}</span>
        <span>{new Date(post.date).toDateString()}</span>
        <span>{parse(post.content.rendered)}</span>
      </h1>
    </div>
  );
};

export default Details;
