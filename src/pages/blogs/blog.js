import React from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://headless.local/wp-json/wp/v2/posts");
    const data = await res.json();

    return {
      props: { posts: data },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: { posts: [] },
    };
  }
};

const Blog = ({ posts }) => {
  return (
    <div>
      <BlogHero />
      <div className="mt-20">
        <div className="text-center text-black font-poppins text-6xl font-medium leading-normal">
          Our Blog
        </div>
        <div className="text-gray-600 text-center font-poppins text-base font-normal leading-normal tracking-wide mt-4">
          Find a bright idea to suit your taste with our great selection of
          jackets, trousers, shirts, and dresses.
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
        {posts.map((post) => (
          <div key={post.id}>
            <BlogList post={post} />
          </div>
        ))}
      </div>

      <BlogNewsletter />
    </div>
  );
};

export default Blog;
