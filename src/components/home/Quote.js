import React from "react";

export default function Quote() {
  return (
    <section className="bg-red-200 mt-10">
      <div className="p-32 flex flex-col items-center md:flex-row justify-center text-center md:text-left">
        <p className="text-black font-poppins text-3xl md:text-sl lg:text-2xl font-medium leading-normal">
          Very good Design, Flexible, Fast Support.
        </p>
        <span className="text-gray-400 font-poppins text-3xl md:text-xl lg:text-2xl font-medium leading-normal ml-2">
          - Steve Jobs
        </span>
      </div>
    </section>
  );
}
