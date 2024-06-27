import React, { useState, useRef, useEffect } from "react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  CirclePlay,
  CirclePause,
} from "lucide-react";


const Punjabi = () => {
  const servicesData = [
    {
      id: 1,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 1",
    },
    {
      id: 2,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 2",
    },
    {
      id: 3,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 3",
    },
    {
      id: 4,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 4",
    },
    {
      id: 5,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 5",
    },

    {
      id: 6,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 6",
    },
    {
      id: 7,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 7",
    },
    {
      id: 8,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 8",
    },
    {
      id: 9,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 9",
    },
    {
      id: 10,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 10",
    },
    {
      id: 11,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 11",
    },

    {
      id: 12,
      serviceImg: "https://source.unsplash.com/random/?punjabi,song",
      title: "song 12",
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const audioRef = useRef(null);

  const songs = [
    "/Musics/1.mp3",
    "/Musics/2.mp3",
    "/Musics/3.mp3",
    "/Musics/4.mp3",
    "/Musics/5.mp3",
    "/Musics/6.mp3",
    "/Musics/7.mp3",
    "/Musics/8.mp3",
    "/Musics/9.mp3",
    "/Musics/10.mp3",
    "/Musics/11.mp3",
    "/Musics/12.mp3",
  ];

  const playSong = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const calculatedProgress = (currentTime / duration) * 100;
    setProgress(calculatedProgress);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setAutoPlay(true); // Set autoplay to true when changing songs manually
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setAutoPlay(true); // Set autoplay to true when changing songs manually
  };

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex];
    if (autoPlay) {
      playSong();
    }
    // eslint-disable-next-line
  }, [currentSongIndex, autoPlay]);

  return (
    <>
    <div className="h-full w-full py-20 flex-col ">
      <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-7 bg-black py-2 px-4 rounded-t-md fixed top-10 w-full left-0 z-50">
        Punjabi Songs
      </h1>

      <div className="h-full w-full py-10 flex items-center justify-center text-gray-200">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={playNextSong}
        ></audio>

        <div className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12  lg:px-24 md:px-16 sm:px-6 px-4 ">
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
                onClick={() => setCurrentSongIndex(data.id - 1)} // Update onClick handler
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

      <div className="musicControl fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center bg-black py-2 w-full">
        <div className="buttons w-full flex justify-center text-gray-200 gap-x-5 ">
          <button onClick={playPreviousSong}>
            <CircleChevronLeft className="w-8 h-8 " />
          </button>
          <button onClick={isPlaying ? pauseSong : playSong}>
            {isPlaying ? (
              <CirclePause className="w-8 h-8" />
            ) : (
              <CirclePlay className="w-8 h-8" />
            )}
          </button>
          <button onClick={playNextSong}>
            <CircleChevronRight className="w-8 h-8" />
          </button>
        </div>
        <div className="bar  h-10 lg:w-[70%] md:w-[70%] sm:w-[70%] w-[100%] flex items-center justify-center">
          <input
            className="w-[80%]"
            type="range"
            value={progress}
            onChange={handleSeek}
            step="0.01"
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
   

    </>
  );
};

export default Punjabi;
