"use client";
import React from "react";

// Third party Imports
import motion from "@/libs/framerMotion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col max-w-7xl px-10 mx-auto items-center overflow-y-auto no-scrollbar"
    >
      <h3 className="mt-28 uppercase tracking-[20px] text-gray-500 text-1xl sm:text-2xl pl-5">
        About
      </h3>

      <div className="flex flex-col text-center md:text-left md:flex-row justify-evenly md:items-start mx-auto items-center mt-8 sm:mt-32">
        <motion.img
          src={urlFor(pageInfo?.profilePic).url()}
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[380px] xl:h-[500px]"
        />

        <div className="pl-0 md:pl-10 mt-6 sm:mt-0 ">
          <h4 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-5 sm:mb-10">
            Here's a{" "}
            <span className="underline decoration-[#F7AB0A]">little</span>{" "}
            background
          </h4>
          <p
            className="text-xs sm:text-base max-h-[320px] sm:max-h-[450px] sm:overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/30"
            dangerouslySetInnerHTML={{
              __html: pageInfo?.backgroundInformation,
            }}
          ></p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
