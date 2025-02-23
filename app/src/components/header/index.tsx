import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between py-12">
      <div>
        <h1 className="text-3xl font-bold">
          RECIPE<span className="text-[#FF7F50]">HUB</span>
        </h1>
      </div>
      <div>
        <ul className="flex gap-7">
          <li>Home</li>
          <li>Recipes</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-7 ">
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
