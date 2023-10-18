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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-4 md:gap-6 lg:gap-8">
        {brands.map((brand, idx) => (
          <Link to={brand.brand} key={idx} data-aos="zoom-in">
            <button className="relative group">
              <img className="md:w-60" src={brand.image} />
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-500">
                <h1 className="text-lg font-semibold text-white/80 pb-2">
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
