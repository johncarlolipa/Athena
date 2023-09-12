import Image from "next/image";
import Head from "next/head";
import Hero from "@/components/home/BannerHero";
import Category from "@/components/home/CategoryProduct";
import Trend from "@/components/home/TrendProduct";
import Deal from "@/components/home/DealBanner";
import Featured from "@/components/home/FeaturedProducts";
import Product from "@/components/Product";
import BlogPost from "@/components/blog/BlogPost";
import Quote from "@/components/home/Quote";

export default function Home() {
  return (
    <>
      <Head>
        <title>Athena E-commerce</title>
      </Head>

      <div>
        <Hero />
        <Category />
        <Trend />
        <Deal />
        <Product />
        {/* <Featured /> */}
        <BlogPost />
        <Quote />
      </div>
    </>
  );
}
