import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BrandLogo = () => {
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
    <div className="grid grid-cols-3 lg:grid-cols-6 justify-center items-center gap-y-8 px-4 md:px-10 lg:px-20 py-10">
      {brands.map((brand) => (
        <img
          data-aos="zoom-in"
          key={brand.id}
          className="flex m-auto h-3 md:h-4 lg:h-5"
          src={brand.image}
        />
      ))}
    </div>
  );
};

export default BrandLogo;
