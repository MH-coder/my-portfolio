"use client";
import React from "react";

// Third party imports
import motion from "@/libs/framerMotion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  // Filter out Upwork and Fiverr objects
  const filteredArray = experiences.filter(
    (obj) =>
      obj?.company?.toLowerCase() !== "upwork" &&
      obj?.company?.toLowerCase() !== "fiverr"
  );

  // Concatenate the filtered array with the Upwork and Fiverr objects
  const sortedArray = filteredArray.concat(
    experiences.filter(
      (obj) =>
        obj?.company?.toLowerCase() === "upwork" ||
        obj?.company?.toLowerCase() === "fiverr"
    )
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col max-w-full px-10 mx-auto items-center"
    >
      <h3 className="pl-5 sm:pl-0 mt-28 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-1xl sm:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory mt-12 sm:mt-20 mb-4 pb-4 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
        {sortedArray.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
