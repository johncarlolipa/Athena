import React from "react";
import Image from "next/image";

export default function Featured({ product }) {
  return (
    <section>
      <div className="">
        <div className="p-4">
          <Image
            src={product.x_featured_media}
            alt=""
            width={900}
            height={600} 
            className="h-[50vh]"
          />
          <div className="text-center mt-5 cursor-pointer">
            <h1 className="text-black font-poppins text-lg font-semibold">
              {product.title.rendered}
            </h1>
            <span className="text-gray-500 font-poppins text-md font-semibold">
              P{product.x_metadata._regular_price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
