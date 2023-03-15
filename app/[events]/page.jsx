"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RxInfoCircled } from "react-icons/rx";

export default function page({ params }) {
  const [data, setData] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const Data = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?id=${params.events}&apikey=GnNLAW6WezIxEyLqrr6G2tJAdJdkgggm`
      );

      const response = await Data.json();
      setData(response._embedded.events[0]);
    }
    fetchData();
  }, []);

  const formattedDate = (event) => {
    let date = new Date(event);
    let formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    let formmattedDate = formatter.format(date);
    return formmattedDate;
  };

  return (
    <div className="h-screen w-screen">
      {data && (
        <>
          <div
            style={{ backgroundImage: `url(${data.images[0]?.url})` }}
            className={`w-full h-full bg-center bg-cover duration-500 relative group z-20 transition-transform ${
              menu && "-translate-y-[25%] lg:-translate-y-[30%]"
            }`}
          >
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0, stiffness: 80, duration: 1 }}
              transition={{ type: "spring" }}
              className="flex justify-start py-7 px-10 text-white text-4xl"
            >
              <motion.a
                whileTap={{ scale: 0.8 }}
                href=""
                className=" font-bold"
              >
                KiwiKapers
              </motion.a>
            </motion.div>
            <div className="duration-500 absolute top-[65%] mx-5 md:left-24 p-6 w-[500px] max-w-[80%] md:max-w-[50%] text-white gap-4 bg-slate-600">
              <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", duration: 1 }}
                href={data.url}
                className="bg-lime-600 text-lg py-2 px-2 inline-block rounded-md mb-2"
              >
                Buy Tickets
              </motion.a>
            </div>
          </div>
          <motion.button
            onClick={() => setMenu(!menu)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", duration: 1 }}
            className="h-[5rem] w-[5rem] fixed z-30 left-[50%] bottom-[3rem]
border-none bg-sky-300 rounded-full outline-none shadow-lg cursor-pointer text-white group/item"
          >
            <RxInfoCircled
              className="absolute left-[32%] top-[32%]"
              size={30}
            />
          </motion.button>
          <motion.nav className="h-[25vh] lg:h-[30vh] w-full absolute left-0 bottom-0 z-10 overflow-hidden">
            <div className="duration-500 absolute bottom-[25%] mx-5 mt-5 md:left-24 p-6 w-[500px] max-w-[80%] md:max-w-[50%] text-white gap-4 bg-slate-500">
              <h1 className="md:mb-2">
                <span className="hidden md:inline-block font-bold mr-5">
                  Date :
                </span>{" "}
                {formattedDate(data?.dates?.start?.dateTime)}
              </h1>
              <h1 className="md:mb-2">
                <span className="hidden md:inline-block font-bold mr-5">
                  Promoter :
                </span>{" "}
                {data?.promoter?.name}
              </h1>
              <h1 className="md:mb-2">
                <span className="hidden md:inline-block font-bold mr-5">
                  Tickets :
                </span>{" "}
                from {data?.priceRanges[0]?.min} NZD
              </h1>
              <h1 className="md:mb-2">
                <span className="hidden md:inline-block font-bold mr-5">
                  Venue :
                </span>{" "}
                {data?._embedded?.venues[0]?.name}
              </h1>
              {/* <p className="text-lg hidden sm:inline-block">
                {slides[index].description.substring(0, 250)}...
              </p> */}
            </div>
          </motion.nav>
        </>
      )}
    </div>
  );
}
