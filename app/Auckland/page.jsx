"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const Data = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=Auckland&apikey=GnNLAW6WezIxEyLqrr6G2tJAdJdkgggm`
      );

      const response = await Data.json();
      setData(response._embedded.events);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://s1.ticketm.net/dam/a/c5d/50d37e3a-f0c3-4fa1-8de0-076afe0b5c5d_1801661_TABLET_LANDSCAPE_LARGE_16_9.jpg)`,
        }}
        className={`max-w-screen h-[50vh] bg-center bg-cover duration-500 relative group z-20 transition-transform`}
      >
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, stiffness: 80, duration: 1 }}
          transition={{ type: "spring" }}
          className="flex justify-start py-7 px-10 text-white text-4xl"
        >
          <motion.a whileTap={{ scale: 0.8 }} href="" className=" font-bold">
            KiwiKapers
          </motion.a>
        </motion.div>
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          className="bg-green-600 text-lg p-2 inline-block rounded-md text-white font-bold absolute bottom-16 left-[35%] lg:left-[45%]"
        >
          Tickets on Sale
        </motion.h1>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-5xl mt-[80px] text-center text-white">
          Events in Auckland 2023-24
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-5 py-12 lg:p-12 lg:pl-20 gap-4">
          {data &&
            data.map((event, index) => (
              <motion.div
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-[40vw] md:w-[30vw] lg:w-[20vw] cursor-pointer h-[20vw] lg:h-[10vw] overflow-hidden rounded-[0.5rem] mt-[0.75rem] img-container"
                >
                  <Link href={`/${event.id}`}>
                    <img
                      src={event.images[0].url}
                      className="image aspect-[1.8/1] pointer-events-none h-full w-full object-cover cursor-pointer"
                    />
                  </Link>
                </motion.div>
                <h1 className="text-[1rem] lg:text-[1.25rem] m-0 mt-5 uppercase inline-block text-white opacity-75">
                  {event.name}
                </h1>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
