import { Link, NavLink } from "react-router-dom";
import logo from "../assets/TD.png";
import { useContext, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HiMiniMoon } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "../CSS/theme.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("darkMode", newDark);

    if (newDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  const handleUserInfoClick = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Success!",
            text: "Sign Out successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        });
      }
    });
  };

  return (
    <div
      className={`flex justify-between items-center font-bitter px-4 md:px-10 lg:px-20 py-0.5 ${
        dark ? "bg-color2/30" : "bg-color1/80"
      }`}
    >
      <Link to="/">
        <img className="h-12 md:h-16" src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-2 md:gap-6">
        <div className="text-xl space-x-6 md:hidden">
          {menuOpen ? (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className={`btn btn-ghost text-xl px-0 py-0 ${
                  dark ? "text-color2" : "text-color1"
                }`}
              >
                <RxCross2 />
              </button>
              <ul
                className={`absolute top-[50px] right-0 flex flex-col gap-6 text-base font-medium border-2 border-color1/40 backdrop-blur-md rounded-xl text-center p-6 pb-8 w-48 ${
                  dark ? "text-color2 bg-black/30" : "text-black/60 bg-white/40"
                }`}
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? `border-b-[3px] px-4 pb-2 ${
                            dark
                              ? "text-dark1 border-dark1"
                              : "text-color1 border-color1"
                          }`
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/add-product"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? `border-b-[3px] px-4 pb-2 ${
                            dark
                              ? "text-dark1 border-dark1"
                              : "text-color1 border-color1"
                          }`
                        : ""
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? `border-b-[3px] px-4 pb-2 ${
                            dark
                              ? "text-dark1 border-dark1"
                              : "text-color1 border-color1"
                          }`
                        : ""
                    }
                  >
                    My Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={toggleMenu}
              className={`btn btn-ghost text-xl px-0 py-0 ${
                dark ? "text-dark1" : "text-color2"
              }`}
            >
              <HiOutlineMenuAlt1 />
            </button>
          )}
        </div>
        <ul
          className={`hidden md:flex text-lg font-medium text-black/40 dark:text-color2 ${
            dark ? "text-color2" : "text-black/40"
          }`}
        >
          <li className="px-6">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-color1 dark:text-dark1 border-b-[3px] border-color1 dark:border-dark1 px-6 pb-5 ${
                      !dark
                        ? "text-dark1 border-dark1"
                        : "text-color1 border-color1"
                    }`
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-6">
            <NavLink
              to="/add-product"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-color1 dark:text-dark1 border-b-[3px] border-color1 dark:border-dark1 px-6 pb-5 ${
                      dark
                        ? "text-dark1 border-dark1"
                        : "text-color1 border-color1"
                    }`
                  : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="px-6">
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? `text-color1 dark:text-dark1 border-b-[3px] border-color1 dark:border-dark1 px-6 pb-5 ${
                      dark
                        ? "text-dark1 border-dark1"
                        : "text-color1 border-color1"
                    }`
                  : ""
              }
            >
              My Cart
            </NavLink>
          </li>
        </ul>
        <div className="relative">
          {user ? (
            <button
              onClick={handleUserInfoClick}
              className="cursor-pointer pt-2 md:pt-0 ml-4 md:ml-0"
            >
              <img
                src={user?.photoURL}
                alt={`${user.displayName}'s profile`}
                className="w-6 md:w-8 h-6 md:h-8 rounded-full"
              />
            </button>
          ) : (
            <Link to="/signIn">
              <button
                className={`md:hidden text-xl pl-4 pt-1 ${
                  dark ? "text-color2" : "text-color1"
                }`}
              >
                <BiLogInCircle />
              </button>
              <button
                className={`hidden md:block btn btn-ghost normal-case text-lg font-medium rounded-full duration-300 px-6 ${
                  dark
                    ? "text-color2 bg-black/30 hover:text-dark1 hover:bg-color2/10"
                    : "text-black/40 bg-color1/20 hover:text-color1 hover:bg-color1/30"
                }`}
              >
                Sign In
              </button>
            </Link>
          )}
          {showUserInfo && user && (
            <div
              className={`absolute top-[44px] md:top-[52px] right-0 flex flex-col border-2 border-color1/40 gap-2 font-medium text-center backdrop-blur-md rounded-xl p-6 ${
                dark ? "text-color2 bg-black/30" : "text-black/60 bg-white/40"
              }`}
            >
              <span className="pb-2">{user.displayName}</span>
              <span>{user.email}</span>
              <button
                onClick={handleLogout}
                className={`md:hidden flex items-center gap-2 text-lg mt-2 m-auto ${
                  dark ? "text-dark1" : "text-color1"
                }`}
              >
                Sign Out <BiLogOutCircle />
              </button>
              <button
                onClick={handleLogout}
                className={`hidden md:block btn btn-ghost normal-case text-lg font-medium rounded-full duration-300 w-full mt-2 m-auto ${
                  dark
                    ? "text-color2 bg-black/30 hover:text-dark1 hover:bg-color2/10"
                    : "text-black/40 bg-color1/20 hover:text-color1 hover:bg-color1/30"
                }`}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
        <div
          onClick={toggleTheme}
          className="text-xl text-color1 cursor-pointer pl-4"
        >
          {dark ? (
            <div className="text-color2">
              <BsFillSunFill />
            </div>
          ) : (
            <div className="text-black/60">
              <HiMiniMoon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
