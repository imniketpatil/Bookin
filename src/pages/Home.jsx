import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from "../components/Featured";
import PropertyList from "./PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer mt-24 lg:mt-12 flex flex-col items-center gap-7 ">
        <Featured />
        <h1 className="text-lg font-bold max-w-[1024px] text-left">
          Browse by Property type
        </h1>
        <PropertyList />
        <h1 className="text-lg font-bold max-w-[1024px] text-left">
          Homes Guests Love
        </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
