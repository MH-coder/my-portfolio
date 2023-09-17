"use client";
import React from "react";
import Skill from "./Skill";

// Third Party Imports
import motion from "@/libs/framerMotion";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen mx-auto items-center"
    >
      <h3 className="pl-5 md:pl-0 mt-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="mt-3 uppercase tracking-[3px] text-gray-500 text-sm ">
        Hover over a skill for current profieciency
      </h3>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 mt-8 px-4 overflow-y-auto max-h-[550px] sm:max-h-[540px] md:max-h-[540px] xl:max-h-[660px] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/30"
      >
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
