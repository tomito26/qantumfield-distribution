import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="h-[800px] w-full relative">
        <Image
          src="/assets/waste-management.jpg"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div>
          <h1 className="text-6xl font-bold text-white w-8/12 mb-3">Innovative Solutions for a Cleaner Planet</h1>
          <p className="text-white text-base">
            We provide innovative waste management services that reduce
            environmental impact and create a cleaner future.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
