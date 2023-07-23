import React from "react";
import ded from "../Assets/images/ded.png";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="shadow-lg">
      <img src={ded} alt="" className="h-[640px] w-full " />
      <div className="text-white   ">
        <p
          className="m-11 p-11 absolute top-[180px] uppercase text-6xl
        //  bg-gray-800/60
        bg-gradient-to-tl from-slate-900/50 to-gray-400/50
          flex flex-col rounded-3xl shadow-2xl shadow-white"
        >
          the brand setting
          <br />
          <span className="font-bold">your trend</span>
          <Link to={"/products"}>
            <button className=" my-5 border rounded-md text-2xl p-1 w-[180px]">
              Discover More
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Body;
