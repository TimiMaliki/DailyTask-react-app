import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[black] text-white">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-10 p-20">
        <div className="brand">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">Maliki</h1>
        </div>

        <div className="navigation links">
          <ul>

          <Link to={"/"}>
          <li>
            <a href="" className="text-white hover:text-yellow-700">Home</a>
          </li></Link>

          <Link to={"blog"}>
          <li>
            <a href="" className="text-white hover:text-yellow-700">GitHub</a>
          </li>
          </Link>
        
        
          <Link to={"/"}>
          <li>
            <a href="" className="text-white hover:text-yellow-700">LinkedIn</a>
          </li>
          </Link>
      
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
