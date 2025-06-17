import { useEffect, useRef, useState } from "react";
import Hero from "../components/atoms/Hero";
import HeroTwo from "../components/atoms/HeroTwo";
import Wallets from "../components/molecules/Wallets";
import Shop from "../components/molecules/Shop";
import Bills from "../components/molecules/Bills";
import Faq from "../components/molecules/Faq";
import Footer from "../components/molecules/Footer";
import mouse from "../assets/Mouse.png";
import up from "../assets/Vector (1).png";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef();
  const hoverRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hoverArea = hoverRef.current;
    const scrollContainer = scrollRef.current;

    if (!hoverArea || !scrollContainer) return;

    const handleMouseEnter = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (scrollContainer) {
          const maxScroll =
            scrollContainer.scrollHeight - scrollContainer.clientHeight;
          if (scrollContainer.scrollTop < maxScroll) {
            scrollContainer.scrollTop += 2;
          } else {
            clearInterval(intervalRef.current);
          }
        }
      }, 16);
    };

    const handleMouseLeave = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    hoverArea.addEventListener("mouseenter", handleMouseEnter);
    hoverArea.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hoverArea.removeEventListener("mouseenter", handleMouseEnter);
      hoverArea.removeEventListener("mouseleave", handleMouseLeave);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [loading]);

  if (loading) {
    return <Hero />;
  }
  return (
    <div>
      <div className="text-[#00000052] sans flex items-center gap-3 justify-center pb-8 pt-4">
        <img src={up} alt="" loading="lazy" />
        <p className="">or</p>
        <img src={mouse} alt="" loading="lazy" ref={hoverRef} />
        <p className="">Scroll down</p>
      </div>
      <div className=" overflow-y-auto" ref={scrollRef}>
        <HeroTwo />
        <Wallets />
        <Shop />
        <Bills />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
