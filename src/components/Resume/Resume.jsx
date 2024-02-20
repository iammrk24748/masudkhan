import React, { useEffect } from "react";
import Container from "../../Ulitis/Container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-[#F5F7F2]">
      <div className="font-t md:px-16 pb-20 pt-20">
        <Container>
          <div>
            {/* Title */}
            <div className="text-center text-[#333333]" data-aos="fade-up">
              <h1 className="md:text-5xl text-2xl  font-bold font-t">Resume</h1>
              <div className="flex flex-col justify-center items-center mt-2">
                <div className="border md:border-2 border-[#333333] w-6 md:w-14 inline-block absolute"></div>
                <div className="border md:border-2 border-[#dddddd] w-14 md:w-28  inline-block "></div>
              </div>
              <p className="text-center my-5 font-t text-sm text-[#555a64]">
                I don't compete with anyone, <br /> I compete with myself.
              </p>
            </div>

            <div className="min-h-screen flex items-center justify-center">
              <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
                <div
                  className="flex flex-row-reverse md:contents"
                  data-aos="fade-up"
                >
                  <div className="w-full col-start-1 col-end-5 p-4 rounded-none  my-4 ml-auto border border-gray-300 text-[#333333]">
                    <h3 className="font-semibold text-base md:text-xl mb-1 font-t text-[#333333]">
                      Bachelor of Business Administration (B.B.A)
                    </h3>
                    <h5 className="text-[12px] bg-[#F7F8F9] italic inline-block px-5 my-3">
                      2019 - Present
                    </h5>
                    <p className="text-gray-600">
                      Sirajganj Government College
                    </p>
                    <p className="my-2">Subject : Management</p>
                    <p>Board : National University</p>
                    <p className="my-2">Result: Pending (Out of 4.00)</p>
                  </div>

                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#333333] rounded-full bg-gray-100 shadow"></div>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#333333] rounded-full bg-gray-100 shadow"></div>
                  </div>

                  <div
                    className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-none   text-[#333333]"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#333333]">
                      Higher Secondary School Certificate (H.S.C)
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F7F8F9] italic inline-block px-5 my-3">
                      2017 - 2019
                    </h5>
                    <p className="text-gray-600">Belkuchi Government College</p>
                    <p className="my-2">Subject : Business Studies</p>
                    <p>Board : Rajshahi</p>
                    <p className="my-2">Result: 4.08 (Out of 5.00)</p>
                    <p>Passing of year: 2019</p>
                  </div>
                </div>
                {/* trial */}
                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="w-full col-start-1 col-end-5 p-4 rounded-none   my-4 ml-auto border border-gray-300 text-[#333333]"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#333333]">
                      Secondary School Certificate (S.S.C)
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F7F8F9] italic inline-block px-5 my-3">
                      2015 - 2017
                    </h5>
                    <p className="text-gray-600">
                      Sohagpur S.K Pilot Model High School
                    </p>
                    <p className="my-2">Board : Rajshahi</p>
                    <p>Result: 4.45 (Out of 5.00)</p>
                    <p className="mt-2">Passing of year: 2017</p>
                  </div>

                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#333333] rounded-full bg-gray-100 shadow"></div>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#333333] rounded-full bg-gray-100 shadow"></div>
                  </div>

                  <div
                    className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-none   text-[#333333]"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#333333]">
                      Diploma in Computer Science & ICT
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F7F8F9] italic inline-block px-5 my-3">
                      2017
                    </h5>
                    <p className="text-gray-600">
                      Science & Information Technology (SIT) Foundation
                    </p>
                    <p className="my-2">
                      Board : Institute of Information & Communication
                      Technology
                    </p>
                    <p>Result: A+ </p>
                    <p className="mt-2">Passing of year: 2017</p>
                  </div>
                </div>

                <div className="flex flex-row-reverse md:contents">
                  <div
                    className="w-full col-start-1 col-end-5 p-4 rounded-none   my-4 ml-auto border border-gray-300 text-[#333333]"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#333333]">
                      16th Met Course
                    </h3>
                    <h5 className="text-[12px] font-t bg-[#F7F8F9] italic inline-block px-5 my-3">
                      2018 - Present Scouting
                    </h5>
                    <p className="text-gray-600">
                      Sirajganj Polytechnic Institute, Sirajganj
                    </p>
                    <p className="my-2">Board : Bangladesh Scouts</p>
                    <p>Status: Rover Met </p>
                  </div>

                  <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#333333] rounded-full bg-gray-100 shadow"></div>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#333333] rounded-full bg-gray-100 shadow"></div>
                  </div>

                  <div
                    className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-none   text-[#333333]"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold text-base md:text-xl font-t mb-1 text-[#333333]">
                      Language Fluency
                    </h3>
                    <ul className="ml-5 mt-5">
                      <li className="list-disc">
                        English : Best in reading, speaking and writing.
                      </li>
                      <li className="list-disc my-3">
                        Bengali : Best in reading, speaking and writing.
                      </li>
                      <li className="list-disc">
                        Hindi : Good speaking and writing.
                      </li>
                      <li className="list-disc mt-3">Urdu : Good speaking.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Resume;
