import images from "../assets";

function Plan() {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={images.plan1}
          alt="plan-1"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={images.plan2}
          alt="plan-2"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={images.plan3}
          alt="plan-3"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={images.plan4}
          alt="plan-4"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={images.plan5}
          alt="plan-5"
        />
      </div>
      <div className="flex flex-col h-full justify-center text-center md:text-right">
        <h3 className="text-[2.75rem] md:text-6xl font-bold">
          Plan Your Next Trip
        </h3>
        <p className="text-2xl py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="pb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
