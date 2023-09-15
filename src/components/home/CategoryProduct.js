import React from "react";
import Image from "next/image";

export default function Category() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10 z-10">
        <div className="p-4 relative">
          <h1 className="absolute top-8 left-10 z-10 text-4xl font-bold">
            Men
          </h1>
          <span className="absolute top-20 text-lg left-10 z-10">4 items</span>
          <Image
            src="/assets/men.jpg"
            alt=""
            width={700}
            height={0}
            className="h-[70vh] border shadow-lg cursor-pointer"
          />
        </div>

        <div className="p-4 relative">
          <h1 className="absolute top-8 left-10 z-10 text-4xl font-bold">
            Women
          </h1>
          <span className="absolute top-20 text-lg left-10 z-10">4 items</span>
          <Image
            src="/assets/girl.jpg"
            alt=""
            width={900}
            height={0}
            className="h-[70vh]  border shadow-lg cursor-pointer"
          />
        </div>
        <div className="p-4 relative">
          <h1 className="absolute top-8 left-10 z-10 text-4xl font-bold">
            Kids
          </h1>
          <span className="absolute top-20 text-lg left-10 z-10">4 items</span>
          <Image
            src="/assets/kid.jpg"
            alt=""
            width={700}
            height={0}
            className="h-[70vh] border shadow-lg cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
