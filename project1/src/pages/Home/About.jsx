import { Dumbbell } from "lucide-react";
import React, { useState } from "react";
import LModal from "./../../components/Modal/LModal";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div id="about">
        <h1 className=" text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-3 mt-[65px] bg-black/20 py-2 px-4 rounded-t-md">
          {" "}
          <Dumbbell className="w-10 h-10 -rotate-45 text-indigo-600 " /> About
          us
        </h1>
        <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
          <div className="md:w-full lg:w-[38%] sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
            <img
              src="https://source.unsplash.com/random/?gym"
              alt="About Us"
              className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
            />
          </div>
          <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
            <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
              Effortless Strength, Timely Gains: Building Better Bodies, Faster
            </h1>

            <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500 font-medium mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              corrupti eos, enim ipsum, consequuntur ab id possimus
              exercitationem velit voluptas deserunt quibusdam hic harum,
              inventore perferendis ducimus minus. Incidunt, facere! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Necessitatibus velit
              unde quas ab iste perferendis officiis voluptatum recusandae magni
              aliquid neque sint expedita, voluptate ipsam rerun laborum
              provident voluptatibus doloribus.
            </p>

            <button
              className="text-base text-indigo-600 bg-indigo-600/5 font-medium px-3 py-1.5 rounded flex items-center border border-indigo-600 gap-x-1 hover:border-indigo-600/70 hover:bg-indigo-600/10 ease-out duration-500 lg:w-auto md:w-auto sm:w-auto w-full px-7 py-2 text-base fon-medium uppercase justify-center"
              onClick={openModal}
            >
              Become A Member
            </button>
            <LModal isOpen={isOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
