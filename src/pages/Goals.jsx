// import React from 'react'
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Goals() {
  const navigate = useNavigate()
  const  handleClick= ()=>{
    navigate('/calendar')
  }
  return (
    <div className="w-full h-screen flex flex-col p-8 gap-8">
      <h2 className="text-xl font-semibold text-center ">
        What are your Goals?
      </h2>
      <form action="" className="w-full h-3/4 flex flex-col gap-8">
        <div className="flex flex-row items-center bg-[#F1F1F1] p-4 rounded-xl">
          <p className="w-full text-xs mx-2 font-semibold text-black">
            Weight Loss
          </p>
          <input
            type="checkbox"
            className="scale-150 w-8 h-4 border-2 border-[#809AFF]"
          />
        </div>
        <div className="flex flex-row items-center bg-[#F1F1F1] p-4 rounded-xl">
          <p className="w-full text-xs mx-2 font-semibold text-black">
            Muscle Gain
          </p>
          <input type="checkbox" className="scale-150 w-8 h-4" />
        </div>
        <div className="flex flex-row items-center bg-[#F1F1F1] p-4 rounded-xl">
          <p className="w-full text-xs mx-2 font-semibold text-black">
            Flexiblity and Mobility
          </p>
          <input type="checkbox" className="scale-150 w-8 h-4" />
        </div>
        <div className="flex flex-row items-center bg-[#F1F1F1] p-4 rounded-xl">
          <p className="w-full text-xs mx-2 font-semibold text-black">
            General Fitness
          </p>
          <input type="checkbox" className="scale-150 w-8 h-4" />
        </div>
        <div className="flex flex-row items-center bg-[#F1F1F1] p-4 rounded-xl">
          <p className="w-full text-xs mx-2 font-semibold text-black">
            Event Specific Training
          </p>
          <input type="checkbox" className="scale-150 w-8 h-4" />
        </div>
        <div className="flex flex-row items-center bg-[#F1F1F1] p-4 rounded-xl">
          <p className="w-full text-xs mx-2 font-semibold text-black">
            Mind Fullness and Mental Health
          </p>
          <input type="checkbox" className="scale-150 w-8 h-4" />
        </div>
      </form>
      <div className="flex w-full mt-4">
        <button onClick={handleClick} className="bg-gradient-to-r from-[#7B91FF] to-[#89A1FF] w-full py-2 text-base text-white rounded-[12px] font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
}
