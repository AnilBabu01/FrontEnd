import { useState } from "react";
import {
  FaUser,
  FaCog,
  FaBars,
  FaTachometerAlt,
  FaArrowUp,
  FaArrowDown,
  FaMortarPestle,
} from "react-icons/fa";
import Image from "next/image";
import UserProfile from "../../../../public/images/user.png";
import Styles from "./Slidebar.module.css";
import Link from "next/link";

const Index = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`${
            isOpen ? "w-64" : "hidden md:block md:w-20"
          } bg-white border  shadow-lg z-20 h-screen p-5 pt-2 relative duration-300`}
        >
          <ul>
            <li>
              <button
                className="group text-gray-300 rounded-md  flex items-center justify-between w-full p-2 hover:bg-gray-700"
                onClick={toggleSubMenu}
              >
                <span
                  className={`${
                    !isOpen && "hidden"
                  } origin-left duration-200 text-[black] group-hover:text-white flex items-center`}
                >
                  <FaMortarPestle className="text-[black] group-hover:text-white" />
                  <span className="ml-3 md:ml-3">Masters</span>
                </span>
                <span>
                  {isSubMenuOpen ? (
                    <FaArrowUp className="text-[black] group-hover:text-white" />
                  ) : (
                    <FaArrowDown className="text-[black] group-hover:text-white" />
                  )}
                </span>
              </button>
              <ul
                className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  isSubMenuOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <li
                  className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2 ${
                    !isOpen && "justify-center"
                  }`}
                >
                  <Link
                    href="/"
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-200 text-[black] group-hover:text-white`}
                  >
                    Game Rate
                  </Link>
                </li>
                <li
                  className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2 ${
                    !isOpen && "justify-center"
                  }`}
                >
                  <Link
                    href="/"
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-200 text-[black] group-hover:text-white`}
                  >
                    Game
                  </Link>
                </li>
                <li
                  className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2 ${
                    !isOpen && "justify-center"
                  }`}
                >
                  <Link
                    href="/"
                    className={`${
                      !isOpen && "hidden"
                    } origin-left duration-200 text-[black] group-hover:text-white`}
                  >
                    Category
                  </Link>
                </li>
              </ul>
            </li>

            <Link
              href="/"
              className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2 ${
                !isOpen && "justify-center"
              }`}
            >
              <FaTachometerAlt className="text-[black] group-hover:text-white" />
              <span
                className={`${
                  !isOpen && "hidden"
                } origin-left duration-200 text-[black] group-hover:text-white`}
              >
                Dashboard
              </span>
            </Link>

            <Link
              href="/admin/users"
              className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2 ${
                !isOpen && "justify-center"
              }`}
            >
              <FaUser className="text-[black] group-hover:text-white" />
              <span
                className={`${
                  !isOpen && "hidden"
                } origin-left duration-200 text-[black] group-hover:text-white`}
              >
                Users
              </span>
            </Link>

            <Link
              href="/"
              className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-2 ${
                !isOpen && "justify-center"
              }`}
            >
              <FaCog className="text-black group-hover:text-white" />
              <span
                className={`${
                  !isOpen && "hidden"
                } origin-left duration-200 text-black group-hover:text-white`}
              >
                Settings
              </span>
            </Link>
          </ul>
        </div>
        <div className="w-full">
          <div className="p-2">
            <nav className="bg-white border rounded-lg shadow-lg z-20 flex justify-between items-center p-3 pl-8 pr-8">
              <div>
                <FaBars
                  className={` cursor-pointer right-6 top-9 w-7 h-7 text-[black] ${
                    isOpen && "rotate-10"
                  }`}
                  onClick={toggleSidebar}
                />
              </div>
              <div className="relative">
                <div onClick={toggleMenu}>
                  <Image
                    src={UserProfile}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-30">
                    <ul className="border-b border-[#697a8d]">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <div className="flex items-center">
                          <Image
                            src={UserProfile}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div className={Styles.nameContainer}>
                            <p className={Styles.AdminName}>Anil Babu</p>
                            <p className={Styles.UserTitle}>Admin</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        My Profile
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Settings
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
