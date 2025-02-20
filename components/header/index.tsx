import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-8">
      <div>
        <h1>RECIPEHUB</h1>
      </div>
      <div>
        <ul className="flex gap-7">
          <li>Home</li>
          <li>Recipes</li>
          <li>Categories</li>
          <li>Ingredients</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
