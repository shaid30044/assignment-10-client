import { Link, NavLink } from "react-router-dom";
import logo from "../assets/TD.png";
import { useContext, useState } from "react";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <div className="flex justify-between items-center font-bitter bg-color1/30 px-4 md:px-10 lg:px-20 py-0.5">
      <Link to="/">
        <img className="h-12 md:h-16" src={logo} alt="" />
      </Link>
      <div className="flex items-center gap-2 md:gap-6">
        <div className="text-xl space-x-6 md:hidden">
          {menuOpen ? (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="btn btn-ghost text-xl text-color1 px-0 py-0"
              >
                <RxCross2 />
              </button>
              <ul className="absolute top-[50px] right-0 flex flex-col gap-6 text-base font-medium border-2 border-color1/40 text-black/60 backdrop-blur-md rounded-xl text-center bg-white/40 p-6 pb-8 w-40">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-color1 border-b-[3px] border-color1 px-4 pb-2"
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
                        ? "text-color1 border-b-[3px] border-color1 px-4 pb-2"
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
                        ? "text-color1 border-b-[3px] border-color1 px-4 pb-2"
                        : ""
                    }
                  >
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <button
              onClick={toggleMenu}
              className="btn btn-ghost text-xl text-color1 px-0 py-0"
            >
              <HiOutlineMenuAlt1 />
            </button>
          )}
        </div>
        <ul className="hidden md:flex text-lg font-medium text-black/40">
          <li className="px-6">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-color1 border-b-[3px] border-color1 px-6 pb-5"
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
                  ? "text-color1 border-b-[3px] border-color1 px-6 pb-5"
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
                  ? "text-color1 border-b-[3px] border-color1 px-6 pb-5"
                  : ""
              }
            >
              Cart
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
              <button className="md:hidden text-xl text-color1 pl-4 pt-1">
                <BiLogInCircle />
              </button>
              <button className="hidden md:block btn btn-ghost normal-case text-lg font-medium text-black/40 bg-color1/20 hover:text-color1 hover:bg-color1/30 rounded-full duration-300 px-6">
                Sign In
              </button>
            </Link>
          )}
          {showUserInfo && user && (
            <div className="absolute top-[44px] md:top-[52px] right-0 flex flex-col border-2 border-color1/40 gap-2 font-medium text-black/60 backdrop-blur-md rounded-xl text-center bg-white/40 p-6">
              <span className="pb-2">{user.displayName}</span>
              <span>{user.email}</span>
              <button
                onClick={handleLogout}
                className="md:hidden flex items-center gap-2 text-lg text-color1 mt-2 m-auto"
              >
                Sign Out <BiLogOutCircle />
              </button>
              <button
                onClick={handleLogout}
                className="hidden md:block btn btn-ghost normal-case text-lg font-medium text-black/40 bg-color1/20 hover:text-color1 border-2 border-color1 hover:bg-color1/30 rounded-full duration-300 w-full mt-2 m-auto"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
