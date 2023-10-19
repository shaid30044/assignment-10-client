import { useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { BiArrowBack } from "react-icons/bi";
import CartProduct from "../Components/CartProduct";

const Cart = () => {
  const products = useLoaderData();
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
      <div className="grid lg:grid-cols-3 items-center gap-10 font-bitter px-4 md:px-10 lg:px-20 pt-10 pb-20 lg:pt-14 lg:pb-32">
        {products.map((product, idx) => (
          <CartProduct key={idx} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
