import React, { useState, useRef, useEffect } from "react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  CirclePlay,
  CirclePause,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 1",
    location: "https://www.youtube.com/embed/N_RleakXOUs?enablejsapi=1",
  },
  {
    id: 2,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 6",
    location:
      "https://www.youtube.com/embed/ijE2MMtzkHg?si=3FQ-8uSA0FapNbr_&enablejsapi=1",
  },

  {
    id: 3,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 3",
    location: "https://www.youtube.com/embed/YT2Tcehr36Y?enablejsapi=1",
  },
  {
    id: 4,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 4",
    location: "https://www.youtube.com/embed/f2RNjDQfW4Q?enablejsapi=1",
  },
  {
    id: 5,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 5",
    location:
      "https://www.youtube.com/embed/1Dj3Dg1W1oo?si=T10LetkHvSyP4RB_&enablejsapi=1",
  },
  {
    id: 6,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 6",
    location:
      "https://www.youtube.com/embed/ijE2MMtzkHg?si=3FQ-8uSA0FapNbr_&enablejsapi=1",
  },
  {
    id: 7,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 7",
    location:
      "https://www.youtube.com/embed/jIQ0Dx-4peE?si=LfV-pcsmTywVFTpy&enablejsapi=1",
  },
  {
    id: 8,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 8",
    location:
      "https://www.youtube.com/embed/wedNGWk-l0A?si=ZbwH_Zp_IGpHr_Pk&enablejsapi=1",
  },
  {
    id: 9,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 9",
    location:
      "https://www.youtube.com/embed/Q5r9-k7xYGw?si=89LLZNaCrQnEVX-I&enablejsapi=1",
  },
  {
    id: 10,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 10",
    location:
      "https://www.youtube.com/embed/qVcHlaFZf6A?si=8MHjMr0zCYkpew_C&enablejsapi=1",
  },
  {
    id: 11,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 11",
    location:
      "https://www.youtube.com/embed/QqyuVF1u7_Y?si=21LY4RVfT3p4aYwL&enablejsapi=1",
  },
  {
    id: 12,
    serviceImg: "https://source.unsplash.com/random/?hard,song",
    title: "song 12",
    location:
      "https://www.youtube.com/embed/oje0cxEl8j0?si=i7G5kYoEkYImKe1P&enablejsapi=1",
  },
];

const Try = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const iframeRef = useRef(null);
  const isSeeking = useRef(false);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onPlaybackRateChange: onPlaybackRateChange,
        },
      });
      iframeRef.current.player = player;
    };
  }, []);

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime("0:00");
  }, [currentIndex]);

  const onPlayerReady = (event) => {
    event.target.playVideo();
    updateProgress();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
      updateProgress();
    } else {
      setIsPlaying(false);
    }
  };

  const onPlaybackRateChange = () => {
    updateProgress();
  };

  const sendMessageToPlayer = (message) => {
    const iframe = iframeRef.current;
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: message,
        args: [],
      }),
      "*"
    );
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      sendMessageToPlayer("pauseVideo");
    } else {
      sendMessageToPlayer("playVideo");
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  const updateProgress = () => {
    const player = iframeRef.current.player;
    if (player && player.getDuration && !isSeeking.current && isPlaying) {
      const duration = player.getDuration();
      const currentTime = player.getCurrentTime();
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);

      const formattedCurrentTime = formatTime(currentTime);
      setCurrentTime(formattedCurrentTime);
    }
    requestAnimationFrame(updateProgress);
  };

  const handleProgressBarChange = (e) => {
    const progressBar = e.target;
    const seekTime =
      (progressBar.value / 100) * iframeRef.current.player.getDuration();
    iframeRef.current.player.seekTo(seekTime, true);
    setProgress(progressBar.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div className="h-full w-full mt-10 flex flex-col items-center">
      <div className="h-full w-full py-20 flex-col">
        <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-7 bg-black py-2 px-4 rounded-t-md fixed top-10 w-full left-0 z-50">
          Bollywood Songs
        </h1>
        <div className="h-full w-full flex items-center justify-center text-gray-200">
          <div className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 lg:px-24 md:px-16 sm:px-6 px-4">
            <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
              {servicesData.map((data, index) => (
                <div
                  key={data.id}
                  className="songbox lg:w-[18%] md:w-[18%] sm:w-[18%] w-[45%] lg:h-[25vh] md:h-[25vh] sm:h-[25vh] h-[25vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translatery-y-2 ease-out duration-500"
                  style={{
                    backgroundImage: `url(${data.serviceImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => setCurrentIndex(index)} // Add onClick handler
                >
                  <div className="w-full h-full bg-black/50 absolute top-0 left-0 -z-10"></div>
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
      <iframe
        ref={iframeRef}
        width="1px"
        height="1px"
        src={`${servicesData[currentIndex].location}&autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="musicControl fixed bottom-0 left-0 z-50 flex flex-col items-center justify-center bg-black py-2 w-full">
        <div className="flex items-center">
          <button onClick={handlePrev} className="mx-2 text-white">
            <CircleChevronLeft className="w-8 h-8" />
          </button>
          <button onClick={handlePlayPause} className="mx-2 text-white">
            {isPlaying ? (
              <CirclePause className="w-8 h-8" />
            ) : (
              <CirclePlay className="w-8 h-8" />
            )}
          </button>
          <button onClick={handleNext} className="mx-2 text-white">
            <CircleChevronRight className="w-8 h-8" />
          </button>
          <div className="pt-1 pl-2 text-white">{currentTime}</div>
        </div>
        <div className="bar h-10 lg:w-[70%] md:w-[70%] sm:w-[70%] w-[100%] flex items-center justify-center">
          {/* Progress bar */}
          <input
            type="range"
            value={progress}
            onChange={handleProgressBarChange}
            step="0.01"
            min="0"
            max="100"
            style={{
              width: "100%",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Try;
