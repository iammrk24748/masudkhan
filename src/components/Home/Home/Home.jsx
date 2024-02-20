import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import BlogFeature from "../../BlogFeature/BlogFeature";
import Footer from "../Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import loading from "../../../assets/load_infinite.json";
import Lottie from "lottie-react";
import Resume from "../../Resume/Resume";
import Fact from "../../Fact/Fact";
import ProgressBar from "react-scroll-progress-bar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the timeout value to suit your needs
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Show/hide the scroll-to-top button based on scrolling position
    const handleScroll = () => {
      const scrollButton = document.querySelector(".scroll-to-top");
      if (scrollButton) {
        if (window.scrollY > 200) {
          scrollButton.classList.add("show");
        } else {
          scrollButton.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F5F7F2] h-screen">
      <ProgressBar height="6" duration="0.2" />
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="w-96 mt-52">
            <Lottie animationData={loading} />
          </div>
        </div>
      ) : (
        <>
          <button className="scroll-to-top" onClick={scrollToTop}>
            <BsFillArrowUpCircleFill className="text-4xl text-[#F5F7F2]" />
          </button>

          <Banner />
          <AboutMe />
          <Fact />
          <Resume />
          <BlogFeature />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
