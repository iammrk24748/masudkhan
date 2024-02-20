import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import axios from "axios";
import Swal from "sweetalert2";

const AllNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryCount, setCategoryCount] = useState({});

  useEffect(() => {
    fetchNoteData();
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
        fetch(`${import.meta.env.VITE_LOCAL_URL}/notes/${id}`, {
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

  return (
    <div className="container mx-auto px-10 bg-[#F5F7F2]">
      <div>
        <div className="flex justify-between space-x-3">
          <div>
            <p className="px-10 py-3 rounded-lg bg-blue-500 text-[#F5F7F2]">
              {filteredNotes.length}
            </p>
          </div>
          <div>
            <Link to="/admin/AddCategory">
              <button className="btn bg-blue-500 text-[#F5F7F2]">
                Add Category
              </button>
            </Link>
          </div>
          <div>
            <Link to="/admin/AddNotes">
              <button className="btn bg-blue-500 text-[#F5F7F2]">
                Add Note
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Delete</th>
                <th>Note</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredNotes.map((note, index) => (
                <tr key={note._id}>
                  <th className="bg-[#F5F7F2]">{index + 1}</th>
                  <td className="bg-[#F5F7F2]">{note.Category}</td>
                  <td className="bg-[#F5F7F2]">
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="btn bg-red-500 hover:border-red-500 hover:text-red-500 text-white"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="bg-[#F5F7F2]">
                    <Link
                      to={`/admin/allCategory/${note.Category}`}
                      className="btn bg-yellow-500 hover:border-yellow-500 hover:text-yellow-500 text-[#F5F7F2]"
                    >
                      Posted Notes
                    </Link>
                  </td>
                  <td className="bg-[#F5F7F2]">
                    {categoryCount[note.Category]}
                  </td>{" "}
                  {/* Display count per category */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllNote;
