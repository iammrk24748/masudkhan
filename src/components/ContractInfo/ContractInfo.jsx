import React, { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterest,
  FaQuora,
  FaTwitter,
} from "react-icons/fa";

const ContractInfo = () => {
  return (
    <div className="footer-top-section font-t">
      <div className="flex justify-center items-center bg-[#F5F7F2] md:pt-40 pb-10 md:block hidden">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase md:text-5xl text-3xl text-[#333333]">
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button className="tracking-widest btn bg-[#333333] text-[#F5F7F2] hover:border-1 hover:border-[#333333] hover:bg-[#F5F7F2] border-[#F5F7F2] hover:text-[#333333] mt-5">
                Send Massage
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#333333] rounded-2xl">
            <div className="flex flex-col text-[#F5F7F2]">
              <h1 className="font-bold uppercase text-4xl my-4">
                Get In Touch
              </h1>

              <div className="flex my-4">
                <div className="flex flex-col text-2xl">
                  <FaMapMarkerAlt className="pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl">Home Address</h2>
                  <p className="text-gray-400">
                    Sirajganj, Rajshahi, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex my-4">
                <div className="flex flex-col text-2xl">
                  <FaPhoneAlt className="pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: +880162-7282572</p>
                </div>
              </div>

              <div className="flex my-4 justify-around px-10 text-xl">
                <a href="https://www.facebook.com/iammrk24748/" target="blank">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.instagram.com/iammrk24748/" target="blank">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="https://twitter.com/iammrk24748" target="blank">
                  {" "}
                  <FaTwitter></FaTwitter>
                </a>
                <a href="https://www.pinterest.com/masudvairus/" target="blank">
                  <FaPinterest></FaPinterest>
                </a>
                <a
                  href="https://bn.quora.com/profile/Mr-Problem-1"
                  target="blank"
                >
                  <FaQuora></FaQuora>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="flex justify-center items-center bg-[#F5F7F2] md:pt-40 pb-10 block md:hidden pt-28">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#333333] rounded-2xl">
            <div className="flex flex-col text-[#F5F7F2]">
              <h1 className="font-bold uppercase text-4xl my-4">
                Get In Touch
              </h1>

              <div className="flex my-4">
                <div className="flex flex-col text-2xl">
                  <FaMapMarkerAlt className="pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl">Home Address</h2>
                  <p className="text-gray-400">
                    Sirajganj, Rajshahi, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex my-4">
                <div className="flex flex-col text-2xl">
                  <FaPhoneAlt className="pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: +880162-7282572</p>
                </div>
              </div>

              <div className="flex my-4 justify-around px-10 text-xl">
                <a href="https://www.facebook.com/iammrk24748/" target="blank">
                  <FaFacebook></FaFacebook>
                </a>
                <a href="https://www.instagram.com/iammrk24748/" target="blank">
                  <FaInstagram></FaInstagram>
                </a>
                <a href="https://twitter.com/iammrk24748" target="blank">
                  {" "}
                  <FaTwitter></FaTwitter>
                </a>
                <a href="https://www.pinterest.com/masudvairus/" target="blank">
                  <FaPinterest></FaPinterest>
                </a>
                <a
                  href="https://bn.quora.com/profile/Mr-Problem-1"
                  target="blank"
                >
                  <FaQuora></FaQuora>
                </a>
              </div>
            </div>
          </div>

          {/* ------ */}
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase md:text-5xl text-3xl text-[#333333]">
                Send us a message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
              />
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <button className="tracking-widest btn bg-[#333333] text-[#F5F7F2] hover:border-1 hover:border-[#1F8391] hover:bg-[#F5F7F2] border-[#F5F7F2] hover:text-[#333333] mt-5">
                Send Massage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractInfo;
