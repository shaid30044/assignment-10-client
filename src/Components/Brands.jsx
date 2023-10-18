import apple from "../assets/Apple.png";
import samsung from "../assets/Samsung.png";
import google from "../assets/Google.png";
import intel from "../assets/Intel.png";
import amd from "../assets/AMD.png";
import nvidia from "../assets/Nvidia.png";

const Brands = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <img className="h-6 mx-20" src={apple} alt="" />
      <img className="h-6 mx-20" src={amd} alt="" />
      <img className="h-6 mx-20" src={google} alt="" />
      <img className="h-6 mx-20" src={nvidia} alt="" />
      <img className="h-6 mx-20" src={intel} alt="" />
      <img className="h-6 mx-20" src={samsung} alt="" />
    </div>
  );
};

export default Brands;
