import React from "react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  CirclePlay,
  CirclePause,
} from "lucide-react";
import { useAudio } from "./AudioContext";

const MusicControl = () => {
  const {
    isPlaying,
    playSong,
    pauseSong,
    progress,
    handleSeek,
    playPreviousSong,
    playNextSong,
  } = useAudio();

  return (
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
      <div className="bar h-10 lg:w-[70%] md:w-[70%] sm:w-[70%] w-[100%] flex items-center justify-center">
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
  );
};

export default MusicControl;
