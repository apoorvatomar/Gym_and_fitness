import React from "react";
import { useAudio } from "./AudioContext";

const Bollywood = () => {
  const { setCurrentSongIndex, playSong } = useAudio();

  const servicesData = [
    {
      id: 1,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 1",
    },
    {
      id: 2,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 2",
    },
    {
      id: 3,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 3",
    },
    {
      id: 4,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 4",
    },
    {
      id: 5,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 5",
    },
    {
      id: 6,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 6",
    },
    {
      id: 7,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 7",
    },
    {
      id: 8,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 8",
    },
    {
      id: 9,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 9",
    },
    {
      id: 10,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 10",
    },
    {
      id: 11,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 11",
    },
    {
      id: 12,
      serviceImg: "https://source.unsplash.com/random/?hard,song",
      title: "song 12",
    },
  ];

  const handleClick = (index) => {
    setCurrentSongIndex(index);
    setTimeout(() => {
      playSong();
    }, 0);
  };

  return (
    <div className="h-full w-full py-20 flex-col">
      <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-7 bg-black py-2 px-4 rounded-t-md fixed top-10 w-full left-0 z-50">
        Bollywood Songs
      </h1>
      <div className="h-full w-full py-10 flex items-center justify-center text-gray-200">
        <div className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 lg:px-24 md:px-16 sm:px-6 px-4">
          <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
            {servicesData.map((data) => (
              <div
                key={data.id}
                className="lg:w-[18%] md:w-[18%] sm:w-[18%] w-[45%] lg:h-[25vh] md:h-[25vh] sm:h-[25vh] h-[25vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translatery-y-2 ease-out duration-500"
                style={{
                  backgroundImage: `url(${data.serviceImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => handleClick(data.id - 1)}
              >
                <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
                <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                  <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                    {data.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bollywood;
