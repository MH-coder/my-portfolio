"use client";
import React from "react";

// Third Party Imports
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mhassan786000@gmail.com?subject=${formData.subject}?body=Hi, My name is ${formData.name}, ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-center max-w-7xl px-10 mx-auto items-center z-0">
      <h3 className="sm:pl-5 md:pl-0 mt-28 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">
        Contact Me
      </h3>

      <div className="flex flex-col space-y-4 sm:space-y-8 mt-16 sm:mt-20 items-center">
        <h4 className="text-xl max-w-xs sm:max-w-7xl sm:text-4xl font-semibold text-center">
          I have got just what you need. {""}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-4 sm:space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-1xl sm:text-2xl">+92-317-7249827</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-1xl sm:text-2xl">mhassan786000@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-1xl sm:text-2xl">Pakistan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 max-w-xs sm:max-w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
