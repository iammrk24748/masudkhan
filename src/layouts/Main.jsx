import { Outlet } from "react-router-dom";
import ProgressBar from "react-scroll-progress-bar";
import Navbar from "../components/Home/NavBar/NavBar";

const Main = () => {
  return (
    <div className="bg-[#F5F7F2]">
      <ProgressBar height="6" bgcolor="#000" duration="0.2" />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
