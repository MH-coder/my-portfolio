"use client";
import React from "react";

// Third Party Imports
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src={urlFor(skill?.image).url()}
        loading="eager"
        // initial={{
        //   // x: directionLeft ? -200 : 200,
        //   opacity: 0,
        // }}
        // whileInView={{ opacity: 1 }}
        // transition={{ duration: 1.5 }}
        className="rounded-full h-20 w-20 sm:h-24 sm:w-24 md:w-28 md:h-28 object-contain p-0.5 bg-white filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 sm:h-24 sm:w-24 md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 opacity-100 text-center">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
