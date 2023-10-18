import banner from "../assets/banner.webp";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 font-bitter bg-color2/30 px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <h1 className="text-[40px] md:text-7xl lg:text-[80px] font-medium text-black/70 leading-[50px] md:leading-[100px]">
        Experience Innovation with{" "}
        <span className="font-monoton text-color1">Tech</span>
        <span className="font-monoton text-black/60"> Dimension</span>
      </h1>
      <img className="rounded-xl" src={banner} />
    </div>
  );
};

export default Banner;
