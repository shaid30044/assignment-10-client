import asus from "../assets/Asus.png";
import gygabyte from "../assets/Gigabyte.png";
import msi from "../assets/MSI.png";
import intel from "../assets/Intel.png";
import amd from "../assets/AMD.png";
import nvidia from "../assets/Nvidia.png";

const BrandLogo = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 justify-center items-center gap-y-8 px-4 md:px-10 lg:px-20 py-10">
      <img className="flex m-auto h-3 md:h-4 lg:h-5" src={asus} alt="" />
      <img className="flex m-auto h-3 md:h-4 lg:h-5" src={gygabyte} alt="" />
      <img className="flex m-auto h-3 md:h-4 lg:h-5" src={amd} alt="" />
      <img className="flex m-auto h-3 md:h-4 lg:h-5" src={msi} alt="" />
      <img className="flex m-auto h-3 md:h-4 lg:h-5" src={nvidia} alt="" />
      <img className="flex m-auto h-3 md:h-4 lg:h-5" src={intel} alt="" />
    </div>
  );
};

export default BrandLogo;
