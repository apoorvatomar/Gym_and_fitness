import React from "react";

// Import your video files

const Body1 = () => {
  // Array of video file paths
  const videos = [
    "/Videos/body1.mp4",
    "/Videos/body2.mp4",
    "/Videos/body3.mp4",
  ];

  return (
    <>
      <div className="h-full w-full py-20">
        <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-2 bg-black/20 py-2 px-4 rounded-t-md ">
          Body
        </h1>

        <div className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
          <div className="w-full h-auto flex items-center justify-center gap-x-20 gap-y-5 flex-wrap mb-10 ">
            {/* Map through the videos array and render a video element for each video */}
            {videos.map((video, index) => (
              <video
                key={index}
                className="video lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translatery-y-2 ease-out duration-500 lg:ml-10 md:ml-0 sm:ml-0 ml-0 hover:scale-[1.1]"
                autoPlay
                loop
                muted
                controls={false}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body1;
