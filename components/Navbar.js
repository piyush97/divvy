import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../public/Divvy.png";
import Menu from "./Menu";
/**
 * Navbar component
 *
 * @return {*}
 */
const Navbar = () => {
  return (
    <>
      <Head>
        <title>Divvy • Decentralized NFT Marketplace by Piyush97</title>
      </Head>
      <nav className="sticky p-6 border-b">
        <p className="text-4xl font-bold">
          <Image src={logo} height="80px" width="280px" alt="Divvy logo" />
        </p>
        <a
          href="https://github.com/piyush97/divvy"
          className="float-right h-8 text-pink-500"
        >
          {" "}
          <FaGithub />
        </a>
        <div className="flex mt-4">
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
