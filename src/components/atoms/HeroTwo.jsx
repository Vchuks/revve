import boy from "../../assets/Mask.png";
import green from "../../assets/B.png";
import mouse from "../../assets/Mouse.png";
import up from "../../assets/Vector (1).png";
import boy2 from "../../assets/Shopping.png";
import currency from "../../assets/Currency.png";
import eat from "../../assets/Eating.png";
import plane from "../../assets/Paper Plane.png";

const HeroTwo = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 bg-white gap-2">
      <div className="pt-10 col-span-1 ">
        <div
          className="relative"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={green}
            alt=""
            loading="lazy"
            className="h-14 md:h-28 lg:h-34 rotate-180"
          />
          <p className="text-xl md:text-[40px] text-white absolute top-[25%]">
            nd
          </p>
        </div>
        <div
          className="flex md:justify-center pl-4 md:pl-20 py-16 md:py-5 lg:py-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={currency}
            alt=""
            loading="lazy"
            className="h-10 md:h-28 lg:h-34"
          />
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={boy2}
            alt=""
            loading="lazy"
            className="h-24 md:h-44 lg:h-80"
          />
        </div>
      </div>
      <div className="w-full col-span-3 md:col-span-1 lg:w-[29rem] flex flex-col justify-center items-center">
        <div className="text-[#00000052] sans flex items-center gap-3 justify-center pb-8 pt-4">
          <img src={up} alt="" loading="lazy" />
          <p className="">or</p>
          <img src={mouse} alt="" loading="lazy" />
          <p className="">Scroll down</p>
        </div>
        <div className="w-full lg:w-[93%] m-auto relative">
          <img src={boy} alt="" loading="lazy" className="w-full " />
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="text-white sans text-sm lg:text-base left-0 absolute px-3 pb-2 md:px-4 md:pb-4 lg:px-8 lg:pb-8 bottom-0"
          >
            Seamlessly bridge distances with our effortless remittance service.
            Send support, and financial care to your loved ones back home.
          </p>
        </div>
        <h1 className="text-center text-3xl md:w-[20rem] lg:w-auto lg:text-[52px] leading-[1.2] lg:pt-8 ">
          Send and Recieve Money
        </h1>
      </div>
      <div className="md:pl-10 lg:pl-20 pt-10 col-span-1">
        <div
          className="flex justify-end"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={eat}
            alt=""
            loading="lazy"
            className="h-14 md:h-32 lg:h-48"
          />
        </div>
        <div
          className="py-20 md:py-10"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
        >
          <img
            src={plane}
            alt=""
            loading="lazy"
            className="h-10 md:h-24 lg:h-36"
          />
        </div>
        <div className="flex justify-end">
          <div
            className="relative overflow-hidden "
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            <img
              src={green}
              alt=""
              loading="lazy"
              className="h-16 md:h-28 lg:h-34"
            />
            <p className="text-xl md:text-[40px] text-white absolute left-1 md:left-4 top-[25%]">
              Sen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
