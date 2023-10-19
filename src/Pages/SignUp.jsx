import { useContext, useState } from "react";
import { BiLink, BiUser } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { PiPasswordBold } from "react-icons/pi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";

const SignUp = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [registerError, setRegisterError] = useState("");
  const [isNameValue, setIsNameValue] = useState(false);
  const [isEmailValue, setIsEmailValue] = useState(false);
  const [isPasswordValue, setIsPasswordValue] = useState(false);
  const [isPhotoValue, setIsPhotoValue] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isPasswordHovered, setIsPasswordHovered] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleNameValue = (e) => {
    const value = e.target.value;
    setIsNameValue(value);
  };

  const handleEmailValue = (e) => {
    const value = e.target.value;
    setIsEmailValue(value);
  };

  const handlePasswordValue = (e) => {
    const value = e.target.value;
    setIsPasswordValue(value);
  };

  const handlePhotoValue = (e) => {
    const value = e.target.value;
    setIsPhotoValue(value);
  };

  const handleNameFocus = () => {
    setIsNameHovered(true);
  };

  const handleEmailFocus = () => {
    setIsEmailHovered(true);
  };

  const handlePasswordFocus = () => {
    setIsPasswordHovered(true);
  };

  const handlePhotoFocus = () => {
    setIsPhotoHovered(true);
  };

  const handleNameBlur = () => {
    setTimeout(() => {
      setIsNameHovered(false);
    }, 1000);
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

  const handlePhotoBlur = () => {
    setTimeout(() => {
      setIsPhotoHovered(false);
    }, 1000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    try {
      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters");
      }
      if (!/[A-Z]/.test(password)) {
        throw new Error(
          "Password should have at least one uppercase character"
        );
      }
      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        throw new Error("Password should have at least one special character");
      }

      const userCredential = await createUser(email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photo,
      });
      Swal.fire({
        title: "Success!",
        text: "Sign Up successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Sign Up successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
        console.log(res.user);
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-color2/10 font-bitter px-4 md:px-10 lg:px-40 py-20">
        <div className="grid md:grid-cols-2 md:justify-between border-2 border-color1 bg-color1/10 rounded-3xl">
          <div className="flex flex-col justify-center items-center bg-color1/10 rounded-3xl px-4 py-20">
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
          <div className="px-10 lg:px-0">
            <div className="text-xl font-semibold text-black/40 lg:px-10 pb-10 pt-20">
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
            <div className="flex flex-col justify-center lg:px-20 pb-20">
              <form
                onSubmit={handleSignUp}
                className="relative flex flex-col gap-8 border-b-2 border-black/60 pb-14"
              >
                <p className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 bg-[#EBECED] font-medium">
                  Or
                </p>
                <div className="border-b-2 border-black/60 w-full group">
                  <label
                    htmlFor="name"
                    style={{ transition: "transform 0.5s" }}
                    className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                      isNameHovered || isNameValue
                        ? "translate-y-0"
                        : "translate-y-8"
                    }`}
                  >
                    <BiUser />
                    Name
                  </label>
                  <input
                    onChange={handleNameValue}
                    onFocus={handleNameFocus}
                    onBlur={handleNameBlur}
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
                  />
                </div>
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
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
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
                      className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-lg text-coffee1 cursor-pointer"
                    >
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                  </div>
                </div>
                <div className="border-b-2 border-black/60 w-full group">
                  <label
                    htmlFor="photo"
                    style={{ transition: "transform 0.5s" }}
                    className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                      isPhotoHovered || isPhotoValue
                        ? "translate-y-0"
                        : "translate-y-8"
                    }`}
                  >
                    <BiLink />
                    Photo
                  </label>
                  <input
                    onChange={handlePhotoValue}
                    onFocus={handlePhotoFocus}
                    onBlur={handlePhotoBlur}
                    type="text"
                    name="photo"
                    id="photo"
                    required
                    className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
                  />
                </div>
                <div className="text-center -mb-4">
                  {registerError && (
                    <p className="text-sm text-red-600">{registerError}</p>
                  )}
                </div>
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-ghost normal-case text-lg text-black/70 bg-transparent border-2 border-black/60 hover:border-black/60 hover:bg-color1/20 duration-300 rounded-full px-6 w-full m-auto"
                />
              </form>
              <div className="pt-14">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-ghost normal-case text-lg text-black/70 bg-transparent border-2 border-black/60 hover:border-black/60 hover:bg-color1/20 duration-300 rounded-full px-6 w-full m-auto"
                >
                  Sign Up with{" "}
                  <span>
                    <BsGoogle className="text-xl" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
