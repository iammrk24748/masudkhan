import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Container from "../../../Ulitis/Container/Container";
import "./Footer.css";

const Footer = () => {
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
    <div className="bg-[#1F201F] pt-10 pb-2 font-t">
      <Container>
        <div className="md:mx-20 font-t">
          <div className=" flex flex-col md:flex-row gap-5 md:pt-0">
            <div className="text-[#F5F7F2] font-t justify-center items-center flex flex-col">
              <h2 className="font-bold text-3xl md:text-4xl font-t">
                Mausudur Rahman
              </h2>
              <p className=" text-justify  text-base mt-5 md:leading-9">
                Dynamic professional with a mastery of web & logo design, adept
                skills in Adobe Photoshop, Microsoft, and Linux administration.
                Demonstrates a creative flair and technical finesse, crafting
                visually stunning projects. Excels at multitasking and stays
                ahead of industry trends. A proven commitment to surpassing
                expectations through innovative and impactful solutions.
              </p>
            </div>

            <div className=" text-[#F5F7F2] font-t flex flex-col gap-5 justify-center items-center ">
              <h2 className="font-bold font-t text-3xl md:text-4xl text-center  mt-0 md:mt-[1.6em] ">
                Contact Info
              </h2>
              <ul className=" font-t text-base gap-3 flex flex-col justify-start items-start">
                <li
                  className=" cursor-pointer italic flex flex-row items-center  gap-2"
                  onClick={handleAddressClick}
                >
                  <FaLocationDot></FaLocationDot>
                  Sirajganj, Rajshahi, Bangladesh
                </li>
                <li
                  className="cursor-pointer italic flex flex-row items-center  gap-2"
                  onClick={handlePhoneClick}
                >
                  <IoCall></IoCall>
                  +880 16272 82572
                </li>

                <li
                  className="cursor-pointer italic flex flex-row items-center gap-2"
                  onClick={handleMailClick}
                >
                  <IoMdMail></IoMdMail>
                  iammasud004@gmail.com
                </li>
              </ul>

              {/* Social Media */}
              <div className="md:mx-10">
                <div className="flex gap-5 text-base md:text-xl justify-center items-center">
                  <div class="Scard">
                    <a
                      class="socialContainer containerOne"
                      href="https://www.facebook.com/iammrk24748/"
                      target="blank"
                    >
                      <FaFacebookF className="socialSvg FacebookSvg" />
                    </a>
                    <a
                      class="socialContainer containerTwo"
                      href="https://twitter.com/iammrk24748"
                      target="blank"
                    >
                      <FaTwitter class="socialSvg  twitterSvg" />
                    </a>

                    <a
                      className="socialContainer containerThree"
                      href="https://www.instagram.com/iammrk24748/"
                      target="blank"
                    >
                      <FaInstagram className="socialSvg  instagramSvg" />
                    </a>

                    <a
                      className="socialContainer containerFour"
                      href="https://wa.me/+8801627282572"
                      target="blank"
                    >
                      <FaWhatsapp className="socialSvg whatsappSvg" />
                    </a>

                    <a
                      className="socialContainer containerFive"
                      href="https://t.me/mr_problem_666"
                      target="blank"
                    >
                      <FaTelegramPlane className="socialSvg twitterSvg" />
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-5 text-base md:text-xl  mt-3">
                  <div class="Scard">
                    <a
                      class="socialContainer containerSix"
                      href="https://bn.quora.com/profile/Mr-Problem-1"
                      target="blank"
                    >
                      <FaQuora className="socialSvg FacebookSvg" />
                    </a>
                    <a
                      class="socialContainer containerSeven"
                      href="https://www.pinterest.com/masudvairus/"
                      target="blank"
                    >
                      <FaPinterest class="socialSvg  twitterSvg" />
                    </a>

                    <a
                      className="socialContainer containerEight"
                      href="https://www.linkedin.com/in/masudur-rahman-4aa72b284/"
                      target="blank"
                    >
                      <FaLinkedinIn className="socialSvg  instagramSvg" />
                    </a>

                    <a
                      className="socialContainer containerNine"
                      href="https://github.com/iammrk24748"
                      target="blank"
                    >
                      <FaGithub className="socialSvg whatsappSvg" />
                    </a>

                    <a
                      className="socialContainer containerTen"
                      href="https://discord.com/channels/@iammrk24748"
                      target="blank"
                    >
                      <FaDiscord className="socialSvg twitterSvg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center items-center flex text-[#F5F7F2] my-10 flex-col font-t">
            <div className="border border-[#F5F7F2] w-5/6 "></div>
            <p className="md:text-base mt-7 text-sm hidden md:block">
              Copyright &copy; 2023 - All right reserved by | Masudur Rahman
            </p>
            <p className="md:text-base mt-10 text-sm block md:hidden">
              Copyright &copy; 2023 - All right reserved by | <br /> Masudur
              Rahman
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
