"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isData, setIsData] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === "") return;
    const Data = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&apikey=GnNLAW6WezIxEyLqrr6G2tJAdJdkgggm`
    );

    const response = await Data.json();
    await setResult(response._embedded?.events);
    await setIsData(true);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center relative z-20">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", duration: 2, stiffness: 80 }}
        className="font-bold text-8xl text-center text-white mt-[20vh]"
      >
        Search Now
      </motion.h1>
      <div className="mt-[10vh] flex flex-col gap-4 w-[80%] self-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row relative justify-center gap-4"
        >
          <input
            type="text"
            placeholder="Search for events, artists, venues, or dates"
            className="h-[60px] grow border-slate-500 border-solid border-2 rounded-xl px-5"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsData(false);
            }}
          />
          <span className="sm:absolute sm:right-0  rounded-xl h-[50px] sm:h-full w-auto md:w-[100px] lg:w-[150px] p-1">
            <motion.button
              type="submit"
              whileTap={{ scale: 0.7 }}
              initial={{ scale: 1 }}
              id="newsletter-btn"
              className="rounded-xl h-[50px] sm:h-full w-full bg-gradient-to-r from-lime-500 to-sky-500 text-white font-bold text-[20px]"
            >
              Search
            </motion.button>
          </span>
        </form>
      </div>
      {isData && (
        <div>
          <motion.h1
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-4xl text-center text-white mt-[10vh] lg:mb-[10vh]"
          >
            Search Results "{search}"
          </motion.h1>
          {result ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-5 py-12 lg:p-12 lg:pl-20 gap-4">
              {result.map((event, index) => (
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
          ) : (
            <div>
              <motion.h1
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl text-center text-white my-[10vh]"
              >
                No results found.
              </motion.h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
