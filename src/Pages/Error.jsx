import { BiArrowBack } from "react-icons/bi";
import { SiDarkreader } from "react-icons/si";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <p className="text-[240px] text-black/60 pb-4">
        <SiDarkreader />
      </p>
      <h1 className="text-2xl md:text-3xl font-medium text-black/60">
        Oops!!! Page not found.
      </h1>
      <Link to="/">
        <button className="btn btn-ghost normal-case text-xl font-bitter text-color1/70 hover:text-color1/90 bg-transparent hover:bg-color2/30 duration-300 rounded-none px-10 mx-4 md:mx-10 lg:mx-20 mt-10">
          <BiArrowBack /> Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
