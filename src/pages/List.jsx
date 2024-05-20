import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";
import Search from "../components/Search";

function List() {
  const location = useLocation();
  const locationState = location.state || {}; // Ensure location.state is not null
  const [destination, setDestination] = useState(
    locationState.destination || ""
  );
  const [date, setDate] = useState(
    locationState.date || [
      { startDate: new Date(), endDate: new Date(), key: "selection" },
    ]
  );
  const [option, setOption] = useState(locationState.option || {});

  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-5">
        <div className="listWrapper w-full max-w-6xl flex gap-5">
          <div className="listSearch w-1/4 bg-yellow-400 px-4 py-2 rounded-lg sticky top-2 self-start">
            <h1 className="lsTitle text-lg text-slate-500 font-bold mb-2">
              Search
            </h1>
            <div className="lsItem mb-2">
              <label
                htmlFor="destination"
                className="text-md font-semibold mb-2 block"
              >
                Destination
              </label>
              <input
                type="text"
                className="w-full h-8 p-2 border rounded outline-none"
                placeholder={destination}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem flex flex-col mb-4">
              <label
                htmlFor="checkInDate"
                className="text-md font-semibold mb-2"
              >
                Check In Date
              </label>
              <div className="p-1 bg-white mb-2">
                {`${format(date[0].startDate, "dd/MM/yy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yy"
                )}`}
              </div>
            </div>

            <div className="lsItem flex flex-col mb-4 gap-2">
              <label htmlFor="options" className="text-md font-semibold mb-1">
                Options
              </label>
              <div className="lsOptionItem flex justify-between text-slate-600 text-md mb-2">
                <span>
                  Min Price <small>per Night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput w-20 outline-none px-2 py-1"
                />
              </div>

              <div className="lsOptionItem flex justify-between text-slate-600 text-md mb-2">
                <span>
                  Max Price <small>per Night</small>
                </span>
                <input
                  type="number"
                  className="lsOptionInput w-20 outline-none px-2 py-1"
                />
              </div>

              <div className="lsOptionItem flex justify-between text-slate-600 text-md mb-2">
                <span>Adult</span>
                <input
                  type="number"
                  className="lsOptionInput w-20 outline-none px-2 py-1"
                  placeholder={option.adult}
                  min={1}
                />
              </div>

              <div className="lsOptionItem flex justify-between text-slate-600 text-md mb-2">
                <span>Children</span>
                <input
                  type="number"
                  className="lsOptionInput w-20 outline-none px-2 py-1"
                  placeholder={option.children}
                  min={0}
                />
              </div>

              <div className="lsOptionItem flex justify-between text-slate-600 text-md mb-2">
                <span>Room</span>
                <input
                  type="number"
                  className="lsOptionInput w-20 outline-none px-2 py-1"
                  placeholder={option.room}
                  min={1}
                />
              </div>
            </div>
            <button className="p-2 bg-blue-600 text-white w-full font-bold cursor-pointer">
              Search
            </button>
          </div>

          <div className="listResult w-3/4">
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
