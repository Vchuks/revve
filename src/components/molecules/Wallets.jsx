
import Cards from "../atoms/Cards";
import woman from "../../assets/woman.png"

const Wallets = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-10 gap-2 pt-14 bg-white">
      <div className="">
        <h2 className="text-[52px]">Multi-currency Wallets</h2>
        <p className="sans">
          Facilitate effortless management of multiple wallets, each dedicated
          to a specific currency, streamlining transactions and storage across
          various currencies.{" "}
        </p>
        <p className="sans pt-4">
          Enhance user experience with tailored wallets for different
          currencies, empowering efficient financial management and flexibility
          in global transactions
        </p>
      </div>
      <div className="">
        <Cards />
      </div>
      <div className="">
        <img src={woman} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default Wallets;
