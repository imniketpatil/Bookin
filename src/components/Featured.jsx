import React from "react";

function Featured() {
  return (
    <div className="features w-[100%] max-w-[1024px] flex justify-between gap-4">
      <div className="featureItem  relative  rounded-lg overflow-hidden flex-1">
        <img
          src="https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="featureImg w-[100%] object-cover"
        />
        <div className="featureTitles absolute bottom-3 left-4">
          <h1 className="font-bold text-3xl text-white">Mumbai</h1>
          <h2 className=" font-normal text-lg text-white">440001</h2>
        </div>
      </div>

      <div className="featureItem relative  rounded-lg overflow-hidden flex-1">
        <img
          src="https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="featureImg w-[100%] object-cover"
        />
        <div className="featureTitles absolute bottom-3 left-4">
          <h1 className="font-bold text-3xl text-white">Mumbai</h1>
          <h2 className=" font-normal text-lg text-white">440001</h2>
        </div>
      </div>

      <div className="featureItem  relative  rounded-lg overflow-hidden flex-1">
        <img
          src="https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="featureImg w-[100%] object-cover"
        />
        <div className="featureTitles absolute bottom-3 left-4">
          <h1 className="font-bold text-3xl text-white">Mumbai</h1>
          <h2 className=" font-normal text-lg text-white">440001</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
