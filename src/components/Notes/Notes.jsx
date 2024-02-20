import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";
import Container from "../../Ulitis/Container/Container";
import Footer from "../Home/Footer/Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const AllNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryCount, setCategoryCount] = useState({});

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

    fetchNoteData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchNoteData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/notes`)
      .then((response) => {
        setNotes(response.data);

        // Calculate count per category
        const countObj = {};
        response.data.forEach((note) => {
          countObj[note.Category] = countObj[note.Category] + 1 || 1;
        });
        setCategoryCount(countObj);

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  // Filter notes to show only one note per category
  const filteredNotes = [];
  const categorySet = new Set();

  notes.forEach((note) => {
    if (!categorySet.has(note.Category)) {
      filteredNotes.push(note);
      categorySet.add(note.Category);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", duration: 100 });
  };

  return (
    <div className="bg-[#F5F7F2] pt-20 md:pt-10 font-t">
      <Container>
        <div className="bg-[#F5F7F2] pb-10">
          {/* Title */}
          <div className="text-center text-[#333333]">
            <h1 className="md:text-5xl text-2xl font-bold font-t">Diary</h1>
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="border md:border-2 border-[#333333] w-4 md:w-10 inline-block absolute"></div>
              <div className="border md:border-2 border-[#dddddd] w-10 md:w-20 inline-block "></div>
            </div>
            <p className="text-center my-5 font-t md:text-base text-sm ">
              “If you want to find the secrets of the universe, <br /> think in
              terms of energy, frequency and vibration.”
            </p>
          </div>
          <div className="container mx-auto md:px-10 pt-10">
            <div className="overflow-x-auto">
              <div className="">
                <div className="grid md:grid-cols-2 gap-5">
                  {filteredNotes.map((note, index) => (
                    <div key={note._id}>
                      {/* <th>{index + 1}</th> */}

                      <div className="card bg-[#F5F7F2] shadow-xl hover:shadow">
                        <div className="card-body">
                          <div className="flex justify-between">
                            <h2 className="card-title text-base md:text-xl font-t">
                              {note.Category}
                            </h2>
                            <div className="text-[#F5F7F2]">
                              Posted Notes: {categoryCount[note.Category]}
                            </div>
                          </div>

                          <div className="card-actions flex justify-end">
                            <button>
                              <Link
                                to={`/noteBox/${note.Category}`}
                                className="btn bg-[#333333] hover:border-[#333333] border-[#F5F7F2] hover:bg-[#F5F7F2] hover:text-[#333333] text-[#F5F7F2]"
                              >
                                View All
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export default AllNote;
