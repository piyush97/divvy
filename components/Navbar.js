import Head from "next/head";
import Image from "next/image";
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../providers/ThemeProvider";
import logo from "../public/Divvy.png";
import Menu from "./Menu";
import Switcher from "./Switcher";
/**
 * Navbar component
 *
 * @return {*}
 */
const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Divvy • Decentralized NFT Marketplace by Piyush97</title>
      </Head>
      <nav className="sticky p-6 border-b flex justify-between items-center">
        <p className="text-4xl font-bold">
          <Image src={logo} height="80px" width="280px" alt="Divvy logo" />
        </p>
        
        <div className="flex">
          <Menu />
        </div>
        <div className="flex items-center">
          <Switcher id='dark_mode' value={mode === 'dark'} toggle={toggleMode} onLabel="Dark Mode" offLabel="Light Mode" />
          <a
            href="https://github.com/piyush97/divvy"
            className="ml-4 border-l-2 border-gray-100 text-pink-500"
          >
            {" "}
            <FaGithub className="ml-4" size={24} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
