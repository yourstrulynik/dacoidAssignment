import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { FiAlertTriangle } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import workoutOne from "../assets/img3.png";
import workoutTwo from "../assets/img4.png";
import workoutThree from "../assets/img5.png";
import ReactSwitch from "react-switch";
import { CiSearch } from "react-icons/ci";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineCamera } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { TbGraph } from "react-icons/tb";
const data = [
  {
    time: "00:00",
    cb: 100,
    target: 900,
  },
  {
    time: "01:00",
    cb: 800,
    target: 900,
  },
  {
    time: "02:00",
    cb: 300,
    target: 900,
  },
  {
    time: "03:00",
    cb: 400,
    target: 900,
  },
  {
    time: "04:00",
    cb: 700,
    target: 900,
  },
  {
    time: "05:00",
    cb: 900,
    target: 900,
  },
  {
    time: "06:00",
    cb: 200,
    target: 900,
  },
  {
    time: "07:00",
    cb: 400,
    target: 900,
  },
  {
    time: "08:00",
    cb: 800,
    target: 900,
  },
  {
    time: "09:00",
    cb: 300,
    target: 900,
  },
  {
    time: "10:00",
    cb: 700,
    target: 900,
  },
  {
    time: "11:00",
    cb: 500,
    target: 900,
  },
  {
    time: "12:00",
    cb: 300,
    target: 900,
  },
];

export default function Chart() {
  const [check, setChecked] = useState(true);
  const [check2, setChecked2] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
  };
  const handleChange2 = (val) => {
    setChecked2(val);
  };
  return (
    <>
      <div className=" mt-4 px-4 max-w-screen ">
        <div className="bg-white w-full h-[100px] p-4 fixed z-10 bottom-0 left-0 flex flex-row justify-between">
          <ul className="flex flex-row gap-8 mt-4 text-[#7F7F7F]">
            <li><BiHomeAlt2  size={40}/></li>
            <li className="text-[#829DFF]"><TbGraph size={40}/></li>
          </ul>
          <div className="flex  place-content-center">
            <button className=" text-white float-right bg-gradient-to-r from-[#e3eafd] to-[#89A1FF] rounded-full p-4 absolute top-[-25%]">
              <CiSearch size={40} />
            </button>
          </div>
          <ul className="flex flex-row gap-8 mt-4 text-[#7F7F7F]">
            <li><HiOutlineCamera size={40}/></li>
            <li><HiOutlineUser size={40}/></li>
          </ul>
        </div>

        <div className="flex flex-row items-center justify-between">
          <button className="">
            <FaChevronLeft />
          </button>
          <h1 className="font-semibold text-xl">Workout Tracker</h1>
          <div></div>
        </div>

        <div className="w-full h-full flex ">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="time" tickCount="6" interval="10" />
            <YAxis dataKey="target" />

            <Tooltip />
            {/* <CartesianGrid stroke="gray"  /> */}
            <Bar
              type="monotone"
              dataKey="cb"
              stroke="#829DFF"
              fill="#829DFF"
              barSize="10"
            />
            <CartesianGrid strokeDasharray="0 5" />
          </BarChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="p-4 flex gap-4 items-center bg-[linear-gradient(90.07deg,_rgba(129,_157,_255,_0.28)_5.94%,_rgba(16,_16,_16,_0)_76.45%)] font-medium rounded-xl">
          <span className="text-[#7E96FF]">
            <FiAlertTriangle size={25} />
          </span>
          <p>
            You have burned fewer calories than yesterday. Time to get moving!
          </p>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between mt-8 ">
            <h1 className="font-semibold">Upcoming Workout</h1>
            <span>See More</span>
          </div>
          <div className="p-4 [box-shadow:-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] rounded-[12px] flex  items-center gap-2">
            <img
              src={workoutOne}
              alt=""
              className="w-[60px] h-[60px] rounded-full bg-[#819aff2f]"
            />
            <div className="flex flex-col grow">
              <span>Full Body Workout</span>
              <span>Today 3pm</span>
            </div>
            <ReactSwitch
              uncheckedIcon=""
              checked={check}
              onChange={handleChange}
            />
          </div>
          <div className="p-4 [box-shadow:-4px_8px_25px_-8px_rgba(0,_0,_0,_0.15)] rounded-[12px] flex  items-center gap-2">
            <img
              src={workoutTwo}
              alt=""
              className="w-[60px] h-[60px] rounded-full bg-[#819aff2f]"
            />
            <div className="flex flex-col grow">
              <span>Upper Body Workout</span>
              <span>Feb 4, 3:30 pm</span>
            </div>
            <ReactSwitch
              uncheckedIcon=""
              checked={check2}
              onChange={handleChange2}
            />
          </div>
          <h2 className="my-4 text-base font-semibold">
            What Do You Want To Train
          </h2>
          <div className="flex flex-row items-center justify-between p-4 bg-[#8cb0ff7a] rounded-xl">
            <div className="flex flex-col gap-2">
              <span className="font-md">Full Body Workout</span>
              <span className="font-md">Arms</span>
              <span className="font-md">Chest</span>
            </div>
            <img
              src={workoutThree}
              alt=""
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
