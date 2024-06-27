import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react'
import Label from '../../components/Label/Label';
import Input from  '../../components/Form/Input';
import SecondaryBtn from '../../components/Button/SecondaryBtn';


const BMI = () => {
    // Logic fro calculate BMI
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState(null);

    //Functon to calculate BMI
    const calculateBMI =()=>{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        setBMI(bmi);
    }


  return (
    <>
     <h1 className='text-3xl font-bold text-gray-200 flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-5 mb-0 mt-10 bg-black/20 py-2 px-4 rounded-t-md'>  <Dumbbell className='w-10 h-10 -rotate-45 text-indigo-600' /> Calculate Your BMI</h1>  
      <div className="w-full h-auto flex items-center gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4" >
      
        <div className="w-full h-auto flex items-center justify-center flex-col">
       

         <div className="w-full h-auto flex items-end justify-center bg-black rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                <Label htmlfor="weight">Weight (Kg)</Label>
                <Input id="weight" name="weight" type="text" placeholder="Enter your weight" value={weight} onChange={(e)=>setWeight(e.target.value)} ></Input>
            </div>
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
                <Label htmlfor="weight">Height (cm)</Label>
                <Input id="height" name="height" type="text" placeholder="Enter  your height" value={height} onChange={(e)=>setHeight(e.target.value)}></Input>
            </div>
            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
                <SecondaryBtn type="submit" className="w-full h-11 justify-center" onClick={calculateBMI}>Calculate BMI</SecondaryBtn>
            </div>
         </div>

         {bmi!==null &&(
            <div className="bg-black rounded-b-md px-6 py-2.5 mt-5">
                <p className="text-indigo-100 text-2xl">
                    You BMI:- <span className='font-bold'> {bmi} </span>
                </p>
            </div>
         )}
        </div>
      </div>
    </>
  )
}

export default BMI
