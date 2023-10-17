import { Link, NavLink } from "react-router-dom";
import logo from "../assets/TD.png";
import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center font-bitter bg-color1/30 px-4 md:px-10 lg:px-20 py-0.5">
      <Link to="/">
        <img className="h-12 md:h-16" src={logo} alt="" />
      </Link>
      <div>
        <div className="text-xl space-x-6 md:hidden">
          {menuOpen ? (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="btn btn-ghost text-color1 px-0 py-0"
              >
                <RxCross2 />
              </button>
              <ul className="absolute top-[50px] right-0 flex flex-col gap-6 text- font-medium text-black/60 backdrop-blur-md rounded-xl text-center bg-white/40 p-6 w-40">
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
          <Link to="/signIn">
            <button className="text-color1">
              <BiLogInCircle />
            </button>
          </Link>
        </div>
        <ul className="hidden md:flex text-lg font-medium text-black/40">
          <li>
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
              to="/add-product"
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
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
