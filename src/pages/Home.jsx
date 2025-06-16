import { useEffect, useState } from "react";
import Hero from "../components/atoms/Hero";
import HeroTwo from "../components/atoms/HeroTwo";
import Wallets from "../components/molecules/Wallets";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading && <Hero />}

      {!loading && (
        <>
          <HeroTwo />
          <Wallets />
        </>
      )}
    </div>
  );
};

export default Home;
