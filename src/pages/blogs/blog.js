import React from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import Link from "next/link";
import BlogPost from "@/components/blog/BlogPost";

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://headless.local/wp-json/wp/v2/posts");
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

      <BlogPost />

      <BlogNewsletter />
    </div>
  );
};

export default Blog;
