import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex space-x-10">
      <ul className="flex space-x-10">
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
  );
};

export default Navbar;
