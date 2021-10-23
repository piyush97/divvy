import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
};

export default MyApp;
