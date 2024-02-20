import React, { useEffect, useState } from "react";
import Container from "../../Ulitis/Container/Container";
import BlogBox from "../../layouts/Blog/BlogBox";
import { Link } from "react-router-dom";

const BlogFeature = () => {
  const [blogData, setBlogData] = useState([]);
  console.log(blogData);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/blog`)
      .then((res) => res.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <div className="bg-[#F5F7F2] pb-10">
      <Container>
        <div className="md:px-12">
          <div className="text-center font-t">
            <h2 className="md:text-5xl text-2xl text-center font-t font-semibold text-[#333333] ">
              Recent Story
            </h2>
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="border md:border-2 border-[#333333] w-10 md:w-20 inline-block absolute"></div>
              <div className="border md:border-2 border-[#dddddd] w-20 md:w-40 inline-block "></div>
            </div>
            <p className="my-5 font-t text-sm text-[#555a64] ">
              “I don't care that they stole my idea . . <br /> I care that they
              don't have any of their own”
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 ">
            {blogData.slice(0, 6).map((blog) => (
              <BlogBox key={blog._id} blog={blog} />
            ))}
          </div>
          <div className="flex justify-end mt-10">
            <Link to="/story">
              <button className="tracking-widest btn bg-[#333333] text-[#F5F7F2] border-[#F5F7F2] hover:border-1 hover:border-[#333333] rounded-none shadow-xl hover:text-[#333333] hover:bg-[#F5F7F2]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogFeature;
