import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink";

const services = () => {
  const servicesData = [
    {
      id: 1,
      serviceImg: "https://source.unsplash.com/random/?dumbbell",
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "/body",
    },
    {
      id: 2,
      serviceImg: "https://source.unsplash.com/random/?yoga",
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },

    {
      id: 4,
      serviceImg: "https://source.unsplash.com/random/?aerobics",
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },

    {
      id: 6,
      serviceImg: "https://source.unsplash.com/random/?zumba",
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-2 bg-black/20 py-2 px-4 rounded-t-md">
        {" "}
        <Dumbbell className="w-10 h-10 -rotate-45 text-indigo-600" /> Services
      </h1>

      <div
        id="service"
        className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      >
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {servicesData.map((data) => (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translatery-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${data.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/60 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {data.title}
                </h1>
                <p className="text-base text-gray-400 font-normal text-center mb-4">
                  {data.desc}
                </p>
                <TertiaryLink link={data.link}>
                  Read More
                  <MoveRight className="w-4 h-4 " />
                </TertiaryLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default services;
