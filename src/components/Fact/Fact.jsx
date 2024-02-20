import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaRegSmile, FaCheckCircle } from "react-icons/fa";
import { IoMdFlower } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Container from "../../Ulitis/Container/Container";

const Fact = () => {
  const [crushCounterOn, setCrushCounterOn] = useState(false);
  const [proposedCounterOn, setProposedCounterOn] = useState(false);
  const [rejectedCounterOn, setRejectedCounterOn] = useState(false);
  const [acceptCounterOn, setAcceptCounterOn] = useState(false);

  return (
    <div className=" bg-[#F5F7F2] pt-24">
      <Container>
        <div className="container mx-auto">
          <div className="">
            <div className=" flex flex-col justify-center items-center ">
              <div className="text-center font-t pb-10 md:pb-20">
                <h2 className="md:text-5xl text-2xl font-semibold font-t text-[#333333]">
                  Status
                </h2>
                <div className="flex flex-col justify-center items-center mt-0 md:mt-2">
                  <div className="border md:border-2 border-[#333333] w-5 md:w-10 inline-block absolute"></div>
                  <div className="border md:border-2 border-[#dddddd] w-10 md:w-20  inline-block "></div>
                </div>
                <p className="text-center text-base mt-3   font-t text-[#555a64]">
                  Some loves one, some loves two. <br /> I love one, that is
                  you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-52">
                <div className="flex justify-center flex-col items-center">
                  <FaRegSmile className="bg-[#333333] text-[#F5F7F2] text-5xl md:text-6xl rounded-full border-8 border-[#333333]" />
                  <span className="text-base md:text-2xl font-bold mt-3">
                    <ScrollTrigger
                      onEnter={() => setCrushCounterOn(true)}
                      onExit={() => setCrushCounterOn(false)}
                    >
                      <h1 className="text-2xl md:text-4xl font-t font-bold ">
                        {crushCounterOn && (
                          <CountUp
                            start={0}
                            end={914}
                            duration={2}
                            delay={0}
                          ></CountUp>
                        )}
                      </h1>
                    </ScrollTrigger>
                  </span>
                  <p className="text-sm md:text-xl font-t font-bold">Crush</p>
                </div>

                <div className="flex justify-center flex-col items-center">
                  <IoMdFlower className="bg-[#333333] text-[#F5F7F2] text-5xl md:text-6xl rounded-full border-8 border-[#333333]" />
                  <span className="text-base md:text-2xl font-bold mt-3">
                    <ScrollTrigger
                      onEnter={() => setProposedCounterOn(true)}
                      onExit={() => setProposedCounterOn(false)}
                    >
                      <h1 className="text-2xl md:text-4xl font-t font-bold ">
                        {proposedCounterOn && (
                          <CountUp
                            start={0}
                            end={910}
                            duration={2}
                            delay={0}
                          ></CountUp>
                        )}
                      </h1>
                    </ScrollTrigger>
                  </span>
                  <p className="text-sm md:text-xl font-t font-bold">
                    Proposed
                  </p>
                </div>

                <div className="flex justify-center flex-col items-center">
                  <MdOutlineCancel className="bg-[#333333] text-[#F5F7F2] text-5xl md:text-6xl rounded-full border-8 border-[#333333]" />
                  <span className="text-base md:text-2xl font-bold mt-3">
                    <ScrollTrigger
                      onEnter={() => setRejectedCounterOn(true)}
                      onExit={() => setRejectedCounterOn(false)}
                    >
                      <h1 className="text-2xl md:text-4xl font-t font-bold ">
                        {rejectedCounterOn && (
                          <CountUp
                            start={0}
                            end={908}
                            duration={2}
                            delay={0}
                          ></CountUp>
                        )}
                      </h1>
                    </ScrollTrigger>
                  </span>
                  <p className="text-sm md:text-xl font-t font-bold">
                    Rejected
                  </p>
                </div>

                <div className="  flex justify-center flex-col items-center">
                  <FaCheckCircle className="bg-[#333333] text-[#F5F7F2] text-5xl md:text-6xl rounded-full border-8 border-[#333333]" />
                  <span className="text-base md:text-2xl font-bold mt-3">
                    <ScrollTrigger
                      onEnter={() => setAcceptCounterOn(true)}
                      onExit={() => setAcceptCounterOn(false)}
                    >
                      <h1 className="text-2xl md:text-4xl font-t font-bold ">
                        {acceptCounterOn && (
                          <CountUp
                            start={0}
                            end={903}
                            duration={2}
                            delay={0}
                          ></CountUp>
                        )}
                      </h1>
                    </ScrollTrigger>
                  </span>
                  <p className="text-sm md:text-xl font-t font-bold">Accept</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fact;
