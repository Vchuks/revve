import boy from "../../assets/Mask.png";
const Hero = () => {
  return (
    <div className="2xl:h-dvh pt-10 lg:pt-0 flex justify-center items-center bg-white">
      <div className="lg:w-[29rem]">
        <div className="text-[#00000052] sans flex items-center gap-3 justify-center pb-6 pt-4">

        <i class='bx bxs-hourglass-top animate-spin'></i>
        <p className="">please wait...</p>
        </div>
        <img src={boy} alt="" loading="lazy" className="w-3/5 lg:w-[93%] m-auto " />
        <h1 className="text-center text-3xl w-4/5 md:w-auto m-auto md:text-[52px] leading-[1.2] pt-8 ">Send and Recieve Money</h1>
      </div>
    </div>
  );
};

export default Hero;
