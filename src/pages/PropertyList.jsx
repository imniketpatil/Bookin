import React from "react";

function PropertyList() {
  return (
    <div className="plist w-[100%] max-w-[1024px] flex justify-between gap-4 ">
      <div className="plistItems rounded-lg cursor-pointer overflow-hidden flex-1">
        <img
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-[100%] h-48 object-cover"
        />
        <div className="plisttitle">
          <h1 className="fo font-bold text-lg">Hotels</h1>
          <h2 className="text-md font-semibold">233 Hotels</h2>
        </div>
      </div>

      <div className="plistItems rounded-lg cursor-pointer overflow-hidden flex-1">
        <img
          src="https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className=" w-[100%] h-48 object-cover"
        />
        <div className="plisttitle">
          <h1 className="fo font-bold text-lg">Apparments</h1>
          <h2 className="text-md font-semibold">233 Hotels</h2>
        </div>
      </div>

      <div className="plistItems rounded-lg cursor-pointer overflow-hidden flex-1">
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className=" w-[100%] h-48 object-cover"
        />
        <div className="plisttitle">
          <h1 className="fo font-bold text-lg">Resort</h1>
          <h2 className="text-md font-semibold">233 Hotels</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
