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
  const addSpacesBeforeH4AndParagraphs = (content) => {
    content = content.replace(/<h4/g, "<p>&nbsp;</p><h4");
    content = content.replace(/<p>/g, "<p>&nbsp;</p>");

    return content;
  };

  const formattedContent = addSpacesBeforeH4AndParagraphs(
    post.content.rendered
  );

  return (
    <section className="max-w-4xl mx-auto p-8">
      <div className="mb-6">
        <Image
          src={post.x_featured_media}
          alt={post.title.rendered}
          width={1200}
          height={1200}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold">{post.title.rendered}</h1>
        <p className="text-gray-600 text-sm mt-2">
          Author: {post.author} | {new Date(post.date).toDateString()}
        </p>
      </div>
      <div className="mt-6">
        <div className="prose max-w-full">{parse(formattedContent)}</div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-2xl mb-2">Tell us your opinion</h1>
        <textarea rows="10" cols="" className="border border-black w-full p-2">
          Write your comment here...
        </textarea>
        <div className=" flex justify-center">
          <button
            type=""
            className="bg-black text-white hover:bg-gray-900 py-2 px-6 text-center"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
