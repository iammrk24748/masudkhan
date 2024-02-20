import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import developer from "../../../assets/chair dev.json";
import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../SocialMedia/SocialMedia";
import Container from "../../../Ulitis/Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
    });
  }, []);

  // Clock
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  useEffect(() => {
    const intervalId = setInterval(UpdateTime, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="bg-[#F5F7F2]">
      <Container>
        <div className="relative">
          {/* Clock */}
          <div className="absolute top-0 right-0 mt-20 md:mt-10 mr-2">
            <span className="text-black font-t text-base md:text-3xl">
              {ctime}
            </span>
          </div>
          <div className="font-t flex md:flex-row justify-center items-center flex-col-reverse md:h-screen gap-5 md:gap-0">
            <div className="flex flex-col gap-7 md:ml-14" data-aos="fade-right">
              <div className="text-[#333333]">
                <h1 className="font-t font-bold text-base md:text-xl text-center md:text-left">
                  Hello I'm <span className="text-red-600">expert</span> of
                </h1>
              </div>
              <div className="font-bold text-[#333333] text-sm md:text-2xl text-center md:text-left">
                <TypeAnimation
                  key="animationKey"
                  sequence={[
                    "Web Development",
                    1000,
                    "Logo Design",
                    1000,
                    "Banner Design",
                    1000,
                    "Content Writing",
                    1000,
                    "Data Entry",
                    1000,
                    "Adobe Photoshop",
                    1000,
                    "Microsoft Office",
                    1000,
                    "Linux Administration",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
              <div className="text-center md:text-left md:justify-start justify-center flex">
                <p className="text-base md:text-xl text-[#333333] md:leading-10 leading-8 md:mr-24">
                  Hi, I'm <span className="font-bold">Masudur Rahman</span>,
                  your web designer & developer based in Bangladesh. Dive into
                  my world of pixels & code—welcome to my information universe!
                </p>
              </div>
              <div className="items-center mt-2">
                <SocialMedia />
              </div>
            </div>
            <div className="w-full mt-20 md:mt-0" data-aos="fade-left">
              <Lottie animationData={developer} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
