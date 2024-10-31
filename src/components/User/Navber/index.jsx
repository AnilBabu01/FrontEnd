import { useState, useContext, useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import ToggleSwitch from "../../common/ToggleSwitch";
import Logo from "../../../../public/images/mewlogo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { UserContext } from "@/context/authContext";
const ProfileMenu = ({ isOpen, toggleMenu }) => {
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("token");
    toast.success("You Have Signout Successfully!!");
    router.push("/user/account/signin").then(() => {
      window.location.reload();
    });
  };

  return (
    <div
      className={`absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg z-20 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <Link
        href="/user/profile"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        onClick={toggleMenu}
      >
        Profile
      </Link>
      <Link
        href="/user/refer"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        onClick={toggleMenu}
      >
        Refer to others
      </Link>
      <Link
        href="#logout"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
        onClick={() => logOut()}
      >
        Logout
      </Link>
    </div>
  );
};

const Index = () => {
  const router = useRouter();
  const routeName = router.pathname;
  const { user, getUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <nav className="shadow-lg  p-4 fixed w-full z-10 top-0 ">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={Logo} height={200} width={200} />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={routeName === "/" ? "activeLink" : "link"}>
            Home
          </Link>
          <Link href="/user/game-list" className="hover:text-gray-300">
            Games
          </Link>
          {user ? (
            <>
              <Link
                href="/user/wallet"
                className={routeName === "/user/wallet" ? "activeLink" : "link"}
              >
                Wallet
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/user/account/signin"
                className={
                  routeName === "/user/account/signin" ? "activeLink" : "link"
                }
              >
                Sign In
              </Link>
              <Link
                href="/user/account/signup"
                className={
                  routeName === "/user/account/signup" ? "activeLink" : "link"
                }
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        <div className="flex justify-between items-center hide-in-mobile ">
          <div className="mr-3 hide-in-mobile ">
            <ToggleSwitch />
          </div>
          {user && (
            <div className="profileContainer bg-gray-400 relative">
              <FaUser
                size={20}
                className="profileIcon"
                onClick={toggleProfileMenu}
              />
              <ProfileMenu
                isOpen={isProfileMenuOpen}
                toggleMenu={toggleProfileMenu}
              />
            </div>
          )}
        </div>
        <div className="md:hidden flex items-center">
          {user && (
            <div className="flex justify-between items-center mr-10">
              <div className="profileContainer bg-gray-400 relative">
                <FaUser
                  size={20}
                  className="profileIcon"
                  onClick={toggleProfileMenu}
                />
                <ProfileMenu
                  isOpen={isProfileMenuOpen}
                  toggleMenu={toggleProfileMenu}
                />
              </div>
            </div>
          )}

          <button onClick={toggleMenu}>
            <FaBars size={24} />
          </button>
        </div>
      </div>
      <div
        className={`dark-mobile fixed top-0 shadow-lg right-0 bg-white-600 text-white w-[60%] h-screen transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center">
            <ToggleSwitch />
            <FaTimes onClick={toggleMenu} size={24} />
          </div>
          <Link
            href="/"
            className={
              routeName === "/" ? "activeLink block py-2" : "link block py-2"
            }
          >
            Home
          </Link>
          <Link
            href="/user/game-list"
            className="block py-2 hover:text-gray-300"
          >
            Games
          </Link>
          {user ? (
            <>
              <Link
                href="/user/wallet"
                className={
                  routeName === "/user/wallet"
                    ? "activeLink block py-2"
                    : "link block py-2"
                }
              >
                Wallet
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/user/account/signin"
                className={
                  routeName === "/user/account/signin"
                    ? "activeLink block py-2"
                    : "link block py-2"
                }
              >
                Sign In
              </Link>
              <Link
                href="/user/account/signup"
                className={
                  routeName === "/user/account/signup"
                    ? "activeLink block py-2"
                    : "link block py-2"
                }
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Index;
