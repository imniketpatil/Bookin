import React from "react";

function FeaturedProperties() {
  return (
    <div className="fp w-[100%] max-w-[1024px] flex justify-between gap-5">
      <div className="fpItems flex-1 gap-3 flex flex-col">
        <img
          src="https://images.pexels.com/photos/13371115/pexels-photo-13371115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-[100%]"
        />
        <span className="name font-bold text-2xl">Taj Hotel</span>
        <span className="city font-semibold ">Mumbai</span>
        <span className="price font-semibold">Starting From 14,793</span>
        <div className="Rating font-semibold">
          <button className="bg-blue-900 text-white py-1 px-2 font-bold mr-4">
            4.9
          </button>
          <span className="text-lg">Excellent</span>
        </div>
      </div>

      <div className="fpItems flex-1 gap-3 flex flex-col">
        <img
          src="https://images.pexels.com/photos/13371115/pexels-photo-13371115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-[100%]"
        />
        <span className="name font-bold text-2xl">Taj Hotel</span>
        <span className="city font-semibold ">Mumbai</span>
        <span className="price font-semibold">Starting From 14,793</span>
        <div className="Rating font-semibold">
          <button className="bg-blue-900 text-white py-1 px-2 font-bold mr-4">
            4.9
          </button>
          <span className="font text-lg">Excellent</span>
        </div>
      </div>

      <div className="fpItems flex-1 gap-3 flex flex-col">
        <img
          src="https://images.pexels.com/photos/13371115/pexels-photo-13371115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-[100%]"
        />
        <span className="name font-bold text-2xl">Taj Hotel</span>
        <span className="city font-semibold ">Mumbai</span>
        <span className="price font-semibold">Starting From 14,793</span>
        <div className="Rating font-semibold">
          <button className="bg-blue-900 text-white py-1 px-2 font-bold mr-4">
            4.9
          </button>
          <span className="t text-lg">Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
