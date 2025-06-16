import phone from "../../assets/phone2.png";
import pic1 from "../../assets/Rectangle 51.png";
import pic2 from "../../assets/Rectangle 49.png";
import pic3 from "../../assets/Rectangle 48.png";
import pic4 from "../../assets/Mask group.png";
import pic5 from "../../assets/Rectangle 28.png";
import pic6 from "../../assets/Rectangle 25.png";
import pic7 from "../../assets/Rectangle 33.png";
import pic8 from "../../assets/Rectangle 50.png";
import pic9 from "../../assets/Rectangle 24.png";

const Shop = () => {
  return (
    <div className="bg-[#F2F2F2] grid grid-flow-col lg:grid-rows-6 px-3 md:pl-10 lg:pl-14 xl:pl-20 md:pr-10 lg:pr-0 gap-6 md:gap-2 items-center lg:items-end py-10 md:py-20 lg:pb-20 lg:pt-40">
      <div className="flex flex-col gap-4 md:gap-14 col-start-1  col-span-3 md:col-span-1 lg:row-span-5">
        <h2 className="text-3xl lg:text-[52px] leading-snug">Shop Online</h2>
        <div className="sans w-full md:w-[22rem]">
          <p className="text-justify md:text-left">
            Experience the world at your fingertips with our seamless online
            shopping platform.{" "}
          </p>
          <p className="pt-4 text-justify md:text-left">
            From the latest fashion trends to must-have gadgets, shop the
            world's best brands and products from the comfort of your own home.
          </p>
        </div>
        <div>
          <p className="sans pb-4">Get Revve on your phone</p>
          <button className="bg-black rounded-xl text-white sans font-bold w-48 py-3">
            Download the app
          </button>
        </div>
      </div>
      <div className="col-start-1 col-span-3 md:col-span-1 md:col-start-2 lg:row-span-5">
        <img src={phone} alt="" loading="lazy" className="w-full" />
      </div>
      <div className="grid grid-flow-col grid-rows-6 gap-x-3 col-start-1 col-span-3 lg:col-start-3 lg:col-span-1 lg:row-span-6 pt-10 lg:pt-36 justify-center">
        <img src={pic1} className="col-start-2" alt="" loading="lazy" />
        <img
          src={pic2}
          className="row-start-2 col-start-3"
          alt=""
          loading="lazy"
        />
        <img src={pic3} className="row-start-3 " alt="" loading="lazy" />
        <img
          src={pic4}
          className="row-start-3 col-start-2 row-span-2"
          alt=""
          loading="lazy"
        />
        <img
          src={pic5}
          className="row-start-3 col-start-3 row-span-2 col-span-2 pb-2"
          alt=""
          loading="lazy"
        />
        <img src={pic6} className="row-start-4 " alt="" loading="lazy" />
        <img src={pic7} className="row-start-5 " alt="" loading="lazy" />
        <img
          src={pic8}
          className="row-start-5 col-start-4 "
          alt=""
          loading="lazy"
        />
        <img src={pic9} className="row-start-6 " alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Shop;
