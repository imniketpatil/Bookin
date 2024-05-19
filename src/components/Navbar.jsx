import React from "react";

function Navbar() {
  return (
    <div className=" h-12 bg-blue-900 flex justify-center">
      <div className="navContainer w-[100%] max-w-[1024px] flex items-center justify-between mx-3">
        <span className="logo text-white text-3xl font-semibold">BookIn.</span>
        <div className="navItems flex items-center text-blue-900 gap-10 font-medium">
          <button className="bg-slate-200 px-3 py-1 cursor-pointer">
            REGISTER
          </button>
          <button className="bg-slate-200 px-3 py-1 cursor-pointer">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
