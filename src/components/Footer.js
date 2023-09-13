import React from "react";
import Image from "next/image";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <section>
      <div className="grid grid-cols-2 xl:grid-cols-4 mt-10 ml-20">
        <div className="p-4 space-y-4">
          <Image
            src="../assets/athena-logo.svg"
            alt=""
            width={150}
            height={100}
            className="w-auto h-auto"
          />

          <div>
            2593 Timbercrest Road, Chisona, Alaska Badalus, United States
          </div>
          <div>(+91)7-723-4608</div>
          <div>Athena@demo.com</div>
          <div className="flex gap-4">
            <FiTwitter />
            <FiInstagram />
            <FiFacebook />
          </div>
        </div>

        <div className="p-4 space-y-8">
          <div className="font-bold text-xl">Help & Information</div>
          <ul className="">
            <li className="mt-4">
              <a href="#">Pagination</a>
            </li>
            <li className="mt-4">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mt-4">
              <a href="#">Contact</a>
            </li>
            <li className="mt-4">
              <a href="#">Accessories</a>
            </li>
            <li className="mt-4">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="p-4 space-y-8">
          <span className="font-bold text-xl">About Us</span>
          <ul className="">
            <li className="mt-4">
              <a href="#">Help Center</a>
            </li>
            <li className="mt-4">
              <a href="#">Address Store</a>
            </li>
            <li className="mt-4">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mt-4">
              <a href="#">Receivers & Amplifiers</a>
            </li>
            <li className="mt-4">
              <a href="#">Gramic</a>
            </li>
          </ul>
        </div>

        <div className="p-4 space-y-8">
          <span className="font-bold | text-xl">Categories</span>
          <ul className="">
            <li className="mt-4">
              <a href="#">Martar</a>
            </li>
            <li className="mt-4">
              <a href="#">Bakeware</a>
            </li>
            <li className="mt-4">
              <a href="#">Kitchenware</a>
            </li>
            <li className="mt-4">
              <a href="#">Candle Holders</a>
            </li>
            <li className="mt-4">
              <a href="#">Lighting & Vases</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
