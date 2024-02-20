import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaQuora,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
  FaTelegram,
  FaWhatsappSquare,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="flex gap-3 md:gap-5 text-xl md:text-3xl justify-center md:justify-start ">
            <a
              className="text-[#1773EA] cursor-pointer"
              href="https://www.facebook.com/iammrk24748/"
              target="blank"
            >
              <FaFacebook />
            </a>
            <a
              className="text-rose-500"
              href="https://www.instagram.com/iammrk24748/"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              className="text-[#1C96E8]"
              href="https://twitter.com/iammrk24748"
              target="blank"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              className="text-[#1AD03F]"
              href="https://wa.me/+8801627282572"
              target="blank"
            >
              <FaWhatsappSquare />
            </a>
            <a
              className="text-[#2CA0D2]"
              href="https://t.me/mr_problem_666"
              target="blank"
            >
              <FaTelegram />
            </a>
            <a
              className="text-[#A32300]"
              href="https://bn.quora.com/profile/Mr-Problem-1"
              target="blank"
            >
              <FaQuora />
            </a>
            <a
              className="text-[#F70000]"
              href="https://www.pinterest.com/masudvairus/"
              target="blank"
            >
              <FaPinterest />
            </a>
            <a
              className="text-[#0077AF]"
              href="https://www.linkedin.com/in/masudur-rahman-4aa72b284/"
              target="blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              className=""
              href="https://github.com/iammrk24748"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-[#5865F2]"
              href="https://discord.com/channels/@iammrk24748"
              target="blank"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
