import React from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

import BlogNewsletter from "@/components/blog/BlogNewsletter";

import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://headless.local/wp-json/wp/v2/posts");
  const data = await res.json();

  return {
    props: { posts: data },
  };
};

const blog = ({ posts }) => {
  return (
    <div>
      <BlogHero />
      <div className="mt-20">
        <div className="text-center  text-black font-poppins text-6xl font-medium leading-normal">
          Our Blog
        </div>
        <div className=" text-gray-600 text-center font-poppins text-base font-normal leading-normal tracking-wide mt-4">
          Find a bright ideal to suit your taste with our great selection of
          jackets, trousers, shirts and dress.
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
        {posts.map((post) => (
          <>
            <BlogList post={post} />
          </>
          
        ))}
      </div>

      <BlogNewsletter />
    </div>
  );
};

export default blog;
