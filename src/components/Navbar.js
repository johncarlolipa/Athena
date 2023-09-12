import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <section className="sticky top-0 bg-white z-10">
      <div className="sticky flex justify-between mb-4 py-2">
        <div className="text-2xl font-bold">
          <Image
            src="../assets/athena-logo.svg"
            alt=""
            width={150}
            height={100}
            className=""
          />
        </div>
        <div className="flex">
          <ul className="hidden md:flex items-center gap-12 text-black font-poppins text-base font-medium">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/blogs/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <BiSearch className="text-2xl" />
          <AiOutlineUser className="text-2xl" />
          <AiOutlineShopping className="text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
