"use client";
import React from "react";

// Third Party Imports
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center justify-start space-y-5 flex-shrink-0 w-[350px] sm:w-[500px] md:w-[500px] snap-center px-8 py-8 sm:px-10 sm:py-12 bg-[#292929]  cursor-pointer transition-opacity duration-200 overflow-hidden no-scrollbar min-h-[600px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className=" w-32 h-32 rounded-full xl:w-[128px] xl:h-[128px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="">
        <h4 className="text-[26px] font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-[22px] mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 overflow-x-scroll no-scrollbar pr-8">
          {experience?.technologies?.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 sm:h-11 sm:w-11 rounded-full object-contain object-center"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase pt-2 pb-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString() + " "}-{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-3 text-md overflow-y-auto max-h-[290px] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 pb-6 sm:pb-0">
          {experience?.points?.map((point, i) => (
            <div className="flex space-x-2 align-top" key={i}>
              <span>•</span>
              <li>{point}</li>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
