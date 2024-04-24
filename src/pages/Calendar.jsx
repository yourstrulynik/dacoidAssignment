import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { TbGraph } from "react-icons/tb";
export default function Calendar() {
  return (
    <>
      <div className=" mt-4 px-4 max-w-screen ">
        <div className="bg-white w-full h-[100px] p-4 fixed z-10 bottom-0 left-0 flex flex-row justify-between">
          <ul className="flex flex-row gap-8 mt-4 text-[#7F7F7F]">
            <li>
              <BiHomeAlt2 size={40} />
            </li>
            <li className="text-[#829DFF]">
              <TbGraph size={40} />
            </li>
          </ul>
          <div className="flex  place-content-center">
            <button className=" text-white float-right bg-gradient-to-r from-[#e3eafd] to-[#89A1FF] rounded-full p-4 absolute top-[-25%]">
              <CiSearch size={40} />
            </button>
          </div>
          <ul className="flex flex-row gap-8 mt-4 text-[#7F7F7F]">
            <li>
              <HiOutlineCamera size={40} />
            </li>
            <li>
              <HiOutlineUser size={40} />
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center justify-between">
          <button className="">
            <FaChevronLeft />
          </button>
          <h1 className="font-semibold text-xl">Workout Schedule</h1>
          <div></div>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 mt-4">
          <FaChevronLeft />
          <span className="font-medium">Feb 2024</span>
          <FaChevronRight />
        </div>
        <div className="flex justify-between items-center mt-8 px-4">
          <div className="flex flex-col items-center p-5 rounded-lg">
            <span>Sun</span>
            <span className="text-2xl">5</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-r p-5 from-[#e3eafd] to-[#89A1FF] rounded-lg text-white">
            <span>Mon</span>
            <span className="text-2xl ">6</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Tue</span>
            <span className="text-2xl">7</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Wed</span>
            <span className="text-2xl">8</span>
          </div>
          <div className="flex flex-col items-center">
            <span>Thu</span>
            <span className="text-2xl">9</span>
          </div>
        </div>
      </div>
        <div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">06:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">07:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">08:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">09:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">10:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">11:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">12:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">01:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">02:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">03:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">04:00 AM</span>
          </div>
          <div
            className="  
            after:content-[''] 
            after:inline-block 
            after:w-full 
          after:border-black
            after:border-t
            after:align-middle"
          >
            <span className="text-base p-4 mt-2 mb-2">05:00 AM</span>
          </div>
        </div>
    </>
  );
}

// before:content-['']
// before:inline-block
// before:w-full
// before:border-black
// before:border-t
// before:align-middle
