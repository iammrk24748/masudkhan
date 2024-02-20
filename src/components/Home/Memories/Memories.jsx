import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../Ulitis/Container/Container";
import Footer from "../Footer/Footer";
import Loader from "../../../Shared/Loader/Loader";
import Masonry from "react-responsive-masonry";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    // Handle scroll event
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

    setLoading(true);
    fetch(`${import.meta.env.VITE_LOCAL_URL}/Memories`)
      .then((res) => res.json())
      .then((data) => {
        setMemories(data);
        setLoading(false);
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    //
  }, []);

  if (loading) {
    return <Loader />;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = memories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(memories.length / itemsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 100 });
  };

  return (
    <div className="bg-[#F5F7F2] font-t">
      <Container>
        <div className="pt-20 md:pt-10 md:px-12 ">
          <div className="text-center text-[#333333]">
            <h1 className="md:text-5xl text-2xl  font-bold font-t">Moment</h1>
            <div className="flex flex-col justify-center items-center my-2">
              <div className="border md:border-2 border-[#333333] w-5 md:w-14 inline-block absolute"></div>
              <div className="border md:border-2 border-[#dddddd] w-14 md:w-28  inline-block "></div>
            </div>
            <p className="text-center mt-5 mb-10 font-t md:text-base text-sm ">
              “If you only knew the magnificence of the 3, 6 and 9, <br /> then
              you would have the key to the universe.”
            </p>
          </div>

          <div className="">
            <Masonry columnsCount={3} gutter="10px">
              {currentItems.map((memory, i) => (
                <img
                  key={i}
                  src={memory.image}
                  style={{ width: "100%", display: "block" }}
                  alt={`Memory ${i + 1}`}
                />
              ))}
            </Masonry>
          </div>

          <div className="my-10 flex justify-center">
            <button
              onClick={goToPreviousPage}
              className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
                currentPage === 1
                  ? "bg-[#F5F7F2] text-[#333333] border-2 border-[#333333] shadow-xl"
                  : "bg-[#333333] text-[#F5F7F2] shadow-xl"
              }`}
            >
              Previous
            </button>
            {Array.from(
              { length: Math.ceil(memories.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
                    i + 1 === currentPage
                      ? "bg-[#333333] text-[#F5F7F2] shadow-xl"
                      : "bg-[#F5F7F2] text-[#333333] border-2 border-[#333333] shadow-xl"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={goToNextPage}
              className={`mx-1 px-2 md:px-3 py-1 md:py-2 ${
                currentPage === Math.ceil(memories.length / itemsPerPage)
                  ? "bg-[#F5F7F2] text-[#333333] border-2 border-[#333333] shadow-xl"
                  : "bg-[#333333] text-[#F5F7F2] shadow-xl"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </Container>

      {/* Scroll top button */}
      <button className="scroll-to-top" onClick={scrollToTop}>
        <BsFillArrowUpCircleFill className="text-4xl text-[#F5F7F2]" />
      </button>

      <Footer />
    </div>
  );
};

export default Memories;
