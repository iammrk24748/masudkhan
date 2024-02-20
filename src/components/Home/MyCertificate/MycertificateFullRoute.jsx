import React, { useEffect, useState } from "react";
import MycertificateFullRouteBox from "./MycertificateFullRouteBox";
import Loader from "../../../Shared/Loader/Loader";

const MycertificateFullRoute = () => {
  const [certificate, setCertificate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/certificate`)
      .then((res) => res.json())
      .then((data) => {
        setCertificate(data);
        setLoading(false); // Update loading state after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching certificate data:", error);
        setLoading(false); // Update loading state in case of an error
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#F5F7F2] font-t">
      <div className="text-center pt-10">
        <h2 className="md:text-5xl text-2xl font-semibold font-t  text-[#333333]">
          My Certificate
        </h2>
        <div className="border border-[#333333] md:w-36 w-24 inline-block "></div>
        <p className="text-center tex-base md:text-xl mt-5 font-t mx-10 md:mx-0 ">
          Tomorrow is my exam. But it is not my special concern, <br /> because
          only a few pages of the ledger can not determine my future. <br />{" "}
          <span className="font-bold text-[#333333">—Thomas Alva Edison.</span>
        </p>
      </div>
      <div className="container mx-auto px-10 pb-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificate.map((certificate) => (
            <MycertificateFullRouteBox
              key={certificate._id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MycertificateFullRoute;
