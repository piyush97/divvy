import Navbar from "../components/Navbar";
import "../styles/globals.css";
/**
 * Main App component
 *
 * @param {*} { Component, pageProps }
 * @return {*}
 */
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
