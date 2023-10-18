import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-color2/20 font-bitter">
      <div className="px-4 md:px-10 lg:px-20 py-28 md:py-40">
        <Link
          to="/"
          className="flex justify-center text-3xl md:text-6xl lg:text-7xl text-color1 font-monoton"
        >
          Tech <span className="text-black/60">Dimension</span>
        </Link>
        <div className="flex justify-center items-center gap-8 text-lg md:text-2xl text-black/60 pt-6 md:pt-10">
          <Link className="hover:text-color1 duration-300">
            <FaFacebookF />
          </Link>
          <Link className="hover:text-color1 duration-300">
            <FaXTwitter />
          </Link>
          <Link className="hover:text-color1 duration-300">
            <FaInstagram />
          </Link>
          <Link className="hover:text-color1 duration-300">
            <FaLinkedinIn />
          </Link>
          <Link className="hover:text-color1 duration-300">
            <FaDiscord />
          </Link>
        </div>
      </div>
      <p className="text-xs md:text-sm font-medium text-center bg-color2/80 text-color1 py-1.5">
        Copyright © 2023 - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
