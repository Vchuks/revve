import Cards from "../atoms/Cards";
import woman from "../../assets/woman.png";

const Wallets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-10 lg:px-14 xl:px-20 gap-2 pt-14 md:pt-44 bg-white items-center lg:items-end ">
      <div
        className="lg:pb-[9rem] "
        data-aos="zoom-in"
        
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <h2 className="text-3xl lg:text-[45px] xl:text-[52px] lg:w-[23rem] xl:w-[26rem] leading-snug ">
          Multi-currency Wallets
        </h2>
        <p className="sans pt-6 md:pt-12 text-justify md:text-left">
          Facilitate effortless management of multiple wallets, each dedicated
          to a specific currency, streamlining transactions and storage across
          various currencies.{" "}
        </p>
        <p className="sans pt-4 text-justify md:text-left">
          Enhance user experience with tailored wallets for different
          currencies, empowering efficient financial management and flexibility
          in global transaction0
        </p>
      </div>
      <div className="" data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">
        <Cards />
      </div>
      <div className="hidden lg:block w-full lg:w-[85%] ml-auto" data-aos="fade-up"
        
        data-aos-duration="2000"
        data-aos-easing="ease-in-out">
        <img src={woman} alt="" loading="lazy" className="w-full" />
      </div>
    </div>
  );
};

export default Wallets;
