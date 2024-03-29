import { useContext, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isActive, setActive] = useState("false");
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className="bg-[#F5F7F2] font-t">
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer font-t p-4 font-bold">
            <h2 className="font-t ">Masudur Rahman</h2>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex font-t py-2 justify-center items-center bg-blue-100 mx-auto">
              <h2>Masudur Rahman</h2>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/admin/dashboardCard">
                {/* <img
                  className='object-cover w-24 h-24 mx-2 rounded-full'
                  src={user?.photoURL}
                  alt='avatar'
                  referrerPolicy='no-referrer'
                /> */}
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src="https://i.ibb.co/TLwrzrX/Capture.jpg"
                  alt=""
                />
              </Link>
              <Link to="/admin">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {/* {user?.displayName} */}
                </h4>
              </Link>
              <Link to="/admin">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6 bg-[#F5F7F2]">
            <nav>
              <>
                {/* Menu Links */}
                <NavLink
                  to="/admin/allBlog"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-[#F5F7F2]  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                  <span className="mx-4 font-medium">Blog</span>
                </NavLink>
                <NavLink
                  to="/admin/AllCertificate"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                  <span className="mx-4 font-medium">Add Certificate</span>
                </NavLink>
                <NavLink
                  to="/admin/allMemories"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                  <span className="mx-4 font-medium">Add Memories</span>
                </NavLink>

                <NavLink
                  to="/admin/allNote"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  {/* <BsFillHouseAddFill className='w-5 h-5' /> */}

                  <span className="mx-4 font-medium">Add Notes</span>
                </NavLink>
              </>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            {/* <FcSettings className='w-5 h-5' /> */}

            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            {/* <GrLogout className='w-5 h-5' /> */}

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
