"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { downloadFile } from "../utils/downloadFile";

const HeroSection = () => {
  const handleDownload = () => {
    downloadFile("/resume.pdf", "resume.pdf");
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
              Hello, I&#39;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Alessandro",
                1000,
                "Mobile Developer",
                1000,
                "Software Developer",
                1000,
                "Zukka",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am passionate about technology and mobile development. I thrive in
            team environments and enjoy pair programming. I implement
            Test-Driven Development (TDD) practices whenever possible. I am a
            firm believer in continuous learning and strive to improve every
            day.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-orange-400 to-yellow-200 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button
              onClick={handleDownload}
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-200 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/alessandro_round.png"
              alt="Dev image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
