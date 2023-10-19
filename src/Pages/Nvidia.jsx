import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const Nvidia = () => {
  const products = useLoaderData();
  const navigate = useNavigate();

  const [carousel, setCarousel] = useState([]);
  const [activeItem, setActiveItem] = useState(0);
  const [item, setItem] = useState(products);

  const nvidiaProducts = products.filter(
    (product) => product.brand === "NVIDIA"
  );

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("carousel.json");
      const data = await res.json();
      setCarousel(data);
    };
    handleFetch();
  }, []);

  const nvidiaCarousel = carousel.filter(
    (product) => product.brand === "Nvidia"
  );

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-side-7in6hf2vy-md-shaid-hasans-projects.vercel.app/product/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = item.filter((cof) => cof._id !== _id);
              setItem(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="font-bitter">
      <Navbar />
      <div>
        <div className="carousel w-full">
          {nvidiaCarousel.map((item, index) => (
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
          {nvidiaCarousel.map((item, index) => (
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
      <button
        onClick={handleBack}
        className="btn btn-ghost normal-case text-lg font-bitter text-color1/
70 hover:text-color1/90 bg-transparent hover:bg-color2/30 
duration-300 rounded-none px-10 mx-4 md:mx-10 lg:mx-20 mt-10 lg:mt-20"
      >
        <BiArrowBack /> Back
      </button>
      <div className="px-4 md:px-10 lg:px-20 pt-10 pb-20 lg:pt-14 lg:pb-32">
        <h1 className="text-5xl font-semibold text-center text-black/70 pb-16">
          Products
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
          {nvidiaProducts.map((product) => (
            <div key={product._id} data-aos="zoom-in">
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
                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex justify-center btn btn-ghost text-xl text-color1 bg-color2/30 hover.bg-color2/40 duration-300 rounded-none w-full"
                >
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

export default Nvidia;
