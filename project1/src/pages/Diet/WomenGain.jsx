import React from "react";
import { SlUserFemale } from "react-icons/sl";

const WomenGain = () => {
  const Moday = [
    {
      id: 1,
      time: "Breakfast",
      food: " 2 vegetable stuffed parathas, 1 cup curd, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: "1 glass lassi or mango shake",
    },
    {
      id: 3,
      time: "Lunch",
      food: "1 cup dal/ chicken curry, 1 cup seasonal vegetable, 2 chapattis, ½ cup rice, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: "1 glass fresh fruit juice, 2 whole-grain toasts",
    },
    {
      id: 5,
      time: "Dinner",
      food: "1 cup vegetable, 2 chapattis, 1 cup salad",
    },
  ];
  const Tuesday = [
    {
      id: 1,
      time: "Breakfast",
      food: "2 moong dal chilla (paneer stuffing optional), 1 cup curd, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: "Fruit smoothie",
    },
    {
      id: 3,
      time: "Lunch",
      food: " 1 cup dal, 2 chapattis, ½ cup rice, 1 cup curd, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: " 1 bowl tomato soup, 1 cup aloo chat",
    },
    {
      id: 5,
      time: "Dinner",
      food: " 1 cup seasonal vegetable, 2 chapattis, 1 cup salad",
    },
  ];

  const Wednesday = [
    {
      id: 1,
      time: "Breakfast",
      food: "1 cup bread upma, 1 cup milk, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: "2 bananas",
    },
    {
      id: 3,
      time: "Lunch",
      food: "1 cup lentils, 1 cup vegetables, 2 chapattis, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: "1 cup upma, 1 glass vegetable juice",
    },
    {
      id: 5,
      time: "Dinner",
      food: "1 cup vegetable, 2 chapattis, 1 cup salad",
    },
  ];

  const Thursday = [
    {
      id: 1,
      time: "Breakfast",
      food: "2 cucumber potato sandwiches, 1 cup orange juice, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: "1 cup sweet potato chaat, 1 glass buttermilk",
    },
    {
      id: 3,
      time: "Lunch",
      food: "1 cup lentils/ chicken or fish curry, 2 cups rice, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: " Milk smoothie, 2 bananas",
    },
    {
      id: 5,
      time: "Dinner",
      food: "1 cup seasonal vegetable, 2 chapattis, 1 cup salad",
    },
  ];

  const Friday = [
    {
      id: 1,
      time: "Breakfast",
      food: "1 cup vegetable poha, 1 cup curd, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: " 1 glass fresh fruit juice",
    },
    {
      id: 3,
      time: "Lunch",
      food: " 1 cup dal, 1 cup vegetable, 2 chapattis, ½ cup rice, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: " 2 besan chilla, 1 cup sprouts salad",
    },
    {
      id: 5,
      time: "Dinner",
      food: "1 cup vegetable/ chicken curry, 2 chapattis, 1 cup salad",
    },
  ];

  const Saturday = [
    {
      id: 1,
      time: "Breakfast",
      food: "2 suji chilla, 1 glass strawberry shake, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: "1 glass coconut water, 1 cup fruit",
    },
    {
      id: 3,
      time: "Lunch",
      food: "1 cup dal, 1 cup vegetable/ tofu/ paneer curry, ½ cup rice, 2 chapattis, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: " 1 cup fruit salad, 4 -5 vegetable cutlets",
    },
    {
      id: 5,
      time: "Dinner",
      food: "2 chapattis, 1 cup vegetable/ chicken/ fish curry, 1 cup salad",
    },
  ];

  const Sunday = [
    {
      id: 1,
      time: "Breakfast",
      food: " 2 eggs, 2 whole-grain bread slices, 1 cup milk, handful of nuts",
    },
    {
      id: 2,
      time: "Mid-morning",
      food: " 1 glass banana smoothie",
    },
    {
      id: 3,
      time: "Lunch",
      food: "1 cup dal, 1 cup vegetable curry, 2 chapattis, ½ cup rice, 1 cup salad",
    },
    {
      id: 4,
      time: "Evening",
      food: " 1 glass strawberry smoothie, 1 cup vegetable poha",
    },
    {
      id: 5,
      time: "Dinner",
      food: " 1 cup chicken curry, 2 chapattis, 1 cup salad",
    },
  ];

  return (
    <>
      <div className="h-full w-full py-20">
        <h1 className="text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-2 bg-black/20 py-2 px-4 rounded-t-md ">
          {" "}
          <SlUserFemale className="w-8 h-8  text-indigo-600" />
          Weight Gain for Women{" "}
        </h1>
        <div className="w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
          <div className="w-full h-auto flex items-center justify-center gap-x-20 gap-y-5 flex-wrap mb-10 ">
            {/* Moday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Monday</h1>
                {Moday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Tuesday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Tuesday</h1>
                {Tuesday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Wednesday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Wednesday</h1>
                {Wednesday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Thursday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Thursday</h1>
                {Thursday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Friday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Friday</h1>
                {Friday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Saturday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Saturday</h1>
                {Saturday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Sunday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className="text-3xl text-gray-200">Sunday</h1>
                {Sunday.map((data) => (
                  <div
                    key={data.id}
                    className="card w-[90%]  bg-gray-300 rounded-md mt-5"
                  >
                    <h1 className="text-xl text-gray-300 bg-black/80 text-center">
                      {data.time}
                    </h1>
                    <h1 className="text-2xl text-gray-900  text-center">
                      {data.food}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WomenGain;
