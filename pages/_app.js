import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeProvider from "../providers/ThemeProvider";
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
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
