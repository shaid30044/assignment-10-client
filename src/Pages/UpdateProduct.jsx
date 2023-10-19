import { useState } from "react";
import Navbar from "../Components/Navbar";
import Swal from "sweetalert2";
import Footer from "../Components/Footer";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const [isTypeHovered, setIsTypeHovered] = useState(false);
  const [isPriceHovered, setIsPriceHovered] = useState(false);
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);
  const [isRatingHovered, setIsRatingHovered] = useState(false);
  const [isImageValue, setIsImageValue] = useState(!!product.image);
  const [isNameValue, setIsNameValue] = useState(!!product.name);
  const [isBrandValue, setIsBrandValue] = useState(!!product.brand);
  const [isTypeValue, setIsTypeValue] = useState(!!product.type);
  const [isPriceValue, setIsPriceValue] = useState(!!product.price);
  const [isDescriptionValue, setIsDescriptionValue] = useState(
    !!product.description
  );
  const [isRatingValue, setIsRatingValue] = useState(!!product.rating);

  const handleImageValue = (e) => {
    const value = e.target.value;
    setIsImageValue(value);
  };

  const handleNameValue = (e) => {
    const value = e.target.value;
    setIsNameValue(value);
  };

  const handleBrandValue = (e) => {
    const value = e.target.value;
    setIsBrandValue(value);
  };

  const handleTypeValue = (e) => {
    const value = e.target.value;
    setIsTypeValue(value);
  };

  const handlePriceValue = (e) => {
    const value = e.target.value;
    setIsPriceValue(value);
  };

  const handleDescriptionValue = (e) => {
    const value = e.target.value;
    setIsDescriptionValue(value);
  };

  const handleRatingValue = (e) => {
    const value = e.target.value;
    setIsRatingValue(value);
  };

  const handleImageFocus = () => {
    setIsImageHovered(true);
  };

  const handleNameFocus = () => {
    setIsNameHovered(true);
  };

  const handleBrandFocus = () => {
    setIsBrandHovered(true);
  };

  const handleTypeFocus = () => {
    setIsTypeHovered(true);
  };

  const handlePriceFocus = () => {
    setIsPriceHovered(true);
  };

  const handleDescriptionFocus = () => {
    setIsDescriptionHovered(true);
  };

  const handleRatingFocus = () => {
    setIsRatingHovered(true);
  };

  const handleImageBlur = () => {
    setTimeout(() => {
      setIsImageHovered(false);
    }, 1000);
  };

  const handleNameBlur = () => {
    setTimeout(() => {
      setIsNameHovered(false);
    }, 1000);
  };

  const handleBrandBlur = () => {
    setTimeout(() => {
      setIsBrandHovered(false);
    }, 1000);
  };

  const handleTypeBlur = () => {
    setTimeout(() => {
      setIsTypeHovered(false);
    }, 1000);
  };

  const handlePriceBlur = () => {
    setTimeout(() => {
      setIsPriceHovered(false);
    }, 1000);
  };

  const handleDescriptionBlur = () => {
    setTimeout(() => {
      setIsDescriptionHovered(false);
    }, 1000);
  };

  const handleRatingBlur = () => {
    setTimeout(() => {
      setIsRatingHovered(false);
    }, 1000);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const image = form.get("image");
    const name = form.get("name");
    const brand = form.get("brand");
    const type = form.get("type");
    const price = form.get("price");
    const description = form.get("description");
    const rating = form.get("rating");

    const updateProduct = {
      brand,
      name,
      type,
      price,
      image,
      rating,
      description,
    };

    fetch(
      `https://assignment-10-server-side-7in6hf2vy-md-shaid-hasans-projects.vercel.app/product/${product._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Product updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(-1);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-color2/30 font-bitter px-4 md:px-10 lg:px-40 py-20">
        <div className="border-2 border-color1 bg-color1/20 rounded-3xl p-10 md:p-20">
          <h1 className="text-4xl font-medium text-color1 text-center pb-10">
            Update Product
          </h1>
          <form
            onSubmit={handleUpdateProduct}
            className="grid lg:grid-cols-2 gap-x-20 gap-y-8"
          >
            <div className="border-b-2 border-black/60 w-full group">
              <label
                htmlFor="brand"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isBrandHovered || isBrandValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Brand Name
              </label>
              <input
                onChange={handleBrandValue}
                onFocus={handleBrandFocus}
                onBlur={handleBrandBlur}
                type="text"
                name="brand"
                id="brand"
                defaultValue={product.brand}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>
            <div className="border-b-2 border-black/60 w-full group">
              <label
                htmlFor="name"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isNameHovered || isNameValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Product Name
              </label>
              <input
                onChange={handleNameValue}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                type="text"
                name="name"
                id="name"
                defaultValue={product.name}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>

            <div className="border-b-2 border-black/60 w-full group">
              <label
                htmlFor="type"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isTypeHovered || isTypeValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Product Type
              </label>
              <input
                onChange={handleTypeValue}
                onFocus={handleTypeFocus}
                onBlur={handleTypeBlur}
                type="text"
                name="type"
                id="type"
                defaultValue={product.type}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>
            <div className="border-b-2 border-black/60 w-full group">
              <label
                htmlFor="price"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isPriceHovered || isPriceValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Product Price
              </label>
              <input
                onChange={handlePriceValue}
                onFocus={handlePriceFocus}
                onBlur={handlePriceBlur}
                type="text"
                name="price"
                id="price"
                defaultValue={product.price}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>
            <div className="border-b-2 border-black/60 w-full group">
              <label
                htmlFor="image"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isImageHovered || isImageValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Product Image URL
              </label>
              <input
                onChange={handleImageValue}
                onFocus={handleImageFocus}
                onBlur={handleImageBlur}
                type="text"
                name="image"
                id="image"
                defaultValue={product.image}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>
            <div className="border-b-2 border-black/60 w-full group">
              <label
                htmlFor="rating"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isRatingHovered || isRatingValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Product Rating
              </label>
              <input
                onChange={handleRatingValue}
                onFocus={handleRatingFocus}
                onBlur={handleRatingBlur}
                type="text"
                name="rating"
                id="rating"
                defaultValue={product.rating}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>
            <div className="border-b-2 border-black/60 lg:col-span-2 w-full group">
              <label
                htmlFor="description"
                style={{ transition: "transform 0.5s" }}
                className={`flex items-center gap-2 text-lg font-medium group-hover:transform group-hover:-translate-y-0 ${
                  isDescriptionHovered || isDescriptionValue
                    ? "translate-y-0"
                    : "translate-y-8"
                }`}
              >
                Product Description
              </label>
              <input
                onChange={handleDescriptionValue}
                onFocus={handleDescriptionFocus}
                onBlur={handleDescriptionBlur}
                type="text"
                name="description"
                id="description"
                defaultValue={product.description}
                required
                className="bg-transparent rounded-t-lg focus:outline-none text-lg w-full p-1"
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="btn btn-ghost normal-case lg:col-span-2 text-lg text-black/70 bg-transparent border-2 border-black/60 hover:border-black/60 hover:bg-color1/20 duration-300 rounded-full px-6 w-full m-auto mt-10"
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateProduct;
