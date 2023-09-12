import React from "react";
import Image from "next/image";

export default function Deal() {
  return (
    <section>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="">
          <Image
            src="/assets/women.jpg"
            alt=""
            width={900}
            height={0}
            className="h-[100vh]"
          />
        </div>
        <div class="p-4">
          <div className="flex justify-center text-black font-poppins text-6xl font-medium leading-normal mt-32">
            Deals of the Day
          </div>
          <div className="grid grid-cols-4 text-center mt-10">
            <div className="flex flex-col">
              <span className="text-black font-poppins text-5xl font-medium leading-normal">
                157
              </span>
              <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
                Days
              </span>
            </div>
            <div className="flex flex-col ">
              <span className="text-black font-poppins text-5xl font-medium leading-normal">
                12
              </span>
              <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
                Hours
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-black font-poppins text-5xl font-medium leading-normal">
                34
              </span>
              <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
                Min
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-black font-poppins text-5xl font-medium leading-normal">
                48
              </span>
              <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
                Sec
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <span className="text-orange-500 font-poppins text-4xl font-normal leading-normal">
              $100
            </span>
            <span className="text-gray-400 font-poppins text-base font-normal leading-normal">
              $500
            </span>
          </div>
          <div className="text-center mt-10">
            <button type="submit" className="py-2 px-4 border border-black">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
