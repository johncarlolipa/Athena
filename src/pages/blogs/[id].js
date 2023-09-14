import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

export const getStaticPaths = async () => {
  try {
    const res = await fetch(
      "https://dev-headlesscmsworpress.pantheonsite.io/wp-json/wp/v2/posts"
    );
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
    const res = await fetch(
      `https://dev-headlesscmsworpress.pantheonsite.io/wp-json/wp/v2/posts/${id}`
    );
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
      props: { post: null },
    };
  }
};

const Details = ({ post }) => {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <Image
          src={post.x_featured_media}
          alt={post.title.rendered}
          width={1200}
          height={800}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold">{post.title.rendered}</h1>
        <p className="text-gray-600 text-sm mt-2">
          By {post.author} | {new Date(post.date).toDateString()}
        </p>
      </div>
      <div className="mt-6">
        <div className="prose max-w-full">{parse(post.content.rendered)}</div>
      </div>
    </section>
  );
};

export default Details;
