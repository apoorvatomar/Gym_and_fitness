import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false); // New state
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
    setIsPlayerVisible(true); // Show the player when a song is played
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
    setAutoPlay(true);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setAutoPlay(true);
  };

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex];
    if (autoPlay) {
      playSong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex, autoPlay]);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playSong,
        pauseSong,
        progress,
        handleSeek,
        playPreviousSong,
        playNextSong,
        currentSongIndex,
        setCurrentSongIndex,
        audioRef,
        handleTimeUpdate,
        isPlayerVisible, // Provide this value
      }}
    >
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNextSong}
      ></audio>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
