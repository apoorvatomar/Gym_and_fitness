import React from "react";
import { HeartPulse, MoveRight } from "lucide-react";
import { SlUserFemale } from "react-icons/sl";
import { IoIosPerson } from "react-icons/io";
import TertiaryLink from "./../../components/LinkBtn/TertiaryLink";


const weightLoss = () => {
  return (
    <>
      <div className="h-full w-full py-20">
        <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-2 bg-black/20 py-2 px-4 rounded-t-md ">
          {" "}
          <HeartPulse className="w-10 h-10  text-indigo-600" /> Weight Loss
          Chart{" "}
        </h1>

        <div className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
          <div className="w-full h-auto flex items-center justify-center gap-x-20 gap-y-5 flex-wrap mb-10 ">
            <div
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translatery-y-2 ease-out duration-500  lg:mr-10 md:mr-0 sm:mr-0 mr-0 hover:scale-[1.1]"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/?gym-women")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-[70vh] flex items-center  justify-center flex-col text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  <SlUserFemale className="text-2xl" />
                </div>
                <h1 className="text-4xl text-gray-100 font-semibold  text-center mb-4">
                  For Women
                </h1>
                <TertiaryLink
                  className=" hover:text-white hover:scale-150"
                  link={"/womenLoss"}
                >
                  Click For More
                  <MoveRight className="w-4 h-4 " />
                </TertiaryLink>
              </div>
            </div>

            <div
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translatery-y-2 ease-out duration-500 lg:ml-10 md:ml-0 sm:ml-0 ml-0 hover:scale-[1.1]"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/?gym-men")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-[70vh] flex items-center  justify-center flex-col text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  <IoIosPerson className="text-3xl" />
                </div>
                <h1 className="text-4xl text-gray-100 font-semibold  text-center mb-4">
                  For Men
                </h1>
                <TertiaryLink
                  className=" hover:text-white hover:scale-150"
                  link={"/manloss"}
                >
                  Click For More
                  <MoveRight className="w-4 h-4 " />
                </TertiaryLink>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default weightLoss;
