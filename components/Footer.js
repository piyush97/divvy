import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const Footer = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <footer className={`py-8`}>
      <div className="flex justify-center border-t-2">
        <p className={`pt-8 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>
          Divvy &copy; {new Date().getFullYear()} • All rights reserved •
        </p>
        <div className={`pt-8 pl-1 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>
          {"  "}
          Made with ♥️ by
          <a className="pl-1 text-pink-500" href="https://piyushmehta.com">
            {" "}
            Piyush Mehta{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
