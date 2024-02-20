import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting = import.meta.env.VITE_IMAGE_HOST;

const AddRoomForm = ({ loading = false }) => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;
  const [uploadedImageName, setUploadedImageName] = useState("");
  const editor = useRef(null);
  const [description, setDescription] = useState("");

  // console.log(content);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    // const description = event.target.description.value;

    // const data = { title, description };
    const data = { title };

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
        const { title } = data;
        // const { title, description } = data;

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
          title,
          // description,
          image: imageUrl,
          timestamp,
          description,
        };

        fetch(`${import.meta.env.VITE_LOCAL_URL}/blog`, {
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
              title: "Blog Posted Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/admin/allBlog");
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
    <div>
      <div className="min-h-[calc(100vh-40px)] text-gray-800 rounded-xl">
        <h2 className="text-center text-2xl bg-blue-500 mb-20 py-5 text-white">
          Add Blog
        </h2>
        <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="">
              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Title
                </label>
              </div>
              <input
                className=" px-10 py-3 w-full bg-white text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            <div className="bg-white rounded-lg">
              <div className="file_upload px-5 py-3 border-4 border-dotted border-gray-300 rounded-lg">
                <div className="text-center">
                  <label>
                    <input
                      className="text-sm  cursor-pointer hidden"
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
                    <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
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

            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              {/* <textarea
                id="description"
                className="rounded-md bg-white w-full focus:blue-300 h-32 text-gray-800 border border-blue-300 focus:outline-blue-500"
                name="description"
              ></textarea> */}

              <div>
                <JoditEditor
                  ref={editor}
                  value={description}
                  tabIndex={1}
                  onBlur={(newContent) => setDescription(newContent)}
                  onChange={(newContent) => {}}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-36 p-3 w-full mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>

      <div className="my-32">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
          necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default AddRoomForm;
