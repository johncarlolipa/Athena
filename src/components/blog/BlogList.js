import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default function BlogList ({ post }) {
  return (
    <section className="">
      {/* <div className="mt-20">
        <h1 className="text-center  text-black font-poppins text-6xl font-medium leading-normal">
          Our Blog
        </h1>
        <p className=" text-gray-400 text-center font-poppins text-base font-normal leading-normal tracking-wide mt-4">
          Find a bright ideal to suit your taste with our great selection of
          suspension, wall, floor and table lights.
        </p>
      </div> */}
      <div class="">
        <div class="p-4">
          <div>
            <Image
              src={post.x_featured_media}
              alt={post.title.rendered}
              width={400}
              height={0}
              quality={100}
              className="h-[50vh]"
            />
          </div>
          <div className="mt-5">
            <div className="text-center font-Poppins text-black text-xl font-medium">
              <Link href={`/post/${post.id}`}>{post.title.rendered}</Link>
            </div>
            <div className="text-black font-poppins text-md font-medium leading-normal tracking-tight mt-3">
              <h4>{new Date(post.date).toDateString()}</h4>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-gray-600 font-poppins text-base font-normal leading-normal">
              {parse(post.excerpt.rendered)}
            </p>
          </div>
          <Link href={`/post/${post.id}`}>
            <button type="read" className="mt-5 font-semibold">
              + Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
