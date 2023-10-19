import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Subscribe = () => {
  const [isSubscribeHovered, setIsSubscribeHovered] = useState(false);
  const [isSubscribeValue, setIsSubscribeValue] = useState(false);

  const handleSubscribeValue = (e) => {
    const value = e.target.value;
    setIsSubscribeValue(value);
  };
  const handleSubscribeFocus = () => {
    setIsSubscribeHovered(true);
  };

  const handleSubscribeBlur = () => {
    setTimeout(() => {
      setIsSubscribeHovered(false);
    }, 1000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    Swal.fire({
      title: "Success!",
      text: "Subscribe successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });

    form.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-color2/10 font-bitter px-4 md:px-10 lg:px-40 py-20">
      <div
        data-aos="fade-up"
        className="border-2 border-color1 bg-color1/10 rounded-3xl p-10 
md:p-20"
      >
        <h1 className="text-4xl font-medium text-color1 text-center">
          Stay In the Loop
        </h1>
        <p className="flex text-black/60 text-center lg:w-5/6 m-auto pt-4 pb-6">
          Subscribe to our newsletter and become part of our thriving community.
          Get the latest updates on industry trends, exclusive access to
          in-depth articles, special promotions, and valuable insights shared by
          our experts. Join us on this journey of knowledge and connection.
        </p>
        <form onSubmit={handleSubscribe}>
          <div className="border-b-2 border-black/60 w-full group">
            <label
              htmlFor="email"
              style={{ transition: "transform 0.5s" }}
              className={`flex items-center gap-2 text-lg font-medium 
group-hover:transform group-hover:-translate-y-0 ${
                isSubscribeHovered || isSubscribeValue
                  ? "translate-y-0"
                  : "translate-y-8"
              }`}
            >
              <HiOutlineMail /> Email
            </label>
            <input
              onChange={handleSubscribeValue}
              onFocus={handleSubscribeFocus}
              onBlur={handleSubscribeBlur}
              type="email"
              name="email"
              id="email"
              required
              className="bg-transparent rounded-t-lg focus:outline-none 
text-lg w-full p-1"
            />
          </div>
          <input
            type="submit"
            value="Subscribe"
            className="btn btn-ghost normal-case lg:col-span-2 text-lg 
text-black/70 bg-transparent border-2 border-black/60 
hover:border-black/60 hover:bg-color1/20 duration-300 
rounded-full px-6 w-full m-auto mt-10"
          />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
