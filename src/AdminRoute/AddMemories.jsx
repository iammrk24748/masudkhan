import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting = import.meta.env.VITE_IMAGE_HOST;

const AddMemories = ({ loading = false }) => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
  const [uploadedImageName, setUploadedImageName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageInput = event.target.image;
    const selectedImage = imageInput.files[0];

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch(image_hosting_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        const imageUrl = result.data.url;
        const imageName = selectedImage.name;

        const timestampOptions = {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          day: "numeric",
          month: "short",
          year: "numeric",
        };

        const timestamp = new Date().toLocaleString("en-US", timestampOptions);
        const newBlog = {
          image: imageUrl,
          timestamp,
        };

        fetch(`${import.meta.env.VITE_LOCAL_URL}/Memories`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlog),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Memory Posted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/admin/allMemories");
          });

        setUploadedImageName(imageName);

        // Do something with the submitted data (e.g., save it to the database)
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="bg-[#F5F7F2]">
      <div className="min-h-[calc(100vh-40px)] text-gray-800 rounded-xl ">
        <h2 className="text-center text-2xl bg-blue-500 text-base-200 mb-20 py-5">
          Add Memories
        </h2>
        <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="bg-[#F5F7F2] rounded-lg">
              <div className="file_upload px-5 py-3 border-4 border-dotted border-gray-300 rounded-lg">
                <div className="text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                      onChange={(event) => {
                        const { files } = event.target;
                        if (files && files.length > 0) {
                          setUploadedImageName(files[0].name);
                        } else {
                          setUploadedImageName("");
                        }
                      }}
                    />
                    <div className="bg-blue-500 text-[#F5F7F2] border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
              {uploadedImageName && (
                <div className="mt-2 text-sm text-gray-600">
                  {uploadedImageName}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="px-36 p-3 w-full mt-5 text-center font-medium text-[#F5F7F2] transition duration-200 rounded shadow-md bg-blue-500"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMemories;
