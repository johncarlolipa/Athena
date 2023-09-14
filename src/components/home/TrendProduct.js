import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState, useEffect } from "react";
import { getAllProductsFromServer } from "../../../lib/utils";
import Featured from "./FeaturedProducts";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Trend() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const productsFromServer = await getAllProductsFromServer();
        console.log(productsFromServer);

        if (mounted) {
          setProducts(productsFromServer);
          setLoading(false);
        }
      } catch (error) {
        if (mounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => (mounted = false);
  }, []);

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
        <div className="">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-4 mt-10">
              {products.map((product, id) => (
                <div key={id} className="">
                  <Featured product={product} />
                </div>
              ))}
            </div>
          )}
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
