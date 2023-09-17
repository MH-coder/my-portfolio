"use client";
import React, { useRef, useEffect } from "react";

// Third Party Imports
import motion from "@/libs/framerMotion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import { LinkIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full mx-auto items-center z-0"
    >
      <h3 className="pl-5 md:pl-0 mt-28 -mb-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative snap-mandatory z-20 w-full flex overflow-x-scroll overflow-y-hidden snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-8 sm:px-20 md:px-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              className=" w-full max-h-[320px] object-contain"
              alt=""
            />

            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-md sm:text-4xl font-semibold text-center flex items-center justify-center space-x-0.5 sm:space-x-2">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>
                <span>{project?.title}</span>
                {/* <img
                  src="./linkIcon.png"
                  className="w-6 h-6 object-contain inline hover:cursor-pointer hover:bg-white"
                /> */}
                <a target="_blank" href={project.linkToBuild}>
                  <LinkIcon className="w-5 h-5 sm:w-7 sm:h-7 object-contain inline hover:cursor-pointer hover:text-[#F7AB0A]" />
                </a>
              </h4>

              <div
                className={`flex items-center space-x-2 ${
                  project.technologies.length > 7
                    ? "justify-start sm:justify-center"
                    : "justify-center"
                } overflow-x-auto no-scrollbar`}
              >
                {project?.technologies.map((technology) => (
                  <img
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-contain"
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-base sm:text-lg text-left sm:text-center md:text-left max-h-36 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/30">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
