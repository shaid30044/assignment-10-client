import { Link } from "react-router-dom";
import amd from "../assets/AMD.png";

const Brands = () => {
  return (
    <div className="font-bitter px-4 md:px-10 lg:px-20 py-32">
      <h1 className="text-5xl font-semibold text-center text-black/70 pb-16">
        Brands
      </h1>
      <Link>
        <button>
          <div className="bg-color1/10 px-20 py-40">
            <img className="w-60" src={amd} alt="" />
          </div>
          <h1 className="text-2xl font-semibold bg-color1/30 py-4">AMD</h1>
        </button>
      </Link>
    </div>
  );
};

export default Brands;
