// import React from 'react'
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col p-8 gap-2">
      <form action="" className="w-full h-full flex flex-col gap-8">
        <h2 className="text-xl font-semibold">Create an account</h2>

        <input
          type="email"
          placeholder="Email"
          className="p-4 bg-[#F1F1F1] rounded-[12px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 bg-[#F1F1F1] rounded-[12px]"
        />

        <div className="flex flex-row items-center">
          <input type="checkbox" className="scale-150 w-8 h-4" />
          <p className="w-full text-xs mx-2 font-medium text-[#7F7F7F]">
            By proceeding, I agree to all{" "}
            <span className="underline text-[#9FB2FF]">T&C</span> and{" "}
            <span className="underline text-[#9FB2FF]">Privacy Policy</span>{" "}
          </p>
        </div>
      </form>
      <div className="flex w-full mt-4">
        <button className="bg-gradient-to-r from-[#7B91FF] to-[#89A1FF] w-full py-2 text-base text-white rounded-[12px] font-semibold">
          Sign In
        </button>
      </div>

      <div
        className="
      after:content-[''] 
      after:inline-block 
      after:w-full 
    after:border-black
      after:border-t
      after:align-middle

        before:content-['']
        before:inline-block
        before:w-full
      before:border-black
        before:border-t
        before:align-middle

        flex
        items-center
        justify-between
        gap-2
        mt-2
        "
      >
        <span className="text-base font-medium">Or</span>
      </div>

      <div className="flex flex-row justify-center gap-4 mt-2">
        <button className="border-2 border-[#7F7F7F] w-[3.5rem] h-full p-4 rounded-xl">
          <img src={google} className="" alt="" />
        </button>
        <button className="border-2 border-[#7F7F7F] w-[3.5rem] h-full p-4 rounded-xl">
          <img src={facebook} alt="" />
        </button>
      </div>
      <p className="text-center mb-4 mt-2">
        Don&apos;t have an account yet?{" "}
        <Link to="/register" className="underline text-[#9FB2FF]">
          Create an Account
        </Link>
      </p>
    </div>
  );
}
