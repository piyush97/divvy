import React from "react";
import Menu from "./Menu";

/**
 * Navbar component
 *
 * @return {*}
 */
const Navbar = () => {
  return (
    <nav className="p-6 border-b">
      <p className="text-4xl font-bold">Divvy</p>
      <div className="flex mt-4">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
