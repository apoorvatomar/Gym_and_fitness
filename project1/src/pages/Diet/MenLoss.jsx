import React from 'react';
import { IoIosPerson } from "react-icons/io";

const MenLoss = () => {

  const Moday=[
    {
      id: 1,
      time:"Breakfast",
      food:"1 medium size apple",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"Sliced muskmelon (1/2 bowl)",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"Watermelon (1 bowl)",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"1 big Mosambi or Orange or Pomegranate salad",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"½ cup watermelon",
      
    }
  ];
  const Tuesday=[
    {
      id: 1,
      time:"Breakfast",
      food:"Boiled potatoes (1 cup)",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"Cucumber (1/2 bowl)",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"Lettuce, cucumber, spinach and capsicum (1 cup each)",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"Sliced carrots (1/2 cup), lemon juice (1 glass) with a pinch of salt",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"1 cucumber",
      
    }
  ];

  const Wednesday=[
    {
      id: 1,
      time:"Breakfast",
      food:"Muskmelon (1/2 bowl)",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"Pineapple or pear (1 cup)",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"Lettuce, cucumber, spinach and capsicum (1 cup each)",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"Sliced carrots (1/2 cup), lemon juice (1 glass) with a pinch of salt",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"1 cucumber",
      
    }
  ];

  const Thursday=[
    {
      id: 1,
      time:"Breakfast",
      food:"2 bananas",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"1 banana",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"Milkshake containing 2 bananas, a dash of cocoa powder, and a glass of milk",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"2 bananas and 1 glass of milk",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"1 glass of milk",
      
    }
  ];

  const Friday=[
    {
      id: 1,
      time:"Breakfast",
      food:"3 tomatoes",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"Brown rice (1/2 cup) sautéed assorted veggies.",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"2 tomatoes",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"Brown rice (1 bowl) and 1 tomato with ½ cup of sautéed veggies",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"1 tomato with ½ cup of sautéed veggies",
      
    }
  ];

  const Saturday=[
    {
      id: 1,
      time:"Breakfast",
      food:"3 tomatoes",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"Brown rice (1/2 cup) sautéed assorted veggies.",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"2 tomatoes",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"Brown rice (1 bowl) and 1 tomato with ½ cup of sautéed veggies",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"A bowl of tomato soup with a bit of salt and pepper",
      
    }
  ];

  const Sunday=[
    {
      id: 1,
      time:"Breakfast",
      food:"1 glass of orange or apple juice",
      
    },
    {
      id: 1,
      time:"Mid-morning",
      food:"½ cup sautéed veggies with ½ cup brown rice",
      
    },
    {
      id: 1,
      time:"Lunch",
      food:"Watermelon (1 cup) with a few assorted berries",
      
    },
    {
      id: 1,
      time:"Evening",
      food:"1 cup soup",
      
    },
    {
      id: 1,
      time:"Dinner",
      food:"½ cup brown rice with ½ cup sautéed veggies",
      
    }
  ];

  return (
    <>
      <div className='h-full w-full py-20'>
        <h1 className='text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-2 bg-black/20 py-2 px-4 rounded-t-md '>  <IoIosPerson className='w-8 h-8  text-indigo-600' /> Weight Loss for Men </h1>
        <div className='w-full h-auto flex items-center justify-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
            <div className="w-full h-auto flex items-center justify-center gap-x-20 gap-y-5 flex-wrap mb-10 ">

             {/* Moday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">

                {/* Monday  */}
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Monday</h1>
                {Moday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            {/* Tuesday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">

               
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Tuesday</h1>
                {Tuesday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            {/* Wednesday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Wednesday</h1>
                {Wednesday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            {/* Thursday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Thursday</h1>
                {Thursday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            {/* Friday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Friday</h1>
                {Friday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            {/* Saturday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Saturday</h1>
                {Saturday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            {/* Sunday  */}
            <div className=" lg:w-[40%] md:w-[90%] sm:w-[90%] w-full lg:h-auto md:h-auto sm:h-auto h-auto rounded-xl bg-black relative overflow-hidden  z-10 hover:-translatery-y-2 ease-out duration-500 lg:mr-10 md:mr-0 sm:mr-0 mr-0 ">
              <div className="cards flex flex-col justify-center items-center space-y-2 mb-5">
                <h1 className='text-3xl text-gray-200' >Sunday</h1>
                {Sunday.map((data)=>(
                 
                  <div key={data.id}className="card w-[90%]  bg-gray-300 rounded-md mt-5">
                    <h1 className='text-xl text-gray-300 bg-black/80 text-center'>{data.time}</h1>
                    <h1 className='text-2xl text-gray-900  text-center'>{data.food}</h1>
                  </div>
                ))}

              </div>
            </div>

            </div>
            </div>

           
      </div>

      
    </>
  )
}

export default MenLoss

