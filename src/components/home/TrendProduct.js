import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Trend() {
  return (
    <section className="">
      <div className="mt-20">
        <h1 className="text-center text-black font-poppins text-6xl font-medium leading-normal">
          Trending This Week
        </h1>
        <br />
        <p className="text-gray-400 text-center font-poppins text-base font-normal leading-normal tracking-wider">
          Find a bright ideal to suit your taste with our great selection of
          suspension, wall, floor and table lights.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={700}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-10">
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item1.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item6.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item7.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item9.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item4.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item2.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item5.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4">
              <Image
                src="/assets/item3.jpg"
                alt=""
                width={900}
                height={0}
                className="h-[60vh]"
              />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <div className="text-center my-20 text-black font-poppins text-base font-semibold leading-normal">
        <button type="submit" name="" id="">
          + See All Products
        </button>
      </div>
    </section>
  );
}
