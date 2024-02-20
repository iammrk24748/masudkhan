import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";

const AllCertificate = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogData();
  }, []);

  const fetchBlogData = () => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/certificate`)
      .then((response) => {
        setBlogs(response.data);
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
        fetch(`${import.meta.env.VITE_LOCAL_URL}/certificate/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
              {blogs.length}
            </p>
          </div>
          <div>
            <Link to="/admin/AddCertificate">
              <button className="btn bg-blue-500 text-[#F5F7F2] ">
                Add Certificate
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
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._i}>
                  <th className="bg-[#F5F7F2]">{index + 1}</th>
                  <td className="bg-[#F5F7F2] text-black">
                    {blog.qualification}
                  </td>

                  <td className="bg-[#F5F7F2]">
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="btn bg-red-500 hover:border-red-500 hover:text-red-500 text-white"
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

export default AllCertificate;
