import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import Container from "../../../Ulitis/Container/Container";
import { FaAngleRight } from "react-icons/fa";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
    });
  }, []);

  const handleDvDownload = () => {
    Swal.fire({
      imageUrl: "https://i.ibb.co/D9f86DK/My-Resume.png",
      showCancelButton: true,
      confirmButtonText: "Download",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://drive.google.com/file/d/13tMKgDqdhUOxLfPGOEaQd8XBT4uNdH3J/view?usp=sharing"
        );
      }
    });
  };

  const handleMailClick = () => {
    const email = "iammasud004@gmail.com";

    const mailtoLink = `mailto:${email}`;

    const isMobileOrTablet = window.innerWidth < 1024;

    window.open(mailtoLink, "_blank");

    if (isMobileOrTablet) {
      window.open(mailtoLink, "_blank");
    } else {
      window.location.href = mailtoLink;
    }
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+8801627282572";
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  const handleAddressClick = () => {
    const address = "Sirajganj, Rajshahi";
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(mapLink, "_blank");
  };

  return (
    <div className="bg-[#F5F7F2] font-t pt-20">
      <Container>
        <div className="mx-4 md:mx-10 ">
          <div className="text-center font-t" data-aos="fade-up">
            <h2 className="md:text-5xl text-2xl font-semibold font-t text-[#333333] -mb-1">
              About ME
            </h2>
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="border md:border-2 border-[#333333] w-10 md:w-14 inline-block absolute"></div>
              <div className="border md:border-2 border-[#dddddd] w-20 md:w-28  inline-block "></div>
            </div>
            <p className="text-center text-base mt-3 font-t text-[#555a64]">
              You can be everything. <br /> You can be infinite amount of things
              that people are.
            </p>
          </div>

          <div className="md:flex justify-between items-center">
            <div className="mt-10 mb-10 md:w-6/12" data-aos="fade-up">
              <img
                className="w-96 border-solid"
                src="https://i.ibb.co/28zmP0d/money-heist2-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="md:ml-10 space-y-4  w-full mt-5" data-aos="fade-up">
              {/* div width  md:w-6/12*/}

              <h2 className="font-t text-2xl md:text-4xl font-semibold text-[#333333]">
                Hey There,
              </h2>

              <p className="sopace-font text-[#555a64] text-base text-justify">
                Asslamu alaikum, I'm{" "}
                <span className="font-bold">Masudur Rahman</span>, a student
                with a mind tuned to the frequency of creativity. From crafting
                captivating web experiences to navigating the intricate realms
                of Microsoft wizardry, I seamlessly blend pixels and codes. My
                canvas expands to Adobe Photoshop, where logos come to life, and
                words find their rhythm in content creation. Whether it's
                designing posters and cards or fortifying the digital frontier
                with linux administration, I embark on each venture with a
                symphony of innovation.
              </p>
              <div className="space-y-5 text-base">
                <div className="md:flex justify-between mt-5 gap-5 text-[#555a64]">
                  <div className="space-y-2">
                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p>
                        <span className="font-bold text-[#090a0c]">Name: </span>
                        Masudur Rahman
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <span className="font-bold text-[#090a0c]">
                        Birthday:
                      </span>
                      7 February 2000
                    </span>

                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p
                        onClick={handleAddressClick}
                        className="cursor-pointer"
                      >
                        <span className="font-bold text-[#090a0c]">
                          Address:{" "}
                        </span>
                        Sirajganj, Rajshahi
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p>
                        <span className="font-bold text-[#090a0c]">
                          Zip Code:
                        </span>{" "}
                        6740
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p>
                        <span className="font-bold text-[#090a0c]">
                          Residence:
                        </span>{" "}
                        Bangladesh
                      </p>
                    </span>
                  </div>

                  <div className="space-y-2 mt-3 md:mt-0">
                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p className="cursor-pointer" onClick={handleMailClick}>
                        <span className="font-bold text-[#090a0c] cursor-pointer">
                          Email:
                        </span>{" "}
                        iammasud004@gmail.com
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p className="cursor-pointer" onClick={handlePhoneClick}>
                        <span className="font-bold text-[#090a0c] cursor-pointer">
                          Phone:
                        </span>{" "}
                        +880162-7282572
                      </p>
                    </span>
                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p>
                        <span className="font-bold text-[#090a0c]">
                          Blood Group:
                        </span>{" "}
                        A+
                      </p>
                    </span>

                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p>
                        <span className="font-bold text-[#090a0c]">Hobby:</span>{" "}
                        Writing, Coding & Explore
                      </p>
                    </span>
                    <span className="flex justify-start items-center gap-2">
                      <FaAngleRight className="text-[#333333]" />
                      <p>
                        <span className="font-bold text-[#090a0c]">
                          Relationship:
                        </span>{" "}
                        Single
                      </p>
                    </span>
                  </div>
                </div>
                <button
                  className="ml-2 tracking-widest btn bg-[#333333] text-[#F5F7F2] border-[#F5F7F2] hover:border-1 hover:border-[#333333] rounded-none shadow-xl hover:text-[#333333] hover:bg-[#F5F7F2]"
                  onClick={handleDvDownload}
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
