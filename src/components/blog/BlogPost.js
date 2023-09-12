import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { getAllPostsFromServer } from "../../../lib/utils";

export default function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const postsFromServer = await getAllPostsFromServer();

        if (mounted) {
          setPosts(postsFromServer);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => (mounted = false);
  }, []);

  return (
    <div className="">
      <div className="mt-20">
        <div className="text-center text-black font-poppins text-6xl font-medium leading-normal">
          Our Blog
        </div>
        <p className="text-gray-600 text-center font-poppins text-base font-normal leading-normal tracking-wide mt-4">
          Find a bright idea to suit your taste with our great selection of
          jackets, trousers, shirts, and dresses.
        </p>
      </div>

      <main className="">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <p>Error: Failed to fetch blog posts - {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10">
            {posts.map((post) => (
              <div key={post.id} className="border shadow-lg">
                <BlogList post={post} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
