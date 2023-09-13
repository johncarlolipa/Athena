import React from "react";
import Image from "next/image";

export default function BlogNewsletter() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-20">
        <div className="grid-item bg-red-200">
          <Image
            src="/assets/blog9.jpg"
            alt=""
            width={900}
            height={0}
            className="h-[80vh]"
          />
        </div>
        <div className="grid-item p-8">
          <div className="mt-32">
            <h1 className="text-5xl font-semibold text-center">
              Sunday Newsletter
            </h1>
            <p className="mt-5">
              Athena has a free Sunday digest of the week most mind-broadening
              and heart-lifting reflections spanning art, science, poetry,
              philosophy, and other tendrils of our search for truth, beauty,
              meaning, and creative vitality. Claim yours:
            </p>
          </div>
          <form className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
            <input
              type="text"
              name=""
              placeholder="Name"
              className="block w-full px-4 py-2 border rounded border-black"
            />
            <input
              type="email"
              name=""
              placeholder="Email Address"
              className="block w-full px-4 py-2 border rounded border-black"
            />
          </form>
          <button type="submit" className=" border border-black text-white bg-black px-4 py-2 mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
