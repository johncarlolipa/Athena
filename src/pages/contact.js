import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div className="">
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
          <div>
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="text-lg font-semibold text-gray-600">
              dfdsggdg fgdhfdhf ffhfghfdhf fhfghfgf dfgfhdfh dgdgg dfgfh
              dfgfdhfcfgfg
            </p>
          </div>
          <form className="">
            <div className="">
              <input type="" name="" value="" placeholder="Name" className="p-4"/>
              <input type="" name="" value="" placeholder="Lastname" className="p-4"/>
            </div>
            <div className="grid">
              <input type="" name="" value="" placeholder="Email Address" className="p-4" />
              <input type="" name="" value="" placeholder="Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
