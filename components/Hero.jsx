"use client";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDot, RxDotFilled, RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import Cities from "../constants/index";
import Link from "next/link";

export default function Hero() {
  const slides = [
    {
      url: "https://s1.ticketm.net/dam/a/232/1ce4b1f4-a4bd-4a64-9fe8-a2352c14e232_SOURCE",
      name: "P!nk Summer Carnival 2024",
      date: "2024-03-09",
      description:
        "P!nk Summer Carnival 2024 refers to a potential musical tour or event featuring the singer P!nk, scheduled to take place in the summer of 2024. P!nk is known for her energetic pop and rock music, as well as her impressive live performances. ",
    },
    {
      url: "https://s1.ticketm.net/dam/a/242/e99f2b1b-2c58-4e03-9d5a-9c7c2713b242_1829631_RETINA_LANDSCAPE_16_9.jpg",
      name: "Bikini Kill",
      date: "2023-03-15",
      description:
        "Bikini Kill is a feminist punk rock band formed in Olympia, Washington in 1990. The band is known for their feminist and anti-racist lyrics, as well as their energetic live performances. They have released several albums, including Pussy Whipped and Reject All American. Bikini Kill is often credited with helping to popularize the feminist punk movement known as riot grrrl in the 1990s.",
    },
    {
      url: "https://s1.ticketm.net/dam/a/2d3/3dec80ca-4b0d-447f-93e7-d3a993e632d3_1829691_TABLET_LANDSCAPE_LARGE_16_9.jpg",
      name: "Dean Lewis - The Future is Bright World Tour",
      date: "2023-03-15",
      description:
        "Featuring Australian singer-songwriter Dean Lewis, who is known for his popular songs such as Waves and Be Alright. The tour is likely to feature performances by Dean Lewis at various venues around the world, and the title The Future is Bright suggests a positive and hopeful outlook for the future.",
    },
    {
      url: "https://s1.ticketm.net/dam/a/9b9/b31ce3df-ba42-4ec7-8fa2-ac061856b9b9_1801681_RETINA_LANDSCAPE_16_9.jpg",
      name: "AAF: Skyduck",
      date: "2023-03-14",
      description:
        "AAF: Skyduck is a song by American electronic music duo AAF, which stands for Adventure Club x Crankdat x Krewella. The song was released in 2019 and features a mix of electronic dance music (EDM) and pop elements.",
    },
    {
      url: "https://s1.ticketm.net/dam/a/184/1de64204-dda7-4bf4-b341-ecd9baed7184_SOURCE",
      name: "The Proclaimers",
      date: "2023-03-15",
      description:
        "The Proclaimers are a Scottish folk-rock duo consisting of twin brothers Charlie and Craig Reid. They gained international recognition in the late 1980s and early 1990s with their hit songs I'm Gonna Be (500 Miles) and Sunshine on Leith.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${slides[index].url})` }}
        className={`w-full h-full bg-center bg-cover duration-500 relative group z-20 transition-transform ${
          menu && "-translate-y-[45%] lg:-translate-y-[50%]"
        }`}
      >
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, stiffness: 80, duration: 1 }}
          transition={{ type: "spring" }}
          className="flex justify-between py-7 px-10 text-white text-4xl"
        >
          <motion.a whileTap={{ scale: 0.8 }} href="" className=" font-bold">
            KiwiKapers
          </motion.a>
          <motion.div className="flex gap-4">
            <motion.a whileTap={{ scale: 0.8 }} href="#search">
              <img
                src="/search.svg"
                alt="search"
                className="w-[24px] h-[24px] object-contain"
              />
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="duration-500 absolute top-[50%] left-24 p-6 w-[500px] max-w-[50%] text-white gap-4 bg-slate-600">
          <h1 className="text-3xl font-bold mb-2">{slides[index].name}</h1>
          <h1 className="mb-2">{slides[index].date}</h1>
          <h1 className="bg-green-600 text-sm py-2 px-2 inline-block rounded-md mb-2">
            Tickets on Sale
          </h1>
          <p className="text-lg hidden sm:inline-block">
            {slides[index].description.substring(0, 250)}...
          </p>
        </div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() =>
            setIndex((index) =>
              index === 0 ? (index = slides.length - 1) : index - 1
            )
          }
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactLeft size={30} />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() =>
            setIndex((index) =>
              index === slides.length - 1 ? (index = 0) : index + 1
            )
          }
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactRight size={30} />
        </motion.div>
        <div className="flex flex-col justify-center absolute bottom-4 right-12">
          {slides.map((slide, Index) => (
            <div
              key={Index}
              className="text-3xl cursor-pointer text-slate-700"
              onClick={() => setIndex(Index)}
            >
              {index === Index ? <RxDotFilled /> : <RxDot />}
            </div>
          ))}
        </div>
      </div>
      <motion.button
        onClick={() => setMenu(!menu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", duration: 1 }}
        className="h-[5rem] w-[5rem] absolute md:fixed z-30 left-[40%] md:left-[50%] bottom-[1rem] md:bottom-[3rem]
  border-none bg-orange-300 rounded-full outline-none shadow-lg cursor-pointer text-white group/item"
      >
        {menu ? (
          <RxCross1 className="absolute left-[32%] top-[32%]" size={30} />
        ) : (
          <RxHamburgerMenu
            className="absolute left-[32%] top-[32%] scale-0 group-hover/item:scale-100 transition-transform duration-500"
            size={30}
          />
        )}
      </motion.button>
      <motion.nav className="h-[35vh] lg:h-[50vh] w-full absolute left-0 bottom-0 z-10 overflow-hidden">
        <motion.div
          id="nav-links"
          drag="x"
          dragConstraints={{ left: -320, right: 200 }}
          className={`${menu ? "nav-appear" : "nav-hidden"} cursor-pointer`}
        >
          {Cities.map((city, index) => (
            <motion.div key={index}>
              <h1 className="text-[1.25rem] m-0 uppercase inline-block text-white opacity-75">
                {city.name}
              </h1>
              <Link href={`/${city.name}`}>
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", duration: 1 }}
                  className="max-w-[50vw] overflow-hidden rounded-[0.5rem] mt-[0.75rem] img-container"
                >
                  <img
                    className="image xl:h-[180px] aspect-[1.8/1] pointer-events-none object-cover cursor-pointer"
                    src={city.image}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
}
