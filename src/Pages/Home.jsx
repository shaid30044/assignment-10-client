import Banner from "../Components/Banner";
import BrandLogo from "../Components/BrandLogo";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brands />
      <Subscribe />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default Home;
