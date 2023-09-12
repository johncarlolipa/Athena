import React from "react";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section>
      <div>
        <Image
          src="/assets/blog5.jpg"
          alt=""
          width={900}
          height={0}
          className="h-[130vh] w-full mx-auto mr-2"
        />
      </div>
    </section>
  );
}
