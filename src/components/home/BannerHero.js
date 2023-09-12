import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#e1e6e4]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="p-4">
          <div className="ml-32 mt-40 mb-40">
            <div className="text-black font-segoe-ui text-18 font-semibold leading-normal flex flex-col">
              <div className="flex items-center">
                <Image
                  src="/assets/Line-10.svg"
                  alt=""
                  width={4}
                  height={0}
                  className="h-[6vh] mr-2"
                />
                <div>Lighting</div>
              </div>
              <div className="ml-2 mt-0">2019</div>
            </div>

            <div className="text-black font-poppins text-8xl font-semibold leading-normal">
              ETNA
            </div>
            <div>
              <p className="text-gray-500 font-poppins text-sm font-normal leading-normal">
                FROM
                <span className="text-black font-poppins text-lg font-semibold leading-normal ml-2">
                  $650.00
                </span>
              </p>
            </div>
            <button type="shop" className="border border-black py-2 px-4 mt-10">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <Image
              src="/assets/hero.jpg"
              alt=""
              width={700}
              height={0}
              className="h-[105vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
