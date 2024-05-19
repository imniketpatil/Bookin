import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer mt-24 lg:mt-12 flex flex-col items-center gap-7 m-2">
        <Featured />
        <h1 className="text-lg font-bold max-w-[1024px] text-left">
          Browse by Property type
        </h1>
      </div>
    </div>
  );
}

export default Home;
