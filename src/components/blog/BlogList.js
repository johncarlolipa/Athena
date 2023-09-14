import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default function BlogList({ post }) {
  return (
    <div className="">
      <div className="p-4">
        <div>
          <Image
            src={post.x_featured_media}
            alt={post.title.rendered}
            width={600}
            height={400}
            quality={100}
            className="h-[40vh] w-full"
          />
        </div>
        <div className="mt-5">
          <div className="text-center font-Poppins text-black text-xl font-medium">
            <Link href={`/blogs/${post.id}`} key={post.id}>
              {post.title.rendered}
            </Link>
          </div>
          <div className="text-black font-poppins text-md font-medium leading-normal tracking-tight mt-3">
            <h4>{new Date(post.date).toDateString()}</h4>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-gray-600 font-poppins text-base font-normal leading-normal">
            {parse(post.excerpt.rendered)}
          </div>
        </div>
        <Link href={`/blogs/${post.id}`}>
          <button type="button" className="mt-5 font-semibold">
            + Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
