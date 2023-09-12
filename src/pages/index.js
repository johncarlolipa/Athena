import Image from "next/image";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Athena E-commerce</title>
      </Head>
    </>
  );
}
