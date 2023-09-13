import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://headless.local/wp-json/wp/v2/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
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
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  try {
    const res = await fetch(`http://headless.local/wp-json/wp/v2/posts/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch post data");
    }
    const post = await res.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: { post: null }, // Provide a default value or handle the error gracefully
    };
  }
};

const Details = ({ post }) => {
  return (
    <section>
      <div>
        <Image
          src={post.x_featured_media}
          alt={post.title.rendered}
          width={100}
          height={100}
          className="h-[50vh] w-full mx-auto mr-2"
        />
      </div>
      <div className="text-center font-bold text-3xl">
        <h1>{post.title.rendered}</h1>
      </div>
      <div className="flex justify-center space-x-40">
        <span>Author: {post.author}</span>
        <span>{new Date(post.date).toDateString()}</span>
      </div>
      <div className="mt-10">
        <div>{parse(post.content.rendered)}</div>
      </div>
    </section>
  );
};

export default Details;
