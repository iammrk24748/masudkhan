import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogBox = ({ blog }) => {
  const { _id, title, image, author, description, timestamp } = blog;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = description.slice(0, 100);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-[#F5F7F2] " data-aos="fade-up">
      <div className="container mx-auto transition-all border-[#333333] ">
        <div className="card card-compact bg-[#F5F7F2] shadow-xl rounded-none">
          <figure>
            <img src={image} alt="Blog" className="w-full" />
          </figure>
          <div className="card-body  bg-[#F5F7F2]">
            <div className="font-semibold text-lg text-[#333333]">{title}</div>
            <div className="font-light text-[#9BC1BC]">{timestamp}</div>
            <div
              className="font-light text-neutral-500"
              // style={{ whiteSpace: "pre-line" }}
            >
              {/* {showFullDescription ? description : truncatedDescription} */}
              <div
                className="font-light text-neutral-500"
                dangerouslySetInnerHTML={{
                  __html: showFullDescription
                    ? description
                    : truncatedDescription,
                }}
              />
              {description.length > 100 && (
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? " Read less" : " Read more"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
