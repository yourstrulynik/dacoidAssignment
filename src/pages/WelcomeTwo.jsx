import React from "react";
import ImageTwo from "../assets/img2.png";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function WelcomeTwo() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="w-full h-screen flex flex-col justify-around px-10">
      <div>
        <button className="float-right text-[#9FB2FF]">Skip</button>
      </div>

      <div className="flex flex-col p-4">
        <img
          className=" w-[352px] h-[282px] md:w-[400px] md:h-[400px]"
          src={ImageTwo}
          alt=""
        />

        <h2 className="text-xl mb-3 font-semibold">Get Burn</h2>
        <p className="text-[#787878] text-base">
          Let&apos;s keep burning to achieve your goals, it hurts only
          temporarily, if you give up now you will be in pain forever
        </p>
      </div>

      <div className="">
        <button
          onClick={handleClick}
          className=" text-white float-right bg-gradient-to-r from-[#e3eafd] to-[#89A1FF] rounded-full p-4"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
