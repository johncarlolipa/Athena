import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="">
          <Image
            src="/assets/women.jpg"
            alt=""
            width={900}
            height={0}
            className="h-[100vh]"
          />
        </div>
        <div className="p-4 mt-6">
          <div>
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="text-lg font-semibold text-gray-600 mt-5">
              Do you have any queries regarding the products? Just kindly send
              us a message and we will get in touch with you
            </p>
          </div>
          <form className="mt-5 space-y-4">
            <div className="space-x-4">
              <input
                type="text"
                name="text"
                placeholder="Name"
                className="p-4 border border-black"
              />
              <input
                type="text"
                name="text"
                placeholder="Lastname"
                className="p-4 border border-black"
              />
            </div>
            <div className="grid space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-4 border border-black"
              />
              <textarea
                rows="8"
                cols=""
                className="p-4 border border-black"
                placeholder="Message"
              ></textarea>
            </div>
          </form>
          <div className="flex justify-center items-center ">
            <button
              type=""
              className="p-4 border border-black text-white bg-black mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
