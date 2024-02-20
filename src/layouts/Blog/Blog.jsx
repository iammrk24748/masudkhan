import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogBox from "./BlogBox";
import Loader from "../../Shared/Loader/Loader";
import Container from "../../Ulitis/Container/Container";
import Footer from "../../components/Home/Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    fetchBlogData();

    // Cleanup by removing the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    //
  }, [currentPage]);

  const fetchBlogData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/blog`)
      .then((response) => {
        const sortedBlogs = response.data.sort((a, b) => {
          const timestampA = new Date(a.timestamp);
          const timestampB = new Date(b.timestamp);
          return timestampB - timestampA; // Sort in descending order
        });

        setBlogs(sortedBlogs);
        setLoading(false);
        scrollToTop();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 100 });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(blogs.length / itemsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="bg-[#F5F7F2] pt-8 md:pt-0">
      <Container>
        <div>
          <div className="text-center font-t pt-10">
            <h2 className="md:text-5xl text-2xl text-center font-t font-semibold text-[#333333] ">
              Story
            </h2>
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="border md:border-2 border-[#333333] w-4 md:w-10  inline-block absolute"></div>
              <div className="border md:border-2 border-[#dddddd] w-10 md:w-20  inline-block "></div>
            </div>
            <p className="md:text-base text-sm mt-5">
              “I don't care that they stole my idea . . <br /> I care that they
              don't have any of their own”
            </p>
          </div>
          <div className="container mx-auto md:px-12">
            <div className="pt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ">
              {currentItems.map((blog) => (
                <BlogBox key={blog._id} blog={blog} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="my-10  flex justify-center">
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
              { length: Math.ceil(blogs.length / itemsPerPage) },
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
                currentPage === Math.ceil(blogs.length / itemsPerPage)
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

export default Blog;
