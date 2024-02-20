import React from "react";
import Swal from "sweetalert2";

const MycertificateFullRouteBox = ({ certificate }) => {
  const { image, qualification, title, year, section } = certificate;

  const handleCertificate = () => {
    Swal.fire({
      width: "1280px",
      imageUrl: `${image}`,
      imageWidth: 1280,
      imageHeight: "auto",
      imageAlt: "Custom image",
    });
  };

  return (
    <div>
      <div className="card w-full bg-[#F5F7F2] shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{qualification}</p>
          <p>{section}</p>
          <p>{year}</p>
          <div className="card-actions">
            <button
              onClick={handleCertificate}
              className="btn bg-[#333333] text-[#F5F7F2]"
            >
              open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MycertificateFullRouteBox;
