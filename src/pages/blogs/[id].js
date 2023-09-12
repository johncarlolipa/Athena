import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://headless.local/wp-json/wp/v2/posts");
    const data = await res.json();

    const paths = data.map((post) => ({
      params: { id: post.id.toString() },
    }));

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
    const post = await res.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
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
          width={800} // Set the appropriate width
          height={600} // Set the appropriate height
          layout="responsive" // Make the image responsive
        />
      </div>
      <div className="text-center font-bold text-3xl">
        <h1>{post.title.rendered}</h1>
      </div>
      <div className="flex justify-center space-x-4">
        <span>Author: {post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div className="mt-10">
        <p>{parse(post.content.rendered)}</p>
      </div>
    </section>
  );
};

export default Details;
