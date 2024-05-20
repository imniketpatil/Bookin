import React from "react";

function MailList() {
  return (
    <div className="w-[100%] mt-12 bg-blue-900 text-white flex flex-col items-center gap-6 p-5">
      <h1 className="font-bold text-2xl">Save Time, Save Money</h1>
      <span className="font-semibold">
        Sign Up and We'll send the best deals for you.
      </span>
      <div>
        <input
          type="text"
          placeholder="Your Email"
          className="w-72 h-8 p-3 mr-3 outline-none text-black"
        />
        <button className="h h-10 bg-blue-600 text-white font-bold rounded-md cursor-pointer px-1">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default MailList;
