"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";

// Third Party Imports
import { Cursor, useTypewriter } from "react-simple-typewriter";
import motion from "@/libs/framerMotion";
import Link from "next/link";

import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's ${pageInfo?.name}`, ...pageInfo?.headlines],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-28"
    >
      <BackgroundCircles />

      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Hassan's Image"
        width={162}
        height={162}
        className="relative rounded-full mx-auto object-cover max-h-[162px] max-w-[162px] object-top"
      />

      <div className="z-20">
        <h2 className="text-sm tracking-[8px] sm:text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* Nav Bar */}
        <div className="flex justify-center items-center pt-5 mx-3 sm:mx-0">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
