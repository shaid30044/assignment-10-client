import { useContext, useRef, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PiPasswordBold } from "react-icons/pi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Components/Navbar";

const SignIn = () => {
  const { login } = useContext(AuthContext);

  const [isEmailValue, setIsEmailValue] = useState(false);
  const [isPasswordValue, setIsPasswordValue] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPasswordHovered, setIsPasswordHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleEmailValue = (e) => {
    const value = e.target.value;
    setIsEmailValue(value);
  };

  const handlePasswordValue = (e) => {
    const value = e.target.value;
    setIsPasswordValue(value);
  };

  const handleEmailFocus = () => {
    setIsEmailHovered(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordHovered(true);
  };

  const handleEmailBlur = () => {
    setTimeout(() => {
      setIsEmailHovered(false);
    }, 1000);
  };

  const handlePasswordBlur = () => {
    setTimeout(() => {
      setIsPasswordHovered(false);
    }, 1000);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((res) => {
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
        toast.success("Sign In successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(res.user);
      })
      .catch((error) => {
        if (error.message === "Invalid email") {
          toast.error("Invalid email. Please check your email address.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (error.message === "Invalid password") {
          toast.error("Invalid password. Please check your password.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Sign In failed. Please check your credentials.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-color2/30 font-bitter px-4 md:px-10 lg:px-40 py-20">
        <div className="grid md:grid-cols-2 md:justify-between border-2 border-color1 bg-color1/20 rounded-3xl">
          <div className="flex flex-col justify-center items-center bg-color1/20 rounded-3xl px-4 py-20">
            <h1 className="md:text-2xl lg:text-4xl font-medium text-black/70 pb-1">
              Welcome to...
            </h1>
            <p className="text-3xl lg:text-5xl text-color1 font-monoton">
              Tech Dimension
            </p>
            <p className="lg:text-lg font-medium text-center pt-6">
              Exploring the Multifaceted Dimensions of Technology: Where
              Innovation Knows No Bounds
            </p>
          </div>
          <div className="px-10 lg:px-0 pt-20 pb-10 md:pb-0">
            <div className="text-xl font-semibold text-black/40 lg:px-10 pb-10">
              <NavLink
                to="/signIn"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-3xl text-black/60"
                    : ""
                }
              >
                Sign In
              </NavLink>
              <span> / </span>
              <NavLink
                to="/signUp"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-3xl text-black/60"
                    : ""
                }
              >
                Sign Up
              </NavLink>
            </div>
            <div className="flex flex-col justify-center lg:px-20">
              <form
                onSubmit={handleSignIn}
                className="flex flex-col gap-8 pb-20"
              >
                <div className="border-b-2 border-black/60 w-full group">
                  <label
                    htmlFor="email"
                    style={{ transition: "transform 0.5s" }}
                    className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                      isEmailHovered || isEmailValue
                        ? "translate-y-0"
                        : "translate-y-8"
                    }`}
                  >
                    <HiOutlineMail />
                    Email
                  </label>
                  <input
                    onChange={handleEmailValue}
                    onFocus={handleEmailFocus}
                    onBlur={handleEmailBlur}
                    ref={emailRef}
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="bg-transparent focus:outline-none text-lg w-full p-1"
                  />
                </div>
                <div className="border-b-2 border-black/60 w-full group">
                  <label
                    htmlFor="password"
                    style={{ transition: "transform 0.5s" }}
                    className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                      isPasswordHovered || isPasswordValue
                        ? "translate-y-0"
                        : "translate-y-8"
                    }`}
                  >
                    <PiPasswordBold />
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      onChange={handlePasswordValue}
                      onFocus={handlePasswordFocus}
                      onBlur={handlePasswordBlur}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      required
                      className="bg-transparent focus:outline-none text-lg w-full p-1"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-lg text-coffee1 cursor-pointer"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-ghost normal-case text-lg text-black/70 bg-transparent border-2 border-black/60 hover:border-black/60 hover:bg-color1/20 duration-300 rounded-full px-6 w-full m-auto mt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
