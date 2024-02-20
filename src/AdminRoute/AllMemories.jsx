import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";

const AllMemories = () => {
  const [Memories, setMemories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemoriesData();
  }, []);

  const fetchMemoriesData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/Memories`)
      .then((response) => {
        setMemories(response.data);
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_LOCAL_URL}/Memories/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Memories Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-10 bg-[#F5F7F2]">
      <div>
        <div className="flex justify-between">
          <div>
            <p className="px-10 py-3 rounded-lg bg-blue-500 text-[#F5F7F2] ">
              {Memories.length}
            </p>
          </div>
          <div>
            <Link to="/admin/addMemories">
              <button className="btn bg-blue-500 text-[#F5F7F2] ">
                Added Memories
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Memories.map((Memory, index) => (
                <tr key={Memory._i}>
                  <th className="bg-[#F5F7F2]">{index + 1}</th>

                  <td className="bg-[#F5F7F2]">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 h-20">
                          <img
                            src={Memory.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="bg-[#F5F7F2]">
                    <button
                      onClick={() => handleDelete(Memory._id)}
                      className="btn bg-red-500 hover:border-red-500 hover:text-red-500 text-[#F5F7F2]"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMemories;
