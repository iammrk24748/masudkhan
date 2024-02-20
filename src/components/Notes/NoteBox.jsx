import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const NoteBox = () => {
  const categoryData = useLoaderData();

  const handleCertificate = (note) => {
    Swal.fire({
      title: `${note.Title}`,
      html: `${note.Description.replace(/\n/g, "<br />")}`,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: `${note.Title}`,
      showConfirmButton: true,
      confirmButtonColor: "#333333",
      confirmButtonText: "OK",
      dangerMode: true,
      customClass: {
        title: "font-t",
        htmlContainer: "font-t",
        confirmButton: "font-t",
      },
    });
  };

  return (
    <div className="bg-[#F5F7F2] h-screen">
      <div className="container mx-auto md:px-10 px-5 pt-32 ">
        <div className="overflow-x-auto">
          <div className="">
            <div className="grid md:grid-cols-2 gap-5">
              {categoryData.map((note) => (
                <div key={note._id}>
                  <div className="card bg-[#F5F7F2] shadow-xl hover:shadow">
                    <div className="card-body bg-[#F5F7F2]">
                      <h2 className="card-title flex justify-center font-t text-base md:text-xl">
                        {note.Title}
                      </h2>
                      <div className="card-actions font-t justify-center bg-[#F5F7F2]">
                        <div className="card-actions font-t">
                          <button
                            onClick={() => handleCertificate(note)}
                            className="btn font-t bg-[#333333] hover:border-[#333333] border-[#F5F7F2] hover:bg-[#F5F7F2] hover:text-[#333333] text-[#F5F7F2]"
                          >
                            open
                          </button>
                        </div>
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
  );
};

export default NoteBox;
