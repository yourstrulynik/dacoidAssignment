import { useEffect } from "react";
import ImageOne from "../assets/img1.png";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function WelcomeOne() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      return navigate("/welcomeTwo");
    }, 5000);
  }, []);

  const handleClick = () => {
    navigate("/welcomeTwo");
  };
  return (
    <div className="w-full h-screen flex flex-col justify-around px-10">
      <div>
        <button className="float-right text-[#9FB2FF]">Skip</button>
      </div>

      <div className="flex flex-col p-4">
        <img
          className=" w-[282px] h-[282px] md:w-[400px] md:h-[400px]"
          src={ImageOne}
          alt=""
        />

        <h2 className="text-xl mb-3 font-semibold">Track Your Goal</h2>
        <p className="text-[#787878] text-base">
          Don&apos;t worry if you have trouble determining your goals, We can
          help you determine your goals and track your goals
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
