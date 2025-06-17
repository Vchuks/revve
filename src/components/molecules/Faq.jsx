import FaqBox from "../atoms/FaqBox";
import list from "../atoms/FaqList";
import mouse from "../../assets/mouse2.png";
import { useEffect, useRef } from "react";

const Faq = () => {
    const scrollRef = useRef();
  const hoverRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    const hoverArea = hoverRef.current;
    const scrollContainer = scrollRef.current;

    if (!hoverArea || !scrollContainer) return;

    const handleMouseEnter = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
          if (scrollContainer.scrollTop < maxScroll) {
            scrollContainer.scrollTop += 4; 
          } else {
            clearInterval(intervalRef.current);
          }
        }
      }, 30);
    };

    const handleMouseLeave = () => {
      clearInterval(intervalRef.current);
    };

    hoverArea.addEventListener('mouseenter', handleMouseEnter);
    hoverArea.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hoverArea.removeEventListener('mouseenter', handleMouseEnter);
      hoverArea.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(intervalRef.current);
    };
  }, []);

  const getItem = list?.map((each) => (
    <FaqBox key={each.id} question={each.question} answer={each.answer} />
  ));
  return (
    <div className="py-10 lg:pt-30 lg:pb-14 px-3 md:px-10 lg:px-14 xl:px-20 bg-[#4F0072] flex flex-col gap-5 lg:flex-row items-center">
      <div className="w-full lg:w-2/5 text-white flex flex-col gap-10 md:gap-0 md:h-[22rem] lg:h-[30rem] justify-between ">
        <h2 className="text-3xl md:text-[52px]">FAQs</h2>
        <p className="sans w-[20rem]">
          Here are some basic questions and answers to help you get started.
        </p>
        <div className="sans">
          <p className="sans pb-4">Get Revve on your phone</p>
          <button className="w-48 py-3 sans font-bold bg-white text-black rounded-xl">
            Coming soon
          </button>
        </div>
        <div className="flex gap-3 sans w-[16rem] text-[#FFFFFF52]">
          <img src={mouse} className="h-fit cursor-pointer" ref={hoverRef} />
          <p>Point your mouse cursor here to continue scrolling</p>
        </div>
      </div>
      <div className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] lg:w-[90%] overflow-y-auto scrollbar-none"ref={scrollRef}>{getItem}</div>
    </div>
  );
};

export default Faq;
