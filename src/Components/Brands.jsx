import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const res = await fetch("brand.json");
      const data = await res.json();
      setBrands(data);
    };
    handleFetch();
  }, []);

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
    <div className="font-bitter px-4 md:px-10 lg:px-20 py-32">
      <h1 className="text-5xl font-semibold text-center text-black/70 pb-16">
        Brands
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 lg:gap-12">
        {brands.map((brand, idx) => (
          <Link to={brand.brand} key={idx} data-aos="zoom-in">
            <button className="relative bg-color2/30 hover:bg-color2/50 duration-300 w-full h-[300px]">
              <div className="relative p-20">
                <img src={brand.image} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hover:opacity-100 bg-color2/20 duration-500 w-full">
                <h1 className="text-lg font-semibold text-black/60 py-3">
                  {brand.brand}
                </h1>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
