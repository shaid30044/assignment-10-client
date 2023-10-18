import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const Details = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Navbar />
      <button
        onClick={handleBack}
        className="btn btn-ghost normal-case text-lg font-bitter text-color1/70 hover:text-color1/90 bg-transparent hover:bg-color2/30 duration-300 rounded-none px-10 mx-4 md:mx-10 lg:mx-20 mt-10 lg:mt-20"
      >
        <BiArrowBack /> Back
      </button>
      <div className="grid lg:grid-cols-2 items-center gap-8 font-bitter px-4 md:px-10 lg:px-20 pt-10 pb-20 lg:pt-14 lg:pb-32">
        <img src={product.image} />
        <div>
          <h3 className="text-lg lg:text-xl font-semibold text-black/80">
            {product.brand}
          </h3>
          <h3 className="text-xl lg:text-2xl font-medium text-black/60 pt-1">
            {product.name}
          </h3>
          <p className="py-4">
            <span className="text-xs font-medium text-color1 bg-color2/30 rounded-sm px-2 py-1">
              {product.type}
            </span>
          </p>
          <p className="text-lg font-medium text-black/50 pt-2 pb-6">
            {product.description}
          </p>
          <p className="text-black/50 pb-1">${product.price}</p>
          <div className="flex items-center gap-2">
            <div className="text-star">
              {product.rating == 3.5 ? (
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                </div>
              ) : product.rating == 4.0 ? (
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                </div>
              ) : (
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              )}
            </div>
            <p className="text-black/50">{product.rating}</p>
          </div>
          <button
            className="btn btn-ghost normal-case lg:col-span-2 text-lg 
          text-black/70 bg-color1/20 border-2 border-black/60 
          hover:border-black/60 hover:bg-color1/30 duration-300 
          rounded-full px-10 m-auto mt-6 md:mt-10"
          >
            Add to cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
