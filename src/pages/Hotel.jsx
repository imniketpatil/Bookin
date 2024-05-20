import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CancelIcon from "@mui/icons-material/Cancel";

function Hotel() {
  const photos = [
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      src: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      src: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      src: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      src: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [slider, setSlider] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleOpen = (i) => {
    setSliderNumber(i);
    setSlider((prev) => !prev);
  };

  const handleMove = (action) => {
    let newSliderNumber;

    if (action === "l") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSliderNumber);
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="flex flex-col items-center mt-5">
        {slider && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-10">
            <div className="relative w-11/12 max-w-3xl bg-white rounded-lg p-6">
              <CancelIcon
                className="absolute top-4 right-4 text-2xl text-slate-900 cursor-pointer"
                onClick={() => setSlider(false)}
              />
              <KeyboardArrowLeftIcon
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-slate-900 cursor-pointer"
                onClick={() => handleMove("l")}
              />
              <div className="w-full flex justify-center items-center">
                <div className="max-w-full h-auto max-h-[80vh] overflow-hidden">
                  <img
                    src={photos[sliderNumber].src}
                    alt=""
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <KeyboardArrowRightIcon
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-slate-900 cursor-pointer"
                onClick={() => handleMove("r")}
              />
            </div>
          </div>
        )}

        <div className="w-full max-w-[1024px] flex flex-col gap-2 relative ">
          <button className="absolute top-[10px] right-0 font text-white bg-blue-700 px-2 py-2 rounded ">
            Reserve or Book Now !
          </button>
          <h1 className="text-2xl font-bold">Taj</h1>
          <div className="text-sm flex items-center gap-2">
            <LocationOnIcon />
            <span>xyz</span>
          </div>
          <span className="text-blue-600 font-semibold">
            Excellent Location - 500m from Center
          </span>
          <span className="text-green-400 font-medium">
            Book a stay over 1500 at this property and get a free airport taxi
          </span>
          <div className="mt-2 flex flex-wrap justify-between">
            {photos.map((photo, index) => (
              <div key={index} className="w-[33%]">
                <img
                  src={photo.src}
                  alt=""
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => handleOpen(index)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex justify-between mt-5">
            <div className="hotelDetailText w-3/5">
              <h1 className="font-bold text-2xl">
                Stay In The Heart of Krakow
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
                obcaecati nemo enim error culpa nostrum sapiente exercitationem
                tempora voluptatum labore vel, necessitatibus est aut, iure
                ipsam beatae aliquam quam placeat. Deserunt autem voluptas
                obcaecati quaerat dolore corporis. Dolor, consequatur natus.
                Eligendi cupiditate distinctio porro harum nihil illum, itaque
                totam impedit.
              </p>
            </div>
            <div className="price w-1/3 bg-slate-300 p-5 rounded-lg flex flex-col items-center text-center">
              <h1 className="text-xl font-bold mb-2">
                Perfect for a 9-night stay!
              </h1>
              <span className="text-md mb-2">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2 className="text-lg font-bold mb-2">
                <b>5000</b> (9 Nights)
              </h2>
              <button className="bg-blue-600 text-white p-2 rounded font-bold mt-2">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <div className="flex justify-center">
        <Footer />
      </div>
    </>
  );
}

export default Hotel;
