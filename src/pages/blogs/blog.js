import React from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogPost from "@/components/blog/BlogPost";
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
      <div>
        {posts.map((post) => (
          <Link href={"/blogs/" + post.id} key={post.id}>
            <h3>{post.title.rendered}</h3>
          </Link>
        ))}
      </div>
      <BlogPost />
      <BlogNewsletter />
    </div>
  );
};

export default blog;
