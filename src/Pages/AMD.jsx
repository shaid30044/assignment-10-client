import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

const AMD = () => {
  const products = useLoaderData();

  const [carousel, setCarousel] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

  const amdProducts = products.filter((product) => product.brand === "AMD");

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("carousel.json");
      const data = await res.json();
      setCarousel(data);
    };
    handleFetch();
  }, []);

  const amdCarousel = carousel.filter((product) => product.brand === "AMD");

  return (
    <div className="font-bitter">
      <Navbar />
      <div>
        <div className="carousel w-full">
          {amdCarousel.map((item, index) => (
            <div
              key={item.id}
              id={`item${index}`}
              className={`carousel-item w-full ${
                index === activeItem ? "active" : ""
              }`}
            >
              <img src={item.image} className="w-full" />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {amdCarousel.map((item, index) => (
            <a
              key={item.id}
              href={`#item${index}`}
              className={`btn btn-xs ${index === activeItem ? "active" : ""}`}
            >
              {index + 1}
            </a>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 lg:px-20 py-20 lg:py-32">
        <h1 className="text-5xl font-semibold text-center text-black/70 pb-16">
          Products
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {amdProducts.map((product) => (
            <div key={product._id}>
              <img src={product.image} />
              <div className="border-x-2 border-color2/30 px-4">
                <p className="pt-4 pb-2">
                  <span className="text-xs font-medium text-color1 bg-color2/30 rounded-sm px-2 py-1">
                    {product.type}
                  </span>
                </p>
                <h3 className="text-lg lg:text-xl font-semibold text-black/80">
                  {product.brand}
                </h3>
                <h3 className="text-xl lg:text-2xl font-medium text-black/60 pt-1 pb-4">
                  {product.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 justify-between items-center border-x-2 border-color2/30 px-4 pb-5">
                <p className="text-black/50">${product.price}</p>
                <div className="flex justify-end items-center gap-2">
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
              </div>
              <div className="grid grid-cols-3 items-center">
                <Link to={`/product/${product._id}`}>
                  <button className="flex justify-center btn btn-ghost text-xl text-color1 bg-color2/30 hover:bg-color2/40 duration-300 rounded-none w-full">
                    <FaEye />
                  </button>
                </Link>
                <Link
                  to={`/update-product/${product._id}`}
                  className="border-x-[2px] border-color2/60"
                >
                  <button className="flex justify-center btn btn-ghost text-xl text-color1 bg-color2/30 hover.bg-color2/40 duration-300 rounded-none w-full">
                    <HiPencil />
                  </button>
                </Link>
                <button className="flex justify-center btn btn-ghost text-xl text-color1 bg-color2/30 hover.bg-color2/40 duration-300 rounded-none w-full">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AMD;
