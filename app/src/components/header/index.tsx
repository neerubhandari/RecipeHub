import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../logo";

const Header = () => {
  return (
    <div className="flex justify-between py-12">
      <div>
        <Logo />
      </div>
      <div>
        <ul className="flex gap-7 cursor-pointer font-semibold">
          <li>Home</li>
          <li>Recipes</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-7 cursor-pointer ">
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
