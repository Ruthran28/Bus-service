import React from "react";
import buslogo from "./Larana, Inc..png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex justify-between bg-yellow-100 shadow-lg ">
      <div className="flex items-center ">
        {" "}
        <div className="flex  items-center">
          <img src={buslogo} className=" w-[15%]  rounded-[100%]" alt="logo" />
          <h1 class="font-serif text-3xl capitalize text-green-900 font-bold">
          
            Bus information & service
          </h1>
        </div>{" "}
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="flex m-5 gap-10 justify-center items-center">
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-green-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ">
              <Link to={"/information"}>Information</Link>
            </li>
         
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
