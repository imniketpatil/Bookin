import React, { useState } from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import AttractionsIcon from "@mui/icons-material/Attractions";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [openOption, setOpenOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleOption = (name, action) => {
    setOpenOptions((prev) => ({
      ...prev,
      [name]: action === "i" ? openOption[name] + 1 : openOption[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, openOption } });
  };

  return (
    <div className="header bg-blue-900 flex justify-center text-white relative">
      <div className="headerContainer w-[100%] max-w-[1024px]  mt-6 mb-24 lg:my-6">
        <div className="headerList flex flex-wrap gap-10 justify-center items-center ">
          <div className="headerListItems flex gap-1 items-center justify-center cursor-pointer">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItems flex gap-1 items-center justify-center cursor-pointer">
            <AirplanemodeActiveIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItems flex gap-1 items-center justify-center cursor-pointer">
            <CarRentalIcon />
            <span>Car Rental</span>
          </div>
          <div className="headerListItems flex gap-1 items-center justify-center cursor-pointer">
            <AttractionsIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItems flex gap-1 items-center justify-center cursor-pointer">
            <LocalTaxiIcon />
            <span>Airport Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="my-4 font-bold text-4xl">
              A Lifetime of discounts? It's Genius.
            </h1>
            <p className="my-4 text-lg">
              Get rewarded for your travels - unlock instant saving of 10% or
              more with a free Booking.com account.
            </p>
            <button className="bg-slate-200 px-3 py-1 cursor-pointer text-blue-900 font-semibold mb-5">
              Sign in / Register
            </button>
            <div className="headerSearch bg-white border-4 border-yellow-400 flex items-center justify-between text-slate-500 px-2 py-2 absolute w-[95%] max-w-[1024px] bottom-[-60px]  flex-wrap gap-3 flex-col lg:flex-row lg:bottom-[-25px] ">
              <div className="headerSearchItem flex items-center justify-center gap-2">
                <HotelIcon />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearch outline-none text-black font-medium w-[100%]"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem flex items-center justify-center gap-2 relative">
                <CalendarMonthIcon />
                <span
                  className="font-medium cursor-pointer"
                  onClick={() => setShowDate((prev) => !prev)}
                >
                  {`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yy"
                  )}`}
                </span>
                {showDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute top-14 z-10"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem flex items-center justify-center gap-2">
                <AccessibilityIcon />
                <span
                  className="font-medium cursor-pointer"
                  onClick={() => setShowOptions((prev) => !prev)}
                >
                  {`${openOption.adult} Adult • ${openOption.children} Children • ${openOption.room} Room`}
                </span>
                {showOptions && (
                  <div className="option absolute top-14 rounded-lg shadow-2xl flex flex-col gap-1 p-4 font-bold text-lg bg-white z-10">
                    <div className="optionItems w-52 flex justify-between">
                      <span className="optiontext">Adult</span>
                      <div className="flex gap-5 items-center justify-center">
                        <button
                          className="bg-slate-500 text-white w-6 disabled:cursor-not-allowed"
                          onClick={() => handleOption("adult", "d")}
                          disabled={openOption.adult <= 0}
                        >
                          -
                        </button>
                        <span className="number">{openOption.adult}</span>
                        <button
                          className="bg-slate-500 text-white w-6 w-"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItems flex justify-between">
                      <span className="optiontext ">Children</span>
                      <div className="flex gap-5 items-center justify-center">
                        <button
                          className="bg-slate-500 text-white w-6 disabled:cursor-not-allowed"
                          onClick={() => handleOption("children", "d")}
                          disabled={openOption.children <= 0}
                        >
                          -
                        </button>
                        <span className="number">{openOption.children}</span>

                        <button
                          className="bg-slate-500 text-white w-6"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItems flex justify-between">
                      <span className="optiontext">Rooms</span>
                      <div className="flex gap-5 items-center justify-center">
                        <button
                          className="bg-slate-500 text-white w-6 disabled:cursor-not-allowed"
                          onClick={() => handleOption("room", "d")}
                          disabled={openOption.room <= 0}
                        >
                          -
                        </button>
                        <span className="number">{openOption.room}</span>
                        <button
                          className="bg-slate-500 text-white w-6"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem flex items-center justify-center gap-2">
                <button
                  className="bg-blue-900 px-3 py-1 cursor-pointer text-slate-200 font-semibold"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
