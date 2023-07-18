import images from "../assets";

function Hero() {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={images.headerBackground}
        alt=""
      />
      <div className="bg-black/20 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-white text-black hover:bg-black/40 hover:text-white">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
<div>Hero</div>;
