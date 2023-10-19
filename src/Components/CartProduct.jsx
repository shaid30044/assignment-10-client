import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const CartProduct = ({ product }) => {
  const [coffees, setCoffees] = useState(product);

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
          `https://ssignment-10-server-side-1x0fpe99d-md-shaid-hasans-projects.vercel.app/cart/${_id}`,
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

              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
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
      duration: 2000,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <img src={product.image} className="w-full" alt="" />
      <div className="flex justify-between items-center pt-4">
        <h3 className="text-lg lg:text-xl font-semibold text-black/80">
          {product.brand}
        </h3>
        <button
          onClick={() => handleDelete(product._id)}
          className="flex btn btn-ghost text-xl text-color1 bg-transparent hover:bg-transparent duration-300 rounded-none px-0"
        >
          <MdDelete />
        </button>
      </div>
      <h3 className="text-xl lg:text-xl font-medium text-black/60 -mt-1">
        {product.name}
      </h3>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object,
};

export default CartProduct;
